import '../styles/globals.css';

import SideBar from '../components/sidebar';
import Layout from '../components/layout';
import TopBar from '../components/topbar';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
