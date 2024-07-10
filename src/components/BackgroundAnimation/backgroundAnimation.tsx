import React from 'react';
import './BackgroundAnimation.css';

export const BackgroundAnimation = () => {
  return (
    <>
      <div className="absolute inset-0 -z-10 ">
        <svg className="moving-svg" viewBox="0 0 1480 1774" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="1440" height="1287" transform="translate(20 20)" fill="#0B031E" />
          <g filter="url(#filter0_f_180_721)">
            <circle className="moving-circle" cx="686" cy="1022" r="252" fill="#C00DC8" />
          </g>
          <g filter="url(#filter1_f_180_721)">
            <circle className="moving-circle" cx="1285" cy="272" r="252" fill="#C00DC8" />
          </g>
          <defs>
            <filter id="filter0_f_180_721" x="-66" y="270" width="1504" height="1504" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_180_721" />
            </filter>
            <filter id="filter1_f_180_721" x="533" y="-480" width="1504" height="1504" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_180_721" />
            </filter>
          </defs>
        </svg>
      </div>
    </>
  );
}
