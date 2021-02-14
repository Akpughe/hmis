import React, { useState } from 'react';
import Navbrand from './Navbrand';
import Link from 'next/link';

const Sidebar = () => {
  const [selected, setSelected] = useState(false);

  return (
    <nav className="bg-white h-screen shadow-xl w-72 fixed mt-16 ">
      <div className="p-7">
        <div className="flex flex-col space-y-4">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <Link href="/dashboard">
            <a className="text-gray-500 border-l-4 border-blue-600 px-5 py-4 text-sm font-medium">
              Dashboard
            </a>
          </Link>
          <Link href="/appointments">
            <a
              // class="text-gray-500 hover:border-blue-600 border-l-4 px-5 py-4 text-sm font-medium "
              className={
                selected === true
                  ? `text-gray-500 border-l-4 hover:border-blue-600 border-l-4 px-5 py-4 text-sm font-medium`
                  : `text-gray-500 hover:border-blue-600 border-l-4 px-5 py-4 text-sm font-medium`
              }
              onClick={setSelected}
            >
              Appointment
            </a>
          </Link>
          <Link href="/doctors">
            <a className="text-gray-500 hover:border-blue-600 border-l-4 px-5 py-4 text-sm font-medium">
              Doctors
            </a>
          </Link>
          <Link href="/">
            <a className="text-gray-500 hover:border-blue-600 border-l-4 px-5 py-4 text-sm font-medium">
              Nurses
            </a>
          </Link>
          <Link href="/patients">
            <a className="text-gray-500 hover:border-blue-600 border-l-4 px-5 py-4 text-sm font-medium">
              Patients
            </a>
          </Link>
          <Link href="/">
            <a className="text-gray-500 hover:border-blue-600 border-l-4 px-5 py-4 text-sm font-medium">
              Settings
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
