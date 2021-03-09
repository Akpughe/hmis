import React from 'react';
import Head from 'next/head';
import { MainLayout, AppointmentView } from '../components/common';

const appointments = () => {
  return (
    <>
      <Head>
        <title>HMIS | Appointments</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <div className="flex flex-col flex-grow pl-80 pt-20 mb-10 bg-gray-100 h-full">
          <h1 className="text-3xl font-normal">Appointments</h1>
          <div className="mb-8 mt-4 flex bg-white h-full w-10/12 ">
                <AppointmentView/>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default appointments;
