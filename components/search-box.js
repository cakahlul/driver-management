import Image from 'next/image';

import searchIcon from '../public/images/search-icon-red.png';

export default function SearchBox({ placeHolder }) {
  return (
    <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <button className="pt-2 px-1">
          <Image src={searchIcon} alt="search" width={20} height={20} />
        </button>
      </span>
      <input
        type="search"
        name="search"
        className="py-2 text-sm border border-solid border-gray-300 bg-white rounded pl-10 focus:text-gray-700 focus:bg-white focus:border-rose-500 focus:outline-none"
        placeholder={placeHolder}
        autoComplete="off"
      />
    </div>
  );
}
