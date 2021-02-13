import React from 'react';
import Head from 'next/head';
import { MainLayout } from '../components/common';

const patients = () => {
  return (
    <>
      <Head>
        <title>HMIS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <div className="flex flex-col flex-grow pl-80 pt-20 mb-10 bg-gray-100 h-full">
          <div className="mb-8 mt-4 flex">
              
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default patients;
