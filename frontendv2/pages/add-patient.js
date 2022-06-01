import React from 'react';
import MainLayout from '../components/MainLayout';
import Router, { useRouter } from 'next/router';
import AddPatientForm from '../components/AddPatientForm';

const AddPatient = () => {
  const router = useRouter();
  return (
    <MainLayout>
      <div>
        <a
          onClick={() => router.back()}
          className="font-light text-base text-blue-600 cursor-pointer"
        >
          {' '}
          Go Back
        </a>
      </div>

      <div className="py-5 pb-10">
        <h1 className="text-3xl font-semibold tracking-wide">Add a Patient</h1>
      </div>

      <AddPatientForm />
    </MainLayout>
  );
};

export default AddPatient;
