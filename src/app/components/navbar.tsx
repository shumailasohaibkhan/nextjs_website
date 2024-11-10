import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoImage from '../../app/gallery/logo.png'
// import { FaCloudDownloadAlt } from 'react-icons/fa';
; // Import the image directly

const Navbar = () => {
  return (
    <div className=' z-50 sticky top-0 bg-blue-500 '>
      <header className="text-white-900 body-font p-2">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-900 mb-2 md:mt-2">
            <Image 
              src={LogoImage} 
              alt="it-mate" 
              width={100} 
              height={100}
              className="w-[50px] rounded-[50px]"
            />
            <span className="ml-3 text-xl">Tution Free Education Program On Latest Technology</span>
          </div>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-blue-600">HOME</Link>
            <Link href="#Applay" className="mr-5 hover:text-blue-600">APPLAY</Link>
            
            <Link href="#Contect" className="mr-5 hover:text-blue-600">CONTACT US</Link>
          </nav>
          <a href="/CV/mycv.pdf">
            {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Download CV
              <FaCloudDownloadAlt className="text-xl ml-2" />
            </button> */}
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

