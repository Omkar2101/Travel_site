
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
function Jeep() {

    const eventName = 'Jeep Safari '
    // const amount = 799;
    const duration = "2 Hours "
    const Starttime="Morning/Evening"
    const age = "4-50 years"
    const tagLine ="This is a typical itinerary for this product"
    const description = 'Learn about life in rural Rajasthan with a half-day visit to a local village, where you will  meet Bishnoi people and learn about their way of life. You will visit with various artisans, from weavers to potters, and have lunch with a local family. You will also get to do a bit of wildlife spotting if you are lucky, you will see blackbuck deer out in the desert.'

   
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
            image: './Complementry/Jeep_safari/3.jpg',
            details: [
                { title: 'Arrival', content: 'Late morning or early afternoon' },
                { title: 'Activities', content: 'Check into the hotel and relax. Evening visit to India Gate and Connaught Place' },
                { title: 'Overnight', content: 'Delhi' }
            ]
        },
        {
            heading: 'Explore Delhi',
            description: 'Enjoy the light and sound show at the Red Fort or visit the Lotus Temple.',
            image: './Complementry/Jeep_safari/2.jpg',
            details: [
                { title: 'Morning', content: 'Visit Red Fort, Jama Masjid, and Chandni Chowk.' },
                { title: 'Afternoon', content: 'Visit Qutub Minar and Humayun\'s Tomb.' },
                { title: 'Evening', content: 'Enjoy a light and sound show at the Red Fort or visit the Lotus Temple.' },
                { title: 'Overnight', content: 'Delhi' }
            ]
        },
        {
            heading: 'Delhi to Agra',
            description: 'Visit Agra Fort and Mehtab Bagh (Sunset view of Taj Mahal).',
            image: '',
            details: [
                { title: 'Check-out', content: '8:00 AM.' },
                { title: 'Distance', content: '230 km (4-5 hours by road).' },
                { title: 'Arrival', content: 'Early afternoon.' },
                { title: 'Activities', content: 'Check into the hotel. Visit Agra Fort and Mehtab Bagh (sunset view of the Taj Mahal).' },
                { title: 'Overnight', content: 'Agra' }
            ]
        },
        {
            heading: 'Explore Agra',
            description: 'Visit Itimad-ud-Daulah (Baby Taj) and local markets.',
            image: './Complementry/Jeep_safari/8.jpg',
            details: [
                { title: 'Early Morning', content: 'Sunrise visit to the Taj Mahal.' },
                { title: 'Late Morning', content: 'Return to the hotel for breakfast and rest.' },
                { title: 'Afternoon', content: 'Visit Itimad-ud-Daulah (Baby Taj) and local markets.' },
                { title: 'Overnight', content: 'Agra' }
            ]
        },
        {
            heading: 'Agra to Jaipur (via Fatehpur Sikri)',
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
            heading: 'Explore Jaipur',
            description: 'Visit Amber Fort and take an elephant ride.',
            image: '/Complementry/Jeep_safari/9.jpg',
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

    // const Inclusion = [
    //     "French-Speaking Guide: Enjoy the expertise of a professional French-speaking guide who will accompany you throughout the entire tour, ensuring a rich and engaging experience.",
    //     "Transportation: Comfortable, air-conditioned transportation provided for the complete tour, ensuring a smooth and relaxing journey across all destinations.",
    //     "Accommodation: Stay in carefully selected 3-star hotels that offer a perfect blend of comfort and local charm.",
    //     "Daily Breakfast: Start each day with a complimentary breakfast at your hotel, featuring a variety of local and international options.",
    //     "Airport Transfers: Seamless transfers to and from the airport, ensuring your arrival and departure are hassle-free.",
    //     "Unlimited Packaged Water Bottles: Stay hydrated throughout your journey with unlimited access to packaged drinking water.",
    //     "Snacks & Fresh Juices in Transit: Enjoy complimentary snacks and fresh juices during your travels between destinations.",
    // ]

    // const Exclusion = [
    //     "International Airfare & Pre-Tour Transportation: This package does not include international flight tickets or any transportation costs before arriving in Delhi.",
    //     "Lunch & Dinner: Meals outside of breakfast are not included, giving you the flexibility to explore local dining options.",
    //     "Alcoholic Beverages: Alcoholic drinks are not part of this package.",
    //     "Personal Expenses: Personal expenses such as shopping, tipping, donations, and other discretionary spending are not included.",
    //     "Anything Not Mentioned in Inclusions: Any service or activity not explicitly listed under the inclusions section is not covered by this package.",
    // ]

    

    





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
                <h1>The Bishnoi’s are a eco Friendly sect of Hindu religion, it is one of the different community of Rajasthan who are famous for there rich cultural Rajasthani Life and there true love for nature and animals. Bishnoi Village Safari is the organization started by Rajas and Maharaja's of Jodhpur to show that Indian and foreign guest a glaimpse of rich cultural life around their state of Marwar, A True Rajasthan. We organize full day and half day safaris at very reasonable cost and in some ways give our sincere efforts to help the poor and needy local people in this water scarce region.</h1>
            
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

export default Jeep
