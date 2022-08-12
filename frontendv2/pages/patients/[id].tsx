import React, { useState, useEffect } from 'react';
import MainLayout from '../../components/MainLayout';
import axios from 'axios';
import { FiEdit2 } from 'react-icons/fi';
import moment from 'moment-timezone';
import { GetServerSideProps } from 'next';
import { IPatient } from '../../types';

const EachPatient = ({
  patient,
}: {
  patient: {
    firstname: string;
    lastname: string;
    dateOfBirth: string;
    gender: string;
    address: string;
  };
}) => {
  console.log(patient);

  const dob = patient.dateOfBirth;
  // get current age
  const age = moment().diff(dob, 'years');
  return (
    <MainLayout>
      <div className="bg-white rounded-tl rounded-tr shadow w-full h-[250px] p-8">
        <div className="flex">
          <div className="flex border-r pr-10">
            <div className="mr-4">
              <img
                className="h-20 w-20"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="picture"
              />
            </div>
            <div>
              <div>
                <h3 className="font-semibold text-xl">
                  {patient?.firstname} {patient?.lastname}
                </h3>
              </div>
              <div className="flex mt-2">
                {/* age */}
                <div className="flex flex-col mr-3">
                  <p className="uppercase font-semibold text-xs">age</p>
                  <p className="text-xs">{age}</p>
                </div>
                {/* gender */}
                <div className="flex flex-col mr-3">
                  <p className="uppercase font-semibold text-xs">gender</p>
                  <p className="text-xs">{patient?.gender}</p>
                </div>
                {/* address */}
                <div className="flex flex-col mr-3">
                  <p className="uppercase font-semibold text-xs">address</p>
                  <p className="text-xs">{patient?.address}</p>
                </div>
              </div>
              <div className="flex mt-4">
                {/* appoinment */}
                <div className="flex flex-col mr-3">
                  <p className="uppercase font-semibold text-xs">
                    Scheduled Appt
                  </p>
                  <p className="text-xs">14 Sept 2022 13:00</p>
                </div>
                {/* appoinment */}
                <div className="flex flex-col mr-3">
                  <p className="uppercase font-semibold text-xs">
                    Special note
                  </p>
                  <p className="text-xs">No note</p>
                </div>
              </div>
              <div className="flex mt-4">
                {/* appoinment */}
                <div className="flex flex-col mr-3">
                  <p className="uppercase font-semibold text-xs">room</p>
                  <p className="text-xs">-</p>
                </div>
                {/* appoinment */}
                <div className="flex flex-col mr-3">
                  <p className="uppercase font-semibold text-xs">stay</p>
                  <p className="text-xs">-</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col px-4">
            <div className="flex">
              {/* diagnosis */}
              <div className="mr-16">
                <p className="uppercase font-semibold text-xs">diagnosis</p>
                <p className="text-xs">Lorem ipsum dolor sit amet</p>
              </div>
              {/* special needs */}
              <div>
                <p className="uppercase font-semibold text-xs">special needs</p>
                <p className="text-xs">None</p>
              </div>
            </div>
            <div>
              {/* note */}
              <div className="mr-16 mt-16">
                <p className="uppercase font-semibold text-xs">notes</p>
                <p className="text-xs max-w-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  libero hic magni tempore illo repudiandae quia alias atque
                  perferendis molestias.
                </p>
              </div>
            </div>
          </div>
          <div>
            <a className="flex items-center bg-[#e6f3fa] text-[#00a1fc] text-xs px-4 py-1 rounded-xl cursor-pointer">
              <FiEdit2 className="mr-1" />
              Edit
            </a>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-br rounded-bl shadow w-full px-8 h-16 border-t">
        <ul className="flex justify-between items-center h-full">
          <li className="cursor-pointer">
            <a>Logs</a>
          </li>
          <li className="cursor-pointer">
            <a>Messages</a>
          </li>
          <li className="cursor-pointer">
            <a>Notes</a>
          </li>
          <li className="cursor-pointer">
            <a>Schedule</a>
          </li>
          <li className="cursor-pointer">
            <a>Documents</a>
          </li>
          <li className="cursor-pointer">
            <a>Resources</a>
          </li>
        </ul>
      </div>
      <div className="py-4">hello world</div>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  let patient;
  // get pro on build
  const { data } = await axios.get(
    `http://localhost:4000/api/patient/${params.id}`
  );
  patient = data;

  // console.log(patient);
  // Pass post data to the page via props
  return { props: { patient } };
};

export default EachPatient;
