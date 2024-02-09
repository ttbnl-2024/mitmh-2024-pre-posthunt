import cx from 'classnames';
import { Courier_Prime, Satisfy } from 'next/font/google';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

const SLUG = 'how-to-quadruple-your-money-in-hollywood';

const satisfy = Satisfy({
  weight: '400',
  subsets: ['latin'],
});
const courierPrime = Courier_Prime({
  weight: '400',
  subsets: ['latin'],
});

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} smallTitle={true}>
      <div ref={ref} className="break-words">
        <FlavorText>
          Want to make a mint in Tinseltown? Don't change your movie pitch! Just
          get George to be the face of your project, and you'll get all kinds of
          financial backing!
        </FlavorText>
        <p className={cx(HIDDEN_CLASS)}>
          <i>Note: the emails are indented; see original puzzle.</i>
        </p>
        <div>
          <p>
            From: <u>HQ@studio.com</u>
            <br />
            To: <u>mogul@filthyrich.com</u>
            <br />
            Cc: <u>pitchman@hollywood.com</u>
            <br />
            Subject: Re: Re: Re: Re: Re: Re: Re: Re: New Movie Pitch!
          </p>
          <p>We've greenlit this for release in 1997 or 2020.</p>
          <div className="pl-4 border-l border-gray-300">
            <p>
              From: <u>mogul@filthyrich.com</u>
              <br />
              To: <u>pitchman@hollywood.com</u>
              <br />
              Cc: <u>HQ@studio.com</u>
              <br />
              Subject: Re: Re: Re: Re: Re: Re: Re: New Movie Pitch!
            </p>
            <p>George Clooney?! I'm in for $3 million!</p>
            <div className="pl-4 border-l border-gray-300">
              <p>
                From: <u>pitchman@hollywood.com</u>
                <br />
                To: <u>mogul@filthyrich.com</u>
                <br />
                Cc: <u>HQ@studio.com</u>
                <br />
                Subject: Re: Re: Re: Re: Re: Re: New Movie Pitch!
              </p>
              <p>
                Uh… not exactly. See, he didn't want to do another one either.
                But we got someone even better: George Clooney!
              </p>
              <div className="pl-4 border-l border-gray-300">
                <p>
                  From: <u>mogul@filthyrich.com</u>
                  <br />
                  To: <u>pitchman@hollywood.com</u>
                  <br />
                  Cc: <u>HQ@studio.com</u>
                  <br />
                  Subject: Re: Re: Re: Re: Re: New Movie Pitch!
                </p>
                <p>Okay, so you've got the guy from the third one signed up?</p>
                <div className="pl-4 border-l border-gray-300">
                  <p>
                    From: <u>pitchman@hollywood.com</u>
                    <br />
                    To: <u>mogul@filthyrich.com</u>
                    <br />
                    Cc: <u>HQ@studio.com</u>
                    <br />
                    Subject: Re: Re: Re: Re: New Movie Pitch!
                  </p>
                  <p>
                    See, the guy who played the superhero in the first two
                    movies didn't want to do the third one. Something about not
                    wanting to be forever associated with this role. I'm sure
                    that'll work out for him. So they cast another guy as the
                    superhero in the third one. But the third one also did
                    really, really well at the box office!
                  </p>
                  <div className="pl-4 border-l border-gray-300">
                    <p>
                      From: <u>mogul@filthyrich.com</u>
                      <br />
                      To: <u>pitchman@hollywood.com</u>
                      <br />
                      Cc: <u>HQ@studio.com</u>
                      <br />
                      Subject: Re: Re: Re: New Movie Pitch!
                    </p>
                    <p>Whattaya mean you don't have the original cast? </p>
                    <div className="pl-4 border-l border-gray-300">
                      <p>
                        From: <u>pitchman@hollywood.com</u>
                        <br />
                        To: <u>mogul@filthyrich.com</u>
                        <br />
                        Cc: <u>HQ@studio.com</u>
                        <br />
                        Subject: Re: Re: New Movie Pitch!
                      </p>
                      <p>Uh… we don't exactly have the original cast. </p>
                      <div className="pl-4 border-l border-gray-300">
                        <p>
                          From: <u>mogul@filthyrich.com</u>
                          <br />
                          To: <u>pitchman@hollywood.com</u>
                          <br />
                          Cc: <u>HQ@studio.com</u>
                          <br />
                          Subject: Re: New Movie Pitch!
                        </p>
                        <p>
                          I guess audiences won't mind that, as long as you've
                          got the original cast back on board.
                        </p>
                        <div className="pl-4 border-l border-gray-300">
                          <p>
                            From: <u>pitchman@hollywood.com</u>
                            <br />
                            To: <u>mogul@filthyrich.com</u>
                            <br />
                            Cc: <u>HQ@studio.com</u>
                            <br />
                            Subject: New Movie Pitch!
                          </p>
                          <p>
                            It'll be the fourth installment of a really
                            successful superhero franchise, except we're going
                            to include a really bad script, an incoherent
                            soundtrack, and accentuated nipples on the superhero
                            costumes!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <span className={cx(HIDDEN_CLASS)}>---------------</span>
        <div>
          <p>
            From: <u>HQ@studio.com</u>
            <br />
            To: <u>mogul@filthyrich.com</u>
            <br />
            Cc: <u>pitchman@hollywood.com</u>
            <br />
            Subject: Re: Re: Re: Re: Re: Re: Re: Re: Today's Movie Pitch
          </p>
          <p>We've greenlit this for release in 2009 or 2011.</p>
          <div className="pl-4 border-l border-gray-300">
            <p>
              From: <u>mogul@filthyrich.com</u>
              <br />
              To: <u>pitchman@hollywood.com</u>
              <br />
              Cc: <u>HQ@studio.com</u>
              <br />
              Subject: Re: Re: Re: Re: Re: Re: Re: Today's Movie Pitch
            </p>
            <p>George Clooney?! I'm in for $6 million!</p>
            <div className="pl-4 border-l border-gray-300">
              <p>
                From: <u>pitchman@hollywood.com</u>
                <br />
                To: <u>mogul@filthyrich.com</u>
                <br />
                Cc: <u>HQ@studio.com</u>
                <br />
                Subject: Re: Re: Re: Re: Re: Re: Today's Movie Pitch
              </p>
              <p>
                It's your call, but we've got some big names attached to this
                one, including George Clooney.
              </p>
              <div className="pl-4 border-l border-gray-300">
                <p>
                  From: <u>mogul@filthyrich.com</u>
                  <br />
                  To: <u>pitchman@hollywood.com</u>
                  <br />
                  Cc: <u>HQ@studio.com</u>
                  <br />
                  Subject: Re: Re: Re: Re: Re: Today's Movie Pitch
                </p>
                <p>
                  This sounds weird and incomprehensible. I'll probably pass.
                </p>
                <div className="pl-4 border-l border-gray-300">
                  <p>
                    From: <u>pitchman@hollywood.com</u>
                    <br />
                    To: <u>mogul@filthyrich.com</u>
                    <br />
                    Cc: <u>HQ@studio.com</u>
                    <br />
                    Subject: Re: Re: Re: Re: Today's Movie Pitch
                  </p>
                  <p>
                    It's not a war movie: the secret military operation involves
                    New Age philosophy and trying to run through solid walls.
                    Oh, and plenty of LSD.
                  </p>
                  <div className="pl-4 border-l border-gray-300">
                    <p>
                      From: <u>mogul@filthyrich.com</u>
                      <br />
                      To: <u>pitchman@hollywood.com</u>
                      <br />
                      Cc: <u>HQ@studio.com</u>
                      <br />
                      Subject: Re: Re: Re: Today's Movie Pitch
                    </p>
                    <p>
                      So, a war movie? I never would've gotten that from the
                      title.
                    </p>
                    <div className="pl-4 border-l border-gray-300">
                      <p>
                        From: <u>pitchman@hollywood.com</u>
                        <br />
                        To: <u>mogul@filthyrich.com</u>
                        <br />
                        Cc: <u>HQ@studio.com</u>
                        <br />
                        Subject: Re: Re: Today's Movie Pitch
                      </p>
                      <p>
                        No, nothing like that! It's actually about a secret
                        military operation. Based on a true story.
                      </p>
                      <div className="pl-4 border-l border-gray-300">
                        <p>
                          From: <u>mogul@filthyrich.com</u>
                          <br />
                          To: <u>pitchman@hollywood.com</u>
                          <br />
                          Cc: <u>HQ@studio.com</u>
                          <br />
                          Subject: Re: Today's Movie Pitch
                        </p>
                        <p>
                          I got it, all right, but I don't get it. What is this,
                          something about farmers and their livestock?
                        </p>
                        <div className="pl-4 border-l border-gray-300">
                          <p>
                            From: <u>pitchman@hollywood.com</u>
                            <br />
                            To: <u>mogul@filthyrich.com</u>
                            <br />
                            Cc: <u>HQ@studio.com</u>
                            <br />
                            Subject: Today's Movie Pitch
                          </p>
                          <p>
                            Left you a voicemail earlier today with a pitch. Let
                            me know if you got it.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <span className={cx(HIDDEN_CLASS)}>---------------</span>
        <div>
          <p>
            From: <u>HQ@studio.com</u>
            <br />
            To: <u>mogul@filthyrich.com</u>
            <br />
            Cc: <u>pitchman@hollywood.com</u>
            <br />
            Subject: Re: Re: Re: Re: Re: Re: Re: Re: Another Movie Pitch!
          </p>
          <p>We've greenlit this for release in 2007 or 2014.</p>
          <div className="pl-4 border-l border-gray-300">
            <p>
              From: <u>mogul@filthyrich.com</u>
              <br />
              To: <u>pitchman@hollywood.com</u>
              <br />
              Cc: <u>HQ@studio.com</u>
              <br />
              Subject: Re: Re: Re: Re: Re: Re: Re: Another Movie Pitch!
            </p>
            <p>George Clooney?! I'm in for $8 million!</p>
            <div className="pl-4 border-l border-gray-300">
              <p>
                From: <u>pitchman@hollywood.com</u>
                <br />
                To: <u>mogul@filthyrich.com</u>
                <br />
                Cc: <u>HQ@studio.com</u>
                <br />
                Subject: Re: Re: Re: Re: Re: Re: Another Movie Pitch!
              </p>
              <p>George Clooney's narrating.</p>
              <div className="pl-4 border-l border-gray-300">
                <p>
                  From: <u>mogul@filthyrich.com</u>
                  <br />
                  To: <u>pitchman@hollywood.com</u>
                  <br />
                  Cc: <u>HQ@studio.com</u>
                  <br />
                  Subject: Re: Re: Re: Re: Re: Another Movie Pitch!
                </p>
                <p>
                  But people go to movies to <u>forget</u> how horrible things
                  are in the real world. I'm out.
                </p>
                <div className="pl-4 border-l border-gray-300">
                  <p>
                    From: <u>pitchman@hollywood.com</u>
                    <br />
                    To: <u>mogul@filthyrich.com</u>
                    <br />
                    Cc: <u>HQ@studio.com</u>
                    <br />
                    Subject: Re: Re: Re: Re: Another Movie Pitch!
                  </p>
                  <p>
                    You're not wrong. It was a colossal global tragedy that's
                    still having ramifications to this day.
                  </p>
                  <div className="pl-4 border-l border-gray-300">
                    <p>
                      From: <u>mogul@filthyrich.com</u>
                      <br />
                      To: <u>pitchman@hollywood.com</u>
                      <br />
                      Cc: <u>HQ@studio.com</u>
                      <br />
                      Subject: Re: Re: Re: Another Movie Pitch!
                    </p>
                    <p>
                      That may be new, but it sounds unbelievably depressing.
                    </p>
                    <div className="pl-4 border-l border-gray-300">
                      <p>
                        From: <u>pitchman@hollywood.com</u>
                        <br />
                        To: <u>mogul@filthyrich.com</u>
                        <br />
                        Cc: <u>HQ@studio.com</u>
                        <br />
                        Subject: Re: Re: Another Movie Pitch!
                      </p>
                      <p>
                        Oh, this is totally cutting-edge: a documentary about
                        the origins and aftermath of the bloody conflict in
                        Darfur, Sudan.
                      </p>
                      <div className="pl-4 border-l border-gray-300">
                        <p>
                          From: <u>mogul@filthyrich.com</u>
                          <br />
                          To: <u>pitchman@hollywood.com</u>
                          <br />
                          Cc: <u>HQ@studio.com</u>
                          <br />
                          Subject: Re: Another Movie Pitch!
                        </p>
                        <p>
                          If it's something that hasn't been done before, I'm
                          always interested.
                        </p>
                        <div className="pl-4 border-l border-gray-300">
                          <p>
                            From: <u>pitchman@hollywood.com</u>
                            <br />
                            To: <u>mogul@filthyrich.com</u>
                            <br />
                            Cc: <u>HQ@studio.com</u>
                            <br />
                            Subject: Another Movie Pitch!
                          </p>
                          <p>
                            Checking in to see if you'd be up for hearing
                            another movie pitch.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <span className={cx(HIDDEN_CLASS)}>---------------</span>
        <div>
          <p>
            From: <u>HQ@studio.com</u>
            <br />
            To: <u>mogul@filthyrich.com</u>
            <br />
            Cc: <u>pitchman@hollywood.com</u>
            <br />
            Subject: Re: Re: Re: Re: Re: Re: Re: Re: New Sequel Pitch!
          </p>
          <p>We've greenlit this for release in 2004 or 2019.</p>
          <div className="pl-4 border-l border-gray-300">
            <p>
              From: <u>mogul@filthyrich.com</u>
              <br />
              To: <u>pitchman@hollywood.com</u>
              <br />
              Cc: <u>HQ@studio.com</u>
              <br />
              Subject: Re: Re: Re: Re: Re: Re: Re: New Sequel Pitch!
            </p>
            <p>George Clooney?! I'm in for $13 million!</p>
            <div className="pl-4 border-l border-gray-300">
              <p>
                From: <u>pitchman@hollywood.com</u>
                <br />
                To: <u>mogul@filthyrich.com</u>
                <br />
                Cc: <u>HQ@studio.com</u>
                <br />
                Subject: Re: Re: Re: Re: Re: Re: New Sequel Pitch!
              </p>
              <p>
                Well, we figure it won't matter too much because we've got the
                entire original cast coming back, including George Clooney.
              </p>
              <div className="pl-4 border-l border-gray-300">
                <p>
                  From: <u>mogul@filthyrich.com</u>
                  <br />
                  To: <u>pitchman@hollywood.com</u>
                  <br />
                  Cc: <u>HQ@studio.com</u>
                  <br />
                  Subject: Re: Re: Re: Re: Re: New Sequel Pitch!
                </p>
                <p>
                  That sounds like a dumb idea: I hope you know what you're
                  getting yourselves into.
                </p>
                <div className="pl-4 border-l border-gray-300">
                  <p>
                    From: <u>pitchman@hollywood.com</u>
                    <br />
                    To: <u>mogul@filthyrich.com</u>
                    <br />
                    Cc: <u>HQ@studio.com</u>
                    <br />
                    Subject: Re: Re: Re: Re: New Sequel Pitch!
                  </p>
                  <p>
                    Well, for this one, we're gonna make it really complicated:
                    there'll be, like, three different things they need to
                    steal, and maybe, like, four different bad guys, and a ton
                    of convoluted plot twists, double-crosses,
                    double-double-crosses, triple-double-crosses… culminating in
                    an ending that not only doesn't make any sense, but kind of
                    negates half the storyline we've established.
                  </p>
                  <div className="pl-4 border-l border-gray-300">
                    <p>
                      From: <u>mogul@filthyrich.com</u>
                      <br />
                      To: <u>pitchman@hollywood.com</u>
                      <br />
                      Cc: <u>HQ@studio.com</u>
                      <br />
                      Subject: Re: Re: Re: New Sequel Pitch!
                    </p>
                    <p>
                      Are you seriously asking <u>me</u> if I know how a heist
                      movie works? Yeah: any action/suspense movie, you gotta
                      keep the story simple.
                    </p>
                    <div className="pl-4 border-l border-gray-300">
                      <p>
                        From: <u>pitchman@hollywood.com</u>
                        <br />
                        To: <u>mogul@filthyrich.com</u>
                        <br />
                        Cc: <u>HQ@studio.com</u>
                        <br />
                        Subject: Re: Re: New Sequel Pitch!
                      </p>
                      <p>
                        Well, not exactly. You know how most heist movies -
                        including the original - are simple? We establish who
                        the thieves are, what they're gonna steal, and then
                        watch them steal it?
                      </p>
                      <div className="pl-4 border-l border-gray-300">
                        <p>
                          From: <u>mogul@filthyrich.com</u>
                          <br />
                          To: <u>pitchman@hollywood.com</u>
                          <br />
                          Cc: <u>HQ@studio.com</u>
                          <br />
                          Subject: Re: New Sequel Pitch!
                        </p>
                        <p>
                          Sounds like a slam dunk. I assume you're just going to
                          keep everything pretty much the same as the original?
                        </p>
                        <div className="pl-4 border-l border-gray-300">
                          <p>
                            From: <u>pitchman@hollywood.com</u>
                            <br />
                            To: <u>mogul@filthyrich.com</u>
                            <br />
                            Cc: <u>HQ@studio.com</u>
                            <br />
                            Subject: New Sequel Pitch!
                          </p>
                          <p>
                            We're gonna do a sequel to an enormously popular
                            heist film: you in?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <span className={cx(HIDDEN_CLASS)}>---------------</span>
        <div>
          <p>
            From: <u>HQ@studio.com</u>
            <br />
            To: <u>mogul@filthyrich.com</u>
            <br />
            Cc: <u>pitchman@hollywood.com</u>
            <br />
            Subject: Re: Re: Re: Re: Re: Re: Re: Re: New Comedy Pitch!
          </p>
          <p>We've greenlit this for release in 2001 or 2009.</p>
          <div className="pl-4 border-l border-gray-300">
            <p>
              From: <u>mogul@filthyrich.com</u>
              <br />
              To: <u>pitchman@hollywood.com</u>
              <br />
              Cc: <u>HQ@studio.com</u>
              <br />
              Subject: Re: Re: Re: Re: Re: Re: Re: New Comedy Pitch!
            </p>
            <p>George Clooney?! I'm in for $2 million!</p>
            <div className="pl-4 border-l border-gray-300">
              <p>
                From: <u>pitchman@hollywood.com</u>
                <br />
                To: <u>mogul@filthyrich.com</u>
                <br />
                Cc: <u>HQ@studio.com</u>
                <br />
                Subject: Re: Re: Re: Re: Re: Re: New Comedy Pitch!
              </p>
              <p>
                That's too bad. Oh, did I mention the movie stars George
                Clooney?
              </p>
              <div className="pl-4 border-l border-gray-300">
                <p>
                  From: <u>mogul@filthyrich.com</u>
                  <br />
                  To: <u>pitchman@hollywood.com</u>
                  <br />
                  Cc: <u>HQ@studio.com</u>
                  <br />
                  Subject: Re: Re: Re: Re: Re: New Comedy Pitch!
                </p>
                <p>
                  If that's your idea of a "comedy-drama," I'd hate to hear what
                  your idea of a "tragedy" is. I'm out.
                </p>
                <div className="pl-4 border-l border-gray-300">
                  <p>
                    From: <u>pitchman@hollywood.com</u>
                    <br />
                    To: <u>mogul@filthyrich.com</u>
                    <br />
                    Cc: <u>HQ@studio.com</u>
                    <br />
                    Subject: Re: Re: Re: Re: New Comedy Pitch!
                  </p>
                  <p>
                    Well, maybe "comedy" is too strong. It's a comedy-drama.
                    About firing people. And loneliness. And estrangement. And
                    infidelity. Oh, and one of the characters commits suicide.
                  </p>
                  <div className="pl-4 border-l border-gray-300">
                    <p>
                      From: <u>mogul@filthyrich.com</u>
                      <br />
                      To: <u>pitchman@hollywood.com</u>
                      <br />
                      Cc: <u>HQ@studio.com</u>
                      <br />
                      Subject: Re: Re: Re: New Comedy Pitch!
                    </p>
                    <p>You cannot be serious.</p>
                    <div className="pl-4 border-l border-gray-300">
                      <p>
                        From: <u>pitchman@hollywood.com</u>
                        <br />
                        To: <u>mogul@filthyrich.com</u>
                        <br />
                        Cc: <u>HQ@studio.com</u>
                        <br />
                        Subject: Re: Re: New Comedy Pitch!
                      </p>
                      <p>Three words: People. Getting. Fired.</p>
                      <div className="pl-4 border-l border-gray-300">
                        <p>
                          From: <u>mogul@filthyrich.com</u>
                          <br />
                          To: <u>pitchman@hollywood.com</u>
                          <br />
                          Cc: <u>HQ@studio.com</u>
                          <br />
                          Subject: Re: New Comedy Pitch!
                        </p>
                        <p>Everybody loves comedy! Lay it on me!</p>
                        <div className="pl-4 border-l border-gray-300">
                          <p>
                            From: <u>pitchman@hollywood.com</u>
                            <br />
                            To: <u>mogul@filthyrich.com</u>
                            <br />
                            Cc: <u>HQ@studio.com</u>
                            <br />
                            Subject: New Comedy Pitch!
                          </p>
                          <p>
                            I can't wait to tell you the plot of this new
                            comedy!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <span className={cx(HIDDEN_CLASS)}>---------------</span>
        <div className="mono-letter">
          <p>
            Dear Mr. Mogul,
            <br />
            Thanks for being willing to read my movie pitch. Basically, think
            JAWS, the blockbuster movie about the giant shark terrorizing
            hapless beachgoers.
            <br />
            Please let me know your thoughts.
            <br />
            Sincerely yours,
            <br />
            Mr. H. Pitchman
          </p>
        </div>
        <div className="script-letter">
          <p>
            Dear Mr. Pitchman,
            <br />
            JAWS was great. Everybody loves JAWS! Everybody wishes they'd
            produced JAWS! But JAWS has been done. You're never gonna remake
            JAWS!
            <br />
            &mdash;Mogul
          </p>
        </div>
        <div className="mono-letter">
          <p>
            Dear Mr. Mogul,
            <br />
            I'm sorry: I should have explained this better. I'm still new at
            this.
            <br />
            This is not a remake of JAWS. But it's the same type of movie. And
            it's a sequel! Let me know if you want to hear more.
            <br />
            Sincerely yours,
            <br />
            Mr. H. Pitchman
          </p>
        </div>
        <div className="script-letter">
          <p>
            Dear Mr. Pitchman,
            <br />A sequel? What are you talking about? They already made JAWS
            2!
            <br />
            &mdash;Mogul
          </p>
        </div>
        <div className="mono-letter">
          <p>
            Dear Mr. Mogul,
            <br /> Sorry again about the confusion. It's not a sequel to JAWS,
            or JAWS 2 (we couldn't get the rights).
            <br />
            But we DO have the rights to make a sequel to a JAWS-like movie,
            featuring a different giant animal terrorizing a bunch of tourists.
            So, this'll be kind of like JAWS 2, if JAWS 2 was set at a national
            park instead of the beach, and if the shark were a mammal.
            <br /> Let me know if that piques your interest.
            <br /> Sincerely yours,
            <br /> Mr. H. Pitchman
          </p>
        </div>
        <div className="script-letter">
          <p>
            Dear Mr. Pitchman,
            <br />
            I dunno: sounds kind of derivative. You got any stars associated
            with this thing?
            <br />
            &mdash;Mogul
          </p>
        </div>
        <div className="mono-letter">
          <p>
            Dear Mr. Mogul,
            <br /> Thanks for your reply.
            <br />
            We've got Bruce's 16-year-old kid Laura playing the screaming girl:
            she's going places, for sure! And we got Ramón's &mdash; excuse me,
            Martin's &mdash; 18-year-old kid playing Lance. And the final lead
            is Rosemary Clooney's 22-year-old nephew George.
            <br />
            Sincerely yours,
            <br /> H. Pitchman
          </p>
        </div>
        <div className="script-letter">
          <p>
            Dear Mr. Pitchman,
            <br />
            George Clooney?! Never heard of him! I'm in for $2 million!
            <br />
            &mdash;Mogul
          </p>
        </div>
        <div className="mono-letter">
          <p>
            Dear Mr. Mogul,
            <br />
            This letter is to inform you that we have greenlit this for release
            in 1983 or 2008.
            <br /> Studio HeadQuarters.
          </p>
        </div>
        <hr />
        <span className={cx(HIDDEN_CLASS)}>---------------</span>
        <div>
          <p>
            From: <u>HQ@studio.com</u>
            <br />
            To: <u>mogul@filthyrich.com</u>
            <br />
            Cc: <u>pitchman@hollywood.com</u>
            <br />
            Subject: Re: Re: Re: Re: Re: Re: Re: Re: Latest Movie Pitch!
          </p>
          <p>We've greenlit this for release in 1999 or 2016.</p>
          <div className="pl-4 border-l border-gray-300">
            <p>
              From: <u>mogul@filthyrich.com</u>
              <br />
              To: <u>pitchman@hollywood.com</u>
              <br />
              Cc: <u>HQ@studio.com</u>
              <br />
              Subject: Re: Re: Re: Re: Re: Re: Re: Latest Movie Pitch!
            </p>
            <p>George Clooney?! I'm in for $1 million!</p>
            <div className="pl-4 border-l border-gray-300">
              <p>
                From: <u>pitchman@hollywood.com</u>
                <br />
                To: <u>mogul@filthyrich.com</u>
                <br />
                Cc: <u>HQ@studio.com</u>
                <br />
                Subject: Re: Re: Re: Re: Re: Re: Latest Movie Pitch!
              </p>
              <p>
                It's a period piece with an ensemble cast that includes George
                Clooney.
              </p>
              <div className="pl-4 border-l border-gray-300">
                <p>
                  From: <u>mogul@filthyrich.com</u>
                  <br />
                  To: <u>pitchman@hollywood.com</u>
                  <br />
                  Cc: <u>HQ@studio.com</u>
                  <br />
                  Subject: Re: Re: Re: Re: Re: Latest Movie Pitch!
                </p>
                <p>So it's a war movie that's also a horror film? </p>
                <div className="pl-4 border-l border-gray-300">
                  <p>
                    From: <u>pitchman@hollywood.com</u>
                    <br />
                    To: <u>mogul@filthyrich.com</u>
                    <br />
                    Cc: <u>HQ@studio.com</u>
                    <br />
                    Subject: Re: Re: Re: Re: Latest Movie Pitch!
                  </p>
                  <p>
                    There's also a submarine. And Tilda Swinton plays twins.
                  </p>
                  <div className="pl-4 border-l border-gray-300">
                    <p>
                      From: <u>mogul@filthyrich.com</u>
                      <br />
                      To: <u>pitchman@hollywood.com</u>
                      <br />
                      Cc: <u>HQ@studio.com</u>
                      <br />
                      Subject: Re: Re: Re: Latest Movie Pitch!
                    </p>
                    <p>It has a dance number but it isn't a musical?</p>
                    <div className="pl-4 border-l border-gray-300">
                      <p>
                        From: <u>pitchman@hollywood.com</u>
                        <br />
                        To: <u>mogul@filthyrich.com</u>
                        <br />
                        Cc: <u>HQ@studio.com</u>
                        <br />
                        Subject: Re: Re: Latest Movie Pitch!
                      </p>
                      <p>
                        No, it's not exactly a musical. Although Channing Tatum
                        is in the dance number.
                      </p>
                      <div className="pl-4 border-l border-gray-300">
                        <p>
                          From: <u>mogul@filthyrich.com</u>
                          <br />
                          To: <u>pitchman@hollywood.com</u>
                          <br />
                          Cc: <u>HQ@studio.com</u>
                          <br />
                          Subject: Re: Latest Movie Pitch!
                        </p>
                        <p>
                          So, a musical? Haven't done one of those in a while.
                        </p>
                        <div className="pl-4 border-l border-gray-300">
                          <p>
                            From: <u>pitchman@hollywood.com</u>
                            <br />
                            To: <u>mogul@filthyrich.com</u>
                            <br />
                            Cc: <u>HQ@studio.com</u>
                            <br />
                            Subject: Latest Movie Pitch!
                          </p>
                          <p>How about a movie with a singing cowboy?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .mono-letter {
          font-family: ${courierPrime.style.fontFamily}, monospace;
          margin-bottom: 2em;
          font-size: 90%;
          line-height: 1.25;
        }
        .mono-letter br,
        .script-letter br {
          display: block;
          padding-bottom: 0.75em;
          content: ' ';
        }
        .script-letter {
          font-family: ${satisfy.style.fontFamily}, cursive;
          margin-bottom: 2em;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
