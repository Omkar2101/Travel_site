
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
    // const amount = 799;
    const duration = "2 Hours "
    const Starttime="Morning/Evening"
    const age = "4-50 years"
    const tagLine ="This is a typical itinerary for this product"
    const description = 'Bagru, village near Jaipur has made its mark on the textile industry map around the world. Short sojourn to Bagru on our signature experience is a sublime blend of handcrafted village tour and textile workshop.'

   
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    

    const images  = [
        "./Complementry/Jeep_safari/6.webp",
        "./Complementry/Jeep_safari/4.webp",
        "./Complementry/Jeep_safari/2.jpg",
        
    ]


    const schedule = [
        {
            // heading: 'Arrival in Delhi',
            // description: 'Visit to India Gate and Connaught Place.',
            heading: 'An experienced English speaking textile expert to lead',
            image: './Complementry/Block_Printing/Block_paint/6.jpg',
            details: [
                { title: 'Arrival', content: 'Late morning or early afternoon' },
                { title: 'Activities', content: 'Check into the hotel and relax. Evening visit to India Gate and Connaught Place' },
                { title: 'Overnight', content: 'Delhi' }
            ]
        },
        {
           
            description: 'Enjoy the light and sound show at the Red Fort or visit the Lotus Temple.',
            image: '',
            details: [
                { title: 'Morning', content: 'Visit Red Fort, Jama Masjid, and Chandni Chowk.' },
                { title: 'Afternoon', content: 'Visit Qutub Minar and Humayun\'s Tomb.' },
                { title: 'Evening', content: 'Enjoy a light and sound show at the Red Fort or visit the Lotus Temple.' },
                { title: 'Overnight', content: 'Delhi' }
            ]
        },
        {
            heading: 'A village walk visiting different families of Block Printers',
            description: 'Visit Agra Fort and Mehtab Bagh (Sunset view of Taj Mahal).',
            image: './Complementry/Block_Printing/Block_paint/2.jpg',
            details: [
                { title: 'Check-out', content: '8:00 AM.' },
                { title: 'Distance', content: '230 km (4-5 hours by road).' },
                { title: 'Arrival', content: 'Early afternoon.' },
                { title: 'Activities', content: 'Check into the hotel. Visit Agra Fort and Mehtab Bagh (sunset view of the Taj Mahal).' },
                { title: 'Overnight', content: 'Agra' }
            ]
        },
        {
            // heading: 'Explore Agra',
            description: 'Visit Itimad-ud-Daulah (Baby Taj) and local markets.',
            image: './Complementry/Block_Printing/Block_paint/3.jpg',
            details: [
                { title: 'Early Morning', content: 'Sunrise visit to the Taj Mahal.' },
                { title: 'Late Morning', content: 'Return to the hotel for breakfast and rest.' },
                { title: 'Afternoon', content: 'Visit Itimad-ud-Daulah (Baby Taj) and local markets.' },
                { title: 'Overnight', content: 'Agra' }
            ]
        },
        {
            heading: 'A self printed scarf as a Souvenir with our compliments',
            description: 'Stroll around local markets or enjoy a traditional Rajasthani dinner at Chokhi Dhani.',
            image: '',
            details: [
                { title: 'Check-out', content: '8:00 AM.' },
                { title: 'Distance', content: '240 km (5-6 hours by road, including stop).' },
                { title: 'Enroute', content: 'Visit Fatehpur Sikri (1-hour stop).' },
                { title: 'Arrival', content: 'Early evening' },
                { title: 'Activities', content: 'Check into the hotel and relax.' },
                { title: 'Evening', content: 'Stroll around local markets or enjoy a traditional Rajasthani dinner at Chokhi Dhani.' },
                { title: 'Overnight', content: 'Jaipur' },
            ]
        },
        {
            // heading: 'Explore Jaipur',
            description: 'Visit Amber Fort and take an elephant ride.',
            image: './Complementry/Block_Printing/Block_paint/5.jpg',
            details: [
                { title: 'Morning', content: 'Visit Amber Fort and take an elephant ride. Stop by Jal Mahal (Water Palace) on the way back.' },
                { title: 'Afternoon', content: 'Visit City Palace and Jantar Mantar.' },
                { title: 'Evening', content: 'Explore the local markets and Hawa Mahal (Palace of Winds).' },
                { title: 'Overnight', content: 'Jaipur' },
            ]
        },
     
        
    ];

   


    const attractions = [
        { img: "./Attraction/golden-traingle/img1.jpg", tagName: 'India Gate'},
        { img: "./Attraction/golden-traingle/img2.jpg", tagName: 'Taj Mahal'},
        { img: "./Attraction/golden-traingle/img3.jpg", tagName: 'Red Fort'},
        { img: "./Attraction/golden-traingle/img4.jpg", tagName: 'Hawa Mahal'}
    ]


    

    





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
            <div className="relative w-full h-96 overflow-hidden">
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



            {/* Attractions
            <Attractions attractions={attractions}/> */}




            {/* Booking at Bottom
            <div className='mt-5 mb-5'>
                <div id="target-point" ></div>
                 <PackageSelector eventName={eventName} amount={amount}/>
             </div> */}



            {/* Terms and Conditions
            <Rules inclusion={Inclusion} exclusion={Exclusion}/> */}



            <Footer></Footer>
        </div>
      );
}

export default Paint
