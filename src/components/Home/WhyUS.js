import Image from "next/image";
import { useState } from "react";
import { MdOutlineDone } from "react-icons/md";
import { RiPlayMiniFill } from "react-icons/ri";
import "swiper/swiper.min.css";
import doctors from "../../../public/Images/doctors team.jpg";
const WhyUS = () => {
    const [isOpen, setIsOpen] = useState(false);
    const videoId = "qY_6cWYxeAI"
    const features = [
        "Quality Medicine & Instruments",
        "Afforable expense",
        "24/hrs service"
    ]

    return (
        <section id="whyUs" className="flex flex-col justify-center items-center mt-24 md:mt-28 lg:mt-32 container mx-auto  px-8 md:px-8 lg:px-14 ">
            <div className="grid-cols-1 md:grid md:grid-cols-2 md:justify-around md:items-center gap-6 md:gap-8 lg:gap-12 mx-auto ">
                <div className="sm:mt-8 w-full ">
                    <h1 className="font-bold text-[24px] md:text-he-text-h3 text-he-text-head py-2">
                        We Giving  people <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-600">The Perfect Smile</span> they wished since 2010
                    </h1>
                    <p className="text-he-text-sm md:text-he-text-p text-he-text-paragraph">
                        Our experienced dentist and team at Brivona are committed to help you and your family enjoy healthy, beautiful smiles for a lifetime. A Latest healthcare center with technologies that meets all  your needs.
                    </p>
                </div>
                <div className="sm:mt-8 w-full">
                    <ul className="mt-4 md:mt-2 lg:mt-2 md:pl-[30%] lg:pl-[40%] flex flex-col flex-wrap justify-center items-start mx-auto">
                        {
                            features?.map((feature, i) => <li key={i} className="flex text-he-text-head text-he-text-p  justify-start gap-3 items-center  py-2"><MdOutlineDone className="bg-gradient-to-r from-blue-400 to-violet-500 text-lg text-white rounded-full" />{feature}</li>)
                        }


                    </ul>
                </div>

            </div>
            {/* <Image src={img} alt="whyus-image" className="max-w-4xl mx-auto mt-8 object-cover">
            </Image> */}

            <div className="max-w-[70vw]  max-h-[534px] object-cover flex relative overflow-hidden rounded-lg mx-auto  mt-12">
                <div className="bg-black absolute w-full h-full top-0 opacity-25 "></div>
                <Image src={doctors} alt="doctor-image"
                    className="w-full  object-cover hover:scale-105 duration-1000 rounded-lg"></Image>
                <button className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-16 w-16 bg-white cursor-pointer z-[999]" onClick={() => setIsOpen(true)}>
                    <RiPlayMiniFill className="text-center text-white mx-auto text-5xl rounded-sm" />
                </button>
            </div>

            {isOpen && (
                <div className="fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-75 z-[99999] w-screen h-screen">
                    <div className="mx-auto max-w-5xl my-auto  w-full">
                        <button
                            className="absolute top-0 right-0 mt-4  md:mr-8 lg:mr-4 text-white font-bold px-3 py-2"
                            onClick={() => setIsOpen(false)}

                        >
                            X
                        </button>
                        {/* <div className="min-h-[445px] w-full my-auto object-cover bg-white rounded-lg"> */}
                        {/* <iframe
                                src={`https://www.youtube.com/embed/${videoId}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full rounded-lg h-full"
                            /> */}
                        <iframe src="https://www.youtube.com/embed/qY_6cWYxeAI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share " allowfullscreen className="w-full min-h-screen " ></iframe>
                        {/* </div> */}
                    </div>
                </div>
            )}
        </section>
    )
}

/* 
 <div className="max-w-5xl max-h-[534px] object-cover flex relative overflow-hidden rounded-lg mx-auto -z-10">
                        <div className="bg-black absolute w-full h-full top-0 opacity-25 "></div>
                        <Image src={doctors} alt="doctor-image"
                            className="w-full  object-cover hover:scale-105 duration-1000 rounded-lg"></Image>
                        <div className="w-[80%]  absolute  px-6 py-3  left-4 top-[20%] md:top-[50%] rounded-lg">
                            <h1 className="text-[24px] md:text-[32px] font-bold">50+ expert doctors</h1>
                            <p className="text-small ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam nulla sed quia est. Labore itaque quis dolor, numquam fugit maiores illum impedit tenetur, enim nobis esse omnis ratione nihil fugiat.</p>
                        </div>
                    </div>

*/
export default WhyUS