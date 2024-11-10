"use client";

import React, { Component, ReactNode } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Image1 from '../../gallery/slideShow1.jpg';
import Image2 from '../../gallery/slideShow2.jpg';
import Image3 from '../../gallery/slideShow3.jpg';
import Image4 from '../../gallery/slideShow4.jpg';
import Image5 from '../../gallery/slideShow5.jpg';
import Image6 from '../../gallery/slideShow6.jpg';
import Image7 from '../../gallery/slideShow7.jpg';
import Image8 from '../../gallery/slideShow8.jpg';
import Image from "next/image";

export default class ImagesCarousel extends Component {
    render(): ReactNode {
        let data = [
            { img: Image1, title: 'Student Learning Web3 Basic' },
            { img: Image2, title: 'First Meeting with the President' },
            { img: Image3, title: 'President Launching the PIAIC website' },
            { img: Image4, title: 'President Launching the PIAIC website' },
            { img: Image5, title: 'President Launching the PIAIC website' },
            { img: Image6, title: 'President Launching the PIAIC website' },
            { img: Image7, title: 'President Launching the PIAIC website' },
            { img: Image8, title: 'President Launching the PIAIC website' },
        ];

        const settings = {
            dots: true,
            dotsClass: 'slick-dots line-indicator',
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                    },
                },
            ],
            customPaging: (i: number) => (
                <div className="mt-2 text-xs opacity-0">{i}</div>
            )
        };

        return (
            <div className="mt-10 w-full">
                <Slider {...settings} className="w-full">
                    {data.map((val, index) => (
                        <div key={index} className="px-3 xl-lg:px-1 group mb-2 md:mb-5 relative overflow-hidden cursor-pointer outline-none">
                            <div className="relative bg-slate-900 rounded-lg overflow-hidden">
                                <Image src={val.img} alt={val.title} className="w-full h-[300px] md:h-[600px] object-cover" />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}
