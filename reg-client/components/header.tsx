import cx from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { useScrollPosition } from 'utils/useScrollPosition';

import imgLogoDark from 'assets/public/planet_logo_dark.png';
import imgLogoLight from 'assets/public/planet_logo_light.png';

interface LinkProps {
  href: string;
  text: string;
}
const HeaderLink: React.FC<LinkProps> = ({ href, text }) => {
  const router = useRouter();
  const isSelected = href === router.pathname;

  return (
    <Link
      href={href}
      className={cx(
        'text-sm sm:text-base hover:underline',
        isSelected ? 'underline' : 'no-underline'
      )}
    >
      {text}
    </Link>
  );
};

const Header = ({ isHomepage }: { isHomepage?: boolean }) => {
  const scrollPosition = useScrollPosition();
  const useTransparentStyle = isHomepage && scrollPosition < 100;
  const headerClassNamePrefix =
    'fixed top-0 h-24 w-full flex items-center z-[100] bg-white transition-colors duration-500';

  return (
    <>
      <header
        className={cx(headerClassNamePrefix, {
          'bg-white text-black drop-shadow-lg': !useTransparentStyle,
          '!bg-transparent text-white': useTransparentStyle,
        })}
      >
        <nav className="flex justify-between w-full lg:w-[90vw] lg:mx-auto px-6 items-center">
          <div className="max-w-[120px] mr-4 transition-opacity">
            <Link href="/" className={cx({ 'no-underline': !isHomepage })}>
              <img
                className="w-24 sm:w-32"
                src={useTransparentStyle ? imgLogoLight : imgLogoDark}
                alt="Meeting of Interplanetary Theorists"
              />
            </Link>
          </div>
          <div>
            <div className="flex space-x-4 lg:space-x-8 text-right">
              <HeaderLink href="/faq" text="Meeting FAQ" />
              <HeaderLink href="/register" text="Register" />
            </div>
          </div>
        </nav>
      </header>
      {/* Since the header is fixed, this allows subsequent elements to appear below the header instead of getting occluded by it */}
      {!isHomepage && <div className="w-full h-24"></div>}
    </>
  );
};

export default Header;
