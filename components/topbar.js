import Image from 'next/image';
import Link from 'next/link';

import shipperLogo from '../public/images/shipper-logo.webp';
import photoProfile from '../public/images/user.png';

export default function TopBar() {
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-white">
      <div className="container-fluid w-full flex justify-end px-6">
        <div className="flex items-center relative ">
          <div className="text-base my-4">Hello,</div>
          <Link href="#">
            <a className="flex">
              <div className="text-base text-rose-500 mx-2 my-4">
                Shipper User
              </div>
              <Image
                src={photoProfile}
                alt="Shipper logo"
                width={56}
                height={56}
              />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
