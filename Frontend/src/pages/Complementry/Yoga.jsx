
import React, { useState, useEffect, memo } from 'react';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import throttle from 'lodash.throttle';
import { motion, AnimatePresence } from 'framer-motion';
import { DifficultyIcon, PersonIcon, StayIcon, GuideIcon, DownloadIcon, BookingDetailItem, CalendarIcon, BookingCard,  DetailItem} from '../../components/Icons';
import TimeLineComp from '../../components/TimeLineComp';
import Attractions from '../../components/Attractions';
import Rules from '../../components/Rules';
import { useNavigate } from 'react-router-dom';
// import TimeLineComp from '../../components/TimeLineComp';
import PackageSelector from '../../components/PackageSelector';
import ImageSlider from '../../components/ImageSlider';
import RazorpayGatewaybtn from '../../components/RazorpayGatewaybtn';
import Componentimg from '../../components/Componentimg';
function Paint() {

    const eventName = 'Bagru Block Printing Workshop '
     const info ='*There is no need to pay any tips or fees for these yoga classes. They are offered to you free of charge as part of your Jodhpur experience'
    const duration = "45 min to 1 hr "
    const Starttime="Morning/Evening"
    const age = "4-50 years"
    const tagLine ="Complimentary Classes: Enjoy two free yoga sessions during your stay in Jodhpur:"
    const description = 'Welcome to Jodhpur! As part of your travel experience, we are pleased to offer you complimentary yoga sessions at Mangal Yoga, renowned as the premier yoga facility in Jodhpur. Operated by a dedicated family, Mangal Yoga is led by the esteemed yoga instructor Mangalaram Patel, who brings years of expertise and passion to his practice'

   
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    

    const images  = [
        "./Complementry/Yoga/Yoga_mangal/4.jpg",
        "./Complementry/Yoga/Yoga_mangal/2.jpg",
        "./Complementry/Yoga/Yoga_mangal/6.jpg",
       
        
    ]


    const schedule = [
        {
            // heading: 'Arrival in Delhi',
            // description: 'Visit to India Gate and Connaught Place.',
            heading: 'Morning Session: Begin the following day refreshed and revitalized with another invigorating yoga session',
            image: './Complementry/Yoga/Yoga_mangal/1.jpg',
           
        },
        {
           
            description: 'Enjoy the light and sound show at the Red Fort or visit the Lotus Temple.',
            image: '',
           
        },
        {
            
            description: 'Visit Agra Fort and Mehtab Bagh (Sunset view of Taj Mahal).',
            image: './Complementry/Yoga/Yoga_mangal/2.jpg',
            
        },
        {
            // heading: 'Explore Agra',
            heading: 'Evening Session: Upon your arrival in Jodhpur, unwind with a calming yoga class designed to ease the fatigue from your journe',
            description: 'Morning Session: Begin the following day refreshed and revitalized with another invigorating yoga session',
            image: './Complementry/Yoga/Yoga_mangal/3.jpg',
           
        },
        {
            heading: '',
            description: '',
            image: '',
          
        },
        {
             heading: 'The classes will focus on therapeutic yoga, which aims to relax and rejuvenate your body, ensuring you feel both relaxed and energized',
            description: '.',
            image: './Complementry/Yoga/Yoga_mangal/6.jpg',
            
        },
     
        
    ];

   


    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = throttle(() => {
            const targetElement = document.getElementById('target-point');
            const footerElement = document.getElementById('sticky-footer');

            if (targetElement && footerElement) {
                const targetOffset = targetElement.getBoundingClientRect().top + window.scrollY;
                const footerHeight = footerElement.offsetHeight;

                setIsVisible(window.scrollY + window.innerHeight < targetOffset - footerHeight);
            }
        }, 100); // Throttle the scroll event

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);







    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImgIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);







    return (
        <div className='overflow-x-hidden'>


            {/* sidebar */}
            <div onClick={handleClick} className='absolute z-20' style={{ top: '20px', right: '20px' }}>
                <Sidebar />
            </div>
            


            
            {/* Image Animation */}
            <div className="relative w-full h-96  overflow-hidden">
                <AnimatePresence initial={false}>
                    <motion.img
                        key={currentImgIndex}
                        src={images[currentImgIndex]}
                        alt={`Slide ${currentImgIndex}`}
                        className="absolute w-full h-full object-cover"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    />
                </AnimatePresence>
            </div>

            


            {/* Heading and Duration */}
            <div className="px-4 md:px-40 flex flex-col lg:flex-row gap-10">
                <div className="w-full lg:w-4/5">
                    <h1 className="text-orange-600 text-3xl font-quicksand pt-5">{eventName}</h1>
                    <h2 className="text-orange-600 font-semibold text-sm font-quicksand pt-5">{info}</h2>
                    <h2 className="text-md text-gray-500 font-quicksand pt-2">{tagLine}</h2>

                    <div className="flex flex-col md:flex-row gap-10 pt-6">
                        <DetailItem 
                            icon={
                                <CalendarIcon className="size-6" />
                            }
                            title="Duration"
                            description={duration}
                        />
                        <DetailItem 
                            icon={
                                <DifficultyIcon className="size-6" />
                            }
                            title="Start Time"
                            description={Starttime}
                        />
                        <DetailItem 
                            icon={
                                <PersonIcon className="size-6" />
                            }
                            title="Age Group"
                            description={age}
                        />
                          <DetailItem 
                            icon={
                                <PersonIcon className="size-6" />
                            }
                            title="Guide"
                            description="English,French"
                        />
                    </div>

                    <div className="h-0.5 bg-gray-200 my-4"></div>

                    <div>
                        <h3 className="font-medium font-quicksand">About</h3>
                        <p className="text-gray-500 font-quicksand text-sm font-medium">
                            {description}
                        </p>
                        <button className="bg-gray-300 hover:bg-gray-400 text-orange-600 font-bold py-2 px-4 rounded inline-flex items-center mt-5">
                            <DownloadIcon className="w-4 h-4 mr-2" />
                            <span>Brochure</span>
                        </button>
                    </div>
                </div>

                {/* <BookingCard price="799" eventName={eventName} amount={amount} /> */}
            </div>


            <div className="px-4 md:px-40 flex flex-col lg:flex-row gap-10">
                <div className="text-md text-gray-500 font-quicksand pt-2 w-full mt-4  lg:w-4/5">
                <h1>The experience offers a walk around the village visiting community houses with an insightful engagement opportunity, followed by distinguished art workshop to observe the process of Block printing. Carving on wooden blocks to create unique designs, making of natural dyes, printing on fabric, drying and finally transforming into a textile masterpiece is the niche villagers have lived over generations. Try your hands on the art and create a souvenir for yourself.</h1>
            
                </div>

                
            </div>

            {/* Schedule */}
            <TimeLineComp schedule={schedule} />
            {/* <Componentimg></Componentimg> */}



         


            <Footer></Footer>
        </div>
      );
}

export default Paint
