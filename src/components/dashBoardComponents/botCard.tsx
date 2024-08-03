// botCard.tsx
import React from 'react';
import { Card, Button } from '@tremor/react';

interface BotCardProps {
  activeBots: number;
}

export function BotCard({ activeBots }: BotCardProps) {
  return (
    
    <Card className="mx-auto max-w-xs w-80 h-72 rounded-3xl">
      <p className="text-center text-slate-400">Bot Summary</p>
      <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold mt-4 text-center">Available Bot</p>
      <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold mt-4 mb-4 text-center">{activeBots}</p>
      <div className="flex justify-center">
        <Button variant="primary" color="purple">Add a Bot+</Button>
      </div>
    </Card>
  );
}
