import { Provider } from 'react-redux';

import '../styles/globals.css';
import Layout from '../components/layout';
import { store } from '../app/store';

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-100">
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </div>
  );
}

export default MyApp;
