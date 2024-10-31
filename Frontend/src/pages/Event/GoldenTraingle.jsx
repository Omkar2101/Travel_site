
import React, { useState, useEffect, memo } from 'react';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import throttle from 'lodash.throttle';
import { motion, AnimatePresence } from 'framer-motion';
import { DifficultyIcon, PersonIcon, StayIcon, GuideIcon, DownloadIcon, BookingDetailItem, CalendarIcon, BookingCard,  DetailItem} from '../../components/Icons';
import Timeline from '../../components/Timeline';
import Attractions from '../../components/Attractions';
import Rules from '../../components/Rules';
import { useNavigate } from 'react-router-dom';

import PackageSelector from '../../components/PackageSelector';
import ImageSlider from '../../components/ImageSlider';
import RazorpayGatewaybtn from '../../components/RazorpayGatewaybtn';
import DateComp from '../../components/DateComp';
function GoldenTraingle() {

    const eventName = 'Golden Traingle'
    const amount = 73026;
    const tagLine = 'Discover the Treasures of Agra'
    const duration = "8 days/ 7 nights"
    const age = "15-35 years"
    const description = 'Jaipur is a city of spectacular forts - and none more so than Amer Fort (Amber Fort). Built on a hilltop from pale pink and yellow sandstone, complemented by white marble, this magnificent palace complex is a showstopper. Agra is best known for the Taj Mahal 17th century\, designated a UNESCO World Heritage site in 1983\. A complex mausoleum, the Taj Mahal is often considered to be the world\'s best example of Mughal architecture.'

   
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    

    const images  = [
        "./image-slider/golden-traingle/img1.jpg",
        "./image-slider/golden-traingle/img2.jpg",
        "./image-slider/golden-traingle/img3.jpg",
        "./image-slider/golden-traingle/img4.jpg",
    ]


    const schedule = [
        {
            heading: 'Arrival in Delhi',
            description: 'Visit to India Gate and Connaught Place.',
            image: './Schedule/golden-traingle/img1.jpg',
            details: [
                { title: 'Arrival', content: 'Late morning or early afternoon' },
                { title: 'Activities', content: 'Check into the hotel and relax. Evening visit to India Gate and Connaught Place' },
                { title: 'Overnight', content: 'Delhi' }
            ]
        },
        {
            heading: 'Explore Delhi',
            description: 'Enjoy the light and sound show at the Red Fort or visit the Lotus Temple.',
            image: './Schedule/golden-traingle/img2.jpg',
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
            image: './Schedule/golden-traingle/img3.jpg',
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
            image: './Schedule/golden-traingle/img4.jpg',
            details: [
                { title: 'Morning', content: 'Visit Amber Fort and take an elephant ride. Stop by Jal Mahal (Water Palace) on the way back.' },
                { title: 'Afternoon', content: 'Visit City Palace and Jantar Mantar.' },
                { title: 'Evening', content: 'Explore the local markets and Hawa Mahal (Palace of Winds).' },
                { title: 'Overnight', content: 'Jaipur' },
            ]
        },
        {
            heading: 'Jaipur to Delhi',
            description: 'Evening visit to the Kingdom of Dreams or Dilli Haat for cultural experiences.',
            image: '',
            details: [
                { title: 'Check-out', content: '9:00 AM.' },
                { title: 'Distance', content: '280 km (5-6 hours by road).' },
                { title: 'Arrival', content: 'Late afternoon.' },
                { title: 'Activities', content: 'Check into the hotel and relax. Optional evening visit to the Kingdom of Dreams or Dilli Haat for cultural experiences.' },
                { title: 'Overnight', content: 'Delhi' },
            ]
        },
        {
            heading: 'Departure from Delhi',
            description: 'Leisurely breakfast at the hotel.',
            image: '',
            details: [
                { title: 'Check-out', content: 'Flexible based on flight schedule.' },
                { title: 'Activities', content: 'Leisurely breakfast at the hotel. Last-minute shopping or explore any remaining sights.' },
                { title: 'Departure', content: 'Transfer to the airport for your onward journey.' }
            ]
        },
        
    ];

    const hotels = [
        {
            hotelName: 'Hospitality in Delhi',
            images: [
                './HotelsPic/Golden-Triangle/Hotel-Fortune-Park-East-Delhi/521337698.jpg', 
                './HotelsPic/Golden-Triangle/Hotel-Fortune-Park-East-Delhi/521337330.jpg', 
                './HotelsPic/Golden-Triangle/Hotel-Fortune-Park-East-Delhi/555877751.jpg', 
                './HotelsPic/Golden-Triangle/Hotel-Fortune-Park-East-Delhi/555878836.jpg', 
                './HotelsPic/Golden-Triangle/Hotel-Fortune-Park-East-Delhi/555890843.jpg', 
                './HotelsPic/Golden-Triangle/Hotel-Fortune-Park-East-Delhi/555892703.jpg',
            ],
        },
        {
            hotelName: 'Luxury Stay in Jaipur',
            images: [
                './HotelsPic/Golden-Triangle/Hotel-Royal-Orchid-Jaipur/129871235.jpg', 
                './HotelsPic/Golden-Triangle/Hotel-Royal-Orchid-Jaipur/57540038.jpg', 
                './HotelsPic/Golden-Triangle/Hotel-Royal-Orchid-Jaipur/57540051.jpg', 
                './HotelsPic/Golden-Triangle/Hotel-Royal-Orchid-Jaipur/57540059.jpg',
                './HotelsPic/Golden-Triangle/Hotel-Royal-Orchid-Jaipur/57540066.jpg', 
                './HotelsPic/Golden-Triangle/Hotel-Royal-Orchid-Jaipur/120794749.jpg',
                './HotelsPic/Golden-Triangle/Hotel-Royal-Orchid-Jaipur/515733677.jpg',
                './HotelsPic/Golden-Triangle/Hotel-Royal-Orchid-Jaipur/515733687-2.jpg',
            ],
        },
        {
            hotelName: 'Hotel - Agra ',
            images: [
                './HotelsPic/Golden-Triangle/Surasena-Regal-Vista-Agra/img1.jpg',
                './HotelsPic/Golden-Triangle/Surasena-Regal-Vista-Agra/img2.jpg', 
                './HotelsPic/Golden-Triangle/Surasena-Regal-Vista-Agra/img3.jpg', 
                './HotelsPic/Golden-Triangle/Surasena-Regal-Vista-Agra/img4.jpg', 
                './HotelsPic/Golden-Triangle/Surasena-Regal-Vista-Agra/img5.jpg', 
                './HotelsPic/Golden-Triangle/Surasena-Regal-Vista-Agra/img6.jpg', 
                './HotelsPic/Golden-Triangle/Surasena-Regal-Vista-Agra/img7.jpg',  
                
            ],
        },
    ];


    const attractions = [
        { img: "./Attraction/golden-traingle/img1.jpg", tagName: 'India Gate'},
        { img: "./Attraction/golden-traingle/img2.jpg", tagName: 'Taj Mahal'},
        { img: "./Attraction/golden-traingle/img3.jpg", tagName: 'Red Fort'},
        { img: "./Attraction/golden-traingle/img4.jpg", tagName: 'Hawa Mahal'}
    ]

    const Inclusion = [
        "French-Speaking Guide: Enjoy the expertise of a professional French-speaking guide who will accompany you throughout the entire tour, ensuring a rich and engaging experience.",
        "Transportation: Comfortable, air-conditioned transportation provided for the complete tour, ensuring a smooth and relaxing journey across all destinations.",
        "Accommodation: Stay in carefully selected 3-star hotels that offer a perfect blend of comfort and local charm.",
        "Daily Breakfast: Start each day with a complimentary breakfast at your hotel, featuring a variety of local and international options.",
        "Airport Transfers: Seamless transfers to and from the airport, ensuring your arrival and departure are hassle-free.",
        "Unlimited Packaged Water Bottles: Stay hydrated throughout your journey with unlimited access to packaged drinking water.",
        "Snacks & Fresh Juices in Transit: Enjoy complimentary snacks and fresh juices during your travels between destinations.",
    ]

    const Exclusion = [
        "International Airfare & Pre-Tour Transportation: This package does not include international flight tickets or any transportation costs before arriving in Delhi.",
        "Lunch & Dinner: Meals outside of breakfast are not included, giving you the flexibility to explore local dining options.",
        "Alcoholic Beverages: Alcoholic drinks are not part of this package.",
        "Personal Expenses: Personal expenses such as shopping, tipping, donations, and other discretionary spending are not included.",
        "Anything Not Mentioned in Inclusions: Any service or activity not explicitly listed under the inclusions section is not covered by this package.",
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






    const navigate =useNavigate();
    const handleNavigation=()=>{
        // console.log(EventName)
        navigate('/participents', { state: {amount, eventName}});
        console.log(state);
        

    }




    return (
        <div className='overflow-x-hidden'>


            {/* sidebar */}
            <div onClick={handleClick} className='absolute z-20' style={{ top: '20px', right: '20px' }}>
                <Sidebar />
            </div>
            

            {/* Sticky Footer */}
            <div
                id="sticky-footer"
                className={`fixed inset-x-0 bottom-0 bg-white shadow-lg p-4 transition-all duration-300 z-50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}
                style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
                >
                <div className="flex flex-row justify-around items-center">
                    <h1 className="font-quicksand">From ₹73026 / person
                       <br /> <span  className="font-quicksand text-red-500">*Pay 25% now and book you seat</span>
                    </h1>
                    <button
                    type="button"
                    className="font-quicksand text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-xl text-lg px-5 py-2.5 me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800"
                    onClick={handleNavigation}
                    >
                        Book Now
                    </button>
                </div>
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
                            title="Difficulty"
                            description="Moderate"
                        />
                        <DetailItem 
                            icon={
                                <PersonIcon className="size-6" />
                            }
                            title="Age Group"
                            description={age}
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

                <BookingCard price="73026" eventName={eventName} amount={amount} />
                
            </div>




            {/* Schedule */}
            <Timeline schedule={schedule} />



             {/* Hotels */}
            <div className='highlighted font-quicksand  overflow-x-hidden w-screen bg-gray-700 p-8 px-4 md:px-20'>
                <div className='flex flex-col p-6'>
                    <h1 className='font-medium text-3xl text-orange-600'>Staying Facility</h1>
                    <h1 className='font-bold text-xl text-black'>Similar kind of hotel rooms are provided </h1>
                </div>
        

                <div className='flex flex-col gap-5'>
                    {hotels.map((hotel, index) => (
                        <div key={index} className="events flex flex-col justify-start overflow-x-auto gap-2 p-4 mx-3">
                        <p className='text-gray-200 text-xl font-medium mx-5'>{hotel.hotelName}</p>
                        <ImageSlider images={hotel.images} />
                        </div>
                    ))}
                </div>
            </div>

            

          

            {/* Attractions */}
            <Attractions attractions={attractions}/>




            {/* Booking at Bottom */}
            <div className='mt-5 mb-5'>
                <div id="target-point" ></div>
                 <PackageSelector eventName={eventName} amount={amount}/>
             </div>



            {/* Terms and Conditions */}
            <Rules inclusion={Inclusion} exclusion={Exclusion}/>



            <Footer></Footer>
        </div>
      );
}

export default GoldenTraingle
