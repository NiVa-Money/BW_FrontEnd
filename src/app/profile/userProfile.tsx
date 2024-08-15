'use client';
import { getUserProfileAction } from '@/redux/actions/authActions';
import { RootState } from '@/redux/configureStore';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProfileComponent: React.FC = () => {
  const userEmail = useSelector((state: RootState) => state.root?.userData?.email);
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

  return (
    <div className="flex flex-col p-6 bg-[#0B031E] text-white">
      <h1 className="text-4xl font-bold text-center mb-10">Profile</h1>
      <div className="space-y-5">
        <ProfileField
          label="Name"
          value={`${profileData?.firstName} ${profileData?.lastName}`}
        />
        <ProfileField label="Email" value={`${profileData?.emailId}`} />
        {/* <ProfileField label="Country" value="United states" /> */}
        <ProfileField label="Phone number" value={`${profileData?.mobileNo}`} />
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

export default ProfileComponent;
