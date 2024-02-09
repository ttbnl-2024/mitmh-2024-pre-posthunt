import { ArrowRightIcon } from '@heroicons/react/outline';
import cx from 'classnames';
import parse from 'html-react-parser';
import React, { useContext } from 'react';
import { trackWindowScroll } from 'react-lazy-load-image-component';

import { serverFetch } from 'utils/fetch';

import HuntInfoContext from 'components/context';
import { HIDDEN_CLASS } from 'components/copy';
import Section from 'components/section';
import StoryCard from 'components/storycard';

import counter from 'assets/oracle/counter.png';
import ie from 'assets/oracle/ie.gif';
import netscape from 'assets/oracle/netscape.gif';
import underConstruction from 'assets/oracle/uc.gif';

export interface Story {
  slug: string;
  text: string;
  title?: string;
  imageUrl?: string;
  puzzleSlug?: string;
}

interface Props {
  story?: Story[];
  oracle?: Story[];
  oracleName: string;
  sectionTitle: string;
  scrollPosition?: number;
}

const StoryPage: React.FC<Props> = ({
  story = [],
  oracle = [],
  oracleName,
  sectionTitle,
  scrollPosition,
}) => {
  const { huntInfo } = useContext(HuntInfoContext);

  return (
    <div
      className="text-white font-[18px] m-2"
      style={{ fontFamily: 'Times New Roman, serif' }}
    >
      <p>
        Welcome, weary traveler. You have sought the Great Oracle of{' '}
        {oracleName}. Here you can inquire about the past, the present, and the
        future.
      </p>
      <p>
        By seeking the past, you can revisit your journey and understand where
        you have come from. By seeking the future, you ask us, the Oracle, to
        bring you guidance (or "hints") on how to proceed.
      </p>
      <p>Please use the navigation to the left to help guide you.</p>
      <div className="max-w-[900px] mx-auto text-center">
        {oracle.map((oracle, i) => parse(oracle.text))}
      </div>
      <hr className="my-4" />
      <h2 className="text-white text-center">{sectionTitle}</h2>
      {/* This is needed to prime the color class for story entries */}
      <p className={cx('text-amber-500', HIDDEN_CLASS)}></p>
      <Section
        title="Story"
        className="text-white"
        style={{ fontFamily: 'Times New Roman, serif', fontSize: '112.5%' }}
      >
        <div className="text-center">
          {story.map((story, i) => (
            <div
              className="w-[200px] inline-block align-top text-center pb-4"
              key={`shade-${i}`}
            >
              <img src={story.imageUrl} className="w-[200px]" />
              <span className="text-white">
                {parse(story.title || '?????')}
              </span>
            </div>
          ))}
        </div>
      </Section>
      {story.length < 18 && <img src={underConstruction} className="mx-auto" />}
      <br />
      <br />
      <br />
      <p className="text-center">
        You are the <img src={counter} className="inline-block h-[30px]" />
        th visitor to come to this site to seek our great wisdom.
        <img src={netscape} className="inline-block h-[30px]" />
        <img src={ie} className="inline-block h-[30px]" />
      </p>
      <style jsx global>{`
        div.heading hr {
          border-color: white;
        }
        div.heading h3 {
          color: white;
        }
      `}</style>
    </div>
  );
};

export default trackWindowScroll(StoryPage);

export const getServerSideProps = async (context) => {
  const props = await serverFetch(context, '/shades');

  return {
    props: {
      bare: true,
      ...props,
    },
  };
};
