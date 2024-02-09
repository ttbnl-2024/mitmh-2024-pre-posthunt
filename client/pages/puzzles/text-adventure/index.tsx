import cx from 'classnames';
import React, { FC, useEffect, useRef } from 'react';

import { NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

import textAdventure from 'assets/puzzles/text-adventure/story.gblorb';

const SLUG = 'text-adventure';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  const vorpleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadVorple = async () => {
      const vorple = (await import('vorple')).default;
      if (vorpleRef && vorpleRef.current) {
        const title = document.title;

        // Something's weird with the prompt character, so manually yoink it out
        // if it's present.
        const adjustSpan = (_) => {
          document.title = title;
          let prev = vorpleRef.current?.getElementsByClassName('previous');
          if (prev && prev.length == 1) {
            let span = prev[0].querySelector('.previous > span:last-child');
            if (span && span.innerHTML == '&gt;') span.remove();
          }
        };

        vorple.options = {
          // Not clear why this isn't typed...
          // @ts-ignore
          story: textAdventure,
          container: vorpleRef.current,
        };
        vorple.addEventListener('expectCommand', adjustSpan);
        vorple.init();
      }
    };
    loadVorple();
  }, [vorpleRef]);

  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          In the center of Hades, you see cracks tearing through spacetime. Six
          separate problems have been fractured and jammed together.
          Fortunately, you already know how to solve them... don't you? Use TALK
          TO [PERSON] to get the lowdown on everyone's problems.
        </FlavorText>
        <InfoIcon>
          Type HELP for a summary of commands. You might find UNDO and RESTART
          helpful. You can also SAVE and RESTORE a game. This text is not a
          puzzle.
        </InfoIcon>
        <div
          className={cx(NO_COPY_CLASS, 'vorple-container')}
          ref={vorpleRef}
        />
        {/* Custom styling */}
        <style jsx global>
          {`
            .vorple-container {
              overflow-y: scroll;
              height: max(300px, 90vh - 200px);
              border: 1px solid black;
            }

            .lineinput {
              padding: 0.25rem 0;
            }

            #lineinput {
              background-color: rgb(254 240 138);
              padding: 0.25rem 0;
            }

            #lineinput-prefix::before {
              content: '>';
              margin-right: 0.5rem;
              padding-left: 0.25rem;
              font-weight: bold;
            }

            #lineinput-field {
              font-weight: bold;
            }

            .prompt-input::before {
              content: '>';
              margin-right: 0.5rem;
              padding-left: 0.25rem;
              font-weight: bold;
            }

            .prompt-input {
              font-weight: bold;
            }
          `}
        </style>
        {/* vorple.css */}
        <style jsx global>{`
          .vorple-container input,
          label {
            background-color: initial;
          }

          .vorple-container body {
            height: 100vh;
          }

          .vorple-container a,
          a:visited {
            color: #369;
          }

          .vorple-container blockquote {
            border: 1px solid #ccc;
            padding: 0.5em 1em;
          }

          .vorple-container #vorple {
            background-color: #fff;
            min-height: 100%;
          }

          .vorple-container #output {
            background-color: inherit;
            line-height: 1.5em;
          }

          .vorple-container .force-hidden {
            visibility: hidden;
          }

          .vorple-container .uiblock {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            top: 0;
            z-index: 999999;
          }

          /* Hide default Inform 7 template elements */

          .vorple-container body.play > div.interpretercredit {
            display: none;
          }

          /* Basic styles */

          .vorple-container .font-bold {
            font-weight: bold;
          }

          .vorple-container .font-italic {
            font-style: italic;
          }

          .vorple-container .font-underline {
            text-decoration: underline;
          }

          /* Vorple Screen Effects */

          .vorple-container .center-align {
            text-align: center;
          }

          .vorple-container .right-align {
            text-align: right;
          }

          .vorple-container .cursive-font {
            font-style: italic;
          }

          .vorple-container .emphasized-font {
            font-style: italic;
          }

          .vorple-container .fantasy-font {
            font-family: fantasy;
          }

          .vorple-container .monospace-font {
            font-family: var(--mono-font), monospace;
          }

          .vorple-container #output span.nowrap-font,
          .vorple-container #output span.nowrap-font * {
            white-space: nowrap;
          }

          .vorple-container .strikethrough-font {
            text-decoration: line-through;
          }

          .vorple-container .strong-font {
            font-weight: bold;
          }

          .vorple-container .underlined-font {
            text-decoration: underline;
          }

          .vorple-container .xx-small-font {
            font-size: xx-small;
          }

          .vorple-container .x-small-font {
            font-size: x-small;
          }

          .vorple-container .small-font {
            font-size: small;
          }

          .vorple-container .large-font {
            font-size: large;
          }

          .vorple-container .x-large-font {
            font-size: x-large;
          }

          .vorple-container .xx-large-font {
            font-size: xx-large;
          }

          .vorple-container .white-letters {
            color: #fff;
          }

          .vorple-container .black-letters {
            color: #000;
          }

          .vorple-container .blue-letters {
            color: #00a;
          }

          .vorple-container .green-letters {
            color: #0a0;
          }

          .vorple-container .cyan-letters {
            color: #0aa;
          }

          .vorple-container .red-letters {
            color: #a00;
          }

          .vorple-container .magenta-letters {
            color: #a0a;
          }

          .vorple-container .brown-letters {
            color: #a50;
          }

          .vorple-container .yellow-letters {
            color: #ff5;
          }

          .vorple-container .dark-gray-letters {
            color: #555;
          }

          .vorple-container .light-gray-letters {
            color: #aaa;
          }

          .vorple-container .light-blue-letters {
            color: #55f;
          }

          .vorple-container .light-green-letters {
            color: #5f5;
          }

          .vorple-container .light-cyan-letters {
            color: #5ff;
          }

          .vorple-container .light-red-letters {
            color: #f55;
          }

          .vorple-container .light-magenta-letters {
            color: #f5f;
          }

          .vorple-container .white-background {
            background-color: #fff;
          }

          .vorple-container .black-background {
            background-color: #000;
          }

          .vorple-container .blue-background {
            background-color: #00a;
          }

          .vorple-container .green-background {
            background-color: #0a0;
          }

          .vorple-container .cyan-background {
            background-color: #0aa;
          }

          .vorple-container .red-background {
            background-color: #a00;
          }

          .vorple-container .magenta-background {
            background-color: #a0a;
          }

          .vorple-container .brown-background {
            background-color: #a50;
          }

          .vorple-container .yellow-background {
            background-color: #ff5;
          }

          .vorple-container .dark-gray-background {
            background-color: #555;
          }

          .vorple-container .light-gray-background {
            background-color: #aaa;
          }

          .vorple-container .light-blue-background {
            background-color: #55f;
          }

          .vorple-container .light-green-background {
            background-color: #5f5;
          }

          .vorple-container .light-cyan-background {
            background-color: #5ff;
          }

          .vorple-container .light-red-background {
            background-color: #f55;
          }

          .vorple-container .light-magenta-background {
            background-color: #f5f;
          }

          /* Hyperlinks */
          .vorple-container .vorple-link.disabled {
            pointer-events: none;
          }

          /* Status line */

          .vorple-container .status-line-container {
            display: flex;
            background-color: inherit;
            border-bottom: 3px double #ccc;
            position: -webkit-sticky;
            position: sticky; /* same as "fixed" in this case but positions it relative to parent element */
            top: 0;
            white-space: pre-wrap;
            max-width: inherit;
            width: calc(100% + 30px);
          }

          .vorple-container .status-line-left {
            flex: 1;
            text-align: left;
          }

          .vorple-container .status-line-middle,
          .vorple-container .status-line-mobile {
            flex: 1;
            text-align: center;
          }

          .vorple-container .status-line-right {
            flex: 1;
            text-align: right;
          }

          /* Image alignments */

          .vorple-container .vorple-image img {
            max-width: 100%;
          }

          .vorple-container .centered {
            text-align: center;
          }

          .vorple-container .left-aligned {
            text-align: left;
          }

          .vorple-container .right-aligned {
            text-align: right;
          }

          .vorple-container .left-floating {
            float: left;
          }

          .vorple-container .right-floating {
            float: right;
          }

          /* Modal windows */

          .vorple-container .vex {
            z-index: 9999999;
          }

          .vorple-container body .vex.vex-theme-plain .vex-content {
            max-width: 850px;
            width: 90%;
          }

          .vorple-container .vex-dialog-message {
            white-space: pre-wrap;
          }

          /* Tooltips */

          .vorple-container #powerTip {
            max-width: 90%;
            white-space: pre-wrap;
          }

          /* Responsive classes */

          @media screen and (min-width: 569px) {
            .vorple-container .sm-only {
              display: none;
            }
          }

          @media screen and (max-width: 568px) {
            .vorple-container .lg-only {
              display: none;
            }
          }
        `}</style>
        {/* haven.css */}
        <style jsx global>{`
          .vorple-container #output {
            margin: 0 auto;
             {
              /* max-width: 751px; */
            }
            overflow-wrap: break-word;
            padding: 0 15px 10px 15px;
          }

          .vorple-container #output span {
            white-space: pre-wrap;
          }

          .vorple-container #lineinput {
            display: flex;
          }

          .vorple-container #lineinput-field {
            border: 0;
            box-shadow: none;
            display: block;
            flex: 1;
            outline: 0;
            padding: 0 0 1px 0;
          }

          .vorple-container .hugowindow {
            position: fixed;
            overflow: hidden;
          }

          .vorple-container .safarifix .hugowindow {
            position: absolute;
          }

          .vorple-container #fatal-error {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            padding: 1em;
            color: #fff;
            background-color: #600;
            white-space: pre-wrap;
          }

          .vorple-container #loader {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
          }

          .vorple-container #loader-message {
            margin-top: 90px;
            text-align: center;
          }

          .vorple-container #loader.stopped #loader-message {
            text-decoration: line-through;
          }

          .vorple-container #spinner {
            position: fixed;
            font-family: serif;
            color: #888;
            top: 180px;
            left: 0;
            width: 100%;
            text-align: center;
            height: 50px;
            line-height: 100%;
            font-size: 50px;
            animation: vorple-spin 2s ease-in-out forwards;
            animation-iteration-count: infinite;
          }

          @-ms-keyframes vorple-spin {
            from {
              -ms-transform: rotate(0deg);
            }
            to {
              -ms-transform: rotate(360deg);
            }
          }

          @-moz-keyframes vorple-spin {
            from {
              -moz-transform: rotate(0deg);
            }
            to {
              -moz-transform: rotate(360deg);
            }
          }

          @-webkit-keyframes vorple-spin {
            from {
              -webkit-transform: rotate(0deg);
            }
            to {
              -webkit-transform: rotate(360deg);
            }
          }

          @keyframes vorple-spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          /* Text colors and font styles */

          .vorple-container .font-bold {
            font-weight: bold;
          }

          .vorple-container .font-italic {
            font-style: italic;
          }

          .vorple-container .font-underline {
            text-decoration: underline;
          }

          .vorple-container .font-proportional {
            font-family: serif;
            font-size: 17px;
          }

          .vorple-container .font-fixed-width {
            font-family: monospace;
            font-size: 15px;
            padding: 2px 0;
          }

          .vorple-container .textcolor-0 {
            /* black */
            color: #000;
          }

          .vorple-container .textcolor-1 {
            /* blue */
            color: #00a;
          }

          .vorple-container .textcolor-2 {
            /* green */
            color: #0a0;
          }

          .vorple-container .textcolor-3 {
            /* cyan */
            color: #0aa;
          }

          .vorple-container .textcolor-4 {
            /* red */
            color: #a00;
          }

          .vorple-container .textcolor-5 {
            /* magenta */
            color: #a0a;
          }

          .vorple-container .textcolor-6 {
            /* brown */
            color: #a50;
          }

          .vorple-container .textcolor-7 {
            /* white */
            color: #aaa;
          }

          .vorple-container .textcolor-8 {
            /* dark gray */
            color: #555;
          }

          .vorple-container .textcolor-9 {
            /* light blue */
            color: #55f;
          }

          .vorple-container .textcolor-10 {
            /* light green */
            color: #5f5;
          }

          .vorple-container .textcolor-11 {
            /* light cyan */
            color: #5ff;
          }

          .vorple-container .textcolor-12 {
            /* light red */
            color: #f55;
          }

          .vorple-container .textcolor-13 {
            /* light magenta */
            color: #f5f;
          }

          .vorple-container .textcolor-14 {
            /* yellow */
            color: #ff5;
          }

          .vorple-container .textcolor-15 {
            /* bright white */
            color: #fff;
          }

          .vorple-container .bgcolor-0 {
            /* black */
            background-color: #000;
          }

          .vorple-container .bgcolor-1 {
            /* blue */
            background-color: #00a;
          }

          .vorple-container .bgcolor-2 {
            /* green */
            background-color: #0a0;
          }

          .vorple-container .bgcolor-3 {
            /* cyan */
            background-color: #0aa;
          }

          .vorple-container .bgcolor-4 {
            /* red */
            background-color: #a00;
          }

          .vorple-container .bgcolor-5 {
            /* magenta */
            background-color: #a0a;
          }

          .vorple-container .bgcolor-6 {
            /* brown */
            background-color: #a50;
          }

          .vorple-container .bgcolor-7 {
            /* white */
            background-color: #aaa;
          }

          .vorple-container .bgcolor-8 {
            /* dark gray */
            background-color: #555;
          }

          .vorple-container .bgcolor-9 {
            /* light blue */
            background-color: #55f;
          }

          .vorple-container .bgcolor-10 {
            /* light green */
            background-color: #5f5;
          }

          .vorple-container .bgcolor-11 {
            /* light cyan */
            background-color: #5ff;
          }

          .vorple-container .bgcolor-12 {
            /* light red */
            background-color: #f55;
          }

          .vorple-container .bgcolor-13 {
            /* light magenta */
            background-color: #f5f;
          }

          .vorple-container .bgcolor-14 {
            /* yellow */
            background-color: #ff5;
          }

          .vorple-container .bgcolor-15 {
            /* bright white */
            background-color: #fff;
          }
        `}</style>
        {/* vex (save) */}
        <style jsx global>
          {`
            @-webkit-keyframes vex-fadein {
              0% {
                opacity: 0;
              }
              100% {
                opacity: 1;
              }
            }

            @keyframes vex-fadein {
              0% {
                opacity: 0;
              }
              100% {
                opacity: 1;
              }
            }

            @-webkit-keyframes vex-fadeout {
              0% {
                opacity: 1;
              }
              100% {
                opacity: 0;
              }
            }

            @keyframes vex-fadeout {
              0% {
                opacity: 1;
              }
              100% {
                opacity: 0;
              }
            }

            @-webkit-keyframes vex-rotation {
              0% {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
              }
              100% {
                -webkit-transform: rotate(359deg);
                transform: rotate(359deg);
              }
            }

            @keyframes vex-rotation {
              0% {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
              }
              100% {
                -webkit-transform: rotate(359deg);
                transform: rotate(359deg);
              }
            }

            .vex,
            .vex *,
            .vex *:before,
            .vex *:after {
              -moz-box-sizing: border-box;
              box-sizing: border-box;
            }

            .vex {
              position: fixed;
              overflow: auto;
              -webkit-overflow-scrolling: touch;
              z-index: 1111;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
            }

            .vex-scrollbar-measure {
              position: absolute;
              top: -9999px;
              width: 50px;
              height: 50px;
              overflow: scroll;
            }

            .vex-overlay {
              -webkit-animation: vex-fadein 0.5s;
              animation: vex-fadein 0.5s;
              position: fixed;
              z-index: 1111;
              background: rgba(0, 0, 0, 0.4);
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
            }

            .vex-overlay.vex-closing {
              -webkit-animation: vex-fadeout 0.5s forwards;
              animation: vex-fadeout 0.5s forwards;
            }

            .vex-content {
              -webkit-animation: vex-fadein 0.5s;
              animation: vex-fadein 0.5s;
              background: #fff;
            }

            .vex.vex-closing .vex-content {
              -webkit-animation: vex-fadeout 0.5s forwards;
              animation: vex-fadeout 0.5s forwards;
            }

            .vex-close:before {
              font-family: Arial, sans-serif;
              content: '\x00D7';
            }

            .vex-dialog-form {
              margin: 0;
            }

            .vex-dialog-button {
              text-rendering: optimizeLegibility;
              -webkit-appearance: none;
              -moz-appearance: none;
              appearance: none;
              cursor: pointer;
              -webkit-tap-highlight-color: transparent;
            }

            .vex-loading-spinner {
              -webkit-animation: vex-rotation 0.7s linear infinite;
              animation: vex-rotation 0.7s linear infinite;
              box-shadow: 0 0 1em rgba(0, 0, 0, 0.1);
              position: fixed;
              z-index: 1112;
              margin: auto;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              height: 2em;
              width: 2em;
              background: #fff;
            }

            body.vex-open {
              overflow: hidden;
            }

            @-webkit-keyframes vex-pulse {
              0% {
                box-shadow: inset 0 0 0 300px transparent;
              }
              70% {
                box-shadow: inset 0 0 0 300px rgba(255, 255, 255, 0.25);
              }
              100% {
                box-shadow: inset 0 0 0 300px transparent;
              }
            }

            @keyframes vex-pulse {
              0% {
                box-shadow: inset 0 0 0 300px transparent;
              }
              70% {
                box-shadow: inset 0 0 0 300px rgba(255, 255, 255, 0.25);
              }
              100% {
                box-shadow: inset 0 0 0 300px transparent;
              }
            }

            .vex.vex-theme-plain {
              padding-top: 160px;
              padding-bottom: 160px;
            }
            .vex.vex-theme-plain .vex-content {
              font-family: 'Helvetica Neue', sans-serif;
              background: #fff;
              color: #444;
              padding: 1em;
              position: relative;
              margin: 0 auto;
              max-width: 100%;
              width: 450px;
              font-size: 1.1em;
              line-height: 1.5em;
            }
            .vex.vex-theme-plain .vex-content h1,
            .vex.vex-theme-plain .vex-content h2,
            .vex.vex-theme-plain .vex-content h3,
            .vex.vex-theme-plain .vex-content h4,
            .vex.vex-theme-plain .vex-content h5,
            .vex.vex-theme-plain .vex-content h6,
            .vex.vex-theme-plain .vex-content p,
            .vex.vex-theme-plain .vex-content ul,
            .vex.vex-theme-plain .vex-content li {
              color: inherit;
            }
            .vex.vex-theme-plain .vex-close {
              position: absolute;
              top: 0;
              right: 0;
              cursor: pointer;
            }
            .vex.vex-theme-plain .vex-close:before {
              position: absolute;
              content: '\x00D7';
              font-size: 26px;
              font-weight: normal;
              line-height: 31px;
              height: 30px;
              width: 30px;
              text-align: center;
              top: 3px;
              right: 3px;
              color: #bbb;
              background: transparent;
            }
            .vex.vex-theme-plain .vex-close:hover:before,
            .vex.vex-theme-plain .vex-close:active:before {
              color: #777;
              background: #e0e0e0;
            }
            .vex.vex-theme-plain .vex-dialog-form .vex-dialog-message {
              margin-bottom: 0.5em;
            }
            .vex.vex-theme-plain .vex-dialog-form .vex-dialog-input {
              margin-bottom: 1em;
            }
            .vex.vex-theme-plain .vex-dialog-form .vex-dialog-input select,
            .vex.vex-theme-plain .vex-dialog-form .vex-dialog-input textarea,
            .vex.vex-theme-plain
              .vex-dialog-form
              .vex-dialog-input
              input[type='date'],
            .vex.vex-theme-plain
              .vex-dialog-form
              .vex-dialog-input
              input[type='datetime'],
            .vex.vex-theme-plain
              .vex-dialog-form
              .vex-dialog-input
              input[type='datetime-local'],
            .vex.vex-theme-plain
              .vex-dialog-form
              .vex-dialog-input
              input[type='email'],
            .vex.vex-theme-plain
              .vex-dialog-form
              .vex-dialog-input
              input[type='month'],
            .vex.vex-theme-plain
              .vex-dialog-form
              .vex-dialog-input
              input[type='number'],
            .vex.vex-theme-plain
              .vex-dialog-form
              .vex-dialog-input
              input[type='password'],
            .vex.vex-theme-plain
              .vex-dialog-form
              .vex-dialog-input
              input[type='search'],
            .vex.vex-theme-plain
              .vex-dialog-form
              .vex-dialog-input
              input[type='tel'],
            .vex.vex-theme-plain
              .vex-dialog-form
              .vex-dialog-input
              input[type='text'],
            .vex.vex-theme-plain
              .vex-dialog-form
              .vex-dialog-input
              input[type='time'],
            .vex.vex-theme-plain
              .vex-dialog-form
              .vex-dialog-input
              input[type='url'],
            .vex.vex-theme-plain
              .vex-dialog-form
              .vex-dialog-input
              input[type='week'] {
              background: #f0f0f0;
              width: 100%;
              padding: 0.25em 0.67em;
              border: 0;
              font-family: inherit;
              font-weight: inherit;
              font-size: inherit;
              min-height: 2.5em;
              margin: 0 0 0.25em;
            }
            .vex.vex-theme-plain
              .vex-dialog-form
              .vex-dialog-input
              select:focus,
            .vex.vex-theme-plain
              .vex-dialog-form
              .vex-dialog-input
              textarea:focus,
            .vex.vex-theme-plain
              .vex-dialog-form
              .vex-dialog-input
              input[type='date']:focus,
            .vex.vex-theme-plain
              .vex-dialog-form
              .vex-dialog-input
              input[type='datetime']:focus,
            .vex.vex-theme-plain
              .vex-dialog-form
              .vex-dialog-input
              input[type='datetime-local']:focus,
            .vex.vex-theme-plain
              .vex-dialog-form
              .vex-dialog-input
              input[type='email']:focus,
            .vex.vex-theme-plain
              .vex-dialog-form
              .vex-dialog-input
              input[type='month']:focus,
            .vex.vex-theme-plain
              .vex-dialog-form
              .vex-dialog-input
              input[type='number']:focus,
            .vex.vex-theme-plain
              .vex-dialog-form
              .vex-dialog-input
              input[type='password']:focus,
            .vex.vex-theme-plain
              .vex-dialog-form
              .vex-dialog-input
              input[type='search']:focus,
            .vex.vex-theme-plain
              .vex-dialog-form
              .vex-dialog-input
              input[type='tel']:focus,
            .vex.vex-theme-plain
              .vex-dialog-form
              .vex-dialog-input
              input[type='text']:focus,
            .vex.vex-theme-plain
              .vex-dialog-form
              .vex-dialog-input
              input[type='time']:focus,
            .vex.vex-theme-plain
              .vex-dialog-form
              .vex-dialog-input
              input[type='url']:focus,
            .vex.vex-theme-plain
              .vex-dialog-form
              .vex-dialog-input
              input[type='week']:focus {
              box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.2);
              outline: none;
            }
            .vex.vex-theme-plain .vex-dialog-form .vex-dialog-buttons {
              *zoom: 1;
            }
            .vex.vex-theme-plain .vex-dialog-form .vex-dialog-buttons:after {
              content: '';
              display: table;
              clear: both;
            }
            .vex.vex-theme-plain .vex-dialog-button {
              border-radius: 0;
              border: 0;
              float: right;
              margin: 0 0 0 0.5em;
              font-family: inherit;
              text-transform: uppercase;
              letter-spacing: 0.1em;
              font-size: 0.8em;
              line-height: 1em;
              padding: 0.75em 2em;
            }
            .vex.vex-theme-plain .vex-dialog-button.vex-last {
              margin-left: 0;
            }
            .vex.vex-theme-plain .vex-dialog-button:focus {
              -webkit-animation: vex-pulse 1.1s infinite;
              animation: vex-pulse 1.1s infinite;
              outline: none;
            }
            @media (max-width: 568px) {
              .vex.vex-theme-plain .vex-dialog-button:focus {
                -webkit-animation: none;
                animation: none;
              }
            }
            .vex.vex-theme-plain .vex-dialog-button.vex-dialog-button-primary {
              background: #3288e6;
              color: #fff;
            }
            .vex.vex-theme-plain
              .vex-dialog-button.vex-dialog-button-secondary {
              background: #e0e0e0;
              color: #777;
            }

            .vex-loading-spinner.vex-theme-plain {
              height: 2.5em;
              width: 2.5em;
            }
          `}
        </style>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
