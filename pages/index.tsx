import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useRouter } from 'next/router';
import { login, reset } from '../features/auth/authSlice';
import { toast } from 'react-toastify';
import { Waveform } from '@uiball/loaders';

export interface LoginProps {
  userNumber: string;
  password: string;
}

export default function Home() {
  const [formData, setFormData] = useState<LoginProps>({
    userNumber: '',
    password: '',
  });
  const { userNumber, password } = formData;

  const dispatch = useAppDispatch();
  const router = useRouter();

  const { user, isLoading, isError, isSuccess, message } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      router.push('/dashboard');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, router, dispatch]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <Waveform size={40} lineWeight={3.5} speed={1} color="black" />
      </div>
    );
  }

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      userNumber,
      password,
    };
    dispatch(login(userData));
  };
  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="m-auto max-w-md my-10">
        <div className="flex flex-col  bg-white p-6">
          {/* image */}
          <div className="flex justify-center mt-8">
            <img
              src={`https://avatars.dicebear.com/api/avataaars/${Date.now()}.svg`}
              className="w-20 h-20 rounded full"
              alt=""
            />
          </div>
          <div className="mt-10">
            {/* form here */}
            <form className="" onSubmit={(e) => onSubmit(e)}>
              <div>
                <label
                  className="font-bold text-[#3A4374] text-sm"
                  htmlFor="title"
                >
                  User number
                </label>
                <input
                  name="userNumber"
                  type="text"
                  value={userNumber}
                  onChange={(e) => onChange(e)}
                  required
                  className="userNumber"
                />
              </div>
              <div className="mt-4">
                <label
                  className="font-bold text-[#3A4374] text-sm"
                  htmlFor="title"
                >
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => onChange(e)}
                  placeholder=""
                  className="userPassword"
                />
              </div>
              <div className="mt-8">
                <button
                  className="flex items-center justify-center w-full font-bold text-xs text-white rounded-lg px-8 h-11 bg-[#ad20ea]"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
            {/* end form */}
          </div>
        </div>
      </div>{' '}
    </>
  );
}
