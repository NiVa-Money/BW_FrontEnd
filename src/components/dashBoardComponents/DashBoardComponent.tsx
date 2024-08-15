import * as React from 'react';
<<<<<<<< HEAD:src/components/dashBoardComponents/DashBoardComponent.tsx
import { SqureCardOne } from '@/components/dashBoardComponents/squreCardOne';
import { SqureCardTwo } from '@/components/dashBoardComponents/squreCardTwo';
import { CardHeader1 } from '@/components/dashBoardComponents/headerCard';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/configureStore';
import { useEffect, useState } from 'react';
import styles from './dashboardComponent.module.css';
// import styles from './DashBoardComponents/dashboard.module.css';
import Link from 'next/link';
import { fetchMetricsAction } from '@/redux/actions/authActions';
import { getUserProfileAction } from '@/redux/actions/authActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import withAuth from '../withAuth';
const DashBoardComponent: React.FC = () => {
========
import { SqureCardOne } from '@/components/dashboardComponents/squreCardOne';
import { SqureCardTwo } from '@/components/dashboardComponents/squreCardTwo';
import { CardHeader1 } from '@/components/dashboardComponents/headerCard';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/configureStore';
import { useEffect, useState } from 'react';
import styles from './dashboard.module.css';
import Link from 'next/link';
import { fetchMetricsAction } from '@/redux/actions/authActions';
import { getUserProfileAction } from '@/redux/actions/authActions';
import withAuth from '@/components/withAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const DashBoard: React.FC = () => {
>>>>>>>> origin/predev:src/app/dashboard/DashBoard.tsx
  const userEmail = useSelector((state: RootState) => state.root?.user?.email);
  const userDataRedux = useSelector(
    (state: RootState) => state.root?.userProfile?.data
  );
<<<<<<<< HEAD:src/components/dashBoardComponents/DashBoardComponent.tsx
========

>>>>>>>> origin/predev:src/app/dashboard/DashBoard.tsx
  const pathName = useSelector((state: RootState) => state.root?.pathName);
  const verifyVal = useSelector((state: RootState) => state.root.userVerify);
  const userId = useSelector(
    (state: RootState) => state.root?.userData?.user_id
  );

  React.useEffect(() => {}, [userId]);

  const userMetricData = useSelector(
    (state: RootState) => state?.root?.userMetric?.data
  );
<<<<<<<< HEAD:src/components/dashBoardComponents/DashBoardComponent.tsx
  const [metricData, setMetricData] = useState(userMetricData);
========

  const [metricData, setMetricData] = useState(userMetricData);
  console.log('metricData', metricData);
>>>>>>>> origin/predev:src/app/dashboard/DashBoard.tsx

  const [profileData, setProfileData] = React.useState<any>(userDataRedux);
  const dispatch = useDispatch();

<<<<<<<< HEAD:src/components/dashBoardComponents/DashBoardComponent.tsx
========
  //user sat
  const totalSatisfaction =
    metricData.userSatisfaction?.good +
    metricData.userSatisfaction?.bad +
    metricData.userSatisfaction?.neutral;
  const goodPercentage =
    totalSatisfaction > 0
      ? (metricData.userSatisfaction.good / totalSatisfaction) * 100
      : 0;
  const badPercentage =
    totalSatisfaction > 0
      ? (metricData.userSatisfaction.bad / totalSatisfaction) * 100
      : 0;
  const neutralPercentage =
    totalSatisfaction > 0
      ? (metricData.userSatisfaction.neutral / totalSatisfaction) * 100
      : 0;

  // Determine what to display
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
  const meterHeight = '90%';
  const emojiPosition =
    (displayPercentage / 100) * parseFloat(meterHeight.replace('%', '')) + '%';

>>>>>>>> origin/predev:src/app/dashboard/DashBoard.tsx
  React.useEffect(() => {}, [userId]);

  React.useEffect(() => {
    setProfileData(userDataRedux);
  }, [userDataRedux]);

  React.useEffect(() => {
    if (userEmail?.length || (pathName === '/profile' && !profileData)) {
      dispatch(getUserProfileAction(userEmail));
    }
  }, [userEmail, pathName]);

  React.useEffect(() => {
    if (userEmail?.length && !profileData) {
      dispatch(getUserProfileAction(userEmail));
    }
  }, []);

  useEffect(() => {
    const savedMetrics = localStorage.getItem('metricsData');
    if (savedMetrics) {
      try {
        setMetricData(JSON.parse(savedMetrics));
      } catch (error) {
        console.error('Failed to parse metrics data from local storage', error);
      }
    }
  }, []);

  useEffect(() => {
    if (verifyVal || pathName === '/dashboard') {
      dispatch(fetchMetricsAction(userId));
    }
  }, [verifyVal]);

  useEffect(() => {
    if (userMetricData && Object?.keys(userMetricData).length > 0) {
      setMetricData(userMetricData);
    }
  }, [userMetricData]);

  return (
    <div className="w-full h-full flex flex-col p-4 md:p-8 bg-[#0B031E] text-white">
      <div className="w-full flex flex-col md:flex-row h-auto md:h-[15%] gap-4">
        <div className="bg-[#8E2DA0] w-full md:w-[23%] rounded-2xl p-4 m-1">
          <div className={styles.textSize}>Message Consumed</div>
          <div className="flex justify-center items-center h-full">
            <div className="text-3xl font-bold">
              {metricData?.sessionConsumed}
            </div>
          </div>
        </div>
        <div className="bg-[#46217C] w-full md:w-[23%] rounded-2xl p-4 m-1">
          <div className={styles.textSize}>Messages Left</div>
          <div className="flex justify-center items-center h-full">
            <div className="text-3xl font-bold">{metricData?.sessionLeft}</div>
          </div>
        </div>
        <div className="bg-[#6E54EF] w-full md:w-[23%] rounded-2xl p-4 m-1">
          <div className={styles.textSize}>Total Messages</div>
          <div className="flex justify-center items-center h-full">
            <div className="text-3xl font-bold">{metricData?.sessionTotal}</div>
          </div>
        </div>
<<<<<<<< HEAD:src/components/dashBoardComponents/DashBoardComponent.tsx
        <div className="bg-[#1E1935] w-full md:w-[31%] rounded-2xl p-2 flex flex-col items-center">
          <div className={styles.textSize}>Total Bots Created</div>
          <div className={`${styles.textSize} font-bold`}>
            {metricData?.activeBots}
          </div>
          <button className="flex w-[80%] h-[45%] justify-center items-center text-xl font-medium text-gray-100 bg-[#3F2181] rounded-[60px] mt-2 md:mt-0">
            <Link href="/createBot" className="flex justify-center items-center px-8 md:px-14 py-3 gap-5">
              <div className={`${styles.textOfCreateBot} flex `}>Create Bot</div>
              <FontAwesomeIcon icon={faPlus} className="w-[7%] h-[7%]" />
========
        <div className="bg-[#1E1935] w-full md:w-[31%] rounded-2xl p-4 m-1 flex flex-col items-center">
          <div className={styles.textSize}>Total Bots Created</div>
          <div className={`${styles.textSize} font-bold mt-1`}>
            {metricData?.activeBots}
          </div>
          <button className="flex justify-center text-xl font-medium text-gray-100 bg-[#3F2181] rounded-[60px] mt-2 md:mt-0">
            <Link href="/createbot" className="flex px-8 md:px-14 py-3 gap-2">
              <span>Create Bot</span>
              <FontAwesomeIcon icon={faPlus} className="w-[25px] h-[25px]" />
>>>>>>>> origin/predev:src/app/dashboard/DashBoard.tsx
            </Link>
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row h-auto md:h-[45%] gap-4 mt-4">
        <div className="bg-[#1E1935] w-full md:w-[40%] rounded-2xl p-4 m-1">
          <div className={`${styles.textSize} mb-4`}>Total no. of Messages</div>
          <div className={`${styles.textSize} relative w-full h-full mx-auto`}>
            <SqureCardOne sessionTotal={20} sessionLeft={11} />
          </div>
        </div>
        <div className="relative bg-[#1E1935] w-full md:w-[40%] rounded-2xl p-4 m-1 opacity-50">
          <SqureCardTwo />
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 rounded-2xl">
            <span className="text-white text-lg">Coming Soon</span>
          </div>
        </div>
<<<<<<<< HEAD:src/components/dashBoardComponents/DashBoardComponent.tsx
        <div className="flex w-full md:w-[20%] h-[40vh] md:h-[98%] flex-col gap-4 m-1">
          <div className="relative bg-[#1E1935] w-full h-full rounded-2xl p-4 flex flex-col items-center opacity-50">
            <div className="h-[89%] w-[10%] bg-gradient-to-t from-red-500 via-yellow-500 to-green-500 rounded-full relative">
              <div className="absolute -right-6 top-0">😄</div>
              <div className="absolute -right-6 bottom-0">😢</div>
            </div>
            <div className={`${styles.textSize} mt-2`}>Satisfaction meter</div>
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 rounded-2xl">
              <span className="text-white text-lg">Coming Soon</span>
            </div>
========

        <div className="flex w-full md:w-[20%] h-[40vh] md:h-[98%] flex-col gap-4 m-1">
          <div className="relative bg-[#1E1935] w-full h-full rounded-2xl p-4 flex flex-col items-center">
            <div className="h-[89%] w-[10%] bg-gradient-to-t from-red-500 via-yellow-500 to-green-500 rounded-full relative">
              <div
                className="absolute w-full flex items-center justify-center"
                style={{ top: `calc(${meterHeight} - ${emojiPosition})` }}
              >
                <div className="flex items-center text-2xl">
                  <span>{displayEmoji}</span>
                  <span className="ml-2">{displayPercentage.toFixed(2)}%</span>
                </div>
              </div>
            </div>
            <div className={`${styles.textSize} mt-2`}>Satisfaction meter</div>
>>>>>>>> origin/predev:src/app/dashboard/DashBoard.tsx
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row h-auto md:h-[40%] gap-4 mt-4">
        <div className="bg-[#1E1935] w-full md:w-[30%] rounded-2xl p-4 m-1">
          <div className="flex items-center mb-4">
            <div className="bg-[#46217C] rounded-full p-2 mr-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className={styles.textSize}>User Profile</div>
          </div>
          <div className={`${styles.textSize} text-gray-400`}>
            Name {profileData?.firstName}
          </div>
          <div className={`${styles.textSize} text-gray-400`}>
            User ID {profileData?.emailId}
          </div>
        </div>
<<<<<<<< HEAD:src/components/dashBoardComponents/DashBoardComponent.tsx
        <div className="relative bg-[#1E1935] w-full md:w-[70%] rounded-2xl p-4 m-1 md:col-span-2 opacity-50">
          <div className={`${styles.textSize} mb-4`}>Resolved/UnResolved</div>
          <CardHeader1 />
          <div className="flex mt-2">
            <div className="flex items-center mr-4">
              <div className="w-3 h-3 bg-[#6E54EF] rounded-full mr-2"></div>
              <span className={styles.textSize}>Resolved</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#8E2DA0] rounded-full mr-2"></div>
              <span className={styles.textSize}>UnResolved</span>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 rounded-2xl">
            <span className="text-white text-lg">Coming Soon</span>
========
        <div className="relative bg-[#1E1935] w-full md:w-[70%] rounded-2xl p-4 m-1 md:col-span-2 ">
          <div className={`${styles.textSize} mt-2`}>Resolved/UnResolved</div>
          <CardHeader1 />
          <div className="flex mt-2">
            <div className="flex items-center mr-4"></div>
            <div className="flex items-center"></div>
>>>>>>>> origin/predev:src/app/dashboard/DashBoard.tsx
          </div>
        </div>
      </div>
    </div>
  );
};

<<<<<<<< HEAD:src/components/dashBoardComponents/DashBoardComponent.tsx
export default withAuth(DashBoardComponent);
========
export default withAuth(DashBoard);
>>>>>>>> origin/predev:src/app/dashboard/DashBoard.tsx
