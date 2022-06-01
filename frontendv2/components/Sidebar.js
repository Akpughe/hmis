import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbrand from './Navbrand';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GrHomeRounded } from 'react-icons/gr';
import { AiOutlineSetting } from 'react-icons/ai';
import { HiOutlineLogout } from 'react-icons/hi';
import { logout, reset } from '../features/auth/authSlice';

const Sidebar = () => {
  const [selected, setSelected] = useState(false);
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();

  const onSelected = () => {
    setSelected(!selected);
  };

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    router.push('/');
  };

  const mouseIn = () => {
    setHover(true);
  };

  const mouseOut = () => {
    setHover(false);
  };

  const mouseIn2 = () => {
    setHover2(true);
  };

  const mouseOut2 = () => {
    setHover2(false);
  };

  const tooltipStyle = {
    display: hover ? 'block' : 'none',
  };
  const tooltipStyle2 = {
    display: hover2 ? 'block' : 'none',
  };

  return (
    <nav className="bg-[#232123] h-screen shadow-xl w-60 fixed pt-16 ">
      <div className="p-7 h-full">
        <div className="flex flex-col space-y-4">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <Link href="/dashboard">
            <a
              className={
                router.pathname === '/dashboard'
                  ? `text-white transition-all ease-in-out hover:text-white  bg-[#2e2d2e] px-5 py-4 text-sm font-light`
                  : `text-[#5d5d65] hover:text-white  px-5 py-4 text-sm font-light`
              }
              // onClick={onSelected}
            >
              {user?.user?.accountType === 'Administrator'
                ? 'Overview'
                : 'Dashboard'}
            </a>
          </Link>
          <Link href="/appointments">
            <a
              className={
                router.pathname === '/appointments'
                  ? `text-white transition-all ease-in-out hover:text-white  bg-[#2e2d2e] px-5 py-4 text-sm font-light`
                  : `text-[#5d5d65] hover:text-white  px-5 py-4 text-sm font-light`
              }
              // onClick={onSelected}
            >
              {user?.user?.accountType === 'Administrator'
                ? 'Appointments'
                : 'Add new'}
            </a>
          </Link>
          <Link
            href={
              user?.user?.accountType === 'Administrator'
                ? '/patients'
                : user?.user?.accountType === 'Patient'
                ? '/schedule'
                : user?.user?.accountType === 'Doctor'
                ? '/dap'
                : ''
            }
          >
            <a
              c
              className={
                router.pathname === '/patients'
                  ? `text-white transition-all ease-in-out hover:text-white  bg-[#2e2d2e] px-5 py-4 text-sm font-light`
                  : `text-[#5d5d65] hover:text-white  px-5 py-4 text-sm font-light`
              }
            >
              {/* {user?.user?.accountType === 'Administrator' ? 'Schedule' : 'Nurses'} */}
              {user?.user?.accountType === 'Administrator'
                ? 'Patients'
                : user?.user?.accountType === 'Patient'
                ? 'Schedule'
                : user?.user?.accountType === 'Doctor'
                ? 'Appointments'
                : ''}
            </a>
          </Link>
          <Link
            href={
              user?.user?.accountType === 'Administrator'
                ? '/doctors'
                : user?.user?.accountType === 'Patient'
                ? '/profile'
                : user?.user?.accountType === 'Doctor'
                ? '/patients'
                : ''
            }
          >
            <a
              className={
                router.pathname === '/doctors'
                  ? `text-white transition-all ease-in-out hover:text-white  bg-[#2e2d2e] px-5 py-4 text-sm font-light`
                  : `text-[#5d5d65] hover:text-white  px-5 py-4 text-sm font-light`
              }
            >
              {/* {user?.accountType !== 'Administrator' ? 'Profile' : 'Doctor'} */}
              {user?.user?.accountType === 'Administrator'
                ? 'Doctor'
                : user?.user?.accountType === 'Patient'
                ? 'Profile'
                : user?.user?.accountType === 'Doctor'
                ? 'Patient'
                : ''}
            </a>
          </Link>

          <Link
            href={
              user?.user?.accountType === 'Administrator' && 'Doctor'
                ? '/report'
                : user?.accountType === 'Patient'
                ? '/healthr'
                : ''
            }
          >
            <a
              c
              className={
                router.pathname === '/report'
                  ? `text-white transition-all ease-in-out hover:text-white  bg-[#2e2d2e] px-5 py-4 text-sm font-light`
                  : `text-[#5d5d65] hover:text-white  px-5 py-4 text-sm font-light`
              }
            >
              {user?.user?.accountType === 'Administrator' && 'Doctor'
                ? 'Report'
                : user?.accountType === 'Patient'
                ? 'Health Record'
                : ''}
            </a>
          </Link>
          {/* <Link href="/setting">
            <a
              className={
                router.pathname === '/setting'
                  ? `text-white transition-all ease-in-out hover:text-white  bg-[#2e2d2e] px-5 py-4 text-sm font-light`
                  : `text-[#5d5d65] hover:text-white  px-5 py-4 text-sm font-light`
              }
            >
              Settings
            </a>
          </Link> */}
        </div>

        <div className="flex flex-col h-1/2 items-center  justify-end">
          <div className="mb-2">
            <img
              className="h-16 w-16 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div className="text-center">
            <h1 className="font-semibold text-xl text-white">
              {user?.user?.firstname} {user?.user?.lastname}
            </h1>
            <p className="font-light text-sm text-white">{user?.user?.email}</p>
          </div>
          <div className="flex w-full justify-evenly mt-5">
            <Link href="/setting">
              <div
                onMouseOver={() => mouseIn2()}
                onMouseOut={() => mouseOut2()}
                className="relative border hover:border-indigo-600 border-gray-500 rounded-md p-2 cursor-pointer"
              >
                <AiOutlineSetting color="white" size={15} />
                <div>
                  <span
                    style={tooltipStyle2}
                    className="absolute text-xs text-white ml-7 -mt-6 capitalize"
                  >
                    setting
                  </span>
                </div>
              </div>
            </Link>

            <div
              onMouseOver={() => mouseIn()}
              onMouseOut={() => mouseOut()}
              className="relative border hover:border-red-600 border-gray-500 rounded-md p-2 cursor-pointer"
              onClick={onLogout}
            >
              <HiOutlineLogout color="white" size={15} />
              <div>
                <span
                  style={tooltipStyle}
                  className="absolute text-xs text-white ml-7 -mt-6 capitalize"
                >
                  logout
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
