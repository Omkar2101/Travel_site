import React, { useEffect, useState } from 'react';
import Logo from '../assets/Logoo.svg';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import Footer from '../components/Footer';
import ParticipantForm from './ParticipentForm';
import { useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


function Participants() {
  
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const {amount, eventName } = location.state || {};
  console.log('Amount is: ', amount)
  console.log('Event Name is: ', eventName)
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


  const [participantsData, setParticipantsData] = useState([{}]); // Start with one participant form
  const navigate = useNavigate();
  const [bug, setBug] = useState([]);

  const addParticipantForm = () => {
    setParticipantsData([...participantsData, {}]);
    // setErrors([...errors, {}]);
  };

  const removeParticipantForm = (index) => {
    const updatedData = participantsData.filter((_, i) => i !== index);
    // const updatedErrors = errors.filter((_, i) => i !== index);
    setParticipantsData(updatedData);
    // setErrors(updatedErrors);
  };

  const updateParticipantData = (index, data) => {
    const updatedData = [...participantsData];
    updatedData[index] = data;
    setParticipantsData(updatedData);
  };
  let errors;
  const handleSubmit = async () => {
    const userid = Cookies.get('user_id'); // Get userid from cookies

    errors = participantsData.map((participant) => {
      if (!participant.profilePicture) {
        return 'Profile Picture is required';
      }
      if (!participant.firstName) {
        return 'First Name is required';
      }
      
      if (!participant.lastName) {
        return 'Last Name is required';
      }
      if (!participant.birthDate) {
        return 'Birth Date is required';
      }
      if (!participant.gender) {
        return 'Gender is required';
      }
      if (!participant.passportnumber) {
        return 'Passport Number is required';
      }
      if (!participant.email) {
        return 'E-mail is required';
      }
      if (!participant.bloodGroup) {
        return 'Blood Group is required';
      }
      if (!participant.mobile) {
        return 'Mobile Number is required';
      }
      return null; // Return null if no error for this participant
    }).filter(error => error !== null); // Remove null values
    
    if (errors.length > 0) {
      
      setBug(errors)
      console.log(errors);
      return; // Prevent form submission if there are errors
    }
    

    try {
      // const formData = new FormData();
      // formData.append("username", "Chris");

      const dataToSend = participantsData.map(participant => ({
        ...participant,
        userid,
        eventName: eventName, // Replace with actual event name
        amount: amount, // Replace with actual amount
      }));

      console.log("participantsData is: ", dataToSend);


      const response = await axios.post(`${BACKEND_URL}/participent`, dataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Form submitted successfully:', response.data);
      const totalamount=amount*(dataToSend.length);
      console.log(dataToSend.length);
      
      navigate('/checkout',{state:totalamount});
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="overflow-x-hidden font-quicksand">
      <div className="bg-zinc-800 relative text-white w-screen p-12 h-[250px]">
        <div className="flex items-center justify-between">
          <div className="h-[50px] w-[70px]">
            <img src={Logo} alt="" />
          </div>
        </div>
        <div className="z-20 absolute top-8 right-10">
          <Sidebar />
        </div>

        <div className="text-orange-500 mt-6">
          <h1 className="text-2xl">Participants</h1>
          <h1>Enter Participants details.</h1>
        </div>
      </div>

      

      <div className="flex flex-col bg-white-100">
        <div className="mt-6 p-6">
          {bug[0] && <p className='text-red-600 flex justify-center items-center gap-1 mb-5'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-2">
              <path fill-rule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z" clip-rule="evenodd" />
            </svg>
            {bug[0]}
          </p>}
          {participantsData.map((_, index) => (
            <div key={index} className="mb-6 flex flex-col items-center">
              <div className='w-full flex flex-row items-center justify-evenly'>
                <h2 className="text-xl font-bold">Participant {index + 1}</h2>
                {index > 0 && ( // Show remove button only for additional participants
                  <button
                    onClick={() => removeParticipantForm(index)}
                    className="mt-4 px-4 py-2 flex flex-row items-center gap-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                      <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                    </svg>
                    Remove
                  </button>
                )}
              </div>
              <ParticipantForm index={index} updateParticipantData={updateParticipantData} />
            </div>
          ))}
          <div className="pb-6 w-3/4 flex justify-center md:justify-end">
            <button
              onClick={addParticipantForm}
              className="px-6 py-2 flex flex-row gap-1 items-center self-start bg-gray-500 text-white rounded-md hover:bg-orange-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
              </svg>
              Add Participant
            </button>
          </div>
        </div>
        
        
        <div className="flex justify-center p-6">
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
          >
            Submit All Participants and Pay 
          </button>
        </div>
        {/* {errors[0]?.firstName && <p className="text-red-500 text-xs">{errors[0].firstName}</p>} */}
        <Footer />
      </div>
    </div>
  );
}

export default Participants;
