import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";



export default function Carrosel() {
    return (
        <div className="flex justify-center">
                <CarouselProvider className="relative hidden lg:block" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={3} visibleSlides={1} step={1} infinite={true} currentSlide={1}>
                    <div className="js-flickity flex justify-center items-center">
                        <ButtonBack role="button" aria-label="slide backward" className="w-12 h-12  rounded-full flex justify-center items-center bg-white  opacity-10 hover:opacity-50 absolute z-30 left-0 ml-8" id="prev">
                            <AiOutlineArrowLeft />
                        </ButtonBack>
                        <Slider className="carousel__sliderLarge">
                            <Slide index={0}>
                                <div className="gallery-cell w-full h-full">
                                    <div className="relative w-full h-full ">
                                        <img src="https://images.unsplash.com/photo-1582288916603-4698cf723bf6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="dirt" className="object-center object-cover w-full h-full" />
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={1}>
                                <div className="gallery-cell w-full h-full">
                                    <div className="relative w-full h-full ">
                                        <img src="https://images.unsplash.com/photo-1628075268290-c9ce6fec310c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="tress" className="object-center object-cover w-full h-full" />
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={2}>
                                <div className="gallery-cell w-full h-full">
                                    <div className="relative w-full h-full">
                                        <img src="https://images.unsplash.com/photo-1624412178369-26f8bbb0b041?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="fire" className="object-center object-cover w-full h-full" />
                                    </div>
                                </div>
                            </Slide>
                        </Slider>
                        <ButtonNext role="button" aria-label="slide forward" className="w-12 h-12  rounded-full flex justify-center items-center bg-white  opacity-10 hover:opacity-50 absolute z-30 right-0 mr-8" id="next">
                            <AiOutlineArrowRight />
                        </ButtonNext>
                    </div>
                </CarouselProvider>
        </div>
    );
}
