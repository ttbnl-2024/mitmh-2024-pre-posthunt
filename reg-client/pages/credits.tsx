import Head from 'next/head';

import Section from 'components/section';

const RegImageCredits = () => {
  return (
    <Section narrow>
      <div>
        <Head>
          <title>Image Credits</title>
        </Head>
        <h2>Image Credits</h2>
        <ul>
          <li>Black hole: Event Horizon Telescope</li>
          <li>
            Pillars of Creation: NASA, ESA, CSA, STScI; Joseph DePasquale
            (STScI), Anton M. Koekemoer (STScI), Alyssa Pagan (STScI)
          </li>
          <li>
            Registration collage:{' '}
            <a href="https://science.nasa.gov/resource/solar-system-and-beyond-poster-set/">
              NASA Solar System and Beyond Poster Set
            </a>
          </li>
          <li>
            Galaxy background:{' '}
            <a href="https://science.nasa.gov/resource/solar-system-and-beyond-poster-set/">
              NASA Solar System and Beyond Poster Set
            </a>
          </li>
        </ul>
        <h2>Other Credits</h2>
        <p>
          Registration and hunt site are significantly based on teammate's work
          for MITMH 2023, open-sourced in{' '}
          <a href="https://github.com/teammatehunt/tph-site/tree/main">
            tph-site
          </a>
          .
        </p>
      </div>
    </Section>
  );
};

export default RegImageCredits;
