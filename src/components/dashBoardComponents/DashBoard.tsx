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
import ChartCardTwo from './ChartCardTwo';

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
      <div className="w-full flex justify-center flex-col mt-4 h-auto md:h-[15%] gap-4">
        <MetricCard/>
      </div>
      <div className="w-full justify-center gap-4">
        <ChartCardOne />
        <ChartCardTwo />
      </div>
    </div>
  );
};

export default withAuth(DashBoardComponent);
