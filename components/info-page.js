import SearchBox from './search-box';

export default function InfoPage() {
  return (
    <div className="block mt-4 relative w-full flex flex-wrap items-center justify-between py-3 bg-white">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6 my-4">
        <div className="container-fluid">
          <div className="text-2xl font-bold text-rose-500">
            Driver Management
          </div>
          <div className="text-sm text-base">
            Data driver yang bekerja dengan anda
          </div>
        </div>
        <div className="flex items-center relative">
          <SearchBox placeHolder="Cari driver"></SearchBox>
          <button
            type="button"
            className="inline-block mx-4 px-6 py-2.5 bg-rose-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-rose-500 focus:bg-rose-500 focus:outline-none focus:ring-0 active:bg-rose-500 "
          >
            Tambah Driver +
          </button>
        </div>
      </div>
    </div>
  );
}
