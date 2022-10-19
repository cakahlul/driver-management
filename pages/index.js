import InfoPage from '../components/info-page';
import SideBar from '../components/sidebar';
import TopBar from '../components/topbar';

export default function Home() {
  return (
    <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
      <SideBar></SideBar>
      <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
        <TopBar></TopBar>
        <div className="main-content flex flex-col flex-grow p-16">
          <InfoPage></InfoPage>
        </div>
      </main>
    </div>
  );
}
