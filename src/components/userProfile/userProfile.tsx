import * as React from "react";

const ProfileComponent: React.FC = () => {
  return (
    <div className="flex flex-col p-6 bg-[#0B031E] text-white">
      <h1 className="text-4xl font-bold text-center mb-10">Profile</h1>
      <div className="space-y-5">
        <ProfileField label="Name" value="manushree verma" />
        <ProfileField label="Email" value="test@gmail.com" />
        <ProfileField label="Country" value="United states" />
        <ProfileField label="Phone number" value="+1 5885187952" />
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