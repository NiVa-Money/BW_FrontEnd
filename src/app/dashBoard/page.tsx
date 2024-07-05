"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CardHeader1 } from '../components/dashBoardComponents/headerCard';
import { BarListCard } from '../components/dashBoardComponents/barListCard';
import { SqureCardOne } from '../components/dashBoardComponents/squreCardOne';
import { SqureCardTwo } from '../components/dashBoardComponents/squreCardTwo';
import { MiniCard } from '../components/dashBoardComponents/miniCard';
import { BotCard } from '../components/dashBoardComponents/botCard';
import styles from "./dashboard.module.css";
const Page = () => {
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
                const token = ''; //add your bearer token
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

                console.log("Fetched metrics:", {
                    activeBots,
                    uniqueClientToday,
                    totalClientServed,
                    sessionConsumed,
                    sessionTotal,
                    sessionLeft
                });

                console.log("Fetched user profile:", {
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
        <div className={styles.wrapper}>
            <div className={styles.containerMain}>
                <CardHeader1 />
                <div className={styles.containerTwo}>
                    <SqureCardOne
                        sessionTotal={metrics.sessionTotal}
                        sessionLeft={metrics.sessionLeft}
                    />
                    <SqureCardTwo />
                </div>
                <MiniCard
                    uniqueClientToday={metrics.uniqueClientToday}
                    totalClientServed={metrics.totalClientServed}
                    sessionConsumed={metrics.sessionConsumed}
                />
            </div>
            <div className="flex flex-wrap justify-between gap-6">
                <BarListCard
                    firstName={metrics.firstName}
                    emailId={metrics.emailId}
                />
                <BotCard activeBots={metrics.activeBots} />
            </div>
        </div>
    );
}
export default Page;
