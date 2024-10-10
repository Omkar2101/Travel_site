

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Cookies from "js-cookie";
import Sidebar from '../components/Sidebar';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

function Dashboard() {
  const { firstName } = useParams(); // Extract firstName from URL
  const [userData, setUserData] = useState({});
  const [alluserData, setAlluserData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state for data fetching
  const useridFromCookie = Cookies.get("user_id");
  const location = useLocation();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  console.log("Url is:", BACKEND_URL)
  console.log(import.meta.env);



  const {amount, eventName } = location.state || {};
  console.log("from dash",eventName);
  

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const Allresponse = await axios.get(`${BACKEND_URL}/api/users/${useridFromCookie}`, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          
        });
        setUserData(Allresponse.data);
      
        

        const fetchAllUserData = async () => {
          try {
            const response = await axios.get(`${BACKEND_URL}/api/alluser/${useridFromCookie}`, {
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              params: {
                fields: 'firstName',
              },
            });
            setAlluserData(response.data);
          } catch (error) {
            console.error('Error fetching Alluser data', error);
          } finally {
            setLoading(false); // Set loading to false once data is fetched
          }
        };
        fetchAllUserData();
      } catch (error) {
        console.error('Error fetching user data', error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [useridFromCookie]);

  console.log(alluserData);


  // Function to format the birth date
  const convertBirth = () => {
    const dateObj = new Date(userData.birthDate);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const convertToBase64 = (binaryData) => {
    return btoa(
      new Uint8Array(binaryData).reduce((data, byte) => data + String.fromCharCode(byte), '')
    );
  };

  const profilePicSrc = userData.profilePicture && userData.profilePicture.data
    ? `data:${userData.profilePicture.contentType};base64,${convertToBase64(userData.profilePicture.data.data)}`
    : null;

  const idProofSrc = userData.idProof && userData.idProof.data
    ? `data:${userData.idProof.contentType};base64,${convertToBase64(userData.idProof.data.data)}`
    : null;


    if (loading) {
      return (
        <div className="flex items-center justify-center min-h-screen ">
          <motion.div
            className="relative w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.2, 1], rotate: 360 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <motion.div
              className="absolute w-16 h-16 border-4 border-t-4 border-t-orange-500 border-white rounded-full animate-spin"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          
          </motion.div>
        </div>
      );
    }
    

  return (
    <>
      <div className='overflow-x-hidden'>
        <div className="container">
          <div className="upper font-quicksand bg-gray-700 w-screen h-[40vh] relative">
            <div className="z-20 absolute top-8 right-10">
              <Sidebar />
            </div>
            <div className="profile absolute bg-slate-400 overflow-hidden w-[150px] h-[150px] left-[10vw] top-[28vh] rounded-full">
              {profilePicSrc && (
                <div className='flex items-center justify-center object-cover'>
                  <img src={profilePicSrc} alt="Profile" />
                </div>
              )}
            </div>
            <div className="profilename">
              <div className='flex flex-col absolute top-[20vh] right-[55vw]'>
                <h1 className='text-[45px] text-white'>{userData.firstName}</h1>
                <h1 className='text-[25px] text-white'>+91-{userData.mobile}</h1>
              </div>
            </div>
          </div>

          <div className="profile-container font-quicksand min-h-screen w-screen bg-gradient-to-b from-gray-100 to-gray-300 p-8">
            {/* User Info Section */}
            <div className="max-w-5xl mx-auto mt-16 bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-700 mb-6">Profile Details</h2>
              <div className="flex gap-16">
                <div className="flex flex-col gap-6 text-lg text-gray-600">
                  <p><span className="font-semibold">Email address:</span> {userData.email}</p>
                  <p><span className="font-semibold">DOB:</span> {convertBirth()}</p>
                  <p><span className="font-semibold">Passport number:</span> {userData.passportnumber}</p>
                  <p><span className="font-semibold">Address:</span> {userData.address}</p>
                </div>
                <div className="flex flex-col gap-6 text-lg text-gray-600">
                  <p><span className="font-semibold">Gender:</span> {userData.gender}</p>
                  <p><span className="font-semibold">Weight:</span> {userData.weight}</p>
                  <p><span className="font-semibold">Height:</span> {userData.height}</p>
                  <p><span className="font-semibold">Bloodgroup:</span> {userData.bloodGroup}</p>
                </div>
              </div>
            </div>

            {/* Booking Info Section */}
            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-700 mb-6">Bookings</h2>
              <div className="flex flex-col gap-6 text-lg text-gray-600">
                {alluserData.length > 0 ? (
                  <>
                    <p><span className="font-semibold">Current Booking is For :</span> {alluserData[0]?.eventName || "N/A"}</p>
                    <p><span className="font-semibold">Total Participants for this trip:</span> {alluserData.length}</p>
                    <div className="participant-list mt-4">
                      {alluserData.map((user, index) => (
                        <p key={index} className="text-gray-700 border-b border-gray-300 py-2">
                          {index + 1}. Participant's name: <span className="font-medium">{user.firstName}</span>
                        </p>
                      ))}
                    </div>
                  </>
                ) : (
                  <p>No current bookings available.</p>
                )}
              </div>
            </div>

            {/* Previous Bookings Section */}
            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-700 mb-6">Previous Bookings</h2>
              <p className="text-lg text-gray-600">No previous bookings available.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
