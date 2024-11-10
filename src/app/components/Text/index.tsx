import React from 'react'
import Image from 'next/image'
import Solo1 from '../../gallery/imageWebsite.jpg'
import Solo2 from '../../gallery/imageWebsite2.jpg'
import Solo3 from '../../gallery/imageWebsite3.jpg'
import Slider from '../Slider'

const Text = () => {
  return (
    <div>
      <h1 className="text-center xl:text-[36px] sm:text-[32px] text-xl sm:leading-[2.5rem] leading-[1.75rem] text-main font-extrabold m-auto md:w-[95%]">
        Certified Cloud Applied Generative AI Engineer (GenAI) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs
      </h1>

      <p className="sm:mt-10 mt-7 xl:text-[1.2rem] text-[1rem] text-white-800 sm:tracking-wider tracking-normal text-justify">
        The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses. This program has been developed for solopreneur businesses. This program has been developed to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.
      </p>

      <div className="grid sm:grid-cols-3 grid-cols-1 gap-5 mt-10 m-3 sm:m-0">
        <Image src={Solo1} alt="solo1" className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full" />
        <Image src={Solo2} alt="solo2" className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full" />
        <Image src={Solo3} alt="solo3" className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full" />
      </div>

      <Slider>
        {/* Slider content goes here */}
        <div>Slide 1 Content</div>
        <div>Slide 2 Content</div>
        <div>Slide 3 Content</div>
      </Slider>
    </div>
  )
}

export default Text
