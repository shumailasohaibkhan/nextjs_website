import React from 'react';

import Image from 'next/image';
import Logo from '../../app/gallery/logo.png'; // import the image directly

const Footer = () => {
  return (
    <div className='bg-blue-500'>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image 
              src={Logo}
              alt="it-mate" 
              width={50} 
              height={100}
              className="w-[50px] rounded-[100px]"
            />
            <span className="ml-3 text-xl">Governer Sindh</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2020 CoderSK —
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
           
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
