import React, { useRef, useState } from 'react';
import products from '../data/product';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
export default function MostSearchedProducts() {
    const carouselRef = useRef(null);

    

    const scrollNext = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    const scrollPrev = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="gird grid-flow-col items-center gap-5 py-8 bg-[#F2F2F2]  bg-contain bg-top  bg-no-repeat relative bg-[url('https://res.cloudinary.com/ddp4pcwkv/image/upload/v1732530150/a56a47e2-4781-4061-9dad-ffc9752a6598_ty6dsa.webp')]">
                <div className='lg:container mx-auto mb-20'>
                    <Link to={"/products"} className=' mt-8 float-right text-black mr-4 '>
                        View all
                    </Link>

                </div>
                <div className='lg:container mx-auto'>

                    <div className="flex overflow-x-auto gap-3 justify-start w-full max-w-full mt-4 no-scrollbar "    ref={carouselRef}>
                        {products.map((product, i) => (
                            <ProductCard key={i} product={product} />
                        ))}
                    </div>
                </div>

                <div className="absolute top-[50%] left-0 right-0 hidden   transform w-full -translate-y-1/2 lg:flex justify-between mx-auto ">
                    <div
                         onClick={scrollPrev}
                        className="transition text-black p-1.5 bg-white rounded-full hover:bg-neutral-light cursor-pointer shadow-md w-8 h-8 select-none flex items-center justify-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 720" className="w-[20px]">
                            <path fill="var(--color-dark)" d="M319.4,334.5l212-186.6 c18.6-16.4,16-41.6-5.9-55.4l0,0c-20.5-12.9-50.4-11-67.8,4.4L188.5,334.5c-16.5,14.5-16.5,36.4,0,51l269.2,237.6 c17.5,15.4,47.3,17.4,67.8,4.4l0,0c21.8-13.8,24.5-39,5.9-55.4l-212-186.6C302.9,371,302.9,349,319.4,334.5z"></path>
                        </svg>
                    </div>
                    <div   onClick={scrollNext}className="transition  text-black p-1.5 bg-white rounded-full hover:bg-neutral-light cursor-pointer shadow-md w-8 h-8  lg:block   38px]  select-none 2xl leading-none flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 720 720" enableBackground="new 0 0 720 720" className="w-[20px]"><path fill="var(--color-dark)" d="M400.6,385.5l-212,186.6 c-18.6,16.4-16,41.6,5.9,55.4l0,0c20.5,12.9,50.4,11,67.8-4.4l269.2-237.6c16.5-14.5,16.5-36.4,0-51L262.3,96.9 c-17.5-15.4-47.3-17.4-67.8-4.4l0,0c-21.8,13.8-24.5,39-5.9,55.4l212,186.6C417.1,349,417.1,371,400.6,385.5z"></path></svg></div>
                </div>
            </div>



        </>
    );
};

