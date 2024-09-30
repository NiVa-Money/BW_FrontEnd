import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/configureStore';
import Link from 'next/link';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { useState } from 'react';

const MetricCard: React.FC = () => {
  const userMetricData = useSelector(
    (state: RootState) => state?.root?.userMetric?.data
  );
  const [metricData, setMetricData] = useState(userMetricData);
  const userMetricDataLoader = useSelector(
    (state: RootState) => state?.root?.userMetric?.loader
  );
  const activeBots = userMetricData?.activeBots || 0;
  const totalSatisfaction =
    metricData?.userSatisfaction?.good +
    metricData?.userSatisfaction?.bad +
    metricData?.userSatisfaction?.neutral;
  const goodPercentage =
    totalSatisfaction > 0
      ? (metricData?.userSatisfaction.good / totalSatisfaction) * 100
      : 0;
  const badPercentage =
    totalSatisfaction > 0
      ? (metricData?.userSatisfaction.bad / totalSatisfaction) * 100
      : 0;
  const neutralPercentage =
    totalSatisfaction > 0
      ? (metricData.userSatisfaction.neutral / totalSatisfaction) * 100
      : 0;

  //   let displayEmoji = '😐';
  let displayEmoji = '😐';
  let displayPercentage = 0;

  if (badPercentage > 50) {
    displayEmoji = '😢';
    displayPercentage = badPercentage;
  } else if (goodPercentage > 50) {
    displayEmoji = '😄';
    displayPercentage = goodPercentage;
  } else if (
    goodPercentage === 0 &&
    badPercentage === 0 &&
    neutralPercentage === 0
  ) {
    displayEmoji = '😢';
    displayPercentage = 0;
  } else {
    displayEmoji = '😐';
    displayPercentage = neutralPercentage;
  }
  const aiAnalysisMessages = 154; // Fixed value

  React.useEffect(() => {
    const savedMetrics = localStorage.getItem('metricsData');
    if (savedMetrics) {
      try {
        setMetricData(JSON.parse(savedMetrics));
      } catch (error) {
        console.error('Failed to parse metrics data from local storage', error);
      }
    }
  }, []);

  React.useEffect(() => {
    if (userMetricData && Object?.keys(userMetricData).length > 0) {
      setMetricData(userMetricData);
    }
  }, [userMetricData, userMetricDataLoader]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-[#0B031E] text-white">
      {/* Total Messages */}
      <div className="bg-white bg-opacity-10 rounded-lg p-4">
        <div className="flex items-center text-[#AEB9E1] mb-4">
          <VisibilityIcon className="mr-2" />
          <span>Total Messages</span>
        </div>
        <div className="text-2xl font-bold">
          {metricData?.sessionConsumed}/{metricData?.sessionTotal}
        </div>
      </div>

      {/* AI Analysis */}
      <div className="bg-white bg-opacity-10 rounded-lg p-4">
        <div className="flex items-center text-[#AEB9E1] mb-4">
          <PsychologyIcon className="mr-1" />
          <span className="whitespace-nowrap">AI Analysis(5 messages/use)</span>
        </div>

        <div className="text-2xl font-bold">{aiAnalysisMessages}</div>
      </div>

      {/* Sentiment Meter */}
      <div className="bg-white bg-opacity-10 rounded-lg p-4">
        <div className="flex items-center text-[#AEB9E1] mb-4">
          <SentimentSatisfiedAltIcon className="mr-2" />
          <span>Sentiment Meter</span>
        </div>
        <div className="text-2xl font-bold">
          <span>{displayEmoji}</span>
          <span className="ml-2">{displayPercentage.toFixed(2)}%</span>
        </div>
      </div>

      {/* Active Bots */}
      <div className="bg-white bg-opacity-10 rounded-lg p-4">
        <div className="flex items-center text-[#AEB9E1] mb-4">
          <SmartToyIcon className="mr-2" />
          <span>Active Bots</span>
        </div>
        {/* Wrap activeBots value and Create Bot button in a flex container */}
        <div className="flex items-center">
          <div className="text-2xl font-bold mr-4">{activeBots}</div>
          <Link
            href="/createbot"
            className="bg-[#CB3CFF] text-white py-2 px-4 rounded-lg flex items-center"
          >
            Create Bot
            <AddIcon className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
