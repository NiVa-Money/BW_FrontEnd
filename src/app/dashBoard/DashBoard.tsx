import * as React from 'react';
import { SqureCardOne } from '@/components/dashBoardComponents/squreCardOne';
import { SqureCardTwo } from '@/components/dashBoardComponents/squreCardTwo';
import { CardHeader1 } from '@/components/dashBoardComponents/headerCard';
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from '@/redux/configureStore';
import  { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchMetricsAction } from '@/redux/actions/authActions';
import { getUserProfileAction } from '@/redux/actions/authActions';
import withAuth from '@/components/withAuth';



const DashBoard: React.FC = () => {
  const pathName = useSelector((state: RootState) => state.root?.pathName);
  const dispatch = useDispatch();
  const verifyVal = useSelector((state: RootState) => state.root.userVerify);
  const userId = useSelector((state: RootState) => state.root?.userData?.user_id);

  const userMetricData = useSelector(
    (state: RootState) => state?.root?.userMetric?.data
  );
  const userEmail = useSelector((state: RootState) => state.root?.user?.email);
  const userDataRedux = useSelector(
    (state: RootState) => state.root?.userProfile?.data
  );
  const [profileData, setProfileData] = React.useState<any>(userDataRedux);


  React.useEffect(() => {
    setProfileData(userDataRedux);
  }, [userDataRedux]);

  React.useEffect(() => {
    if (userEmail?.length || pathName === '/profile') {
      dispatch(getUserProfileAction(userEmail));
    }
  }, [userEmail, pathName]);
  React.useEffect(() => {
    if (userEmail?.length) {
      dispatch(getUserProfileAction(userEmail));
    }
  }, []);


  const [metricData, setMetricData] = useState(userMetricData);
  
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
    if (verifyVal || pathName==="/dashBoard") {
      dispatch(fetchMetricsAction(userId));
    }
  }, [verifyVal]);
    

useEffect(() => {
  if(userMetricData && Object?.keys(userMetricData).length>0  ){
  setMetricData(userMetricData)
  }
}, [userMetricData])
console.log("dasfaesc",metricData)
  return (
    <div className="flex flex-col p-8 bg-[#0B031E] text-white">
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-[#8E2DA0] rounded-2xl p-4">
          <div className="text-sm">Sessions Consumed</div>
          <div className="text-3xl font-bold">{metricData?.sessionConsumed}</div>
        </div>
        <div className="bg-[#46217C] rounded-2xl p-4">
          <div className="text-sm">Sessions Left</div>
          <div className="text-3xl font-bold">{metricData?.sessionLeft}</div>
        </div>
        <div className="bg-[#6E54EF] rounded-2xl p-4">
          <div className="text-sm">Total Sessions</div>
          <div className="text-3xl font-bold">{metricData?.sessionTotal}</div>
        </div>
        <div className="bg-[#1E1935] rounded-2xl p-4 flex flex-col items-center">
          <div className="text-lg">Active Bots</div>
          <div className="text-3xl font-bold">{metricData?.activeBots}</div>

          <button className="mt-4 bg-[#46217C] text-white px-6 py-2 rounded-full flex items-center">
            <Link href={`/createBot`}>
              <span>Create Bot</span>
            </Link>
            <span className="ml-2 text-xl">+</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-[#1E1935] rounded-2xl p-4">
          <div className="text-lg mb-4">Session Usage</div>
          <div className="relative h-48 w-48 mx-auto">
            {/* Add your circular progress component here */}
            <div>
            <SqureCardOne sessionTotal={metricData?.sessionTotal} sessionLeft={metricData?.sessionLeft} />
            </div>
          </div>
        </div>
        <div className="bg-[#1E1935] rounded-2xl p-4">
          {/* Add your bar chart component here */}
          <div>
            <SqureCardTwo />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="bg-[#1E1935] rounded-2xl p-4 flex flex-col items-center">
            <div className="h-48 w-6 bg-gradient-to-t from-red-500 via-yellow-500 to-green-500 rounded-full relative">
              <div className="absolute -right-6 top-0">😄</div>
              <div className="absolute -right-6 bottom-0">😢</div>
            </div>
            <div className="mt-2 text-sm">Satisfaction meter</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-[#1E1935] rounded-2xl p-4">
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
            <div className="text-lg">User Profile</div>
          </div>
          <div className="text-sm text-gray-400">Name {profileData?.firstName}</div>
          {/* <div className="mb-2">Manushree Verma</div> */}
          <div className="text-sm text-gray-400">User ID {profileData?.emailId}</div>
          {/* <div>Manushree1234@gmail.com</div> */}
        </div>
        <div className="bg-[#1E1935] rounded-2xl p-4 col-span-2">
          <div className="text-lg mb-4">Use/Available</div>
          <div>
            <CardHeader1 />
          </div>
          <div className="flex mt-2">
            <div className="flex items-center mr-4">
              <div className="w-3 h-3 bg-[#6E54EF] rounded-full mr-2"></div>
              <span>Use</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#8E2DA0] rounded-full mr-2"></div>
              <span>Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(DashBoard);
