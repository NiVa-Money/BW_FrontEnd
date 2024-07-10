'use client';
import React, { useEffect, useState } from 'react';
import styles from '../userprofile/userprofile.module.css';
import Image from 'next/image';
import axiosInstance from '@/utils/axiosConfig';

const UserProfile = () => {
  interface Metrics {
    activeBots: number;
    uniqueClientToday: number;
    totalClientServed: number;
    sessionConsumed: number;
    sessionTotal: number;
    sessionLeft: number;
    firstName: string;
    lastName: string;
    emailId: string;
    userId: string;
  }

  const [metrics, setMetrics] = useState<Metrics>({
    activeBots: 0,
    uniqueClientToday: 0,
    totalClientServed: 0,
    sessionConsumed: 0,
    sessionTotal: 0,
    sessionLeft: 0,
    firstName: '',
    lastName: '',
    emailId: '',
    userId: '',
  });

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const emailId = localStorage.getItem('emailId');
        if (!token || !userId || !emailId) {
          throw new Error('User is not authenticated');
        }

        const metricsResponse = await axiosInstance.get(
          `/user/metrics/${userId}`
        );
        const {
          activeBots,
          uniqueClientToday,
          totalClientServed,
          sessionConsumed,
          sessionTotal,
          sessionLeft,
        } = metricsResponse.data;

        // Fetch user profile data
        const userProfileResponse = await axiosInstance.get(
          `/user/getUserProfile?emailId=${encodeURIComponent(emailId)}`
        );
        const {
          firstName,
          lastName,
          emailId: fetchedEmailId,
          userId: fetchedUserId,
        } = userProfileResponse.data;

        const metrics: Metrics = {
          activeBots,
          uniqueClientToday,
          totalClientServed,
          sessionConsumed,
          sessionTotal,
          sessionLeft,
          firstName,
          lastName,
          emailId: fetchedEmailId,
          userId: fetchedUserId,
        };

        setMetrics(metrics);

        console.log('Fetched metrics:', {
          activeBots,
          uniqueClientToday,
          totalClientServed,
          sessionConsumed,
          sessionTotal,
          sessionLeft,
        });

        console.log('Fetched user profile:', {
          firstName,
          lastName,
          emailId: fetchedEmailId,
          userId: fetchedUserId,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.userprofile}>My Profile</div>
        <div className={styles.userImage}>
          <Image
            src="/images/profile.png"
            alt="Profile Picture"
            className="rounded-full"
            width={96}
            height={96}
            objectFit="cover"
          />
          <p className="text-left text-slate-400 ml-4">
            {metrics.firstName} {metrics.lastName}
          </p>
          <div className={styles.buttonEdit}>
            <button className="ml-auto bg-blue-500 text-white py-2 px-4 rounded">
              Edit
            </button>
          </div>
        </div>
        <div className={styles.secHeading}>
          <p className={styles.firstPara}>Personal information</p>
          <div className={styles.personalInfo}>
            <div className={styles.infoItem}>First Name</div>
            <span className={styles.infoItem}>{metrics.firstName}</span>
            <div className={styles.infoItem}>Last Name</div>
            <span className={styles.infoItem}>{metrics.lastName}</span>
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>Email</div>
            <span className={styles.infoItem}>{metrics.emailId}</span>
            <div className={styles.infoItem}>Phone</div>
            <span className={styles.infoItem}>{metrics.userId}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
