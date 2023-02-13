import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import Image from "next/image";
import about_img from 'public/Images/about.jpg'
import about1 from 'public/Images/about1.jpg'

function About(){
    return(
        <div>
            <div className='container mx-auto mt-5 bg-white lg:flex justify-evenly md:flex-row px-5 lg:gap-5 p-3'>
                <div className='lg:w-1/3 md:w-full sm:w-full'>
                <Image src={about_img} className='lg:w-full h-[450px] border-8 md:w-full sm:w-full border-gray-300 rounded' alt="about page"/>
                </div>
                <div className='w-full'>
                <p className='text-gray-400 text-lg'>What We Do</p>
                <h1 className='text-blue-700 font-semibold text-5xl'>We Have 25 Years Experience</h1>
                <p className='text-gray-400 text-lg'>We offer extensive medical procedures to outbound and inbound patients what it is and we are very proud of achievemvent of our stpatients for recovery.</p>
                <Accordion className='outline-none'>
                    
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            <span className='text-blue-500 text-xl font-bold'>Our mission</span>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className='flex justify-start gap-5 p-3'>
                            <Image src={about1} width={100} height={100} className="border-4 border-gray-300" alt=''/>
                            <p className='text-gray-400 text-justify text-lg'>Our clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry We are among the most qualified implant provides in the AUS with over 30 years of quality training and experience</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem className='mt-3'>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            <span className='text-blue-500 text-xl font-bold'>Our Vision</span>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p className='text-gray-400 text-justify text-lg'>When launching a startup, founders typically have an idea of what they want to achieve — a vision of what success will look like. During the strategic planning process, its important to put this vision into concrete terms.</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem className='mt-3'>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            <span className='text-blue-500 text-xl font-bold'>Our Stratagies</span>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p className='text-gray-400 text-justify text-lg'>When launching a startup, founders typically have an idea of what they want to achieve — a vision of what success will look like. During the strategic planning process, its important to put this vision into concrete terms.</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
                </div>
            </div>
        </div>
    )
}
export default About;