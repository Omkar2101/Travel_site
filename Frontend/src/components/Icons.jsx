import React, {memo, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import DateComp from './DateComp';

export const DifficultyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FF6600" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
  </svg>
);

export const PersonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FF6600" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
);

export const StayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FF6600" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
  </svg>
);

export const GuideIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FF6600" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
);

export const DownloadIcon = () => (
  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
  </svg>
);

export const BookingDetailItem = memo(({ title, iconSrc, icon }) => {
  return (
      <h4 className="flex flex-row font-quicksand gap-2">
          {iconSrc ? <img src={iconSrc} alt={title} className="w-5 h-5" /> : icon}
          {title}
      </h4>
  );
});


export const CalendarIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FF6600">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
  </svg>
);



export const BookingCard = memo(({ price, eventName, amount }) => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);

  const handleNavigation = () => {
    const userId = Cookies.get('user_id');
    
    if (userId) {
      // Proceed to the participants page if user_id exists
      navigate('/participents', { state: { amount, eventName, selectedDate } });
    } else {
      // Prompt login or show an alert
      // alert("Please log in to proceed with the booking.");
      // Alternatively, navigate to login page if required
      navigate('/login');
    }
  };


  return (
      <div className="w-full lg:w-2/6 h-50 bg-white shadow-md p-5 mt-10 rounded-xl border border-gray-200">
          <h1 className="font-quicksand text-2xl"><b>€{price}</b> / person</h1>
          <h2 className="font-quicksand mt-5 font-semibold">Includes</h2>
          <div className="flex flex-row justify-between">
              <div className="flex flex-col mt-3 gap-3">
                  <BookingDetailItem title="Travelling" iconSrc="./bus.png" />
                  <BookingDetailItem title="Stay" icon={
                      <StayIcon className="size-6" />
                  } />
                  <BookingDetailItem title="Guide" icon={
                      <GuideIcon className="size-6" />
                  } />
              </div>
              <div className="flex flex-col mt-3 gap-3">
                  <BookingDetailItem title="Food" iconSrc="./restaurant.png" />
                  <BookingDetailItem title="Activities" iconSrc="./playing.png" />
                  <BookingDetailItem title="First Aid" iconSrc="./kit.png" />
              </div>
          </div>

          <div>
                <button
                    onClick={handleNavigation}
                    type="button"
                    className="font-quicksand mt-3 w-full text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-xl text-lg px-5 py-2.5 me-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800"
                >
                    Book Now
                </button>
                <DateComp setDate={setSelectedDate}/>
          </div>
      </div>
  );
});


export const DetailItem = memo(({ icon, title, description }) => {
  return (
      <div className="flex flex-row gap-2 items-center">
          {icon}
          <div className="flex flex-col">
              <h4 className="font-medium font-quicksand">{title}</h4>
              <p className="text-gray-500 font-quicksand text-sm">{description}</p>
          </div>
      </div>
  );
});