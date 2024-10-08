import React, { ReactNode, useEffect, useRef } from 'react';
import './style.scss';

interface BackgroundAnimationProps {
  children: ReactNode;
  className?: string;
}

const BackgroundAnimation: React.FC<BackgroundAnimationProps> = ({
  children,
  className,
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interactive = interactiveRef.current;
    if (!interactive) return;

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      if (interactive) {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interactive.style.transform = `translate(${Math.round(
          curX
        )}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(move);
      }
    }

    window.addEventListener('mousemove', (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    });

    move();

    return () => {
      window.removeEventListener('mousemove', () => {});
    };
  }, []);

  return (
    <div className='relative w-screen h-screen'>
      <div className={`gradient-bg  w-screen overflow-hidden absolute top-0 left-0 h-screen  z-0`}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div ref={interactiveRef} className="interactive"></div>
        </div>
      </div>
      <div className={` relative overflow-hidden h-full  ${className}`}>{children}</div>
    </div>
  );
};

export default BackgroundAnimation;
