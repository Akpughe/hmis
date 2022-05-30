import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { logout, reset } from '../features/auth/authSlice';
const Dashboard = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user, router]);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    router.push('/');
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <a className="text-red-500 cursor-pointer underline" onClick={onLogout}>
        Log out
      </a>
    </div>
  );
};

export default Dashboard;
