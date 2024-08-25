import React from 'react';
import EastIcon from '@mui/icons-material/East';

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className="flex gap-5 justify-between mt-12 w-full text-white leading-[110%] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <h2 className="self-start text-3xl">{title}</h2>
      <div className="flex gap-1.5 justify-center p-2.5 text-base">
        <div className="my-auto">View all tutorials</div>
        <EastIcon
          className="shrink-0 w-6 aspect-square"
          style={{ color: 'white' }}
        />
      </div>
    </div>
  );
};

export default SectionHeader;
