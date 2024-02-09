import cx from 'classnames';
import { Dispatch, FC, FormEvent, SetStateAction, useState } from 'react';
import { DjangoFormResponse } from 'types';

import { clientFetch } from 'utils/fetch';
import { useRouter } from 'utils/router';

import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import SheetableImage from 'components/sheetable_image';

import image1 from 'assets/puzzles/von-schweetzs-big-question/1.jpg';
import image2 from 'assets/puzzles/von-schweetzs-big-question/2.jpg';
import image3 from 'assets/puzzles/von-schweetzs-big-question/3.jpg';
import image4 from 'assets/puzzles/von-schweetzs-big-question/4.jpg';
import image5 from 'assets/puzzles/von-schweetzs-big-question/5.jpg';
import image6 from 'assets/puzzles/von-schweetzs-big-question/6.jpg';
import image7 from 'assets/puzzles/von-schweetzs-big-question/7.jpg';
import image8 from 'assets/puzzles/von-schweetzs-big-question/8.jpg';
import image9 from 'assets/puzzles/von-schweetzs-big-question/9.jpg';
import image10 from 'assets/puzzles/von-schweetzs-big-question/10.jpg';
import image11 from 'assets/puzzles/von-schweetzs-big-question/11.jpg';
import image12 from 'assets/puzzles/von-schweetzs-big-question/12.jpg';
import image13 from 'assets/puzzles/von-schweetzs-big-question/13.jpg';
import image14 from 'assets/puzzles/von-schweetzs-big-question/14.jpg';
import image15 from 'assets/puzzles/von-schweetzs-big-question/15.jpg';
import image16 from 'assets/puzzles/von-schweetzs-big-question/16.jpg';
import image17 from 'assets/puzzles/von-schweetzs-big-question/17.jpg';
import image18 from 'assets/puzzles/von-schweetzs-big-question/18.jpg';
import image19 from 'assets/puzzles/von-schweetzs-big-question/19.jpg';
import image20 from 'assets/puzzles/von-schweetzs-big-question/20.jpg';
import image21 from 'assets/puzzles/von-schweetzs-big-question/21.jpg';
import image22 from 'assets/puzzles/von-schweetzs-big-question/22.jpg';
import image23 from 'assets/puzzles/von-schweetzs-big-question/23.jpg';
import image24 from 'assets/puzzles/von-schweetzs-big-question/24.jpg';
import image25 from 'assets/puzzles/von-schweetzs-big-question/25.jpg';
import image26 from 'assets/puzzles/von-schweetzs-big-question/26.jpg';
import image27 from 'assets/puzzles/von-schweetzs-big-question/27.jpg';
import image28 from 'assets/puzzles/von-schweetzs-big-question/28.jpg';
import image29 from 'assets/puzzles/von-schweetzs-big-question/29.jpg';
import image30 from 'assets/puzzles/von-schweetzs-big-question/30.jpg';
import image31 from 'assets/puzzles/von-schweetzs-big-question/31.jpg';
import image32 from 'assets/puzzles/von-schweetzs-big-question/32.jpg';
import image33 from 'assets/puzzles/von-schweetzs-big-question/33.jpg';
import image34 from 'assets/puzzles/von-schweetzs-big-question/34.jpg';
import image35 from 'assets/puzzles/von-schweetzs-big-question/35.jpg';
import image36 from 'assets/puzzles/von-schweetzs-big-question/36.jpg';
import image37 from 'assets/puzzles/von-schweetzs-big-question/37.jpg';
import image38 from 'assets/puzzles/von-schweetzs-big-question/38.jpg';
import image39 from 'assets/puzzles/von-schweetzs-big-question/39.jpg';
import image40 from 'assets/puzzles/von-schweetzs-big-question/40.jpg';
import image41 from 'assets/puzzles/von-schweetzs-big-question/41.jpg';
import image42 from 'assets/puzzles/von-schweetzs-big-question/42.jpg';
import image43 from 'assets/puzzles/von-schweetzs-big-question/43.jpg';
import image44 from 'assets/puzzles/von-schweetzs-big-question/44.jpg';
import image45 from 'assets/puzzles/von-schweetzs-big-question/45.jpg';
import image46 from 'assets/puzzles/von-schweetzs-big-question/46.jpg';
import image47 from 'assets/puzzles/von-schweetzs-big-question/47.jpg';
import image48 from 'assets/puzzles/von-schweetzs-big-question/48.jpg';
import image49 from 'assets/puzzles/von-schweetzs-big-question/49.jpg';
import image50 from 'assets/puzzles/von-schweetzs-big-question/50.jpg';
import image51 from 'assets/puzzles/von-schweetzs-big-question/51.jpg';
import image52 from 'assets/puzzles/von-schweetzs-big-question/52.jpg';
import image53 from 'assets/puzzles/von-schweetzs-big-question/53.jpg';
import image54 from 'assets/puzzles/von-schweetzs-big-question/54.jpg';

const SLUG = 'von-schweetzs-big-question';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
  image27,
  image28,
  image29,
  image30,
  image31,
  image32,
  image33,
  image34,
  image35,
  image36,
  image37,
  image38,
  image39,
  image40,
  image41,
  image42,
  image43,
  image44,
  image45,
  image46,
  image47,
  image48,
  image49,
  image50,
  image51,
  image52,
  image53,
  image54,
];

interface RacerProps {
  image: number;
  setImage: Dispatch<SetStateAction<number>>;
  setStep3: Dispatch<SetStateAction<boolean>>;
}

interface VonSchweetzRacerResponse {
  correct: boolean;
}

let Racers: FC<RacerProps> = ({ image, setImage, setStep3 }) => {
  const [racerMessage, setRacerMessage] = useState<string>('');
  const router = useRouter();

  const racerHandler = async (e: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    e.preventDefault();

    // Only to get cryptkeys if the next answer is called here
    const response = await clientFetch<
      DjangoFormResponse<{}, VonSchweetzRacerResponse>
    >(router, `/puzzle/${SLUG}/racer_guess`, {
      method: 'POST',
      body: formData,
    });

    if (response.data?.correct) {
      setStep3(true);
      setRacerMessage('');
      return;
    }

    let number = Number.parseInt(formData.get('text')?.toString() || '', 10);
    if (!Number.isNaN(number) && number >= 1 && number <= 54) {
      setImage(number);
      setRacerMessage('');
    } else {
      setRacerMessage(
        'Please enter an integer from 1 to 54 to find your racer!'
      );
    }
  };

  return (
    <>
      <FlavorText>
        Vanellope always wanted to be a princess, but these princesses always
        wanted to be racers. As they lined up, each racer was counting on a
        speedy resolution. Where did the princesses line up to race?
      </FlavorText>
      <p className={cx(HIDDEN_CLASS)}>
        See puzzle page for interactive component.
      </p>
      <div className={cx(NO_COPY_CLASS)}>
        <InfoIcon>
          There is no penalty for incorrect guesses in this box, though it won't
          check the final puzzle answer.
        </InfoIcon>
        <div className="text-center">
          <form onSubmit={racerHandler}>
            <input type="text" name="text" className="px-0.5"></input>
            <input
              type="submit"
              value="Submit"
              className="mx-4 !bg-neutral-300 !text-black border-none rounded-xl p-2"
            />
          </form>
        </div>
        {racerMessage && (
          <p className="text-red-500 text-center">{racerMessage}</p>
        )}
        {image >= 1 && image <= 54 && (
          <>
            <p className="text-center font-bold mb-0">Racer: {image}</p>
            <SheetableImage
              className="mx-auto max-w-xs"
              src={images[image - 1]}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Racers;
