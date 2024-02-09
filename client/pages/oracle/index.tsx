import React, { useContext } from 'react';

import { serverFetch } from 'utils/fetch';

import HuntInfoContext from 'components/context';

import candle from 'assets/oracle/candle.gif';
import earth from 'assets/oracle/earth.gif';
import future from 'assets/oracle/future.gif';
import moon from 'assets/oracle/moon.gif';
import past from 'assets/oracle/past.gif';
import present from 'assets/oracle/present.gif';
import purpleBg from 'assets/oracle/purple.jpg';
import starBg2 from 'assets/oracle/star2.gif';
import starBg from 'assets/oracle/stars.gif';

interface OracleName {
  oracleName: string;
}

const FramePage: React.FC<OracleName> = ({ oracleName }) => {
  const { userInfo } = useContext(HuntInfoContext);

  return (
    <div className="overall overflow-hidden">
      <div
        className="h-[20vh] border-b-4  pt-[4px]"
        style={{ backgroundImage: `url(${starBg})` }}
      >
        <table className="mx-auto">
          <tbody>
            <tr>
              <td>
                {userInfo?.teamInfo?.overworld ? (
                  <a href="/overworld">
                    <img src={earth} />
                  </a>
                ) : (
                  <img src={earth} />
                )}
              </td>
              <td className="text-center whitespace-nowrap">
                <span
                  className="text-[magenta] text-[24px]"
                  style={{ fontFamily: 'Times New Roman, serif' }}
                >
                  WELCOME TO
                </span>
                <br />
                <span
                  className="text-[magenta] text-[48px] uppercase"
                  style={{ fontFamily: 'cursive' }}
                >
                  THE ORACLE OF {oracleName}
                </span>
              </td>
              <td>
                <img src={moon} />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="marquee text-[white]">
          <div
            className="whitespace-nowrap text-[18px]"
            style={{ fontFamily: 'Times New Roman, serif' }}
          >
            <span className="text-[red]">T</span>
            <span className="text-[orangered]">h</span>
            <span className="text-[darkorange]">e</span>{' '}
            <span className="text-[orange]">S</span>
            <span className="text-[gold]">o</span>
            <span className="text-[yellow]">u</span>
            <span className="text-[yellowgreen]">r</span>
            <span className="text-[limegreen]">c</span>
            <span className="text-[green]">e</span>{' '}
            <span className="text-[seagreen]">o</span>
            <span className="text-[teal]">f</span>{' '}
            <span className="text-[darkturquoise]">a</span>
            <span className="text-[deepskyblue]">l</span>
            <span className="text-[dodgerblue]">l</span>{' '}
            <span className="text-[blue]">i</span>
            <span className="text-[royalblue]">n</span>
            <span className="text-[blueviolet]">f</span>
            <span className="text-[mediumpurple]">o</span>
            <span className="text-[plum]">r</span>
            <span className="text-[violet]">m</span>
            <span className="text-[pink]">a</span>
            <span className="text-[lightcoral]">t</span>
            <span className="text-[red]">i</span>
            <span className="text-[orangered]">o</span>
            <span className="text-[darkorange]">n</span>{' '}
            <span className="text-[orange]">t</span>
            <span className="text-[gold]">h</span>
            <span className="text-[yellow]">a</span>
            <span className="text-[yellowgreen]">t</span>{' '}
            <span className="text-[limegreen]">i</span>
            <span className="text-[green]">s</span>
            <span className="text-[seagreen]">,</span>{' '}
            <span className="text-[teal]">w</span>
            <span className="text-[darkturquoise]">a</span>
            <span className="text-[deepskyblue]">s</span>
            <span className="text-[dodgerblue]">,</span>{' '}
            <span className="text-[blue]">o</span>
            <span className="text-[royalblue]">r</span>{' '}
            <span className="text-[blueviolet]">e</span>
            <span className="text-[mediumpurple]">v</span>
            <span className="text-[plum]">e</span>
            <span className="text-[violet]">r</span>{' '}
            <span className="text-[pink]">c</span>
            <span className="text-[lightcoral]">o</span>
            <span className="text-[red]">u</span>
            <span className="text-[orangered]">l</span>
            <span className="text-[darkorange]">d</span>{' '}
            <span className="text-[orange]">b</span>
            <span className="text-[gold]">e</span>
          </div>
        </div>
      </div>
      <div className="h-[80vh] relative">
        <div
          className="absolute top-[0px] left-[0px] w-[25vw] border-r-4 h-[80vh]"
          style={{ backgroundImage: `url(${purpleBg})` }}
        >
          <div
            className="inline-block text-center w-full pt-4 text-white text-[18px]"
            style={{ fontFamily: 'Times New Roman, serif' }}
          >
            <a target="main" href="oracle/past">
              <img src={past} className="inline-block" />
            </a>
            <br />
            Your story so far
            <br />
            <br />
            <a target="main" href="oracle/welcome">
              <img src={present} className="inline-block" />
            </a>
            <br />
            Go back to the home page
            <br />
            <br />
            <a target="main" href="oracle/future">
              <img src={future} className="inline-block" />
            </a>
            <br />
            Ask for hints to your future
            <br />
            <br />
            <a href="/">
              <img src={candle} className="inline-block" />
            </a>
          </div>
        </div>
        <iframe
          name="main"
          className="absolute top-[0px] right-[0px] w-[75vw] h-[80vh]"
          style={{ backgroundImage: `url(${starBg2})` }}
          src="oracle/welcome"
        ></iframe>
      </div>

      <style jsx global>
        {`
          .marquee div {
            display: inline-block;
            padding-left: 100%;
            animation: marquee 15s linear infinite;
          }
          @keyframes marquee {
            0% {
              transform: translate(0, 0);
            }
            100% {
              transform: translate(-100%, 0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default FramePage;

export const getServerSideProps = async (context) => {
  const props = await serverFetch<OracleName>(context, '/oracle_name');

  return {
    props: {
      bare: true,
      oracleName: props.oracleName,
    },
  };
};
