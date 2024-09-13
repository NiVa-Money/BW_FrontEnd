'use client';
import withAuth from '@/components/withAuth';
import { getUserProfileAction } from '@/redux/actions/authActions';
import { RootState } from '@/redux/configureStore';
import * as React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

const ProfileComponent: React.FC = () => {
  const userEmail = useSelector(
    (state: RootState) => state.root?.userData?.email
  );
  const userDataRedux = useSelector(
    (state: RootState) => state.root?.userProfile?.data
  );
  const pathName = useSelector((state: RootState) => state.root?.pathName);
  const [profileData, setProfileData] = React.useState<any>(userDataRedux);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setProfileData(userDataRedux);
  }, [userDataRedux]);

  React.useEffect(() => {
    if ((userEmail?.length || pathName === '/profile') && !profileData) {
      dispatch(getUserProfileAction(userEmail));
    }
  }, [userEmail, pathName]);

  React.useEffect(() => {
    if (userEmail?.length && !profileData) {
      dispatch(getUserProfileAction(userEmail));
    }
  }, []);

  const handleDeleteProfile = () => {
    if (userEmail) {
      alert(`User Subscription Plan  cancelled`); // This should pop up a dialog box
    } else {
      console.log('No plan found');
    }
  };

  return (
    <div className="flex flex-col w-[90%] p-6 bg-[#0B031E] text-white">
      <div className="flex justify-start gap-[8px] items-center mb-10 mt-[60px]">
        <h1 className="text-4xl font-bold text-center ">Profile</h1>
        <PersonIcon style={{ color: '#476B8E', fontSize: '4rem' }} />
      </div>

      <div className="space-y-5">
        <ProfileField
          label="Name"
          value={`${profileData?.firstName} ${profileData?.lastName}`}
        />
        <ProfileField label="Email" value={`${profileData?.emailId}`} />
        {/* <ProfileField label="Country" value="United states" /> */}
        {/* <ProfileField label="Phone number" value={`${profileData?.mobileNo}`} /> */}
        <ProfileField label="Subscription Plan" value={`BotWot Starter`} />
      </div>

      <div className="mt-10">
        <button
          onClick={handleDeleteProfile}
          className="flex  justify-center  text-xl font-medium text-gray-100 bg-[#3F2181] rounded-[60px]"
        >
          <Link href="/membership" className="flex px-14 py-3 gap-2">
            <span>Cancel Subscription Plan</span>
          </Link>
        </button>
      </div>
    </div>
  );
};

interface ProfileFieldProps {
  label: string;
  value: string;
}

const ProfileField: React.FC<ProfileFieldProps> = ({ label, value }) => {
  return (
    <div className="bg-[#1E1935] rounded-3xl p-6">
      <div className="text-sm text-gray-400">{label}</div>
      <div className="text-2xl mt-2">{value}</div>
    </div>
  );
};

export default withAuth(ProfileComponent);
