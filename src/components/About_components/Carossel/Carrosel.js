import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";



export default function Carrosel() {
    return (
        <div className="flex justify-center">
                <CarouselProvider className="relative hidden lg:block" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={3} visibleSlides={1} step={1} infinite={true} currentSlide={1}>
                    <div className="js-flickity flex justify-center items-center">
                        <ButtonBack role="button" aria-label="slide backward" className="w-12 h-12  rounded-full flex justify-center items-center bg-white  opacity-20 hover:opacity-100 absolute z-30 left-0 ml-8" id="prev">
                            <AiOutlineArrowLeft />
                        </ButtonBack>
                        <Slider className="carousel__sliderLarge">
                            <Slide index={0}>
                                <div className="gallery-cell w-full h-full">
                                    <div className="relative w-full h-full ">
                                        <img src="https://i.ibb.co/VSsN4Jt/carousel-2.png" alt="sitting area" className="object-center object-cover w-full h-full" />
                                        <div className="pl-8 pb-8 absolute left-0 bottom-0">
                                            <h1 className="titulo2 text-2xl leading-normal font-medium text-white">Lounge Interior</h1>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={1}>
                                <div className="gallery-cell w-full h-full">
                                    <div className="relative w-full h-full ">
                                        <img src="https://i.ibb.co/phw8yGZ/sven-brandsma-Qz6-Zx4-Rjd-D8-unsplash-1.png" alt="chairs" className="object-center object-cover w-full h-full" />
                                        <div className="pl-8 pb-8 absolute left-0 bottom-0">
                                            <h1 className="titulo2 text-2xl leading-normal font-medium text-white">Lounge Interior</h1>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={2}>
                                <div className="gallery-cell w-full h-full">
                                    <div className="relative w-full h-full">
                                        <img src="https://i.ibb.co/92ZYJyK/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1.png" alt="chair" className="object-center object-cover w-full h-full" />
                                        <div className="pl-8 pb-8 absolute left-0 bottom-0">
                                            <h1 className="titulo2 text-2xl leading-normal font-medium text-white">Lounge Interior</h1>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                        </Slider>
                        <ButtonNext role="button" aria-label="slide forward" className="w-12 h-12  rounded-full flex justify-center items-center bg-white  opacity-20 hover:opacity-100 absolute z-30 right-0 mr-8" id="next">
                            <AiOutlineArrowRight />
                        </ButtonNext>
                    </div>
                </CarouselProvider>
        </div>
    );
}
