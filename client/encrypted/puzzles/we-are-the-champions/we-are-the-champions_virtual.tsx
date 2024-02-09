import cx from 'classnames';
import { FC } from 'react';

import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import InfoIcon from 'components/info_icon';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/we-are-the-champions/0.png';
import image1 from 'assets/puzzles/we-are-the-champions/1.png';
import image2 from 'assets/puzzles/we-are-the-champions/2.png';
import image3 from 'assets/puzzles/we-are-the-champions/3.png';
import image4 from 'assets/puzzles/we-are-the-champions/4.png';

const WeAreTheChampionsVirtual: FC = () => {
  return (
    <>
      <InfoIcon className={cx(NO_COPY_CLASS)}>
        In-person teams receive these 5 rings, lasercut. Data on the rings is
        available in copy-to-clipboard.
      </InfoIcon>
      <p className={cx('text-center', NO_COPY_CLASS)}>
        <SheetableImage
          alt="ring 1 (largest)"
          src={image0}
          title=""
          className="puzzle-ring max-w-full md:w-[500px]"
        />
        <br />
        <SheetableImage
          alt="ring 2"
          src={image1}
          title=""
          className="puzzle-ring max-w-full md:w-[500px]"
        />
        <br />
        <SheetableImage
          alt="ring 3"
          src={image2}
          title=""
          className="puzzle-ring max-w-full md:w-[500px]"
        />
        <br />
        <SheetableImage
          alt="ring 4"
          src={image3}
          title=""
          className="puzzle-ring max-w-full md:w-[500px]"
        />
        <br />
        <SheetableImage
          alt="ring 5 (smallest)"
          src={image4}
          title=""
          className="puzzle-ring max-w-full md:w-[500px]"
        />
      </p>
      <div className={cx(HIDDEN_CLASS)}>
        <p>
          In-person teams receive these 5 rings, lasercut. Each ring has 14
          pieces of data on it, etched at equal intervals; the data are listed
          below, starting with the piece of data on top in the corresponding
          ring image, and going clockwise.
          <br />
        </p>
        <p>
          <b>Ring 1 (largest):</b>
        </p>
        <ul>
          <li>21-17, 23-21</li>
          <li>3.36</li>
          <li>139</li>
          <li>692.34</li>
          <li>3-2</li>
          <li>4:08.46</li>
          <li>4:48.17</li>
          <li>2-1</li>
          <li>5-5</li>
          <li>2-1</li>
          <li>974</li>
          <li>7:17.25</li>
          <li>2:01.1</li>
          <li>1:39.22</li>
        </ul>
        <p>
          <b>Ring 2:</b>
        </p>
        <ul>
          <li>14</li>
          <li>26</li>
          <li>3</li>
          <li>8</li>
          <li>3</li>
          <li>13</li>
          <li>7</li>
          <li>2</li>
          <li>4</li>
          <li>20</li>
          <li>4</li>
          <li>3</li>
          <li>27</li>
          <li>25</li>
        </ul>
        <p>
          <b>Ring 3:</b>
        </p>
        <ul>
          <li>6</li>
          <li>2</li>
          <li>23</li>
          <li>12</li>
          <li>2</li>
          <li>14</li>
          <li>19</li>
          <li>11</li>
          <li>21</li>
          <li>6</li>
          <li>5</li>
          <li>14</li>
          <li>7</li>
          <li>4</li>
        </ul>
        <p>
          <b>Ring 4:</b>
        </p>
        <ul>
          <li>4</li>
          <li>15</li>
          <li>2</li>
          <li>7</li>
          <li>3</li>
          <li>1</li>
          <li>23</li>
          <li>2</li>
          <li>5</li>
          <li>17</li>
          <li>19</li>
          <li>11</li>
          <li>16</li>
          <li>4</li>
        </ul>
        <p>
          <b>Ring 5 (smallest):</b>
        </p>
        <ul>
          <li>1972</li>
          <li>1964</li>
          <li>2018</li>
          <li>2020</li>
          <li>1912</li>
          <li>1920</li>
          <li>1996</li>
          <li>1994</li>
          <li>2022</li>
          <li>1980</li>
          <li>1992</li>
          <li>1984</li>
          <li>2016</li>
          <li>2002</li>
        </ul>
      </div>
      <style jsx global>{`
        .puzzle-ring {
          display: inline-block;
          margin-bottom: 2em;
        }
      `}</style>
    </>
  );
};

export default WeAreTheChampionsVirtual;
