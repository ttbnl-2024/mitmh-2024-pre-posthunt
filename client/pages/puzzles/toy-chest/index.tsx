import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { NO_COPY_CLASS } from 'components/copy';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image1A from 'assets/puzzles/toy-chest/1A.jpg';
import image1B from 'assets/puzzles/toy-chest/1B.jpg';
import image1C from 'assets/puzzles/toy-chest/1C.jpg';
import image1D from 'assets/puzzles/toy-chest/1D.jpg';
import image1E from 'assets/puzzles/toy-chest/1E.jpg';
import image1F from 'assets/puzzles/toy-chest/1F.jpg';
import image1G from 'assets/puzzles/toy-chest/1G.jpg';
import image1H from 'assets/puzzles/toy-chest/1H.jpg';
import image1I from 'assets/puzzles/toy-chest/1I.jpg';
import image1J from 'assets/puzzles/toy-chest/1J.jpg';
import image1K from 'assets/puzzles/toy-chest/1K.jpg';
import image2A from 'assets/puzzles/toy-chest/2A.jpg';
import image2B from 'assets/puzzles/toy-chest/2B.jpg';
import image2C from 'assets/puzzles/toy-chest/2C.jpg';
import image2D from 'assets/puzzles/toy-chest/2D.jpg';
import image2E from 'assets/puzzles/toy-chest/2E.jpg';
import image2F from 'assets/puzzles/toy-chest/2F.jpg';
import image2G from 'assets/puzzles/toy-chest/2G.jpg';
import image2H from 'assets/puzzles/toy-chest/2H.jpg';
import image2I from 'assets/puzzles/toy-chest/2I.jpg';
import image2J from 'assets/puzzles/toy-chest/2J.jpg';
import image2K from 'assets/puzzles/toy-chest/2K.jpg';
import image3A from 'assets/puzzles/toy-chest/3A.jpg';
import image3B from 'assets/puzzles/toy-chest/3B.jpg';
import image3C from 'assets/puzzles/toy-chest/3C.jpg';
import image3D from 'assets/puzzles/toy-chest/3D.jpg';
import image3E from 'assets/puzzles/toy-chest/3E.jpg';
import image3F from 'assets/puzzles/toy-chest/3F.jpg';
import image3G from 'assets/puzzles/toy-chest/3G.jpg';
import image3H from 'assets/puzzles/toy-chest/3H.jpg';
import image3I from 'assets/puzzles/toy-chest/3I.jpg';
import image3J from 'assets/puzzles/toy-chest/3J.jpg';
import image3K from 'assets/puzzles/toy-chest/3K.jpg';
import image4A from 'assets/puzzles/toy-chest/4A.jpg';
import image4B from 'assets/puzzles/toy-chest/4B.jpg';
import image4C from 'assets/puzzles/toy-chest/4C.jpg';
import image4D from 'assets/puzzles/toy-chest/4D.jpg';
import image4E from 'assets/puzzles/toy-chest/4E.jpg';
import image4F from 'assets/puzzles/toy-chest/4F.jpg';
import image4G from 'assets/puzzles/toy-chest/4G.jpg';
import image4H from 'assets/puzzles/toy-chest/4H.jpg';
import image4I from 'assets/puzzles/toy-chest/4I.jpg';
import image4J from 'assets/puzzles/toy-chest/4J.jpg';
import image4K from 'assets/puzzles/toy-chest/4K.jpg';
import image5A from 'assets/puzzles/toy-chest/5A.jpg';
import image5B from 'assets/puzzles/toy-chest/5B.jpg';
import image5C from 'assets/puzzles/toy-chest/5C.jpg';
import image5D from 'assets/puzzles/toy-chest/5D.jpg';
import image5E from 'assets/puzzles/toy-chest/5E.jpg';
import image5F from 'assets/puzzles/toy-chest/5F.jpg';
import image5G from 'assets/puzzles/toy-chest/5G.jpg';
import image5H from 'assets/puzzles/toy-chest/5H.jpg';
import image5I from 'assets/puzzles/toy-chest/5I.jpg';
import image5J from 'assets/puzzles/toy-chest/5J.jpg';
import image5K from 'assets/puzzles/toy-chest/5K.jpg';
import image6A from 'assets/puzzles/toy-chest/6A.jpg';
import image6B from 'assets/puzzles/toy-chest/6B.jpg';
import image6C from 'assets/puzzles/toy-chest/6C.jpg';
import image6D from 'assets/puzzles/toy-chest/6D.jpg';
import image6E from 'assets/puzzles/toy-chest/6E.jpg';
import image6F from 'assets/puzzles/toy-chest/6F.jpg';
import image6G from 'assets/puzzles/toy-chest/6G.jpg';
import image6H from 'assets/puzzles/toy-chest/6H.jpg';
import image6I from 'assets/puzzles/toy-chest/6I.jpg';
import image6J from 'assets/puzzles/toy-chest/6J.jpg';
import image6K from 'assets/puzzles/toy-chest/6K.jpg';
import image7A from 'assets/puzzles/toy-chest/7A.jpg';
import image7B from 'assets/puzzles/toy-chest/7B.jpg';
import image7C from 'assets/puzzles/toy-chest/7C.jpg';
import image7D from 'assets/puzzles/toy-chest/7D.jpg';
import image7E from 'assets/puzzles/toy-chest/7E.jpg';
import image7F from 'assets/puzzles/toy-chest/7F.jpg';
import image7G from 'assets/puzzles/toy-chest/7G.jpg';
import image7H from 'assets/puzzles/toy-chest/7H.jpg';
import image7I from 'assets/puzzles/toy-chest/7I.jpg';
import image7J from 'assets/puzzles/toy-chest/7J.jpg';
import image7K from 'assets/puzzles/toy-chest/7K.jpg';
import image8A from 'assets/puzzles/toy-chest/8A.jpg';
import image8B from 'assets/puzzles/toy-chest/8B.jpg';
import image8C from 'assets/puzzles/toy-chest/8C.jpg';
import image8D from 'assets/puzzles/toy-chest/8D.jpg';
import image8E from 'assets/puzzles/toy-chest/8E.jpg';
import image8F from 'assets/puzzles/toy-chest/8F.jpg';
import image8G from 'assets/puzzles/toy-chest/8G.jpg';
import image8H from 'assets/puzzles/toy-chest/8H.jpg';
import image8I from 'assets/puzzles/toy-chest/8I.jpg';
import image8J from 'assets/puzzles/toy-chest/8J.jpg';
import image8K from 'assets/puzzles/toy-chest/8K.jpg';
import image9A from 'assets/puzzles/toy-chest/9A.jpg';
import image9B from 'assets/puzzles/toy-chest/9B.jpg';
import image9C from 'assets/puzzles/toy-chest/9C.jpg';
import image9D from 'assets/puzzles/toy-chest/9D.jpg';
import image9E from 'assets/puzzles/toy-chest/9E.jpg';
import image9F from 'assets/puzzles/toy-chest/9F.jpg';
import image9G from 'assets/puzzles/toy-chest/9G.jpg';
import image9H from 'assets/puzzles/toy-chest/9H.jpg';
import image9I from 'assets/puzzles/toy-chest/9I.jpg';
import image9J from 'assets/puzzles/toy-chest/9J.jpg';
import image9K from 'assets/puzzles/toy-chest/9K.jpg';
import image10A from 'assets/puzzles/toy-chest/10A.jpg';
import image10B from 'assets/puzzles/toy-chest/10B.jpg';
import image10C from 'assets/puzzles/toy-chest/10C.jpg';
import image10D from 'assets/puzzles/toy-chest/10D.jpg';
import image10E from 'assets/puzzles/toy-chest/10E.jpg';
import image10F from 'assets/puzzles/toy-chest/10F.jpg';
import image10G from 'assets/puzzles/toy-chest/10G.jpg';
import image10H from 'assets/puzzles/toy-chest/10H.jpg';
import image10I from 'assets/puzzles/toy-chest/10I.jpg';
import image10J from 'assets/puzzles/toy-chest/10J.jpg';
import image10K from 'assets/puzzles/toy-chest/10K.jpg';
import image11A from 'assets/puzzles/toy-chest/11A.jpg';
import image11B from 'assets/puzzles/toy-chest/11B.jpg';
import image11C from 'assets/puzzles/toy-chest/11C.jpg';
import image11D from 'assets/puzzles/toy-chest/11D.jpg';
import image11E from 'assets/puzzles/toy-chest/11E.jpg';
import image11F from 'assets/puzzles/toy-chest/11F.jpg';
import image11G from 'assets/puzzles/toy-chest/11G.jpg';
import image11H from 'assets/puzzles/toy-chest/11H.jpg';
import image11I from 'assets/puzzles/toy-chest/11I.jpg';
import image11J from 'assets/puzzles/toy-chest/11J.jpg';
import image11K from 'assets/puzzles/toy-chest/11K.jpg';

