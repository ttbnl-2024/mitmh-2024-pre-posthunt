import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { FC, ForwardedRef, HTMLProps, forwardRef } from 'react';

import { sanitizePath, useRouter } from 'utils/router';

export type LinkProps = NextLinkProps;

export const Link = forwardRef<
  HTMLAnchorElement,
  LinkProps & HTMLProps<HTMLAnchorElement>
>(
  (
    {
      href,
      replace,
      as,
      passHref,
      prefetch,
      scroll,
      shallow,
      locale,
      ...props
    },
    ref
  ) => {
    const router = useRouter();
    const sanitized = sanitizePath(router, href);
    const sanitizedAs = as ? sanitizePath(router, as) : as;
    return (
      <NextLink
        href={sanitized}
        as={sanitizedAs}
        {...{
          replace,
          passHref,
          prefetch,
          scroll,
          shallow,
          locale,
        }}
        legacyBehavior
      >
        <a ref={ref} {...props} />
      </NextLink>
    );
  }
);

export const LinkIfStatic = forwardRef<
  HTMLAnchorElement,
  LinkProps & HTMLProps<HTMLAnchorElement>
>(
  (
    {
      href,
      replace,
      as,
      passHref,
      prefetch,
      scroll,
      shallow,
      locale,
      ...props
    },
    ref
  ) => {
    if (
      process.env.isArchive ||
      process.env.isStatic ||
      process.env.useWorker
    ) {
      // conditional is build time constant, so conditional hook is okay
      const router = useRouter();
      const sanitized = sanitizePath(router, href);
      const sanitizedAs = as ? sanitizePath(router, as) : as;
      // TODO: figure out types for passing the forwardRef into an embedded
      // <Link/> instead of code duplication
      return (
        <NextLink
          href={sanitized}
          as={sanitizedAs}
          {...{
            replace,
            passHref,
            prefetch,
            scroll,
            shallow,
            locale,
          }}
        >
          <a ref={ref} {...props} />
        </NextLink>
      );
    } else {
      return <a ref={ref} href={href} {...props} />;
    }
  }
);

export default Link;
