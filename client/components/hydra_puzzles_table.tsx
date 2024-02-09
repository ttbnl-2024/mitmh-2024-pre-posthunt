import cx from 'classnames';
import { FC } from 'react';

import { PuzzleData } from 'components/puzzle_image';
import { NestedTitle, PuzzleTitle } from 'components/puzzle_table';
import { RoundData } from 'components/puzzles_map';

interface HydraNode {
  slug: string;
  children?: [HydraNode, HydraNode];
}
interface HydraStructure {
  metaSlug?: string;
  children: [HydraNode, HydraNode];
}

interface Props {
  roundData: RoundData;
  puzzles: PuzzleData[];
}

const HydraTable: FC<Props> = ({ roundData, puzzles }) => {
  const data = roundData.private as HydraStructure;
  const slugMap = new Map<string, PuzzleData>();
  for (const puzzle of puzzles) {
    slugMap[puzzle.slug] = puzzle;
  }

  const startNest = !!data.metaSlug ? 1 : 0;
  const HydraTitleNode: FC<{ node: HydraNode; side: string; ne: number }> = ({
    node,
    side,
    ne,
  }) => {
    if (!node) return <></>;
    const puzzleData = slugMap[node.slug];
    return (
      <>
        <div className="puzzle grid grid-cols-3 gap-4">
          <div className="name primary col-span-2">
            <NestedTitle puzzleData={puzzleData} ne={ne}>
              {' '}
              <span className="text-black">(the one on {side})</span>
            </NestedTitle>
          </div>
          <pre
            className={cx('font-mono secondary', {
              underline: puzzleData.answer === '',
            })}
          >
            {puzzleData.answer != undefined &&
              (puzzleData.answer || <>&nbsp;</>)}
          </pre>
        </div>
        {node.children && (
          <>
            <HydraTitleNode
              node={node.children[0]}
              side="this side"
              ne={ne + 1}
            />
            <HydraTitleNode
              node={node.children[1]}
              side="that side"
              ne={ne + 1}
            />
          </>
        )}
      </>
    );
  };

  return (
    <>
      {data.metaSlug && (
        <div className={cx('puzzle grid grid-cols-3 gap-4')}>
          <div
            className={cx(
              'name primary col-span-2 pl-4 -indent-4',
              'font-smallcaps font-bold'
            )}
          >
            <PuzzleTitle puzzleData={slugMap[data.metaSlug]} />
          </div>
          <pre
            className={cx('font-mono secondary', {
              underline: slugMap[data.metaSlug].answer === '',
            })}
          >
            {slugMap[data.metaSlug].answer != undefined &&
              (slugMap[data.metaSlug].answer || <>&nbsp;</>)}
          </pre>
        </div>
      )}
      <HydraTitleNode node={data.children[0]} side="this side" ne={startNest} />
      <HydraTitleNode node={data.children[1]} side="that side" ne={startNest} />
      <style jsx global>{`
        .name .border-dashed {
          border-color: rgb(115 115 115);
        }
      `}</style>
    </>
  );
};

export default HydraTable;
