import cx from 'classnames';
import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Table from 'components/table';

const SLUG = 'climbfinder';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} smallTitle={true}>
      <div ref={ref}>
        <div>
          <FlavorText>
            Recent reports show the stock market is on a slippery slope as of
            late. Prices are on the rise, although some seem to be a run away
            from us.
          </FlavorText>
          <FlavorText>
            Below are the only connected clients organized into monthly
            onboarding cycles. These by-cycle stock prices all begin at $100 to
            normalize their race upwards. With this data, we hope climbers can
            find climbs in their respective cycle.
          </FlavorText>
        </div>

        <div className="prefer-2-col">
          <div className="w-full md:w-1/3">
            <p className="text-center">
              <b>Maggio 2023:</b>
            </p>
            <Table className="chart">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Stock</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>BRAIN</td>
                  <td>$ 170.00</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>CUTIE</td>
                  <td>$ 135.00</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>NUT</td>
                  <td>$ 120.00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>BRAIN</td>
                  <td>$ 250.00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>RECAP</td>
                  <td>$ 215.00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>SEED</td>
                  <td>$ 160.00</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>SKIN</td>
                  <td>$ 330.00</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>THAT</td>
                  <td>$ 290.00</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>PIT</td>
                  <td>$ 180.00</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>LUNG</td>
                  <td>$ 400.00</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>ZEBRA</td>
                  <td>→ 500</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>PIT</td>
                  <td>$ 170.00</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>CUTIE</td>
                  <td>$ 440.00</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>NUT</td>
                  <td>$ 160.00</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>LIVER</td>
                  <td>$ 480.00</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>LUNG</td>
                  <td>$ 560.00</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>SEED</td>
                  <td>$ 150.00</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>THAT</td>
                  <td>$ 510.00</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>BRAIN</td>
                  <td>→ 1000</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>RECAP</td>
                  <td>$ 585.00</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>CORE</td>
                  <td>$ 170.00</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>LIVER</td>
                  <td>$ 730.00</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>RECAP</td>
                  <td>$ 665.00</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>CORE</td>
                  <td>$ 220.00</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>CUTIE</td>
                  <td>$ 745.00</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>SKIN</td>
                  <td>$ 800.00</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>CORE</td>
                  <td>$ 270.00</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>LUNG</td>
                  <td>$ 860.00</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>NUT</td>
                  <td>$ 350.00</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>ZEBRA</td>
                  <td>$ 785.00</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>LIVER</td>
                  <td>$ 930.00</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>SEED</td>
                  <td>$ 440.00</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>ZEBRA</td>
                  <td>$ 815.00</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>SKIN</td>
                  <td>$ 1,010.00</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>ZEBRA</td>
                  <td>$ 830.00</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>PIT</td>
                  <td>→ 1000</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>SKIN</td>
                  <td>$ 1,090.00</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>THAT</td>
                  <td>$ 885.00</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>PIT</td>
                  <td>$ 580.00</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>BRAIN</td>
                  <td>$ 1,170.00</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>RECAP</td>
                  <td>$ 930.00</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>SEED</td>
                  <td className="!text-[60%]">TERMINATED</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>CUTIE</td>
                  <td className="!text-[60%]">TERMINATED</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>NUT</td>
                  <td className="!text-[60%]">TERMINATED</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>LIVER</td>
                  <td>$ 1,230.00</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>LUNG</td>
                  <td>$ 1,310.00</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>THAT</td>
                  <td className="!text-[60%]">TERMINATED</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>PIT</td>
                  <td className="!text-[60%]">TERMINATED</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>BRAIN</td>
                  <td>$ 1,380.00</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>RECAP</td>
                  <td className="!text-[60%]">TERMINATED</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>CORE</td>
                  <td className="!text-[60%]">TERMINATED</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>CUTIE</td>
                  <td className="!text-[60%]">TERMINATED</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>SKIN</td>
                  <td>$ 1,460.00</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>CORE</td>
                  <td className="!text-[60%]">TERMINATED</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>LIVER</td>
                  <td>$ 1,540.00</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>ZEBRA</td>
                  <td className="!text-[60%]">TERMINATED</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>PIT</td>
                  <td className="!text-[60%]">TERMINATED</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>LUNG</td>
                  <td>$ 1,620.00</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>NUT</td>
                  <td className="!text-[60%]">TERMINATED</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>ZEBRA</td>
                  <td className="!text-[60%]">TERMINATED</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>BRAIN</td>
                  <td>$ 1,690.00</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>SEED</td>
                  <td className="!text-[60%]">TERMINATED</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>THAT</td>
                  <td className="!text-[60%]">TERMINATED</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="w-full md:w-1/3">
            <p className="text-center">
              <b>Juillet 2023:</b>
            </p>
            <Table className="chart">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Stock</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>LILY</td>
                  <td>$ 170.00</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MUSE</td>
                  <td>$ 110.00</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>COMB</td>
                  <td>$ 115.00</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>LOVE</td>
                  <td>$ 110.00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>LILY</td>
                  <td>$ 230.00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>COMB</td>
                  <td>$ 145.00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>DARL</td>
                  <td>$ 118.00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>BAR</td>
                  <td>→ 500</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>MUSE</td>
                  <td>$ 140.00</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>FERN</td>
                  <td>$ 320.00</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>LOVE</td>
                  <td>$ 134.00</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>FOAM</td>
                  <td>→ 500</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>LILY</td>
                  <td>$ 380.00</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>CAB</td>
                  <td>$ 155.00</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>HUN</td>
                  <td>$ 144.00</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>FOAM</td>
                  <td>$ 235.00</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>CHROME</td>
                  <td>$ 295.00</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>BAR</td>
                  <td>$ 175.00</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>DEAR</td>
                  <td>$ 158.00</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>ASTER</td>
                  <td>$ 410.00</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>LILY</td>
                  <td>$ 490.00</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>DARL</td>
                  <td>$ 180.00</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>BAR</td>
                  <td>$ 205.00</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>FOAM</td>
                  <td>$ 350.00</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>HOME</td>
                  <td>$ 405.00</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>LOVE</td>
                  <td>→ 200</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>ASTER</td>
                  <td>$ 570.00</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>CAB</td>
                  <td>$ 245.00</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>LILY</td>
                  <td>$ 640.00</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>CHROME</td>
                  <td>$ 465.00</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>MUSE</td>
                  <td>$ 275.00</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>DEAR</td>
                  <td>$ 216.00</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>FERN</td>
                  <td>$ 690.00</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>FOG</td>
                  <td>$ 310.00</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>LOVE</td>
                  <td>$ 232.00</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>FOAM</td>
                  <td>$ 520.00</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>DARL</td>
                  <td>$ 252.00</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>HOME</td>
                  <td>$ 580.00</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>ASTER</td>
                  <td>$ 770.00</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>CAB</td>
                  <td>$ 355.00</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>IRIS</td>
                  <td>→ 1000</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>MUSE</td>
                  <td>$ 400.00</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>COMB</td>
                  <td>$ 635.00</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>DARL</td>
                  <td>$ 268.00</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>IRIS</td>
                  <td>$ 910.00</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>CHROME</td>
                  <td className="!text-[60%]">TERMINATED</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>CAB</td>
                  <td>$ 440.00</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>HUN</td>
                  <td>$ 284.00</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>IRIS</td>
                  <td>$ 910.00</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>BAR</td>
                  <td>$ 475.00</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>HOME</td>
                  <td className="!text-[60%]">TERMINATED</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>HUN</td>
                  <td>$ 304.00</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>IRIS</td>
                  <td>$ 910.00</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>CHROME</td>
                  <td className="!text-[60%]">TERMINATED</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>MUSE</td>
                  <td>$ 515.00</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>DEAR</td>
                  <td>$ 320.00</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>FOG</td>
                  <td>$ 555.00</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>DEAR</td>
                  <td>$ 336.00</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>ASTER</td>
                  <td>$ 950.00</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>FOAM</td>
                  <td className="!text-[60%]">TERMINATED</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>IRIS</td>
                  <td>$ 1,030.00</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>COMB</td>
                  <td className="!text-[60%]">TERMINATED</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>DARL</td>
                  <td>$ 354.00</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>FOG</td>
                  <td>$ 595.00</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>FERN</td>
                  <td>$ 1,120.00</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>FOG</td>
                  <td>$ 620.00</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>HOME</td>
                  <td className="!text-[60%]">TERMINATED</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>LOVE</td>
                  <td>$ 374.00</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>CHROME</td>
                  <td className="!text-[60%]">TERMINATED</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>BAR</td>
                  <td>$ 650.00</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>ASTER</td>
                  <td>$ 1,160.00</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>HUN</td>
                  <td>$ 380.00</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>FERN</td>
                  <td>$ 1,210.00</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>BAR</td>
                  <td>$ 700.00</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>DEAR</td>
                  <td>$ 376.00</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>FOAM</td>
                  <td className="!text-[60%]">TERMINATED</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>COMB</td>
                  <td className="!text-[60%]">TERMINATED</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>FERN</td>
                  <td>$ 1,240.00</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>LOVE</td>
                  <td>$ 376.00</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>CAB</td>
                  <td>$ 750.00</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>IRIS</td>
                  <td className="!text-[60%]">TERMINATED</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>FOG</td>
                  <td className="!text-[60%]">TERMINATED</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>HOME</td>
                  <td className="!text-[60%]">TERMINATED</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>HUN</td>
                  <td>$ 376.00</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="w-full md:w-1/3">
            <p className="text-center">
              <b>Agosto/Septiembre 2023:</b>
            </p>
            <Table className="chart">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Stock</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>EAGLE</td>
                  <td>$ 115.00</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>MEW</td>
                  <td>$ 108.00</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>BROTH</td>
                  <td>$ 220.00</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>RADIO</td>
                  <td>$ 125.00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>SING</td>
                  <td>$ 160.00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>HAWK</td>
                  <td>$ 120.00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>STOCK</td>
                  <td>$ 360.00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>PURR</td>
                  <td>$ 124.00</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>COST</td>
                  <td>$ 195.00</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>GROWL</td>
                  <td>$ 146.00</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>BROTH</td>
                  <td>$ 420.00</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>KITE</td>
                  <td>→ 500</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>COST</td>
                  <td>$ 235.00</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>STEW</td>
                  <td>$ 480.00</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>PURR</td>
                  <td>$ 164.00</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>OWL</td>
                  <td>$ 155.00</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>TANGO</td>
                  <td>$ 275.00</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>STOCK</td>
                  <td>→ 2000</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>PURR</td>
                  <td>→ 200</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>OWL</td>
                  <td>$ 175.00</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>HAWK</td>
                  <td>$ 200.00</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>PUREE</td>
                  <td>$ 500.00</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>TANGO</td>
                  <td>$ 315.00</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>GROWL</td>
                  <td>$ 190.00</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>TANGO</td>
                  <td>$ 350.00</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>STOCK</td>
                  <td>$ 600.00</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>HISS</td>
                  <td>$ 210.00</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>KITE</td>
                  <td>$ 215.00</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>EAGLE</td>
                  <td>$ 250.00</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>TANGO</td>
                  <td>$ 395.00</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>HISS</td>
                  <td>$ 234.00</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>BROTH</td>
                  <td>$ 760.00</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>SING</td>
                  <td>→ 500</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>HAWK</td>
                  <td>$ 275.00</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>GROWL</td>
                  <td>$ 260.00</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>STOCK</td>
                  <td>$ 920.00</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>MEW</td>
                  <td>$ 288.00</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>STEW</td>
                  <td>$ 1,080.00</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>KITE</td>
                  <td>$ 335.00</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>RADIO</td>
                  <td>$ 460.00</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>PUREE</td>
                  <td>$ 1,040.00</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>COST</td>
                  <td>$ 465.00</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>GROWL</td>
                  <td>$ 322.00</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>OWL</td>
                  <td>$ 385.00</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>EAGLE</td>
                  <td>$ 430.00</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>PUREE</td>
                  <td>$ 1,040.00</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>COST</td>
                  <td>$ 480.00</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>HISS</td>
                  <td>$ 354.00</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>EAGLE</td>
                  <td>$ 435.00</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>PURR</td>
                  <td>$ 382.00</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>BROTH</td>
                  <td>$ 1,100.00</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>RADIO</td>
                  <td>$ 545.00</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>HAWK</td>
                  <td>$ 470.00</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>GROWL</td>
                  <td>$ 414.00</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>STOCK</td>
                  <td>$ 1,240.00</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>RADIO</td>
                  <td>$ 620.00</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>SING</td>
                  <td>$ 680.00</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>STEW</td>
                  <td>$ 1,380.00</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>HISS</td>
                  <td>$ 438.00</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>KITE</td>
                  <td>$ 515.00</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>COST</td>
                  <td>$ 740.00</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>MEW</td>
                  <td>$ 464.00</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>STEW</td>
                  <td className="!text-[60%]">TERMINATED</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>OWL</td>
                  <td>$ 565.00</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>SING</td>
                  <td>$ 795.00</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>PUREE</td>
                  <td className="!text-[60%]">TERMINATED</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>MEW</td>
                  <td>$ 492.00</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>KITE</td>
                  <td>$ 620.00</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>HAWK</td>
                  <td>$ 680.00</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>PUREE</td>
                  <td className="!text-[60%]">TERMINATED</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>HISS</td>
                  <td>$ 512.00</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>RADIO</td>
                  <td>$ 850.00</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>EAGLE</td>
                  <td>$ 735.00</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>COST</td>
                  <td>$ 910.00</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>STEW</td>
                  <td className="!text-[60%]">TERMINATED</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>PURR</td>
                  <td>$ 526.00</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>TANGO</td>
                  <td>$ 985.00</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>MEW</td>
                  <td className="!text-[60%]">TERMINATED</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>BROTH</td>
                  <td className="!text-[60%]">TERMINATED</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>KITE</td>
                  <td>$ 775.00</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>SING</td>
                  <td>$ 1,070.00</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>GROWL</td>
                  <td className="!text-[60%]">TERMINATED</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>STOCK</td>
                  <td className="!text-[60%]">TERMINATED</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>OWL</td>
                  <td>$ 820.00</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .chart th,
        .chart td {
          padding: 2px 4px !important;
          text-align: center !important;
          font-size: 85%;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
