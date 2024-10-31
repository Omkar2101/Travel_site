
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

function Varanasi() {

    const eventName = 'Varanasi Edition'
    const amount = 109676;
    const tagLine = 'Experience the Spiritual Journey'
    const duration = "7 Nights/ 8 Days"
    const age = "All ages welcome"
    const description = 'Embark on an 8-day journey through the cultural and spiritual heart of India. Starting in the vibrant capital city of Delhi, you\'ll explore iconic historical landmarks, visit the birthplace of Lord Krishna, experience the magic of the Taj Mahal, and delve into the sacred atmosphere of Varanasi, one of the world\'s oldest living cities. This immersive itinerary blends history, religion, and local charm, offering an unforgettable experience of India\'s diverse heritage.'

   
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    

    const images  = [
        "./image-slider/varanasi/img1.jpg",
        "./image-slider/varanasi/img2.jpg",
        "./image-slider/varanasi/img3.jpg",
    ]


    const schedule = [
        {
            heading: 'Arrival in Delhi',
            description: 'Welcome to India’s heart, where history meets modern charm.',
            image: '',
            details: [
                { title: 'Morning:', content: 'Arrive in Delhi and check into your hotel.' },
                { title: 'FullDay:', content: 'Explore the vibrant capital city with visits to Red Fort, India Gate, Qutub Minar, and Lotus Temple.' },
                { title: 'Evening:', content: 'Return to the hotel for an overnight stay.' },
            ]
        },
        {
            heading: 'Delhi to Mathura & Vrindavan',
            description: 'Step into the sacred lands where Lord Krishna\'s journey began.',
            image: './Schedule/varanasi/img1.jpg',
            details: [
                { title: 'Morning:', content: 'Half-day sightseeing in Delhi, visiting Humayun\'s Tomb and the President\'s House.' },
                { title: 'Late Morning:', content: 'Drive to Mathura, the birthplace of Lord Krishna, and explore its temples.' },
                { title: 'Afternoon:', content: 'Continue to Vrindavan and visit prominent temples.' },
                { title: 'Evening:', content: 'Drive to Agra and check into your hotel for an overnight stay.' },            
            ]
        },
        {
            heading: 'Agra City Tour',
            description: 'Witness the timeless love story carved in marble.',
            image: './Schedule/varanasi/img2.jpg',
            details: [
                { title: 'Morning:', content: 'Visit the Taj Mahal and Agra Fort.' },
                { title: 'Afternoon:', content: 'Have lunch at a local restaurant and visit the Tomb of Itimad-ud-Daulah.' },
                { title: 'Evening:', content: 'Return to the hotel for an overnight stay in Agra.' },
            ]
        },
        {
            heading: 'Agra to Varanasi',
            description: 'From architectural wonders to the spiritual soul of India.',
            image: '',
            details: [
                { title: 'Morning:', content: 'Drive from Agra to Varanasi.' },
                { title: 'Afternoon:', content: 'Arrive in Varanasi and check into your hotel.' },
                { title: 'Evening:', content: 'Relax at leisure. Overnight stay in Varanasi.' },
            ]
        },
        {
            heading: 'Varanasi Sightseeing',
            description: 'Experience the mystical energy of the holy Ganges.',
            image: './Schedule/varanasi/img3.jpg',
            details: [
                { title: 'Full-Day Tour:', content: 'Explore the ghats along the Ganges, visit Kashi Vishwanath Temple, and other significant sites.' },
                { title: 'Evening:', content: 'Witness the Ganga Aarti.' },
                { title: 'Night:', content: 'Overnight stay in Varanasi.' }
            ]
        },
        {
            heading: 'Varanasi Exploration',
            description: 'Discover serenity and enlightenment in the land of Buddha’s first sermon.',
            image: './Schedule/varanasi/img4.jpg',
            details: [
                { title: 'Morning & Afternoon:', content: 'Continue exploring Varanasi with visits to Sarnath and the local markets.' },
                { title: 'Evening:', content: 'Enjoy a serene evening in Varanasi. Overnight stay at the hotel.' },
            ]
        },
        {
            heading: 'Varanasi to Delhi',
            description: 'One last taste of tranquility before the return to the capital.',
            image: '',
            details: [
                { title: 'Morning:', content: 'Leisure time in Varanasi.' },
                { title: 'Afternoon:', content: 'Transfer to the airport for your flight to Delhi.' },
                { title: 'Evening:', content: 'Arrive in Delhi and check into your hotel.' }
            ]
        },
        {
            heading: 'Departure',
            description: 'Farewell, until the next adventure calls you back.',
            image: '',
            details: [
                { title: 'Morning:', content: 'Rest and relax at your hotel.' },
                { title: 'Departure:', content: 'Transfer to the airport for your onward journey.' },
            ]
        },
    ];

    const hotels = [
        {
            hotelName: ' ',
            images: [
                
            ],
        },
        {
            hotelName: ' ',
            images: [
                
            ],
        },
        {
            hotelName: ' ',
            images: [
                
                
            ],
        },
    ];


    const attractions = [
        { img: "./Attraction/varanasi/img1.jpg", tagName: 'Varanasi Ghat'},
        { img: "./Attraction/varanasi/img2.jpg", tagName: 'Taj Mahal'},
        { img: "./Attraction/varanasi/img3.jpg", tagName: 'Prem Mandir'},
        { img: "./Attraction/varanasi/img4.jpg", tagName: 'Agra Fort'},
    ]

    const Inclusion = [
        'Garlanding welcome at the Airport in Delhi with Accommodation at the specified hotels. Daily breakfast during your stay at all proposed destinations.',
        'Unlimited water bottle and Camel safari over Sand Dunes in Pushkar with French speaking local tour guide during all sightseeing tours',
        'All arrival and departure transfers, sightseeing by an exclusive deluxe air-conditioned Car / Bus with chauffeur as per the itinerary.',
        'Jeep Ride/Elephant Ride in Amber Fort, Jaipur and Battery bus services from Taj Mahal Parking to Taj Mahal Gate and Return.',
        'Airport pickup and transfers. State tax, toll taxes and all applicable taxes. Assistance at all pickup and departure points.'
    ]

    const Exclusion = [
        'Monument ticket fees for camera. Anything Not Mentioned in The Inclusions. Porterage at Hotels and Airports, Tips, Insurance, Laundry, Liquors, Wine, Etc',
        'All Items of Personal Nature or any cost arised Due to Natural Calamities Like Landslides, Roadblocks, Etc. Any Increase in Taxes or Fuel Leading to An Increase In Surface Transport',
        'Meals not specified in Itinerary. Tips for staff, guide & driver. Domestic & International airfares. Optional, suggested, or unspecified activities',
        'Insurance and Medi claim. Insurance of any kind. Visa costs. Anything not mentioned or “optional” or “own account” in the itinerary.'
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
                    <h1 className="font-quicksand">From €{amount} / person
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

                <BookingCard price={amount} eventName={eventName} amount={amount} />
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

export default Varanasi
