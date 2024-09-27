import * as React from 'react';
import { SqureCardOne } from '@/components/dashBoardComponents/squreCardOne';
import { SqureCardTwo } from '@/components/dashBoardComponents/squreCardTwo';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/configureStore';
import { useEffect, useState } from 'react';
import styles from './dashboardComponent.module.css';
import Link from 'next/link';
import { fetchMetricsAction } from '@/redux/actions/authActions';
import { getUserProfileAction } from '@/redux/actions/authActions';
import AddIcon from '@mui/icons-material/Add';
import withAuth from '../withAuth';
import CardHeaderOne from './CardHeaderOne';
import { fetchMembershipPlanRequest } from '@/redux/actions/paymentActions';
import MetricCard from './MetricCard';
import ChartCardOne from './ChartCardOne';

const DashBoardComponent: React.FC = () => {
  const userEmail = useSelector((state: RootState) => state.root?.user?.email);
  const userDataRedux = useSelector(
    (state: RootState) => state.root?.userProfile?.data
  );
  const pathName = useSelector((state: RootState) => state.root?.pathName);
  const verifyVal = useSelector((state: RootState) => state.root.userVerify);
  const userId = useSelector(
    (state: RootState) => state.root?.userData?.user_id
  );

  const userMetricData = useSelector(
    (state: RootState) => state?.root?.userMetric?.data
  );

  const [profileData, setProfileData] = React.useState<any>(userDataRedux);

  const dispatch = useDispatch();
  const { planName } = useSelector((state: RootState) => state.payment);

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
  const memoizedCardHeaderOne = React.useMemo(() => {
    return <CardHeaderOne userMetricData={userMetricData} />;
  }, [userMetricData]);

  useEffect(() => {
    // Fetch membership plan on component mount
    dispatch(fetchMembershipPlanRequest());
  }, [dispatch]);

  const formattedPlanName = planName
    ? planName.charAt(0).toUpperCase() + planName.slice(1)
    : '';

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (verifyVal || pathName === '/dashboard') {
      dispatch(fetchMetricsAction(userId));

      interval = setInterval(() => {
        dispatch(fetchMetricsAction(userId));
      }, 5000); // 5000ms = 5 seconds
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [verifyVal, pathName]);

  return (
    <div className="w-full h-full flex flex-col p-4 md:p-8 bg-[#0B031E] text-white">
      <div className="w-full flex flex-col md:flex-row h-auto md:h-[15%] gap-4">
        <MetricCard/>
      </div>
      <div className="w-full flex flex-col md:flex-row h-auto md:h-[45%] gap-4 mt-6">
        <ChartCardOne/>
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
          <div className={`${styles.textSize} gap-[8px] flex text-gray-400`}>
            <div>Name:</div>
            <div> {profileData?.firstName}</div>
          </div>
          <div className={`${styles.textSize} gap-[8px] flex text-gray-400`}>
            <div>User ID: </div>
            <div>{profileData?.emailId}</div>
          </div>
          <div className={`${styles.textSize} gap-[8px] flex text-gray-400`}>
            <div>Membership Plan: </div>
            <div>{formattedPlanName}</div>
          </div>
        </div>
        <div className="bg-[#1E1935] w-full md:w-[70%] rounded-2xl p-4 m-1">
          <div className={`${styles.textSize}`}>Bot Usage</div>
          <SqureCardTwo />
        </div>
      </div>
    </div>
  );
};

export default withAuth(DashBoardComponent);
