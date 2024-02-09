// Sample load testing script for MH 2023.

// k6 run scripts/api-ws-load-test.js for local run
// When hitting local dev rather than staging, include --insecure-skip-tls-verify

import { check, sleep } from "k6";
import http from "k6/http";
import ws from "k6/ws";
import { Counter } from "k6/metrics";
import {
  uuidv4,
  randomIntBetween,
} from "https://jslib.k6.io/k6-utils/1.4.0/index.js";

const requests = new Counter("http_reqs");

// Tests APIs under load.

const num_users = 300;


export let options = {
  stages: [
    { duration: "1m", target: num_users }, // ramp up
    { duration: "1m", target: num_users }, // sustain
    { duration: "1m", target: 0 }, // ramp down
  ],
  thresholds: {
    http_req_duration: ["p(95) < 2000"],
  },
};

const DEV = false;
const PROD = true;
const CREDENTIALS = "FIXME:FIXME"; // Change me to basic auth
const AUTHORIZATION_HEADERS = "Basic FIXME";

let SITE, HEADERS, BASE_URL

let USERNAME_BASE = 'loadtest'
let usernames = []
let PASSWORD_BASE = 'XZF-loadtest'
let passwords = []

if (DEV) {
  SITE = "localhost:8081";
  HEADERS = {};
  BASE_URL = `https://${SITE}`;
  usernames.push("admin");
  passwords.push("admin");
} else if (PROD) {
  SITE = "mythstoryhunt.world";
  BASE_URL = `https://${CREDENTIALS}@${SITE}`;
  // Websocket URLs can't have basic auth added, do via header.
  HEADERS = { Authorization: AUTHORIZATION_HEADERS };
  for (let i = 1; i <= 5; i++) {
    usernames.push(`${USERNAME_BASE}${i}`);
    passwords.push(`${PASSWORD_BASE}${i}`);
  }
} else {
  // basic auth
  SITE = "staging.mitmh2024.secretfakewebsite.com";
  BASE_URL = `https://${CREDENTIALS}@${SITE}`;
  // Websocket URLs can't have basic auth added, do via header.
  HEADERS = { Authorization: AUTHORIZATION_HEADERS };
  // Add staging test teams here.
}

const WS_BASE_URL = `wss://${SITE}`;
const BASE_API_URL = `${BASE_URL}/api`;

// copied from useEventWebSocket code, minus some dependencies on browser-only functions.
// This does not support key, which is used by the frontend code to filter what messages
// the onJson listens to. We don't need to reimplement this unless we care about sending
// differing websocket messages in load test based on the server response. Doesn't seem
// necessary?
const buildWebsocketUrl = (site, options = {}) => {
  const base = WS_BASE_URL
  const puzzle = options.slug;
  let wsPath = puzzle ? `/ws/puzzles/${puzzle}` : "/ws/events";
  // This is a URLSearchParams in codebase but that only exists in browser
  // It generates query string with escaping - assume we do not have URL encoding issues.
  let params = [];
  if (options.uuid) {
    params.push(`uuid=${options.uuid}`);
  }
  if (options.session_id) {
    params.push(`session_id=${options.session_id.toString()}`);
  }
  return `${base}${wsPath}?${params.join("&")}`;
};

const login = (ind) => {
  const username = usernames[ind];
  const password = passwords[ind];
  const loginPostParams = {
    // csrfmiddlewaretoken: csrfMiddlewareToken,
    username: username,
    password: password,
  };
  const loginApiUrl = `${BASE_API_URL}/login`;
  const loginPostRes = http.post(loginApiUrl, loginPostParams, {
    // Required for CSRF verification.
    headers: {
      Origin: BASE_URL,
      Referer: loginApiUrl,
    },
  });
  check(loginPostRes, {
    "login succeeds": (r) => r.status === 200,
  });
};

// Sample load test for the sumantle puzzle from MH 2023.
// The guess response of sumantle is an HTTP endpoint that saves guesses to DB and
// sends websocket messages to all viewers of the page, so it should be one of the more
// intensive puzzles of the site.
const sumantle = () => {
  // Do the client fetch for puzzle data.
  //fetchPuzzleProps("sumantle");
  // Tried using the experimental websocket code in k6 and it just, didn't work as expected?
  // So we do everything inside the blocking ws.connect() call.
  const sumantleApiUrl = `${BASE_API_URL}/puzzle/sumantle/guess`;
  const makeGuess = () => {
    const sumantlePostParams = { guess: "waltz" };
    const sumantlePostRes = http.post(sumantleApiUrl, sumantlePostParams, {
      // Required for CSRF verification.
      // (Or is it? Not sure)
      headers: {
        Origin: BASE_URL,
        Referer: sumantleApiUrl,
      },
    });
    check(sumantlePostRes, {
      "sumantle guess succeeds": (r) => r.status === 200,
    });
  };
  const params = {
    headers: HEADERS,
    tags: { key: "sumantle" },
  };
  // We start the websocket first, then make guesses while it's open.
  // This way different workers see each other's guesses.
  const sumantleWsUrl = buildWebsocketUrl("", { slug: "sumantle" });
  const res = ws.connect(sumantleWsUrl, params, (socket) => {
    // The HTTP and websocket APIs are both blocking, only one can run at a time.
    // https://community.k6.io/t/batch-execute-websocket-connect-request-and-http-request/3723
    // But you can attach the HTTP request to websocket setInterval to schedule it to run later
    // https://community.k6.io/t/websockets-and-http-requests-on-k6-scripts/861
    socket.on("open", () => {
      console.log("connected to sumantle");
    });
    socket.on("message", (data) => console.log("Message received: ", data));
    socket.on("close", () => console.log("disconnected"));
    socket.on("error", (e) => console.log("Error: ", e.error()));
    socket.setInterval(makeGuess, randomIntBetween(1000, 3000));
    socket.setTimeout(() => {
      socket.close();
    }, 30000);
  });
};

// A list of URLs that may request a large number of assets for #reasons
// We assume the team has access to all such URLs
const urls = [
  BASE_URL,
  `${BASE_URL}/puzzles/junky-logic`,
  `${BASE_URL}/puzzles/gaia`,
  `${BASE_URL}/puzzles/make-a-winning-hand`,
  `${BASE_URL}/puzzles/sumantle`,
];
const loadPage = () => {
  const ind = randomIntBetween(0, urls.length - 1);
  console.log(`Hitting ${urls[ind]}`);
  const res = http.get(urls[ind]);
  let msg = {};
  msg[urls[ind]] = (r) => r.status === 200;
  check(res, msg);
};

export default () => {
  // Login as a test user.
  const ind = randomIntBetween(0, usernames.length - 1);
  login(ind);
  sleep(1);

  const uuid = uuidv4();
  const weights = [10, 0, 0, 0, 0, 0];
  const tot = weights.reduce((partialSum, a) => partialSum + a, 0);
  let val = randomIntBetween(0, tot - 1);
  const funcs = [sumantle, loadPage];
  for (let i = 0; i < weights.length; i++) {
    if (val <= weights[i]) {
      funcs[i]();
      break;
    } else {
      val -= weights[i];
    }
  }
  sleep(3);
};
