
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

function Gwalior() {

    const eventName = 'Palais et temples'
    const amount = 109676;
    const tagLine = 'Heritage of Central India'
    const duration = "7 Nights/ 8 Days"
    const age = "All ages welcome"
    const description = 'Embark on a journey through India\'s timeless heritage, from the bustling streets of Delhi to the awe-inspiring temples of Khajuraho, the serene landscapes of Orchha, and the majestic forts of Gwalior. This 8-day cultural exploration offers a rich blend of history, architecture, and spiritual insights. Immerse yourself in the stories of ancient dynasties, artistic masterpieces, and unforgettable experiences across these iconic cities.'

   
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    

    const images  = [
        "./image-slider/palais-et-temples/img1.jpg",
        "./image-slider/palais-et-temples/img2.jpg",
        "./image-slider/palais-et-temples/img3.jpg",
    ]


    const schedule = [
        {
            heading: 'Arrival in Delhi',
            description: 'Your adventure begins in the heart of India’s vibrant capital.',
            image: '',
            details: [
                { title: 'Arrival:', content: 'Upon arrival at New Delhi’s Indira Gandhi International Airport, you’ll be warmly greeted by a representative from Bonjour Inde.' },
                { title: 'Hotel Stay:', content: ' You’ll then be transferred to your hotel, where a briefing and tour documents will be provided.' },
                { title: 'Evening:', content: 'Overnight stay at the hotel.' },
            ]
        },
        {
            heading: 'Delhi to Khajuraho',
            description: 'From Delhi’s grandeur to the timeless beauty of Khajuraho.',
            image: './Schedule/palais-et-temples/img1.jpg',
            details: [
                { title: 'Morning:', content: 'Enjoy breakfast before visiting Red Fort and India Gate.' },
                { title: 'Afternoon:', content: 'Reach the airport by 3:00 PM for your flight to Khajuraho. (Flight Details: 4:35 PM (DEL) -> 6:10 PM (HJR).)' },
                { title: 'Evening:', content: 'Upon arrival in Khajuraho, transfer to the hotel and enjoy an optional Sound and Light Show at the Western Group of temples, showcasing the Chandela Kings’ legacy.' },
                { title: 'Night:', content: 'Overnight stay at the hotel.' },            
            ]
        },
        {
            heading: 'Khajuraho Sightseeing',
            description: 'Marvel at the world-renowned temples of Khajuraho.',
            image: './Schedule/palais-et-temples/img2.jpg',
            details: [
                { title: 'Morning:', content: 'After breakfast, visit the Western Group of Temples, known for their stunning architectural carvings.' },
                { title: 'Afternoon:', content: 'Visit the Eastern Group of Temples and enjoy free time for self-activities.' },
                { title: 'Evening:', content: 'Return to the hotel for an overnight stay.' },
            ]
        },
        {
            heading: 'Khajuraho to Orchha',
            description: 'Step into the medieval splendor of Orchha.',
            image: '',
            details: [
                { title: 'Morning:', content: 'After breakfast, check out and transfer to Orchha.' },
                { title: 'Full-Day Tour:', content: 'Explore Orchha’s main attractions, including Phool Bagh, Orchha Fort, Laxminarayan Temple, Chhattris, and Raja Ram Temple. Optional river rafting can also be arranged.' },
                { title: 'Night:', content: 'Return to the hotel for an overnight stay.' },
            ]
        },
        {
            heading: 'Orchha to Gwalior',
            description: 'Discover the regal heritage of Gwalior and Jhansi.',
            image: './Schedule/palais-et-temples/img3.jpg',
            details: [
                { title: 'Morning:', content: 'After breakfast, check out and transfer to Gwalior. En route, visit the Government Museum and Jhansi Fort.' },
                { title: 'Afternoon:', content: 'Arrive in Gwalior and check into the hotel.' },
                { title: 'Evening:', content: ' Visit Tansen Tomb and Baz Bahadur Tomb, followed by local shopping.' },
                { title: 'Night:', content: 'Overnight stay at the hotel.' }
            ]
        },
        {
            heading: 'Gwalior Sightseeing',
            description: 'Explore the majestic forts and palaces of Gwalior',
            image: './Schedule/palais-et-temples/img4.jpg',
            details: [
                { title: 'Morning:', content: 'After breakfast, embark on a tour of Gwalior’s famous landmarks, including Saas Bahu Temple, Sun Temple, Gwalior Fort, Scindia Museum, Suraj Kund, Teli Mandir, Gujari Mahal, and Jai Vilas Palace.' },
                { title: 'Evening:', content: 'Return to the hotel for an overnight stay.' },
            ]
        },
        {
            heading: 'Gwalior to Delhi',
            description: 'Bid farewell to Gwalior’s history and return to Delhi’s charm.',
            image: '',
            details: [
                { title: 'Morning:', content: 'After breakfast, check out and transfer to Gwalior Airport for your flight to Delhi.' },
                { title: 'Afternoon:', content: 'Upon arrival in Delhi, enjoy a local market tour and an evening of café hopping in Hauz Khas Village.' },
                { title: 'Night:', content: ' Overnight stay at the hotel.' }
            ]
        },
        {
            heading: 'Departure',
            description: 'A memorable journey comes to an end.',
            image: '',
            details: [
                { title: 'Morning:', content: 'After breakfast, check out, and our representative will escort you to the airport for your onward flight.' },            ]
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
        { img: "./Attraction/palais-et-temples/img1.jpg", tagName: 'Raja Ram Temple'},
        { img: "./Attraction/palais-et-temples/img2.jpg", tagName: 'Gwalior Fort'},
        { img: "./Attraction/palais-et-temples/img3.jpg", tagName: 'India Gate'},
        { img: "./Attraction/palais-et-temples/img4.jpg", tagName: 'Sun Temple'},
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

export default Gwalior
