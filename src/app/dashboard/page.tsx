'use client';
import React, { useEffect, useState } from 'react';

import styles from './dashboard.module.css';
import withAuth from '@/components/withAuth';
// import DashBoard from './DashBoard';
import DashBoardComponent from '@/components/dashBoardComponents/DashBoardComponent';

const Page = () => {
  return (
    <div className={styles.wrapper}>
     <DashBoardComponent />
    </div>
  );
};

export default withAuth(Page);
