import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useRouter } from 'next/router';
import MainLayout from '../components/MainLayout';
import {
  getTotalPatients,
  getPatients,
  reset,
} from '../features/patient/patientSlice';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { user } = useAppSelector((state) => state.auth);
  const {
    patients,
    totalNumberofPatients,
    isLoading,
    isError,
    isSuccess,
    message,
  } = useAppSelector((state) => state.patients);
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (!user) {
      router.push('/');
    }

    dispatch(getTotalPatients());

    return () => {
      dispatch(reset());
    };
  }, [user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <MainLayout>
      <div className="flex w-full">
        <div className="w-full h-80 border mr-4">chart</div>
        <div className="dashgrid_container w-full ">
          <div className="w-full h-full border rounded-md bg-[#b2ff51]  p-5">
            <div>
              <div className="flex justify-between">
                <div>
                  <h3 className="font-light text-lg text-gray-500">
                    Total Patients
                  </h3>
                </div>
                <div>
                  <a className="flex justify-between w-full items-center text-xs bg-white px-2 py-1 rounded font-semibold cursor-pointer">
                    add patient
                  </a>
                </div>
              </div>
              <h1 className="font-bold text-2xl text-black">
                {totalNumberofPatients}
              </h1>
            </div>
          </div>
          <div className="w-full h-full border">two</div>
          <div className="w-full h-full border">three</div>
          <div className="w-full h-full border">four</div>
        </div>
      </div>

      <div className="w-full h-96 mt-10">
        <div className="border h-full ">table</div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
