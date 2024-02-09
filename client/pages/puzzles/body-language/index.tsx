import cx from 'classnames';
import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/body-language/0.png';

const SLUG = 'body-language';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Some body language communicates in the minutest detail.
        </FlavorText>
        <p>
          <SheetableImage alt="" src={image0} title="" className="mx-auto" />
        </p>
        <div className="prefer-2-col">
          <div className="w-full md:w-1/2">
            <p>
              <b>Inward:</b>
            </p>
            <table className="clue-table">
              <tbody>
                <tr>
                  <td>1&ndash;5</td>
                  <td>Italian meat-and-tomato sauces</td>
                </tr>
                <tr>
                  <td>6&ndash;11</td>
                  <td>
                    Pertaining to hydroxyl compounds bonded to double-bonded
                    carbon atoms
                  </td>
                </tr>
                <tr>
                  <td>12&ndash;16</td>
                  <td>Isle which is listed first in a Beach Boys lyric</td>
                </tr>
                <tr>
                  <td>17&ndash;21</td>
                  <td>Pagan group that traditionally numbers 13</td>
                </tr>
                <tr>
                  <td>22&ndash;25</td>
                  <td>Gawk at boorishly</td>
                </tr>
                <tr>
                  <td>26&ndash;28</td>
                  <td>Government rule, in brief</td>
                </tr>
                <tr>
                  <td>29&ndash;33</td>
                  <td>Character known for keeping his friends waiting</td>
                </tr>
                <tr>
                  <td>34&ndash;38</td>
                  <td>Greek-derived prefix meaning "heaven" </td>
                </tr>
                <tr>
                  <td>39&ndash;42</td>
                  <td>Vaper's device, informally (hyph.) </td>
                </tr>
                <tr>
                  <td>43&ndash;47</td>
                  <td>The Nike swoosh and the Apple apple, for two </td>
                </tr>
                <tr>
                  <td>48&ndash;54</td>
                  <td>"I'd gladly help!" (2 wds.) </td>
                </tr>
                <tr>
                  <td>55&ndash;58</td>
                  <td>River which shares its name with a monster </td>
                </tr>
                <tr>
                  <td>59&ndash;64</td>
                  <td>Lender that charges outrageous rates </td>
                </tr>
                <tr>
                  <td>65&ndash;67</td>
                  <td>Ziering of the Sharknado series </td>
                </tr>
                <tr>
                  <td>68&ndash;71</td>
                  <td>Words to Brutus, as per Shakespeare (2 wds.) </td>
                </tr>
                <tr>
                  <td>72&ndash;79</td>
                  <td>Barrier placed in some courses </td>
                </tr>
                <tr>
                  <td>80&ndash;85</td>
                  <td>Bend that certain drivers navigate </td>
                </tr>
                <tr>
                  <td>86&ndash;90</td>
                  <td>Data fed to a computer program </td>
                </tr>
                <tr>
                  <td>91&ndash;95</td>
                  <td>Dirt, for some; smut, for others </td>
                </tr>
                <tr>
                  <td>96&ndash;100</td>
                  <td>Act as protector for </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-full md:w-1/2">
            <p>
              <b>Outward:</b>
            </p>
            <table className="clue-table">
              <tbody>
                <tr>
                  <td>100&ndash;94</td>
                  <td>London pub's offering </td>
                </tr>
                <tr>
                  <td>93&ndash;88</td>
                  <td>Elevate, or elevate someone's spirits (2 wds.)</td>
                </tr>
                <tr>
                  <td>87&ndash;83</td>
                  <td>Brexit politician Farage </td>
                </tr>
                <tr>
                  <td>82&ndash;78</td>
                  <td>
                    One member of the trio in a 1979 Hofstadter book title{' '}
                  </td>
                </tr>
                <tr>
                  <td>77&ndash;74</td>
                  <td>Cinematic musical that bombed in 2019</td>
                </tr>
                <tr>
                  <td>73&ndash;70</td>
                  <td>Prizefight, say </td>
                </tr>
                <tr>
                  <td>69&ndash;67</td>
                  <td>Number of rounds in many prizefights </td>
                </tr>
                <tr>
                  <td>66&ndash;62</td>
                  <td>Broadcast network, say </td>
                </tr>
                <tr>
                  <td>61&ndash;57</td>
                  <td>Bar order for a regular </td>
                </tr>
                <tr>
                  <td>56&ndash;51</td>
                  <td>___ Karkasy (Warhammer 40,000 character)</td>
                </tr>
                <tr>
                  <td>50&ndash;46</td>
                  <td>Either brother in an MCU directing tandem </td>
                </tr>
                <tr>
                  <td>45&ndash;41</td>
                  <td>Italian Nobelist Camillo </td>
                </tr>
                <tr>
                  <td>40&ndash;38</td>
                  <td>One at the top of an org.'s corporate ladder </td>
                </tr>
                <tr>
                  <td>37&ndash;32</td>
                  <td>
                    Popular Japanese manga series, or its titular ninja hero{' '}
                  </td>
                </tr>
                <tr>
                  <td>31&ndash;24</td>
                  <td>Ogden Nash's stock-in-trade </td>
                </tr>
                <tr>
                  <td>23&ndash;20</td>
                  <td>Requiring replenishment </td>
                </tr>
                <tr>
                  <td>19&ndash;15</td>
                  <td>All the words one knows, slangily </td>
                </tr>
                <tr>
                  <td>14&ndash;9</td>
                  <td>
                    Thymine's counterpart, in one form of "body language"{' '}
                  </td>
                </tr>
                <tr>
                  <td>8&ndash;1</td>
                  <td>
                    Order from a person who wants their coffee only slightly
                    sweetened (2 wds.){' '}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .clue-table td:nth-child(1) {
          text-align: right;
          padding-right: 0.5em;
          white-space: nowrap;
        }
        .clue-table td {
          vertical-align: top;
          font-size: 90%;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
