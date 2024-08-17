
import React from 'react';

const Divider: React.FC = () => {
  return (
    <div className="flex flex-col justify-center px-4 mt-12 max-md:mt-10 max-md:max-w-full">
      <div className="shrink-0 h-px border border-solid border-neutral-700 max-md:max-w-full" />
    </div>
  );
};

export default Divider;