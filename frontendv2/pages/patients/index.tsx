import React, {useState, useEffect } from 'react';
import MainLayout from '../../components/MainLayout';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { CgAddR } from 'react-icons/cg';
import { MdOpenInNew } from 'react-icons/md';
import Link from 'next/link';
import {
  getPatients,
  getTotalPatients,
  reset,
} from '../../features/patient/patientSlice';
import { toast } from 'react-toastify';
import { MdGroupAdd } from 'react-icons/md';
import {IoIosArrowDroprightCircle} from 'react-icons/io';


const Patient = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const {
    patients,
    isError,
    isLoading,
    isSuccess,
    message,
    totalNumberofPatients,
  } = useAppSelector((state) => state.patients);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    // if (!patients) {
    //   router.push('/');
    // }

    // dispatch(getTotalPatients());
    dispatch(getPatients());

    return () => {
      dispatch(reset());
    };
  }, []);

  console.log('patients', patients);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <MainLayout>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center p-4">
          <div className="mr-8">
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5   dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for patient"
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <Link href="/add-patient">
            <div className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-md cursor-pointer">
              <p className="flex items-center text-xs uppercase text-white">
                {' '}
                <MdGroupAdd size={20} color="white" className="mr-1" /> add new
                patient
              </p>
            </div>
          </Link>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase  bg-slate-200 ">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">id</div>
              </th>
              <th scope="col" className="px-6 py-3">
                Patient name
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Created At
              </th>
              <th scope="col" className="px-6 py-3">
                -
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {patients.length > 0
              ? patients.filter(val => {
                if(searchTerm == ""){
                  return val;
                }else if (val.firstname.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return val;
                }
              }).map((patient) => {
                  return (
                    <tr className="bg-white border-b hover:bg-slate-50 cursor-pointer ">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          {patient?.userNumber}
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {patient?.firstname} {patient?.lastname}
                      </th>
                      <td className="px-6 py-4">{patient?.gender}</td>
                      <td className="px-6 py-4">-</td>
                      <td className="px-6 py-4">-</td>
                      <Link href={`/patients/${patient?._id}`}>
                      <td className="px-6 py-4 text-right">
                        <a
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          <IoIosArrowDroprightCircle size={20} color="black"/>
                        </a>
                      </td>
                      </Link>
                    </tr>
                  );
                })
              : 'no patient'}
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
};



export default Patient;
