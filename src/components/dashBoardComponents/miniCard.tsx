import { Card } from '@tremor/react';
import styles from "../dashboardComponents/dashboardComponent.module.css"

interface MiniCardProps {
  uniqueClientToday: number;
  totalClientServed: number;
  sessionConsumed:number;
}

export function MiniCard({ uniqueClientToday, totalClientServed,sessionConsumed }: MiniCardProps) {
  
  return (
    <div className={styles.cardsContainer}>
    <Card className="mx-auto max-w-xs h-48 rounded-3xl">
      <p className="text-center text-slate-400">Session Consumed</p> 
      <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold mt-4 text-center">{sessionConsumed}</p>
    </Card>
    <Card className="mx-auto max-w-xs h-48 rounded-3xl">
      <p className="text-center text-slate-400">Total Client Serverd Today</p>  
      <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold mt-4 text-center">{totalClientServed}</p>
    </Card>
    <Card className="mx-auto max-w-xs h-48 rounded-3xl">
        <p className="text-center text-slate-400">Unique Clients Today</p>
        <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold mt-4 text-center">{uniqueClientToday}</p>
      </Card>
  </div>
  );
}