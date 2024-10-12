import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
// import Logo from "../assets/Logoo.svg"
import EventCard from '../components/EventCard';
import Footer from '../components/Footer';
import { PiPersonSimpleHikeBold } from "react-icons/pi";
// import Rating from ('react-rating')
import TranslateWidget from '../components/TranslateWidget';
import WhatsApp from '../components/WhatsApp';
import RazorpayBtn from '../components/RazorpayBtn';
import { useNavigate } from 'react-router-dom';
import Gallery from '../components/Gallery';

const Home = () => {
  const [open, setOpen] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const Logo = './logo.png'

  
  const images2  = [
    "./Img1.jpg",
    "./Img2.jpg",
    "./Img3.jpg",
    "./Img4.jpg",
]
const interval = 3000;

const [currentIndex, setCurrentIndex] = useState(0);

const goToSlide = (index) => {
setCurrentIndex(index);
};

const goToPrevSlide = () => {
const isFirstSlide = currentIndex === 0;
const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
setCurrentIndex(newIndex);
};

const goToNextSlide = () => {
const isLastSlide = currentIndex === images.length - 1;
const newIndex = isLastSlide ? 0 : currentIndex + 1;
setCurrentIndex(newIndex);
};
const navigate = useNavigate(); // Use the hook here inside the component
const Navigate=(page)=>{
  navigate(`/${page}`)
}
useEffect(() => {
const intervalId = setInterval(() => {
  goToNextSlide();
}, interval);



return () => clearInterval(intervalId); // Clear interval on component unmount
}, [currentIndex, interval]);

  const images = [
    { img: "https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { img: "https://images.pexels.com/photos/16146014/pexels-photo-16146014/free-photo-of-low-angle-shot-of-the-hawa-mahal-in-jaipur-rajasthan-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { img: "https://images.pexels.com/photos/16952108/pexels-photo-16952108/free-photo-of-india-gate-silhouette-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { img: "https://images.pexels.com/photos/4248537/pexels-photo-4248537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    // { img: "https://images.pexels.com/photos/17650344/pexels-photo-17650344/free-photo-of-sand-dunes-in-mountains.jpeg"},
    // { img: "https://images.pexels.com/photos/1679551/pexels-photo-1679551.jpeg"},
    // { img: "https://images.pexels.com/photos/35626/beach-shoreline-coast-summer.jpg"},
    // { img: "https://images.pexels.com/photos/3077882/pexels-photo-3077882.jpeg"}
    
  ];

  const places=[
    {imageUrl:"https://images.unsplash.com/photo-1548013146-72479768bada?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXV0aWZ1bCUyMHRvdXJpc3QlMjBwbGFsY2VzJTIwaW5kaWF8ZW58MHwwfDB8fHww",heading:"The Golden Triangle",goto:"golden-traingle" },
    {imageUrl:"https://plus.unsplash.com/premium_photo-1697730421382-bc8dd92f83ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEpvZGhwdXJ8ZW58MHwwfDB8fHww",heading:"Grand Rajasthan et Taj",goto:"grand-rajasthan"},
    {imageUrl:"https://media.istockphoto.com/id/481494314/photo/gwalior-fort.webp?a=1&b=1&s=612x612&w=0&k=20&c=h8E5w6dI9Khz4Ny4-x8GoYqjKt2vV1IcylcOUpUJGvg=",heading:"Palais et temples : Khajurao, Orcha et Gwalior",goto:"gwalior"},
    {imageUrl:"https://media.istockphoto.com/id/537988165/photo/varanasi.webp?a=1&b=1&s=612x612&w=0&k=20&c=12qNJSzaD01LG-v0C0VZhv6tp7HTLnGtBK-a0rvpRiw=",heading:"Villes sacrées du Gange : édition Varanasi",goto:"varanasi"},
    
    // {imageUrl:"https://plus.unsplash.com/premium_photo-1661963369594-9b25cd53be4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGJlYXV0aWZ1bCUyMHRvdXJpc3QlMjBwbGFsY2VzJTIwaW5kaWF8ZW58MHwwfDB8fHww",heading:"Udaipur"},
]

const complementry = [
  {
      EventName: `Morning Jeep Safari - Jodhpur`,
      coverimg:['./Complementry/Jeep_safari/Cover.jpg'],
      topage:'jeep'
     
  },
  {
      EventName: 'Bagru Block Printing Workshop - Jaipur',
      coverimg:['./Complementry/Block_Printing/Block_paint/Cover.jpg'],
      topage:'paint'
   
  },
  {
      EventName: 'Yoga at Mangal Yoga - Jodhpur ',
      coverimg:['./Complementry/Yoga/Yoga_mangal/Cover.jpg'],
      topage:'yoga'
     
  },
];



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  // var Rating = require('react-rating');
  

  return (
    <>
    <div className='overflow-x-hidden'>
      <div className='container scroll  w-screen font-quicksand'>
      <div className="relative w-screen bg-black/15 p-0 object-cover overflow-x-hidden h-[40vh] lg:h-[70vh]">
  <AnimatePresence>
    <motion.img
      key={currentImgIndex}
      src={images[currentImgIndex].img}
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 1 }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div> {/* Gradient overlay */}
  </AnimatePresence>

  <div className="absolute top-0 left-0 w-full px-4 lg:px-40 md:px-40 sm:px-4 flex flex-row justify-between">
    <div onClick={handleClick} className="mt-0">
      <img
        src={Logo}
        alt="Logo"
        className="lg:w-[12vw] md:w-[20vw] w-[25vw] h-auto filter invert brightness-0 saturate-100"
      />
    </div>
    <div onClick={handleClick} className="absolute z-20 flex gap-2" style={{ top: '40px', right: '50px' }}>
      {/* <div>
        <TranslateWidget />
      </div> */}
      <Sidebar />
    </div>
  </div>

  <div className="relative text-white z-10 flex flex-col items-start justify-center h-full px-4 md:px-40">
    <div className="mb-0">
      <p className="font-quicksand font-semibold lg:text-[20px] sm:text-[30px] md:text-[18px] ">WANDERLUST</p>
    </div>
    <TypeAnimation
      sequence={[
        'Experience', 1000,
        'Travel', 1000,
        'Explore', 1000,
        'Enjoy', 1000
      ]}
      wrapper="span"
      speed={40}
      style={{ fontSize: '2.5em', display: 'inline-block', fontWeight: 'normal' }}
      repeat={Infinity}
    />
    <div className="relative mt-4">
      <Link to="/events">
        <motion.button
          whileHover={{ scale: 1, backgroundColor: '#e6dfdf' }}
          className="px-2 py-1 bg-white text-black text-sm sm:text-xl md:text-lg rounded-lg font-semibold transition-all duration-200"
        >
          Explore
        </motion.button>
      </Link>
    </div>
  </div>

  <div className="absolute bottom-4 px-4 md:px-40">
    <p className="text-sm sm:text-lg md:text-xl font-semibold text-white">
      Le Principal Organisme de Voyage en Inde pour Clients Internationaux
    </p>
  </div>

  {/* WhatsApp Button */}
  <div className="fixed bottom-12 right-6 z-30 md:bottom-24">
    <WhatsApp
      phoneNumber="+917383666036"
      message="Hello! How can I help you."
    />
  </div>
</div>



   

    {/* Highlited events */}
    <div className='highlighted overflow-x-hidden overflow-y-hidden w-screen bg-gray-200 h-[720px] p-10 px-4 lg:px-40 '>
      <div className='flex flex-col p-6'>
        <h1 className='font-medium text-3xl text-orange-700'>Destination Préférée des Français</h1>
        {/* <TranslateWidget></TranslateWidget> */}
        <p className='text-gray-600 text-xl font-medium'>Recommended camps by our Instructors</p>
        
       
      </div>
      <div className="events flex items-center justify-start overflow-x-auto gap-8 p-4">
        {places.map((item, index) => (
          <div key={index} className="min-w-[260px]">
            <EventCard onClick={()=>(Navigate(item.goto))} imageUrl={item.imageUrl} heading={item.heading} />
          </div>
        ))}
      </div>
    </div>

    {/*Complementry events */}
    {/* Complementary Events */}
<div className='Monsoon w-screen overflow-hidden bg-gray-800 h-auto p-10 px-4 lg:px-40'>
  <div className='flex flex-col p-6'>
    <h1 className='font-medium text-3xl text-orange-700'>Complementary Events</h1>
    <p className='text-gray-600 text-xl font-medium'>Recommended camps by our Instructors</p>
  </div>
  
  {/* Events Container */}
  <div className="events flex items-center justify-start overflow-x-auto gap-4 p-4">
    {complementry.map((item, index) => (
      <div key={index} className="min-w-[300px] sm:min-w-[400px] lg:min-w-[500px]">
        {console.log(item.topage)}
        
        <EventCard onClick={()=>(Navigate(item.topage))} imageUrl={item.coverimg} heading={item.EventName} />
      </div>
    ))}
  </div>
</div>


    {/* Weekend events
    <div className='Weekend w-screen overflow-x-hidden overflow-y-hidden bg-gray-200 h-[670px] p-10  px-4 lg:px-40'>
      <div className='flex flex-col p-6'>
        <h1 className='font-medium text-3xl text-orange-700'>Weekend Events</h1>
        <p className='text-gray-600 text-xl font-medium'>Recommended camps by our Instructors</p>
      </div>
      <div className="events flex items-center justify-start overflow-x-auto gap-8 p-4">
        {places.map((item, index) => (
          <div key={index} className="min-w-[260px]">
            <EventCard imageUrl={item.imageUrl} heading={item.heading} />
          </div>
        ))}
      </div>
    </div> */}

    <div className='Weekend overflow-x-hidden overflow-y-hidden w-screen bg-gray-100 h-[950px] p-10 px-4 lg:px-40'>
      <div className='flex flex-col p-6'>
        <h1 className='font-medium text-3xl text-orange-700'>Experience Yourself</h1>
        <p className='text-gray-600 text-xl font-medium'>Exclusive Footages from our camps</p>
      </div>
      <div className="events flex items-center justify-start overflow-x-auto gap-8 p-4">
        {/* Content for Experience Yourself */}
        <Gallery></Gallery>
        
      </div>
    </div>

    {/* Ratings and Reviews Section */}
    <div className='Weekend overflow-x-hidden w-screen bg-gray-200 h-[900px] p-10 px-4 lg:px-40'>
      <div className='flex flex-col p-6'>
        <h1 className='font-medium text-3xl text-orange-700'>Ratings and Reviews</h1>
        {/* <RazorpayBtn></RazorpayBtn> */}
        <p className='text-gray-600 text-xl font-medium'>Experience the best with us</p>
        <div className='flex flex-wrap justify-evenly'>
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <div key={index} className='mt-6 w-1/3 p-4'>
              <div className='flex gap-4 mb-4 items-center'>
                <div className='bg-red-400 rounded-md h-12 w-16'>
                  <img src="" alt="" />
                </div>         
                <div className='block'>
                  <h1>Aditya Desai</h1>
                </div>          
              </div>
              <p className='border-t-2 border-gray-400 pt-2 inline-block'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut blanditiis quisquam, molestias quis vitae eligendi hic quos ipsa consequatur, dignissimos dolore adipisci ducimus dicta mollitia deleniti quia atque amet fugiat?
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className='overflow-x-hidden w-screen'>
      <Footer />
    </div>
      </div>
    </div>
     

    </>
  );
};

export default Home;
