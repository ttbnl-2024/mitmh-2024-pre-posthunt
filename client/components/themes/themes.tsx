import crypto from 'crypto';
import localFont from 'next/font/local';
import React from 'react';

import underworldBg from 'assets/underworld/bg.png';

const cascadiaCode = localFont({
  src: '../../assets/public/fonts/CascadiaCode.woff2',
});
const frutiger = localFont({
  src: '../../assets/public/fonts/FrutigerLTStd-Roman.woff2',
});

const Theme1 = () => (
  <style global jsx>{`
    :root {
      --primary: #a40000;
    }

    #__next {
      background-repeat: repeat;
    }
  `}</style>
);

const Underworld = () => (
  <style global jsx>{`
    :root {
      --primary: rgb(129, 97, 51);
      background-color: #51392c;
    }
    #__next {
      background-image: url(${underworldBg});
      background-size: 626px 339px;
      background-repeat: repeat;
    }
  `}</style>
);

const ThroneRoom = () => (
  <style global jsx>{`
    :root {
      --primary: #503b8b;
      background-color: #33312d;
    }
  `}</style>
);

const Judges = () => (
  <style global jsx>{`
    :root {
      --primary: rgb(137, 47, 42);
      background-color: #3d1513;
    }
  `}</style>
);

const Rivers = () => (
  <style global jsx>{`
    :root {
      --primary: rgb(75, 125, 153);
      background-color: rgb(89, 58, 35);
    }
  `}</style>
);

const Hera = () => (
  <style global jsx>{`
    :root {
      --primary: rgb(34, 8, 58);
      background-image: linear-gradient(
        180deg,
        rgb(237, 217, 194) 0%,
        rgb(206, 174, 135) 10%,
        rgb(136, 105, 65) 20%,
        rgb(75, 50, 21) 35%,
        rgb(53, 35, 14) 50%,
        rgb(39, 25, 8) 65%,
        rgb(21, 13, 4) 83%,
        rgb(19, 12, 4) 100%
      );
    }
  `}</style>
);

const Newport = () => (
  <style global jsx>{`
    :root {
      --primary: rgb(219 39 119);
      background-color: #cfcfcf;
    }
  `}</style>
);

const MinneapolisStPaul = () => (
  <style global jsx>
    {`
      :root {
        --primary: rgb(23, 78, 128);
        --navbar: #aaa;
        background-color: #000000;
      }
    `}
  </style>
);

const Yellowstone = () => (
  <style global jsx>
    {`
      :root {
        --primary: rgb(81, 132, 115);
        background-color: rgb(232, 238, 231);
      }
      body {
        --serif-font: ${frutiger.style.fontFamily} !important;
        --sc-font: ${frutiger.style.fontFamily} !important;
        --title-font: ${frutiger.style.fontFamily} !important;
      }
    `}
  </style>
);

const Mississippi = () => (
  <style global jsx>{`
    :root {
      --primary: rgb(85, 85, 85);
      --navbar: #d0d0d0;
      background-color: rgb(240, 240, 240);
    }
  `}</style>
);

const Texas = () => (
  <style global jsx>{`
    :root {
      --primary: rgb(192, 62, 45);
      background-color: rgb(255, 211, 123);
    }
  `}</style>
);

const Sedona = () => (
  <style global jsx>{`
    :root {
      --primary: rgb(237, 109, 58);
      background-color: rgb(177, 128, 215);
    }
  `}</style>
);

const Oahu = () => (
  <style global jsx>{`
    :root {
      --primary: rgb(26, 109, 255);
      background-color: rgb(201, 218, 255);
    }
  `}</style>
);

const Nyc = () => (
  <style global jsx>{`
    :root {
      --primary: rgb(137, 19, 19);
      background-color: rgb(224, 214, 203);
    }
  `}</style>
);
const Vegas = () => (
  <style global jsx>{`
    :root {
      --primary: rgb(0, 0, 0);
    }
  `}</style>
);

const Nashville = () => (
  <style global jsx>{`
    :root {
      --primary: rgb(154, 129, 107);
      background-color: rgb(255, 251, 232);
    }
  `}</style>
);

const Everglades = () => (
  <style global jsx>{`
    :root {
      background-color: rgb(188, 253, 215);
    }
    body {
      --serif-font: ${cascadiaCode.style.fontFamily} !important;
      --sc-font: ${cascadiaCode.style.fontFamily} !important;
      --title-font: ${cascadiaCode.style.fontFamily} !important;
      --mono-font: ${cascadiaCode.style.fontFamily} !important;
    }
  `}</style>
);

const Olympic = () => (
  <style global jsx>{`
    :root {
      background-color: #232038;
      --primary: rgb(177, 136, 65);
      --navbar: #232038;
    }
  `}</style>
);

const Hell = () => (
  <style global jsx>{`
    :root {
      background-color: rgb(232, 234, 253);
      --primary: rgb(31, 31, 42);
    }
  `}</style>
);

const RoadTripRedux = () => (
  <style global jsx>{`
    :root {
      --primary: rgb(8, 9, 13);
      background-color: rgb(27, 30, 38);
    }
  `}</style>
);

const RoundTheme = ({ roundSlug }) => {
  const md5 = crypto
    .createHash('md5')
    .update(roundSlug || '')
    .digest('hex');
  if (md5 == '8b8c654f3e5bf879a592cf7495010a21') {
    return <ThroneRoom />;
  }
  if (md5 == '4250be53520e6159733996891a2405a1') {
    return <Judges />;
  }
  if (md5 == 'e3f74981004c17d33ac3bebf86646677') {
    return <Rivers />;
  }
  if (md5 == 'c511f0bb29ea56fadd0c7ef253b2f5aa') {
    return <Hera />;
  }

  if (md5 == '10e2cdea99e126fb49202efea3ddba69') {
    return <MinneapolisStPaul />;
  }

  if (md5 == '6840fd588770005e530e52aa4beedad5') {
    return <Newport />;
  }

  if (md5 == '10238155cdb0966881746eabe657eb34') {
    return <Yellowstone />;
  }

  if (md5 == '0757b23ea244b6ebb2296d8e59fde336') {
    return <Mississippi />;
  }

  if (md5 == '3e194b5730ed8b868224b80ac8d7eed9') {
    return <Texas />;
  }

  if (md5 == '9f44424ec854e9f89465f467dbf8c0cd') {
    return <Sedona />;
  }

  if (md5 == 'acb93e794c8a5a040531f57327629cc5') {
    return <Oahu />;
  }

  if (md5 == 'c9417a7325cb10e8260e3582392e3846') {
    return <Nyc />;
  }

  if (md5 == 'd98742ed4ea8e3ad1220990da223dd10') {
    return <Vegas />;
  }

  if (md5 == '77678d76fc55e22e04560769cba80fc6') {
    return <Everglades />;
  }
  if (md5 == '67a4834671478a9e7b37330951db5932') {
    return <Nashville />;
  }
  if (md5 == '133564794a1bfbfad19be33f1b1e341c') {
    return <Olympic />;
  }
  if (md5 == '4229d691b07b13341da53f17ab9f2416') {
    return <Hell />;
  }
  if (md5 == '9661c412d9382e36d5fc23e28f6de716') {
    return <RoadTripRedux />;
  }

  return <Underworld />;
};

export default RoundTheme;
