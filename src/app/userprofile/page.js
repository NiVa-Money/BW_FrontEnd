"use client"
import React, { useEffect, useState } from 'react';
import styles from "../userprofile/userprofile.module.css"
import Image from 'next/image'
import axios from 'axios';
const UserProfile = () => {
  const [metrics, setMetrics] = useState({
    activeBots: 0,
    uniqueClientToday: 0,
    totalClientServed: 0,
    sessionConsumed: 0,
    sessionTotal: 0,
    sessionLeft: 0,
    firstName: '',
    lastName: '',
    emailId: '',
    userId: ''
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = '';//replae with bearer token
        const metricsResponse = await axios.get('http://13.235.189.116:8000/user/metrics/6682c8d3db83a66e4dc21af5', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
          }
        });
        const { activeBots, uniqueClientToday, totalClientServed, sessionConsumed, sessionTotal, sessionLeft } = metricsResponse.data;

        // Fetch user profile data
        const userProfileResponse = await axios.get('http://13.235.189.116:8000/user/getUserProfile?emailId=kalpanathmajhi%40gmail.com', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
          }
        });
        const { firstName, lastName, emailId, userId } = userProfileResponse.data;

        setMetrics({
          activeBots,
          uniqueClientToday,
          totalClientServed,
          sessionConsumed,
          sessionTotal,
          sessionLeft,
          firstName,
          lastName,
          emailId,
          userId
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []); 
  return (
    <div >
       <div className={styles.container}>
        <div className={styles.userprofile}>
          My Profile
        </div>
        <div className={styles.userImage}>
          <Image
            src="/images/profile.png"
            alt="Profile Picture"
            className="rounded-full"
            width={96}
            height={96}
            objectFit="cover"
          />
          <p className="text-left text-slate-400 ml-4">{metrics.firstName} {metrics.lastName}</p>
          <div className={styles.buttonEdit}>
            <button className="ml-auto bg-blue-500 text-white py-2 px-4 rounded">Edit</button>
          </div>
        </div>
        <div className={styles.secHeading}>
        
          <p className={styles.firstPara}>Personal information</p>
          <div className={styles.personalInfo}>
            <div className={styles.infoItem}>First Name</div>
            <span  className={styles.infoItem}>{metrics.firstName}</span>
            <div className={styles.infoItem}>Last Name</div>
            <span  className={styles.infoItem}>{metrics.lastName}</span>
          </div>
          <div className={styles.contactInfo}>
          
            <div className={styles.infoItem}>Email</div>
            <span  className={styles.infoItem}>{metrics.emailId}</span>
            <div className={styles.infoItem}>Phone</div>
            <span  className={styles.infoItem}>{metrics.userId}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
