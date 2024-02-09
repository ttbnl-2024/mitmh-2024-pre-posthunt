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

export interface Story {
  slug: string;
  text: string;
  title?: string;
  imageUrl?: string;
  puzzleSlug?: string;
}

interface Props {
  story?: Story[];
  overworld?: boolean;
  scrollPosition?: number;
}

const StoryPage: React.FC<Props> = ({
  story = [],
  overworld = false,
  scrollPosition,
}) => {
  return (
    <>
      <div
        className="fixed top-[1em] left-0 pl-[1em] text-white w-[225px]"
        style={{ fontFamily: 'Times New Roman, serif', fontSize: '112.5%' }}
      >
        <b>Table of Contents</b>
        <hr />
        {story.map(
          (story, i) =>
            !(
              story.slug.endsWith('-shade') || story.slug.endsWith('-shade-b')
            ) &&
            story.title && (
              <>
                <a href={`#${story.title}`} className="!text-white">
                  {story.title}
                </a>
                <br />
              </>
            )
        )}
      </div>
      <Section
        title="Story"
        className="text-white !pl-[250px] !ml-0 !mr-0 !w-full"
        style={{
          fontFamily: 'Times New Roman, serif',
          fontSize: '112.5%',
          maxWidth: 'unset',
        }}
      >
        {/* This is needed to prime the color class for story entries */}
        <p className={cx('text-amber-500', HIDDEN_CLASS)}></p>
        <h2 className="text-white text-center pt-8 font-bold">
          The Story So Far
        </h2>
        <p className="text-center">
          <i>This page contains no puzzle content.</i>
          <br />
          <br />
        </p>
        {story.map((story, i) => {
          const isShade =
            story.slug.endsWith('-shade') || story.slug.endsWith('-shade-b');
          const rightShade =
            isShade &&
            ((overworld && story.slug.endsWith('-shade')) ||
              (!overworld && story.slug.endsWith('-shade-b')));
          return (
            !story.slug.startsWith('oracle-') && (
              <Section
                className="text-white"
                key={story.slug}
                heading={
                  story.title && !isShade ? parse(story.title) : undefined
                }
              >
                {!isShade && (
                  <StoryCard
                    {...story}
                    scrollPosition={scrollPosition}
                    imageAtBottom={true}
                  />
                )}
                {rightShade && (
                  <>
                    <div
                      className="w-[400px] mx-auto align-top text-center pb-4"
                      key={story.slug}
                    >
                      <img src={story.imageUrl} className="w-[200px] mx-auto" />
                      <span className="text-white">
                        {parse(story.title || '?????')}
                      </span>
                    </div>
                    {parse(story.text)}
                  </>
                )}
              </Section>
            )
          );
        })}
      </Section>

      <style global jsx>{`
        div.heading hr {
          border-color: white;
        }
        div.heading h3 {
          color: white;
        }
        section {
          max-width: 900px;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
};

export default trackWindowScroll(StoryPage);

export const getServerSideProps = async (context) => {
  const props = await serverFetch(context, '/story');

  return {
    props: {
      bare: true,
      ...props,
    },
  };
};
