import InfoPage from '../components/info-page';
import DriverList from '../components/driver-list';
import SideBar from '../components/sidebar';
import TopBar from '../components/topbar';
import { fetchAll as fetchAllDriver } from '../lib/driver';

export default function Home({ drivers }) {
  return (
    <div className="flex flex-row min-h-screen text-gray-800">
      <SideBar></SideBar>
      <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
        <TopBar></TopBar>
        <div className="main-content flex flex-col flex-grow p-16">
          <InfoPage></InfoPage>
          <DriverList drivers={drivers}></DriverList>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const drivers = await fetchAllDriver();

  return {
    props: { drivers },
  };
}
