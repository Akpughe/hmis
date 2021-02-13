import React, { useEffect } from 'react';
import axios from 'axios';
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

function MyApp({ Component, pageProps, isAuthenticated}) {
  const router = useRouter();

  useEffect(() => {
    store.dispatch(loadUser());

    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    if (!isAuthenticated) {
          return router.push('/');
        }
  }, []);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     return router.push('/dashboard');
  //   }
  // });
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
// export default withRedux(makeStore)(MyApp);
