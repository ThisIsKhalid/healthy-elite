import Image from "next/image";
import React from 'react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import doctor from "../../../public/Images/dr.jhatka.jpg";
const Doctors = () => {
    SwiperCore.use([Autoplay]);
    return (
        <section id="ourDoctors" className="container mx-auto mt-24 md:mt-28 lg:mt-32  px-8 md:px-8 lg:px-14">
            <h3 className="text-he-text-h3 text-he-text-head font-semibold py-4 text-center" >
                Meet Our Skilled doctors
            </h3>
            <Swiper
                spaceBetween={50}
                navigation={true}
                modules={[Navigation]}
                autoplay={{
                    delay: 2000,
                }}
                pagination={{ clickable: true }}
                loop={true}
                breakpoints={{
                    576: {
                        // width: 576,
                        slidesPerView: 1,
                    },
                    768: {
                        // width: 768,
                        slidesPerView: 2,
                    },
                    1040: {
                        // width: 768,
                        slidesPerView: 3,
                    },
                }}

            >
                <SwiperSlide className="mx-auto">
                    <div className="max-w-md flex relative overflow-hidden rounded-md mx-auto">
                        <Image src={doctor} alt="doctor-image"
                            className="w-full h-[90%] object-cover hover:scale-105 duration-1000 rounded-md"></Image>
                        <div className="w-[80%] bg-white absolute bottom-0 px-6 py-3  mx-auto left-[50%] translate-x-[-50%] rounded-sm">
                            <h1 className="text-lg font-bold hover:text-[#172df5] cursor-pointer">Dr. jhatka</h1>
                            <p className="text-small ">Cardiologist</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mx-auto">
                    <div className="max-w-md flex relative overflow-hidden rounded-md mx-auto">
                        <Image src={doctor} alt="doctor-image"
                            className="w-full h-[90%] object-cover hover:scale-105 duration-1000 rounded-md"></Image>
                        <div className="w-[80%] bg-white absolute bottom-0 px-6 py-3  mx-auto left-[50%] translate-x-[-50%] rounded-sm">
                            <h1 className="text-lg font-bold hover:text-[#172df5] cursor-pointer">Dr. jhatka</h1>
                            <p className="text-small ">Cardiologist</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mx-auto">
                    <div className="max-w-md flex relative overflow-hidden rounded-md mx-auto">
                        <Image src={doctor} alt="doctor-image"
                            className="w-full h-[90%] object-cover hover:scale-105 duration-1000 rounded-md"></Image>
                        <div className="w-[80%] bg-white absolute bottom-0 px-6 py-3  mx-auto left-[50%] translate-x-[-50%] rounded-sm">
                            <h1 className="text-lg font-bold hover:text-[#172df5] cursor-pointer">Dr. jhatka</h1>
                            <p className="text-small ">Cardiologist</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mx-auto">
                    <div className="max-w-md flex relative overflow-hidden rounded-md mx-auto">
                        <Image src={doctor} alt="doctor-image"
                            className="w-full h-[90%] object-cover hover:scale-105 duration-1000 rounded-md"></Image>
                        <div className="w-[80%] bg-white absolute bottom-0 px-6 py-3  mx-auto left-[50%] translate-x-[-50%] rounded-sm">
                            <h1 className="text-lg font-bold hover:text-[#172df5] cursor-pointer">Dr. jhatka</h1>
                            <p className="text-small ">Cardiologist</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mx-auto">
                    <div className="max-w-md flex relative overflow-hidden rounded-md mx-auto">
                        <Image src={doctor} alt="doctor-image"
                            className="w-full h-[90%] object-cover hover:scale-105 duration-1000 rounded-md"></Image>
                        <div className="w-[80%] bg-white absolute bottom-0 px-6 py-3  mx-auto left-[50%] translate-x-[-50%] rounded-sm">
                            <h1 className="text-lg font-bold hover:text-[#172df5] cursor-pointer">Dr. jhatka</h1>
                            <p className="text-small ">Cardiologist</p>
                        </div>
                    </div>
                </SwiperSlide>







            </Swiper>



        </section>
    );
};

export default Doctors;