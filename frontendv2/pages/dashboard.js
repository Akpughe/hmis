import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { logout, reset } from '../features/auth/authSlice';
import MainLayout from '../components/MainLayout';

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
    <MainLayout>
      <div className="">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        {/* <h3>Welcome {user?.user.firstname}</h3> */}
      </div>
    </MainLayout>
  );
};

export default Dashboard;