const SLUG = 'toy-chest';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <InfoIcon className={cx(NO_COPY_CLASS)}>
          Click on each image to view larger in a new tab. The table scrolls
          horizontally.
        </InfoIcon>
        <div className="overflow-x-scroll">
          <table id="toy-chest-table">
            <style jsx global>
              {`
                #toy-chest-table {
                  margin: 0 auto;
                  border-collapse: collapse;
                  max-width: 100%;
                }
                #toy-chest-table td {
                  border: 1px solid black;
                  text-align: center;
                  padding: 3px;
                }

                #toy-chest-table img {
                  display: inline-block;
                  max-width: 75px;
                  max-height: 75px;
                  vertical-align: middle;
                }
              `}
            </style>
            <tbody>
              <tr>
                <td>
                  <a target="_blank" href={image11A}>
                    <SheetableImage src={image11A} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image10A}>
                    <SheetableImage src={image10A} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image9A}>
                    <SheetableImage src={image9A} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image8A}>
                    <SheetableImage src={image8A} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image7A}>
                    <SheetableImage src={image7A} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image6A}>
                    <SheetableImage src={image6A} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image5A}>
                    <SheetableImage src={image5A} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image4A}>
                    <SheetableImage src={image4A} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image3A}>
                    <SheetableImage src={image3A} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image2A}>
                    <SheetableImage src={image2A} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image1A}>
                    <SheetableImage src={image1A} />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a target="_blank" href={image11B}>
                    <SheetableImage src={image11B} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image10B}>
                    <SheetableImage src={image10B} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image9B}>
                    <SheetableImage src={image9B} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image8B}>
                    <SheetableImage src={image8B} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image7B}>
                    <SheetableImage src={image7B} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image6B}>
                    <SheetableImage src={image6B} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image5B}>
                    <SheetableImage src={image5B} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image4B}>
                    <SheetableImage src={image4B} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image3B}>
                    <SheetableImage src={image3B} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image2B}>
                    <SheetableImage src={image2B} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image1B}>
                    <SheetableImage src={image1B} />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a target="_blank" href={image11C}>
                    <SheetableImage src={image11C} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image10C}>
                    <SheetableImage src={image10C} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image9C}>
                    <SheetableImage src={image9C} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image8C}>
                    <SheetableImage src={image8C} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image7C}>
                    <SheetableImage src={image7C} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image6C}>
                    <SheetableImage src={image6C} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image5C}>
                    <SheetableImage src={image5C} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image4C}>
                    <SheetableImage src={image4C} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image3C}>
                    <SheetableImage src={image3C} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image2C}>
                    <SheetableImage src={image2C} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image1C}>
                    <SheetableImage src={image1C} />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a target="_blank" href={image11D}>
                    <SheetableImage src={image11D} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image10D}>
                    <SheetableImage src={image10D} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image9D}>
                    <SheetableImage src={image9D} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image8D}>
                    <SheetableImage src={image8D} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image7D}>
                    <SheetableImage src={image7D} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image6D}>
                    <SheetableImage src={image6D} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image5D}>
                    <SheetableImage src={image5D} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image4D}>
                    <SheetableImage src={image4D} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image3D}>
                    <SheetableImage src={image3D} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image2D}>
                    <SheetableImage src={image2D} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image1D}>
                    <SheetableImage src={image1D} />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a target="_blank" href={image11E}>
                    <SheetableImage src={image11E} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image10E}>
                    <SheetableImage src={image10E} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image9E}>
                    <SheetableImage src={image9E} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image8E}>
                    <SheetableImage src={image8E} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image7E}>
                    <SheetableImage src={image7E} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image6E}>
                    <SheetableImage src={image6E} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image5E}>
                    <SheetableImage src={image5E} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image4E}>
                    <SheetableImage src={image4E} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image3E}>
                    <SheetableImage src={image3E} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image2E}>
                    <SheetableImage src={image2E} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image1E}>
                    <SheetableImage src={image1E} />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a target="_blank" href={image11F}>
                    <SheetableImage src={image11F} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image10F}>
                    <SheetableImage src={image10F} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image9F}>
                    <SheetableImage src={image9F} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image8F}>
                    <SheetableImage src={image8F} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image7F}>
                    <SheetableImage src={image7F} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image6F}>
                    <SheetableImage src={image6F} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image5F}>
                    <SheetableImage src={image5F} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image4F}>
                    <SheetableImage src={image4F} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image3F}>
                    <SheetableImage src={image3F} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image2F}>
                    <SheetableImage src={image2F} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image1F}>
                    <SheetableImage src={image1F} />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a target="_blank" href={image11G}>
                    <SheetableImage src={image11G} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image10G}>
                    <SheetableImage src={image10G} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image9G}>
                    <SheetableImage src={image9G} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image8G}>
                    <SheetableImage src={image8G} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image7G}>
                    <SheetableImage src={image7G} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image6G}>
                    <SheetableImage src={image6G} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image5G}>
                    <SheetableImage src={image5G} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image4G}>
                    <SheetableImage src={image4G} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image3G}>
                    <SheetableImage src={image3G} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image2G}>
                    <SheetableImage src={image2G} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image1G}>
                    <SheetableImage src={image1G} />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a target="_blank" href={image11H}>
                    <SheetableImage src={image11H} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image10H}>
                    <SheetableImage src={image10H} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image9H}>
                    <SheetableImage src={image9H} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image8H}>
                    <SheetableImage src={image8H} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image7H}>
                    <SheetableImage src={image7H} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image6H}>
                    <SheetableImage src={image6H} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image5H}>
                    <SheetableImage src={image5H} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image4H}>
                    <SheetableImage src={image4H} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image3H}>
                    <SheetableImage src={image3H} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image2H}>
                    <SheetableImage src={image2H} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image1H}>
                    <SheetableImage src={image1H} />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a target="_blank" href={image11I}>
                    <SheetableImage src={image11I} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image10I}>
                    <SheetableImage src={image10I} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image9I}>
                    <SheetableImage src={image9I} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image8I}>
                    <SheetableImage src={image8I} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image7I}>
                    <SheetableImage src={image7I} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image6I}>
                    <SheetableImage src={image6I} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image5I}>
                    <SheetableImage src={image5I} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image4I}>
                    <SheetableImage src={image4I} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image3I}>
                    <SheetableImage src={image3I} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image2I}>
                    <SheetableImage src={image2I} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image1I}>
                    <SheetableImage src={image1I} />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a target="_blank" href={image11J}>
                    <SheetableImage src={image11J} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image10J}>
                    <SheetableImage src={image10J} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image9J}>
                    <SheetableImage src={image9J} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image8J}>
                    <SheetableImage src={image8J} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image7J}>
                    <SheetableImage src={image7J} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image6J}>
                    <SheetableImage src={image6J} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image5J}>
                    <SheetableImage src={image5J} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image4J}>
                    <SheetableImage src={image4J} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image3J}>
                    <SheetableImage src={image3J} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image2J}>
                    <SheetableImage src={image2J} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image1J}>
                    <SheetableImage src={image1J} />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a target="_blank" href={image11K}>
                    <SheetableImage src={image11K} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image10K}>
                    <SheetableImage src={image10K} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image9K}>
                    <SheetableImage src={image9K} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image8K}>
                    <SheetableImage src={image8K} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image7K}>
                    <SheetableImage src={image7K} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image6K}>
                    <SheetableImage src={image6K} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image5K}>
                    <SheetableImage src={image5K} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image4K}>
                    <SheetableImage src={image4K} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image3K}>
                    <SheetableImage src={image3K} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image2K}>
                    <SheetableImage src={image2K} />
                  </a>
                </td>
                <td>
                  <a target="_blank" href={image1K}>
                    <SheetableImage src={image1K} />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
