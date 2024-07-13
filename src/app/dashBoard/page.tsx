"use client"
import React, { useEffect, useState } from 'react';

import styles from "./dashboard.module.css";
import DashBoard from './DashBoard';

const Page = () => {
  

    return (
        <div className={styles.wrapper}>
            <DashBoard />
        </div>
    );
}

export default Page;
