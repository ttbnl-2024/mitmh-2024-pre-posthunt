import cx from 'classnames';
import React, {
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';

import useScreenSize from 'utils/useScreenSize';

interface Props {
  className?: string;
  maxWidth?: number;
  autoresize?: boolean;
  fitScreen?: boolean;
  aspectRatio?: number;
  maxHeightFraction?: number;
  center?: boolean;
  children?:
    | ReactNode
    | ((
        width: number,
        height: number,
        ref: RefObject<HTMLDivElement>
      ) => ReactNode);
}

const AutoResizer: React.FC<Props> = ({
  className,
  maxWidth = 10000, // Set to some absurd value by default
  autoresize = true,
  fitScreen = true,
  aspectRatio = 1,
  center = false,
  maxHeightFraction = 1,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { width: screenW, height: screenH } = useScreenSize();
  const [width, setWidth] = useState(screenW);
  const [height, setHeight] = useState(screenH);
  const scale = Math.min(1, Math.max(width / screenW, height / screenH));

  useEffect(() => {
    const onResize = () => {
      if (ref.current) {
        const refWidth = ref.current.offsetWidth;
        const refHeight = ref.current.offsetHeight;
        let newWidth = Math.min(maxWidth, refWidth);
        let newHeight = Math.min(maxWidth * (refHeight / refWidth), refHeight);
        if (fitScreen) {
          newWidth = Math.min(
            screenH * aspectRatio * maxHeightFraction,
            newWidth
          );
          newHeight = Math.min(screenH * maxHeightFraction, newHeight);
        }
        setWidth(newWidth);
        setHeight(newHeight);
      }
    };

    if (autoresize) {
      let resizeObs: ResizeObserver | null = null;
      if (window.ResizeObserver && ref.current) {
        resizeObs = new ResizeObserver(onResize);
        resizeObs.observe(ref.current);
      }
      // Always run onResize after a bit of delay after full load.
      setTimeout(onResize, 100);
      window.addEventListener('resize', onResize);
      return () => {
        window.removeEventListener('resize', onResize);
        if (resizeObs && ref.current) {
          resizeObs.unobserve(ref.current);
        }
      };
    }
  }, []);

  return (
    <div className="w-full relative" ref={ref}>
      <div
        className={cx('canvas w-full relative', className, {
          'flex justify-center': center,
        })}
      >
        {typeof children === 'function'
          ? children(width, height, ref)
          : children}
      </div>

      <style jsx>{`
        .canvas {
          top: 0;
          left: 0;
          transform: scale(${scale});
          transform-origin: center;
        }
      `}</style>
    </div>
  );
};

export default AutoResizer;
