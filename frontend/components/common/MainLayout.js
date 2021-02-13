import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="w-full flex-grow h-full">
        <Navbar />
        <div className="flex">
          <Sidebar />
          {children}
        </div>
      </div>
    </>
  );
};

export default MainLayout;
