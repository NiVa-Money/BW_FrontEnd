import { Card, CategoryBar } from '@tremor/react';
import Image from 'next/image';
interface BarListCardProps {
  firstName: string;
  emailId: string;
}
export const BarListCard: React.FC<BarListCardProps> = ({ firstName, emailId }) => {
  return (
    <Card className="mx-auto max-w-xs h-96 rounded-3xl">
      <p className="text-center text-slate-400">User Stat</p>
      <div className="flex justify-center mt-4">
        <Image 
          src="/images/propic.png" 
          alt="Profile Picture" 
          className="rounded-full" 
          width={96} 
          height={96} 
          objectFit="cover"
        />
      </div>
      <p className="text-left text-slate-400 mt-10">User Name: {firstName}</p>
      <p className="text-left text-slate-400 mt-2">User Id: {emailId}</p>
    </Card>
  );
}

