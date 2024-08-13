'use client';
import React, { useEffect, useState } from 'react';

import styles from './dashBoard.module.css';
import withAuth from '@/components/withAuth';
import DashBoard from './dashBoard';

const Page = () => {
  return (
    <div className={styles.wrapper}>
      <DashBoard />
    </div>
  );
};

export default withAuth(Page);
