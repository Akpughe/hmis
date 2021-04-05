import React, { useEffect } from 'react';
import axios from 'axios';
import Head from 'next/head'
import Router from 'next/router';
import NProgress from 'nprogress';
import 'antd/dist/antd.css';
import '../styles/globals.css';
import '../styles/tailwind.css';
// redux
import { withRedux, createWrapper } from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import { withRouter, useRouter } from 'next/router';
import store from '../store';
import setAuthToken from '../utils/setAuthToken';
import { loadUser } from '../actions/auth';

axios.defaults.baseURL = 'http://localhost:4000';

const showProgressBar = (delay) => {
  const timer = setTimeout(() => NProgress.start(), delay);
  Router.events.on('routeChangeComplete', () => stopProgress(timer));
  Router.events.on('routeChangeError', () => stopProgress(timer));
};

const stopProgress = (timer) => {
  clearTimeout(timer);
  NProgress.done();
};

Router.events.on('routeChangeStart', () => showProgressBar(500));

function MyApp({ Component, pageProps, isAuthenticated }) {
  const router = useRouter();

  useEffect(() => {
    store.dispatch(loadUser());

    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
  }, []);

  return (
    <Provider store={store}>
      <Head>
      <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
        <link rel="stylesheet" type="text/css" href="/css/nprogress.css" />
        <title>Health Pro</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
