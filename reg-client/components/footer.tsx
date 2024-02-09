import HuntEmail from './hunt_email';
import Link from 'next/link';
import React from 'react';

import imgLogoLight from 'assets/public/planet_logo_light.png';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 muted bg-black">
      <div className="flex px-6 py-8 flex-wrap items-center justify-center">
        <div className="p-3 lg:py-0 lg:px-12 self-center">
          <img
            src={imgLogoLight}
            className="max-w-[200px]"
            alt="Meeting of Interplanetary Theorists"
          />
        </div>
        <div className="p-3 text-center lg:text-left lg:py-0 lg:px-12">
          <span className="block">77 Massachusetts Ave</span>
          <span className="block">Cambridge, MA 02139</span>
          <HuntEmail />
        </div>
        <div className="p-3 lg:py-0 lg:px-12 flex flex-col text-center lg:text-left">
          <div>
            <div>This website is not a puzzle</div>
            <Link href="/register" className="block">
              Register
            </Link>
          </div>
        </div>
      </div>
      <div className="px-6 pb-6 text-center lg:text-right lg:w-[90vw] lg:mx-auto">
        <span>© Mystery Hunt 2024</span>
        <span>&nbsp;&nbsp;</span>
        <Link href="/privacy" className="privacy-link">
          Privacy
        </Link>
        <span>&nbsp;&nbsp;</span>
        <Link href="/credits" className="credits-link">
          Credits
        </Link>
      </div>
      <style jsx>{`
        a.privacy-link {
          color: inherit !important;
          font-size: smaller;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
