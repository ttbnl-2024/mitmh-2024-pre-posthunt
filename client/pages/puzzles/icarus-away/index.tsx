import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, Monospace } from 'components/copy';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

import a0 from 'assets/puzzles/icarus-away/a0.png';
import a1 from 'assets/puzzles/icarus-away/a1.png';
import a2 from 'assets/puzzles/icarus-away/a2.png';
import a3 from 'assets/puzzles/icarus-away/a3.png';
import a4 from 'assets/puzzles/icarus-away/a4.png';
import b0 from 'assets/puzzles/icarus-away/b0.png';
import b1 from 'assets/puzzles/icarus-away/b1.png';
import b2 from 'assets/puzzles/icarus-away/b2.png';
import b3 from 'assets/puzzles/icarus-away/b3.png';
import b4 from 'assets/puzzles/icarus-away/b4.png';
import b5 from 'assets/puzzles/icarus-away/b5.png';
import b6 from 'assets/puzzles/icarus-away/b6.png';
import b7 from 'assets/puzzles/icarus-away/b7.png';
import b8 from 'assets/puzzles/icarus-away/b8.png';
import b9 from 'assets/puzzles/icarus-away/b9.png';
import b10 from 'assets/puzzles/icarus-away/b10.png';
import b11 from 'assets/puzzles/icarus-away/b11.png';
import b12 from 'assets/puzzles/icarus-away/b12.png';
import c0 from 'assets/puzzles/icarus-away/c0.png';
import c1 from 'assets/puzzles/icarus-away/c1.png';
import c2 from 'assets/puzzles/icarus-away/c2.png';
import c3 from 'assets/puzzles/icarus-away/c3.png';
import c4 from 'assets/puzzles/icarus-away/c4.png';
import c5 from 'assets/puzzles/icarus-away/c5.png';
import c6 from 'assets/puzzles/icarus-away/c6.png';
import c7 from 'assets/puzzles/icarus-away/c7.png';
import c8 from 'assets/puzzles/icarus-away/c8.png';
import c9 from 'assets/puzzles/icarus-away/c9.png';
import c10 from 'assets/puzzles/icarus-away/c10.png';
import c11 from 'assets/puzzles/icarus-away/c11.png';
import c12 from 'assets/puzzles/icarus-away/c12.png';
import icarusAway from 'assets/puzzles/icarus-away/icarus-away.png';

