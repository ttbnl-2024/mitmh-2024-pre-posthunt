import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { NO_COPY_CLASS } from 'components/copy';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import VideoEmbed from 'components/video_embed';

const SLUG = 'presenting-capitol-records-tour';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <VideoEmbed src="https://www.youtube.com/embed/JXXPQL7eyfU" />
        <InfoIcon className={cx(NO_COPY_CLASS)}>
          A transcript of the guide's text can be found below or in the video
          description.
        </InfoIcon>
        <ol className="space-y-2">
          <li>
            « J'aurais pu séduire le professeur de piano, mais je ne voulais pas
            devenir un paria. Certains disent que c'est merveilleux. « Des
            moments merveilleux. » C'est bizarre. »
          </li>
          <li>
            "Preferiría ver una luna llena en marzo que la segunda venida."
          </li>
          <li>
            "Wenn Sie die Restaurants betreten, die Sie auf Reisewebsites
            finden, werden Sie feststellen, dass es keinen Ausgang gibt. ...von
            Übelkeit."
          </li>
          <li>
            "Guío a los extraños peregrinos y escribo a la gente a la que nadie
            escribe. El coronel de esa franquicia de pollo frito, por ejemplo."
          </li>
          <li>
            "These tours can go on for days, and the longer they go, the
            stranger they become, especially in the fall."
          </li>
          <li>
            "La cuestión rusa sólo tiene una respuesta: nunca cometemos
            errores."
          </li>
          <li>
            "Alla fine la scelta è semplice. Con una guida turistica puoi
            trovare la strada per il paradiso. Senza una guida, troverai la
            morte sulle Ande."
          </li>
          <li>
            "J'ai vécu quelque temps à New York. Une ville méchante. Sombre,
            froid. Ombres sur l'Hudson."
          </li>
          <li>"זכּרון: די גרין בלעטער פון ווייַט גאַרדענס."</li>
          <li>
            «Правило номер шесть: персонажи, ищущие автора, должны играть по
            правилам игры.»
          </li>
          <li>
            "Comenzamos aquí, amados, donde comienzan todos los recorridos: en
            casa."
          </li>
          <li>
            "At ten, the book of questions is full of riddles; at twenty, love
            poems; and a song of despair at fifty."
          </li>
        </ol>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
