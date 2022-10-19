import Link from 'next/link';
import Image from 'next/image';

import shipperLogo from '../public/images/shipper-logo.webp';

export default function SideBar() {
  return (
    <aside className="sidebar w-48 transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in">
      <nav className="w-48 h-full shadow-md bg-white px-1 absolute">
        <ul className="relative ml-4 mt-4">
          <Link href="#">
            <a className="flex">
              <Image
                src={shipperLogo}
                alt="Shipper logo"
                width={28}
                height={28}
              />
              <div className="text-3xl text-rose-500 italic mx-4">Shipper</div>
            </a>
          </Link>
        </ul>
        <ul className="relative mt-16">
          <li className="relative flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
            <Link href="#">Beranda</Link>
          </li>
          <li className="relative flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
            <Link href="#">Driver Management</Link>
          </li>
          <li className="relative flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
            <Link href="#">Pickup</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