const SLUG = 'icarus-away';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <InfoIcon>Click on any image to open it in a new window.</InfoIcon>
        <Monospace>
          <p>
            From: Marcus Crassus, Chief Accounting Officer
            &lt;cheapskate@MITPlanet.org&gt;
            <br />
            To: All Meeting of Interplanetary Theorists Members
            <br />
            Re: Budget Cuts
          </p>
          <p>Dear Spendthrifts,</p>
          <p>
            As a result of our entire membership base being unexpectedly zapped
            down to the Underworld (and thus, unlikely to make their next dues
            payments), we have instituted drastic cost-cutting measures,
            effective immediately.
          </p>
          <p>
            First and foremost, we have canceled our contract with
            Simpliflights, the easy-to-use flight booking platform.
          </p>
          <p>
            Moving forward, we will replace Simpliflights with four different
            tools, all of which have serious drawbacks. But they're all free,
            and in my opinion, the cost savings to us more than justify the
            hassle to you.
          </p>
          <p>These tools are:</p>
          <p>
            <b>
              #1 <i>Icarus Away!</i>
            </b>
            : All long-haul international flights must be booked at
            ultra-discount travel website <i>Icarus Away!</i> (icarusaway.com),
            where the prices are so cheap, you'll swear these flights can't
            possibly actually exist!{' '}
          </p>
          <p>
            <b>#2</b> <br className={cx(HIDDEN_CLASS)} />
            <a target="_blank" href={a0}>
              <SheetableImage
                alt=""
                src={a0}
                title=""
                className="inline-block h-[80px]"
              />
            </a>
            <br className={cx(HIDDEN_CLASS)} />
            <a target="_blank" href={a1}>
              <SheetableImage
                alt=""
                src={a1}
                title=""
                className="inline-block h-[80px]"
              />
            </a>
            <br className={cx(HIDDEN_CLASS)} />
            <a target="_blank" href={a2}>
              <SheetableImage
                alt=""
                src={a2}
                title=""
                className="inline-block h-[80px]"
              />
            </a>
            <br className={cx(HIDDEN_CLASS)} />: This free app will handle our
            bookings for all domestic and short-haul international flights.
            However, it's based in Pictoristan, a country that doesn't have a
            written language, so all of its booking confirmations show up as
            visual representations of your destinations (although they seem to
            use the word "destination" pretty loosely: sometimes it refers to
            airports, sometimes... not).{' '}
          </p>
          <p>
            <b>#3</b> ▯▯▯▯▯▯▯▯▯▯: a free itinerary generator with a font that
            isn't loaded onto any of our outdated work-issued laptops. So it
            generates itineraries that are just series of blank spaces. Oh,
            well: at least the price is right!
          </p>
          <p>
            <b>#4 Tell-a-Phony</b>: Checks airline bookings to make sure they're
            actual, legitimate, real-world flights from bona fide airlines.
            Alas, <i>Icarus Away!</i> doesn't interface with Tell-a-Phony, but{' '}
            <br className={cx(HIDDEN_CLASS)} />
            <a target="_blank" href={a0}>
              <SheetableImage
                alt=""
                src={a0}
                title=""
                className="inline-block h-[40px]"
              />
            </a>
            <br className={cx(HIDDEN_CLASS)} />
            <a target="_blank" href={a1}>
              <SheetableImage
                alt=""
                src={a1}
                title=""
                className="inline-block h-[40px]"
              />
            </a>
            <br className={cx(HIDDEN_CLASS)} />
            <a target="_blank" href={a2}>
              <SheetableImage
                alt=""
                src={a2}
                title=""
                className="inline-block h-[40px]"
              />
            </a>
            <br className={cx(HIDDEN_CLASS)} /> does. Of course, pictures in,
            pictures out: Tell-a-Phony confirmed these flights are real, but my
            unpaid intern - who was the only one who understood any of this
            stuff - said it also spit out some ancillary data alongside each
            confirmation.{' '}
          </p>
          <p>
            Anyway, said unpaid intern - what was her name? Sally? Hallie?
            Something that sounded like "Allie" - only booked all your domestic
            and short-haul international flights before resigning in protest, so{' '}
            <b>filling out the rest of your itinerary is up to you</b>.
          </p>
          <p>Good luck (you'll need it)!</p>
          <p>Tightfistedly yours,</p>
          <p>Marcus Lucius Crassus</p>
        </Monospace>
        <hr className="" />
        <Monospace>
          <p>
            From: Icarus Away! &lt;admin@icarusaway.com&gt;
            <br />
            Re: Welcome to the Icarus Away Family!
          </p>
        </Monospace>
        <p className="tagline">
          <SheetableImage alt="" src={icarusAway} title="" />
          We never let high prices get us down!
        </p>
        <p>
          <i>Icarus Away!</i> is the hottest way to find cheap long-haul
          international flights online. Just enter the country you're flying
          from and the country you're flying to into the easy-to-use interactive
          online tool on our website, and be astonished how much you'll save
          with <i>Icarus Away!</i>
        </p>

        <hr className="" />
        <Monospace>
          <p>
            From: Callie DeSignatis &lt;unpaidintern@MITPlanet.org&gt;
            <br />
            Re: Your domestic flight bookings
          </p>
          <p>Hey,</p>
          <p>
            I booked your domestic and short-haul international flights via the
            new app. The... uh... "confirmation" is below.
          </p>
          <p>-Callie</p>
        </Monospace>
        <div className="pl-4 border-box border-l border-gray-300">
          <p>
            <Monospace>From: </Monospace>
            <br className={cx(HIDDEN_CLASS)} />
            <a target="_blank" href={a0}>
              <SheetableImage
                alt=""
                src={a0}
                title=""
                className="inline-block h-[40px] my-1"
              />
            </a>
            <br className={cx(HIDDEN_CLASS)} />
            <a target="_blank" href={a1}>
              <SheetableImage
                alt=""
                src={a1}
                title=""
                className="inline-block h-[40px] my-1"
              />
            </a>
            <br className={cx(HIDDEN_CLASS)} />
            <a target="_blank" href={a2}>
              <SheetableImage
                alt=""
                src={a2}
                title=""
                className="inline-block h-[40px] my-1"
              />
            </a>
            <br />
            <Monospace>Re: </Monospace>
            <br className={cx(HIDDEN_CLASS)} />
            <a target="_blank" href={a0}>
              <SheetableImage
                alt=""
                src={a0}
                title=""
                className="inline-block h-[40px]"
              />
            </a>
            <br className={cx(HIDDEN_CLASS)} />
            <a target="_blank" href={a3}>
              <SheetableImage
                alt=""
                src={a3}
                title=""
                className="inline-block h-[40px]"
              />
            </a>
            <br className={cx(HIDDEN_CLASS)} />
            <a target="_blank" href={a4}>
              <SheetableImage
                alt=""
                src={a4}
                title=""
                className="inline-block h-[40px]"
              />
            </a>
          </p>
          <p>
            <a target="_blank" href={b0}>
              <SheetableImage
                alt=""
                src={b0}
                title=""
                className="w-full md:w-[400px] border border-black my-2"
              />
            </a>
            <br className={cx(HIDDEN_CLASS)} />
            <a target="_blank" href={b1}>
              <SheetableImage
                alt=""
                src={b1}
                title=""
                className="w-full md:w-[400px] border border-black my-2"
              />
            </a>
            <br className={cx(HIDDEN_CLASS)} />
            <a target="_blank" href={b2}>
              <SheetableImage
                alt=""
                src={b2}
                title=""
                className="w-full md:w-[400px] border border-black my-2"
              />
            </a>
            <br className={cx(HIDDEN_CLASS)} />
            <a target="_blank" href={b3}>
              <SheetableImage
                alt=""
                src={b3}
                title=""
                className="w-full md:w-[400px] border border-black my-2"
              />
            </a>
            <br className={cx(HIDDEN_CLASS)} />
            <a target="_blank" href={b4}>
              <SheetableImage
                alt=""
                src={b4}
                title=""
                className="w-full md:w-[400px] border border-black my-2"
              />
            </a>
            <br className={cx(HIDDEN_CLASS)} />
            <a target="_blank" href={b5}>
              <SheetableImage
                alt=""
                src={b5}
                title=""
                className="w-full md:w-[400px] border border-black my-2"
              />
            </a>
            <br className={cx(HIDDEN_CLASS)} />
            <a target="_blank" href={b6}>
              <SheetableImage
                alt=""
                src={b6}
                title=""
                className="w-full md:w-[400px] border border-black my-2"
              />
            </a>
            <br className={cx(HIDDEN_CLASS)} />
            <a target="_blank" href={b7}>
              <SheetableImage
                alt=""
                src={b7}
                title=""
                className="w-full md:w-[400px] border border-black my-2"
              />
            </a>
            <br className={cx(HIDDEN_CLASS)} />
            <a target="_blank" href={b8}>
              <SheetableImage
                alt=""
                src={b8}
                title=""
                className="w-full md:w-[400px] border border-black my-2"
              />
            </a>
            <br className={cx(HIDDEN_CLASS)} />
            <a target="_blank" href={b9}>
              <SheetableImage
                alt=""
                src={b9}
                title=""
                className="w-full md:w-[400px] border border-black my-2"
              />
            </a>
            <br className={cx(HIDDEN_CLASS)} />
            <a target="_blank" href={b10}>
              <SheetableImage
                alt=""
                src={b10}
                title=""
                className="w-full md:w-[400px] border border-black my-2"
              />
            </a>
            <br className={cx(HIDDEN_CLASS)} />
            <a target="_blank" href={b11}>
              <SheetableImage
                alt=""
                src={b11}
                title=""
                className="w-full md:w-[400px] border border-black my-2"
              />
            </a>
            <br className={cx(HIDDEN_CLASS)} />
            <a target="_blank" href={b12}>
              <SheetableImage
                alt=""
                src={b12}
                title=""
                className="w-full md:w-[400px] border border-black my-2"
              />
            </a>
          </p>
        </div>
        <hr className="" />
        <Monospace>
          <p>
            From: Callie DeSignatis &lt;unpaidintern@MITPlanet.org&gt;
            <br />
            Re: Flight Itinerary
          </p>
          <p>Hey,</p>
          <p>
            Below is your (as-yet-incomplete) flight itinerary I generated using
            the new site. I'm sorry about this, but there's nothing I can do.
          </p>
          <p>-Callie</p>
        </Monospace>
        <Table className="itinerary-table">
          <thead>
            <tr>
              <th>
                ITINERARY START: Seattle
                <br />
                Departing from:
              </th>
              <th>Flight #:</th>
              <th>Arrives in:</th>
              <th>Domestic / International?</th>
              <th>Booked? ✅/❌</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>▯▯▯▯▯▯▯▯▯▯▯▯▯</td>
              <td>
                <b>❌</b>
              </td>
            </tr>
            <tr>
              <td>D▯▯▯▯▯▯▯▯▯</td>
              <td>▯▯▯▯</td>
              <td>▯▯▯▯▯▯▯▯▯▯▯</td>
              <td>▯▯▯▯▯▯▯▯</td>
              <td>
                <b>✅</b>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>▯▯▯▯▯▯▯▯▯▯▯▯▯</td>
              <td>
                <b>❌</b>
              </td>
            </tr>
            <tr>
              <td>K▯▯▯▯▯▯</td>
              <td>▯▯▯▯</td>
              <td>▯▯▯▯</td>
              <td>▯▯▯▯▯▯▯▯</td>
              <td>
                <b>✅</b>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>▯▯▯▯▯▯▯▯▯▯▯▯▯</td>
              <td>
                <b>❌</b>
              </td>
            </tr>
            <tr>
              <td>T▯▯▯▯▯▯▯▯▯▯</td>
              <td>▯▯▯▯</td>
              <td>▯▯▯▯ ▯▯▯▯▯▯ ▯▯▯▯▯▯</td>
              <td>▯▯▯▯▯▯▯▯</td>
              <td>
                <b>✅</b>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>▯▯▯▯▯▯▯▯▯▯▯▯▯</td>
              <td>
                <b>❌</b>
              </td>
            </tr>
            <tr>
              <td>E▯▯▯▯▯▯</td>
              <td>▯▯▯</td>
              <td>▯▯▯▯▯ ▯▯▯▯▯▯▯▯▯ ▯▯▯▯▯▯▯▯ ▯▯▯▯</td>
              <td>▯▯▯▯▯▯▯▯</td>
              <td>
                <b>✅</b>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>▯▯▯▯▯▯▯▯▯▯▯▯▯</td>
              <td>
                <b>❌</b>
              </td>
            </tr>
            <tr>
              <td>D▯▯▯▯▯</td>
              <td>▯▯▯▯</td>
              <td>▯▯▯▯ ▯▯ ▯▯▯</td>
              <td>▯▯▯▯▯▯▯▯▯▯▯▯▯</td>
              <td>
                <b>✅</b>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>▯▯▯▯▯▯▯▯▯▯▯▯▯</td>
              <td>
                <b>❌</b>
              </td>
            </tr>
            <tr>
              <td>P▯▯▯▯▯ ▯▯▯▯▯▯</td>
              <td>▯▯▯</td>
              <td>▯▯▯▯▯▯▯</td>
              <td>▯▯▯▯▯▯▯▯</td>
              <td>
                <b>✅</b>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>▯▯▯▯▯▯▯▯▯▯▯▯▯</td>
              <td>
                <b>❌</b>
              </td>
            </tr>
            <tr>
              <td>A▯▯▯▯</td>
              <td>▯▯▯</td>
              <td>▯▯▯▯▯▯</td>
              <td>▯▯▯▯▯▯▯▯</td>
              <td>
                <b>✅</b>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>▯▯▯▯▯▯▯▯▯▯▯▯▯</td>
              <td>
                <b>❌</b>
              </td>
            </tr>
            <tr>
              <td>B▯▯▯▯▯▯</td>
              <td>▯▯▯</td>
              <td>▯▯▯▯▯▯▯</td>
              <td>▯▯▯▯▯▯▯▯▯▯▯▯▯</td>
              <td>
                <b>✅</b>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>▯▯▯▯▯▯▯▯▯▯▯▯▯</td>
              <td>
                <b>❌</b>
              </td>
            </tr>
            <tr>
              <td>H▯▯▯▯</td>
              <td>▯▯▯▯</td>
              <td>▯▯▯</td>
              <td>▯▯▯▯▯▯▯▯</td>
              <td>
                <b>✅</b>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>▯▯▯▯▯▯▯▯▯▯▯▯▯</td>
              <td>
                <b>❌</b>
              </td>
            </tr>
            <tr>
              <td>C▯▯▯</td>
              <td>▯▯▯</td>
              <td>▯▯▯▯▯</td>
              <td>▯▯▯▯▯▯▯▯</td>
              <td>
                <b>✅</b>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>▯▯▯▯▯▯▯▯▯▯▯▯▯</td>
              <td>
                <b>❌</b>
              </td>
            </tr>
            <tr>
              <td>C▯▯▯▯▯▯</td>
              <td>▯▯▯</td>
              <td>▯▯▯▯▯▯▯▯▯</td>
              <td>▯▯▯▯▯▯▯▯</td>
              <td>
                <b>✅</b>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>▯▯▯▯▯▯▯▯▯▯▯▯▯</td>
              <td>
                <b>❌</b>
              </td>
            </tr>
            <tr>
              <td>M▯▯▯▯▯▯▯▯</td>
              <td>▯▯▯▯</td>
              <td>▯▯▯▯▯▯</td>
              <td>▯▯▯▯▯▯▯▯</td>
              <td>
                <b>✅</b>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>▯▯▯▯▯▯▯▯▯▯▯▯▯</td>
              <td>
                <b>❌</b>
              </td>
            </tr>
            <tr>
              <td>J▯▯▯▯▯▯▯▯▯▯▯</td>
              <td>▯▯▯</td>
              <td>▯▯▯▯▯▯</td>
              <td>▯▯▯▯▯▯▯▯</td>
              <td>
                <b>✅</b>
              </td>
            </tr>
          </tbody>
        </Table>
        <hr className="" />
        <Monospace>
          <p>
            From: Callie DeSignatis &lt;unpaidintern@MITplanet.org&gt;
            <br />
            Re: Flight Confirmations
          </p>
          <p>Okay,</p>
          <p>
            I ran all the flights I booked through the Tell-a-Phony verifier,
            and this is what came out! I've had it! I'm done! I can't take this
            job anymore! I need a drink.{' '}
          </p>
          <p>-Callie the EX-intern</p>
        </Monospace>
        <p>
          <a target="_blank" href={c0}>
            <SheetableImage
              alt=""
              src={c0}
              title=""
              className="w-full md:w-[400px] border border-black my-2"
            />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a target="_blank" href={c1}>
            <SheetableImage
              alt=""
              src={c1}
              title=""
              className="w-full md:w-[400px] border border-black my-2"
            />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a target="_blank" href={c2}>
            <SheetableImage
              alt=""
              src={c2}
              title=""
              className="w-full md:w-[400px] border border-black my-2"
            />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a target="_blank" href={c3}>
            <SheetableImage
              alt=""
              src={c3}
              title=""
              className="w-full md:w-[400px] border border-black my-2"
            />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a target="_blank" href={c4}>
            <SheetableImage
              alt=""
              src={c4}
              title=""
              className="w-full md:w-[400px] border border-black my-2"
            />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a target="_blank" href={c5}>
            <SheetableImage
              alt=""
              src={c5}
              title=""
              className="w-full md:w-[400px] border border-black my-2"
            />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a target="_blank" href={c6}>
            <SheetableImage
              alt=""
              src={c6}
              title=""
              className="w-full md:w-[400px] border border-black my-2"
            />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a target="_blank" href={c7}>
            <SheetableImage
              alt=""
              src={c7}
              title=""
              className="w-full md:w-[400px] border border-black my-2"
            />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a target="_blank" href={c8}>
            <SheetableImage
              alt=""
              src={c8}
              title=""
              className="w-full md:w-[400px] border border-black my-2"
            />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a target="_blank" href={c9}>
            <SheetableImage
              alt=""
              src={c9}
              title=""
              className="w-full md:w-[400px] border border-black my-2"
            />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a target="_blank" href={c10}>
            <SheetableImage
              alt=""
              src={c10}
              title=""
              className="w-full md:w-[400px] border border-black my-2"
            />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a target="_blank" href={c11}>
            <SheetableImage
              alt=""
              src={c11}
              title=""
              className="w-full md:w-[400px] border border-black my-2"
            />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a target="_blank" href={c12}>
            <SheetableImage
              alt=""
              src={c12}
              title=""
              className="w-full md:w-[400px] border border-black my-2"
            />
          </a>
        </p>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');
        .tagline {
          font-family: 'Satisfy', cursive;
          text-align: center;
          color: #c00;

          font-size: 36pt;
        }
        .itinerary-table th,
        .itinerary-table td {
          padding: 2px 8px !important;
        }
        .itinerary-table td {
          font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
            Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
        }
        .itinerary-table td:nth-child(5) {
          text-align: center;
        }
        hr {
          margin-top: 2em !important;
          margin-bottom: 2em !important;
          color: #ccc;
          border-top-width: 2px;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
