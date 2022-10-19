import { useSelector } from 'react-redux';
import Card from './card';

function DriverList({ drivers }) {
  const { isLoading } = useSelector(state => state);

  let loadingInfo;
  if (isLoading) {
    loadingInfo = <div>Please wait. Loading data ...</div>;
  }
  return (
    <div className="my-16">
      <div className="flex flex-wrap">
        <div className="flex flex-row">
          {drivers?.map(driver => {
            return <Card key={driver.login.uuid} data={driver}></Card>;
          })}
        </div>
      </div>
      {loadingInfo}

      <div className="flex flex-row justify-center mt-32">
        <button
          type="button"
          className="inline-block px-6 disabled:text-gray-500 enabled:text-gray-800 font-semibold text-base rounded enabled:hover:bg-black enabled:hover:bg-opacity-5 focus:outline-none focus:ring-0"
        >
          &lt; Previous Page
        </button>
        <button
          type="button"
          className="inline-block px-6 disabled:text-gray-500 enabled:text-gray-800 font-semibold text-base rounded enabled:hover:bg-black enabled:hover:bg-opacity-5 focus:outline-none focus:ring-0"
        >
          Next Page &gt;
        </button>
      </div>
    </div>
  );
}

export default DriverList;
