
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

function GrandRajasthan() {

    const eventName = 'The Grand Rajasthan et Taj'
    const amount = 146235
    const tagLine = 'Experience the Royal Grandeur of Rajasthan'
    const duration = "13 days/ 14 nights"
    const age = "All ages welcome"
    const description = 'Rajasthan - a Land of Kings, has a rich history which is battle-scarred; but it also showcases the Royal history in the form of its palaces and forts. And so, while choosing the 14 days “The Grand Rajasthan et Taj,” we take pride in showing you the best of Indian History wrapped in colorful turbans, shadows of the sky falling on sand dunes, and architectural wealth that is unparalleled. Explore more of this land in all its colors, shades, and tastes as it turns into a beautiful memory.'

   
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    

    const images  = [
        "./image-slider/grand-rajasthan/img1.jpg",
        "./image-slider/grand-rajasthan/img2.jpg",
        "./image-slider/grand-rajasthan/img3.jpg",
    ]


    const schedule = [
        {
            heading: 'Arrival in Delhi',
            description: 'Arrive at Delhi, transfer to the hotel, receive tour documents, and relax.',
            image: '',
            details: [
                { title: '', content: '- On the first day, as soon as you arrive at New Delhi Indira Gandhi International Airport, Bonjour Inde’s executive will welcome you. He will then assist you to the hotel where your stay has been arranged.' },
                { title: '', content: '- There you will be handed over with all the documents related to the tour and will be given a brief explanation about the tour. An overnight stay in the hotel.' },
            ]
        },
        {
            heading: 'Delhi Sightseeing',
            description: 'Explore Delhi’s blend of Mughal and modern architecture.',
            image: './Schedule/grand-rajasthan/img1.jpg',
            details: [
                { title: '', content: '- Visit Humayun’s Tomb, Swaminarayan Temple, Qutub Minar, Red Fort.' },
                { title: '', content: '- Lunch: Ethnic North Indian delicacies.' },
                { title: '', content: '- Visit Jama Masjid, India Gate (from a distance), Lotus Temple, Indian Habitat Centre.' },
                { title: '', content: '- Evening walk in Chandni Chowk Market.' },
                { title: '', content: '- Dinner and overnight stay at the hotel.' }
            ]
        },
        {
            heading: 'Delhi to Agra',
            description: 'Travel to Agra, visit the Taj Mahal, Agra Fort, and other historical sites.',
            image: './Schedule/grand-rajasthan/img2.jpg',
            details: [
                { title: '', content: '- Drive to Agra after breakfast' },
                { title: '', content: '- Visit Taj Mahal, Agra Fort, Tomb of Itimad–ud–Dualah, Tomb of Akbar the Great, and Guru Ka Taal.' },
                { title: '', content: '- Evening shopping for souvenirs.' },
                { title: '', content: '- Dinner and overnight stay at the hotel.' }
            ]
        },
        {
            heading: 'Agra to Jaipur',
            description: 'Drive to Jaipur, visit Fatehpur Sikri on the way, and check into the hotel in the evening.',
            image: '',
            details: [
                { title: '', content: '- Drive to Jaipur, visiting Fatehpur Sikri en route.' },
                { title: '', content: '- Visit Jama Masjid and Dargah of Sheikh Salim Chisti.' },
                { title: '', content: '- Dinner and overnight stay at the hotel.' },
            ]
        },
        {
            heading: 'Jaipur Sightseeing',
            description: 'Discover Jaipur’s landmarks, including Hawa Mahal, Amer Fort, and City Palace.',
            image: './Schedule/grand-rajasthan/img3.jpg',
            details: [
                { title: '', content: '- Visit Hawa Mahal, Amer Fort, City Palace, Solar Observatory, Lake Palace, Nahargarh Fort.' },
                { title: '', content: '- Evening shopping at Babu Market.' },
                { title: '', content: '- Dinner and overnight stay at the hotel.' }
            ]
        },
        {
            heading: 'Jaipur to Udaipur',
            description: 'Travel to Udaipur, stop at Ranakpur Jain Temples, and check into your hotel.',
            image: '',
            details: [
                { title: '', content: '- Drive to Udaipur, visiting Ranakpur Jain Temples en route.' },
                { title: '', content: '- Dinner and overnight stay at the hotel.' },
            ]
        },
        {
            heading: 'Udaipur Sightseeing',
            description: 'Explore Udaipur’s City Palace, Lake Palace, and enjoy a boat ride at Fateh Sagar Lake.',
            image: './Schedule/grand-rajasthan/img6.jpg',
            details: [
                { title: '', content: '- Visit City Palace, Lake Palace, Maharana Sawai Madho Singh Vintage Car Museum, Shilpgram.' },
                { title: '', content: '- Evening boating at Fateh Sagar Lake, Light and Sound Show.' },
                { title: '', content: '- Dinner and overnight stay at the hotel.' }
            ]
        },
        {
            heading: 'Udaipur to Jodhpur',
            description: 'Drive to Jodhpur, enjoy a traditional Rajasthani lunch en route, and check into the hotel.',
            image: '',
            details: [
                { title: '', content: '- Drive to Jodhpur with a short break for lunch.' },
                { title: '', content: '- Dinner and overnight stay at the hotel.' },
            ]
        },
        {
            heading: 'Jodhpur Sightseeing',
            description: 'Visit Mehrangarh Fort, Umaid Bhawan Palace, and explore Jodhpur’s rich heritage.',
            image: './Schedule/grand-rajasthan/img4.jpg',
            details: [
                { title: '', content: '- Visit Mehrangarh Fort, Umaid Bhavan Palace, Jain Temples.' },
                { title: '', content: '- Evening city tour and shopping.' },
                { title: '', content: '- Dinner and overnight stay at the hotel.' }
            ]
        },
        {
            heading: 'Jodhpur to Jaisalmer',
            description: 'Travel to Jaisalmer, check into the hotel, and explore the city in the evening.',
            image: '',
            details: [
                { title: '', content: '- Drive to Jaisalmer, arrive by noon.' },
                { title: '', content: '- Evening city tour and visit to Thar Heritage Museum for a Puppet show.' },
                { title: '', content: '- Dinner and overnight stay at the hotel.' }
            ]
        },
        {
            heading: 'Jaisalmer Sightseeing',
            description: 'Discover Jaisalmer’s Kuldhara Village, Fort, Havelis, and enjoy a camel ride in the sand dunes.',
            image: './Schedule/grand-rajasthan/img5.jpg',
            details: [
                { title: '', content: '- Visit Kuldhara Village, Jaisalmer Fort, Nathmal Ji Ki Haveli, Sand Dunes for Rajasthani Cultural Programme and dinner.' },
                { title: '', content: '- Camel Ride.' },
                { title: '', content: '- Dinner and overnight stay at the hotel.' }
            ]
        },
        {
            heading: 'Jaisalmer to Bikaner',
            description: 'Drive to Bikaner, visit Junagarh Fort, Bhandsagar Temple, and Laxminath Temple.',
            image: './Schedule/grand-rajasthan/img7.jpg',
            details: [
                { title: '', content: '- Drive to Bikaner, arrive by evening.' },
                { title: '', content: '- Visit Junagarh Fort, Bhandsagar Temple, Laxminath Temple.' },
                { title: '', content: '- Dinner and overnight stay at the hotel.' }
            ]
        },
        {
            heading: 'Bikaner to Mandawa',
            description: 'Explore Mandawa’s famous havelis, including Bansidhar Newatia, Murmuria, and Chokhani Double Haveli.',
            image: '',
            details: [
                { title: '', content: '- Visit Mandawa Havelis: Bansidhar Newatia, Murmuria, Chokhani Double Haveli.' },
                { title: '', content: '- Dinner and overnight stay at the hotel.' },
            ]
        },
        {
            heading: 'Mandawa to Delhi (Departure)',
            description: 'Return to Delhi, conclude the tour, and transfer to the airport for departure.',
            image: '',
            details: [
                { title: '', content: '- Drive back to Delhi.' },
                { title: '', content: '- Transfer to the airport for onward journey.' },
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
        { img: "./Attraction/grand-rajasthan/img1.jpg", tagName: 'Mehrangarh Fort'},
        { img: "./Attraction/grand-rajasthan/img2.jpg", tagName: 'Taj Mahal'},
        { img: "./Attraction/grand-rajasthan/img3.jpg", tagName: 'Red Fort'},
        { img: "./Attraction/grand-rajasthan/img4.jpg", tagName: 'Hawa Mahal'}
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

export default GrandRajasthan
