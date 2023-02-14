import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar } from 'react-icons/fa';

// import required modules
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import bimage from 'public/Images/pimage.png';
import style from '../../../styles/Testimonial.module.css';




const Testimonial = () => {
    return (
        <div className='py-16'>
            <div className="md:grid grid-cols-2 gap-8">
                <div className="image">
                    <Image className='w-full' src={bimage} alt='bi' />
                </div>
                <div className="slider">
                    <h6 className={style.title}>Testimonials</h6>
                    <h3 className={style.heading}>What Our Patients Say</h3>
                    <p className={style.subTitle}>We offer extensive medical procedures to outbound and inbound patients what it is and we are very together to recovery.</p>

                    <div className='p-4'>
                        <Swiper
                            navigation={true} modules={[Navigation]}
                            className={`${style.swiperP} mySwiper`}
                        >
                            <SwiperSlide className={style.slide}>
                                <Image width='40' height='40'
                                    style={{ borderRadius: "50%" }}
                                    src={bimage}
                                    alt='ia' />

                                <p className={style.sliderp}>The doctor and nurses and aided were excellent. The food was excellent. I am feeling fine and very lucky, back to my old self again and it feels great. Thank God for clinics such as yours. I appreciate all yours lindness , good care and hard work. Thanks.</p>

                                <div className="pt-4">
                                    <div className={style.stars}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                                    <p className={style.name}>Rashley Ford</p>
                                    <p className={style.title}>Patient</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={style.slide}>
                                <Image width='40' height='40'
                                    style={{ borderRadius: "50%" }}
                                    src={bimage}
                                    alt='ia' />

                                <p className={style.sliderp}>The doctor and nurses and aided were excellent. The food was excellent. I am feeling fine and very lucky, back to my old self again and it feels great. Thank God for clinics such as yours. I appreciate all yours lindness , good care and hard work. Thanks.</p>

                                <div className="pt-4">
                                    <div className={style.stars}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                                    <p className={style.name}>Rashley Ford</p>
                                    <p className={style.title}>Patient</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={style.slide}>
                                <Image width='40' height='40'
                                    style={{ borderRadius: "50%" }}
                                    src={bimage}
                                    alt='ia' />

                                <p className={style.sliderp}>The doctor and nurses and aided were excellent. The food was excellent. I am feeling fine and very lucky, back to my old self again and it feels great. Thank God for clinics such as yours. I appreciate all yours lindness , good care and hard work. Thanks.</p>

                                <div className="pt-4">
                                    <div className={style.stars}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                                    <p className={style.name}>Rashley Ford</p>
                                    <p className={style.title}>Patient</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={style.slide}>
                                <Image width='40' height='40'
                                    style={{ borderRadius: "50%" }}
                                    src={bimage}
                                    alt='ia' />

                                <p className={style.sliderp}>The doctor and nurses and aided were excellent. The food was excellent. I am feeling fine and very lucky, back to my old self again and it feels great. Thank God for clinics such as yours. I appreciate all yours lindness , good care and hard work. Thanks.</p>

                                <div className="pt-4">
                                    <div className={style.stars}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                                    <p className={style.name}>Rashley Ford</p>
                                    <p className={style.title}>Patient</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={style.slide}>
                                <Image width='40' height='40'
                                    style={{ borderRadius: "50%" }}
                                    src={bimage}
                                    alt='ia' />

                                <p className={style.sliderp}>The doctor and nurses and aided were excellent. The food was excellent. I am feeling fine and very lucky, back to my old self again and it feels great. Thank God for clinics such as yours. I appreciate all yours lindness , good care and hard work. Thanks.</p>

                                <div className="pt-4">
                                    <div className={style.stars}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                                    <p className={style.name}>Rashley Ford</p>
                                    <p className={style.title}>Patient</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={style.slide}>
                                <Image width='40' height='40'
                                    style={{ borderRadius: "50%" }}
                                    src={bimage}
                                    alt='ia' />

                                <p className={style.sliderp}>The doctor and nurses and aided were excellent. The food was excellent. I am feeling fine and very lucky, back to my old self again and it feels great. Thank God for clinics such as yours. I appreciate all yours lindness , good care and hard work. Thanks.</p>

                                <div className="pt-4">
                                    <div className={style.stars}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                                    <p className={style.name}>Rashley Ford</p>
                                    <p className={style.title}>Patient</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;