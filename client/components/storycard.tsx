import parse from 'html-react-parser';
import React, { useState } from 'react';

import LazyLoadImage from 'components/lazy_load_image';
import Link from 'components/link';

export interface Story {
  slug: string;
  text: string;
  imageUrl?: string;
  puzzleUrl?: string;
  audioUrl?: string;
  url?: string;
  act?: number;
  imageAtBottom?: boolean;
}

interface Props extends Story {
  scrollPosition?: number;
  visibleByDefault?: boolean;
  shallow?: boolean;
}

const StoryCard: React.FC<Props> = ({
  slug,
  text,
  imageUrl,
  puzzleUrl,
  audioUrl,
  url,
  visibleByDefault = true,
  shallow = false,
  imageAtBottom = false,
  ...props
}) => {
  const [interactionOpen, setInteractionOpen] = useState(false);

  const storycardImg = imageUrl ? (
    <LazyLoadImage
      className="w-full"
      alt=""
      src={imageUrl}
      visibleByDefault={visibleByDefault}
      copySrc={false}
      {...props}
    />
  ) : null;

  if (audioUrl) {
    console.log(slug);
    console.log(audioUrl);
  }
  const audioAsset = audioUrl ? (
    <audio src={audioUrl} controls className="mx-auto my-4" />
  ) : null;

  return (
    <div className="story">
      <div className="story-anchor" id={slug} />
      {url ? (
        <>
          {!imageAtBottom && (
            <Link href={url} shallow={shallow}>
              {storycardImg}
              {audioAsset}
            </Link>
          )}
          {/* <p className="px-8 py-5">{parse(text)}</p> */}
          {parse(text)}
          {imageAtBottom && (
            <Link href={url} shallow={shallow}>
              {storycardImg}
              {audioAsset}
            </Link>
          )}
        </>
      ) : (
        <>
          {!imageAtBottom && (
            <>
              {storycardImg}
              {audioAsset}
            </>
          )}
          {/* <p className="px-8 py-5">{parse(text)}</p> */}
          {parse(text)}
          {imageAtBottom && (
            <>
              {storycardImg}
              {audioAsset}
            </>
          )}
        </>
      )}

      <style jsx>{`
        .story {
          position: relative;
          margin: 0 auto;
          width: 100%;
        }

        .story-anchor {
          position: absolute;
          top: calc(-48px - 5vh);
        }

        .story :global(img) {
          width: 100%;
        }

        .story :global(.placeholder) {
          background: var(--muted);
        }

        :global(.lazy-load-image-background) {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default StoryCard;
