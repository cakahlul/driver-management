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
          <div className="text-xl text-rose-500 mx-4">Search</div>
          <div className="text-xl text-rose-500 mx-4">Add</div>
        </div>
      </div>
    </div>
  );
}
