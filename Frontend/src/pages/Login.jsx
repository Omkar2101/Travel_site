// import React, { useState, useEffect } from 'react'
// import Sidebar from '../components/Sidebar'
// import Logo from "../assets/Logoo.svg"
// import OtpInput from 'otp-input-react'
// import { CgSpinner } from 'react-icons/cg'
// import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'
// import { auth } from '../../firebase.config'
// import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
// import toast, { Toaster } from 'react-hot-toast'
// import Cookies from 'js-cookie'
// import { useNavigate } from 'react-router-dom'
// import { v4 as uuidv4 } from 'uuid';
// import Footer from '../components/Footer'
// import axios from 'axios'

// function Login() {
//   const [otp, setOtp] = useState("");
//   const [ph, setPh] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showOtp, setShowOtp] = useState(false);
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();
//   const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
//   // console.log("Url is:", BACKEND_URL)


  

//   // Check if user is already logged in
//   useEffect(() => {
//     const userId = Cookies.get('user_id');
//     if (userId) {
//       navigate('/profile');
//     }
//   }, [navigate]);

//   function isMobile() {
//     return /Mobi|Android/i.test(navigator.userAgent);
//   }

//   function onCaptchVerify() {
//     if (window.recaptchaVerifier) {
//       window.recaptchaVerifier.clear(); // Clear any previous instance
//     }

//     const size = isMobile() ? 'normal' : 'invisible';

//     if (!window.recaptchaVerifier) {
//       window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', 
//         {
//           size: size,
//           callback: (response) => {
//             // onSignup()
//           },
//           'expired-callback': () => {
//             toast.error("reCAPTCHA expired. Please try again.");
//           }
//         });
//     }
//   }

//   function onSignup() {
//     setLoading(true)
//     onCaptchVerify()

//     const appVerifier = window.recaptchaVerifier
//     const formatPh = '+' + ph
//     signInWithPhoneNumber(auth, formatPh, appVerifier)
//       .then((confirmationResult) => {
//         window.confirmationResult = confirmationResult;
//         setLoading(false);
//         console.log("Done!")
//         setShowOtp(true);
//         toast.success("OTP sent successfully!")
//       }).catch((error) => {
//         // console.log("Hello from error!")
//         console.log(error)
//         setLoading(false)
//         if (error.message.includes("reCAPTCHA")) {
//           onCaptchVerify(); 
//         }
//     });
//   }
  
 
//   // function onOTPVerify() {
//   //   setLoading(true)
//   //   window.confirmationResult.confirm(otp).then(async (res) => {
//   //     console.log(res);
//   //     setUser(res.user);

//   //     const formatPh = ph;
//   //     // console.log('Formatted Phone:', formatPh);

//   //     const datas = await axios.get(`http://localhost:5000/user/${formatPh}`, {
//   //       headers: {
//   //           'Accept': 'application/json',
//   //           'Content-Type': 'application/json',
//   //       },
//   //     });

//   //     let user_Id;
//   //     if(datas){
//   //       console.log('Exist')
//   //       user_Id = datas.data.userid;
//   //     } else{
//   //       console.log('Not exist')
//   //       user_Id = uuidv4();
//   //     }

//   //     Cookies.set('user_id', user_Id, { expires: 7 }); 

//   //     console.log(user_Id);
//   //     // Set a cookie with a unique UUID for the user
//   //     // const userId = uuidv4();
//   //     // Cookies.set('user_id', userId, { expires: 7 }); // Cookie expires in 7 days

//   //     setLoading(false);
      
//   //     // Redirect to the profile page
//   //     if(datas){
//   //       navigate('/dashboard');
//   //     } else{
//   //       navigate('/profile');
//   //     }
//   //   }).catch(err => {
//   //     console.log(err);
//   //     setLoading(false);
//   //   })
//   // }

//   // if (window.recaptchaVerifier) {
//   //   window.recaptchaVerifier.clear();
//   // }

//   function onOTPVerify() {
//     setLoading(true);
//     window.confirmationResult.confirm(otp).then(async (res) => {
//       console.log(res);
//       setUser(res.user);
  
//       const formatPh = ph;
  
//       let user_Id;
//       try {
//         const datas = await axios.get(`${BACKEND_URL}/user/${formatPh}`, {
//           headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//           },
//         });
  
//         // Check if the response has the desired properties
//         if (datas && datas.data && datas.data.userid) {
//           console.log('User exists');
//           user_Id = datas.data.userid;
//           navigate('/dashboard');
//         } else {
//           console.log('User does not exist');
//           user_Id = uuidv4();
//           navigate('/profile');
//         }
  
//         // Set the user ID cookie
//         Cookies.set('user_id', user_Id, { expires: 7, secure: true, sameSite: 'None' });

//         console.log('User ID:', user_Id);
  
//       } catch (error) {
//         console.log("Error occurred while fetching user data:", error);
//         user_Id = uuidv4(); // If there's an error, treat as a new user
//         Cookies.set('user_id', user_Id, { expires: 7 });
//         navigate('/profile'); // Redirect to profile page as a new user
//       }
  
//       setLoading(false);
//     }).catch(err => {
//       console.log("OTP verification failed:", err);
//       setLoading(false);
//     });
//   }
  

//   return (
//     <div className='overflow-x-hidden h-screen'>
//       <div className='bg-zinc-800 relative text-white w-screen p-12 h-[250px]'>
//           <div className='flex items-center justify-between'>
//             <div className=' h-[50px] w-[70px]'>
//               <img src={Logo} alt="" />
//             </div>
//           </div>
//           <div className='z-20 absolute top-8 right-10 '>
//             <Sidebar></Sidebar>
//           </div>
//           <div className='text-orange-500 mt-6'>
//             <h1 className='text-2xl'>Register</h1>
//             <h1>Life is either a thrilling ride or a stagnant existence</h1>
//           </div>
//         </div>

//         <section className='h-full overflow-y-clip '>
//           <Toaster toastOptions={{duration: 4000}}/>
//           <div id='recaptcha-container'></div>
//           {
//             user ? (
//               <h2 className='text-center text-white font-medium text-2xl'>
//                 Login Success
//               </h2>
//             ) : (
//               <div className='px-4 md:px-40 p-10 font-quicksand inline-flex'>
//                 {showOtp ? (
//                   <div className='flex flex-col gap-4'>
//                     <label htmlFor="otp">Enter your OTP</label>
//                     <OtpInput value={otp} onChange={setOtp} OTPLength={6} otpType='number' disabled={false} autoFocus inputStyles={{
//                       border: "1px solid black",
//                       borderRadius: "8px"
//                     }} />

//                     <button onClick={onOTPVerify} type="button"
//                         className="inline-flex items-center justify-center gap-1 font-semibold font-quicksand text-white bg-orange-600 hover:bg-orange-700 focus:ring-2 focus:ring-orange-300 text-sm rounded-lg px-3 py-1.5 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800">
//                       {loading && <CgSpinner className='mt-1 animate-spin' size={20} />}
//                       <span>Verify OTP</span>
//                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
//                         <path fillRule="evenodd" d="M2 8c0 .414.336.75.75.75h8.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H2.75A.75.75 0 0 0 2 8Z" clipRule="evenodd" />
//                       </svg>
//                     </button>
//                   </div>
//                 ) : (
//                   <div className='flex flex-col gap-4'>
//                     <label htmlFor="">Phone Number</label>
//                     <PhoneInput country={'in'} value={ph} onChange={setPh} className='font-quicksand'/>
//                     {/* <p className='text-sm inline-flex'>We'll send OTP (One Time Password) to this phone number to login to your account.</p> */}
//                     <button onClick={onSignup} type="button"
//                       disabled={loading}
//                       className="inline-flex items-center justify-center gap-1 font-semibold font-quicksand text-white bg-orange-600 hover:bg-orange-700 focus:ring-2 focus:ring-orange-300 text-sm rounded-lg px-3 py-1.5 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800">
//                       {loading && <CgSpinner className='mt-1 animate-spin' size={12} />}
//                       <span>Send OTP</span>
//                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
//                         <path fillRule="evenodd" d="M2 8c0 .414.336.75.75.75h8.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H2.75A.75.75 0 0 0 2 8Z" clipRule="evenodd" />
//                       </svg>
//                     </button>

//                   </div>
//                 )}
//               </div>
//             )
//           }
//         </section>

//         <Footer></Footer>
//     </div>
//   )
// }

// export default Login;




import React, { useReducer, useEffect, useCallback } from 'react';
import Sidebar from '../components/Sidebar';
import Logo from "../assets/Logoo.svg";
import OtpInput from 'otp-input-react';
import { CgSpinner } from 'react-icons/cg';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../../firebase.config';
import toast, { Toaster } from 'react-hot-toast';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Footer from '../components/Footer';
import axios from 'axios';

const initialState = {
  otp: '',
  phone: '',
  loading: false,
  showOtp: false,
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_OTP':
      return { ...state, otp: action.payload };
    case 'SET_PHONE':
      return { ...state, phone: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_SHOW_OTP':
      return { ...state, showOtp: action.payload };
    case 'SET_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

function Login() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  // Check if user is already logged in
  useEffect(() => {
    const userId = Cookies.get('user_id');
    if (userId) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const isMobile = useCallback(() => /Mobi|Android/i.test(navigator.userAgent), []);

  const onCaptchaVerify = useCallback(() => {
    if (window.recaptchaVerifier) {
      window.recaptchaVerifier.clear(); // Clear previous instance
    }

    const size = isMobile() ? 'normal' : 'invisible';
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size,
        callback: (response) => {
          // Recaptcha solved
        },
        'expired-callback': () => {
          toast.error("Recaptcha expired. Please verify again.");
        },
      });
    }
  }, [isMobile]);

  const onSignup = useCallback(() => {
    if (!state.phone) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    dispatch({ type: 'SET_LOADING', payload: true });
    onCaptchaVerify();

    const appVerifier = window.recaptchaVerifier;
    const formattedPhone = '+' + state.phone;

    signInWithPhoneNumber(auth, formattedPhone, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        dispatch({ type: 'SET_LOADING', payload: false });
        dispatch({ type: 'SET_SHOW_OTP', payload: true });
        toast.success("OTP sent successfully!");
      })
      .catch((error) => {
        dispatch({ type: 'SET_LOADING', payload: false });
        console.error("Error sending OTP:", error);
        toast.error("Failed to send OTP. Try again.");
      });
  }, [state.phone, onCaptchaVerify]);

  const onOTPVerify = useCallback(() => {
    if (!state.otp) {
      toast.error("Please enter the OTP.");
      return;
    }

    dispatch({ type: 'SET_LOADING', payload: true });
    window.confirmationResult.confirm(state.otp)
      .then(async (res) => {
        const user = res.user;
        dispatch({ type: 'SET_USER', payload: user });

        let userId;
        try {
          const response = await axios.get(`${BACKEND_URL}/user/${state.phone}`, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          });

          if (response.data && response.data.userid) {
            userId = response.data.userid;
            navigate('/dashboard');
          } else {
            userId = uuidv4();
            navigate('/profile');
          }
        } catch (error) {
          console.error("Error fetching user:", error);
          userId = uuidv4(); // Treat as new user if error occurs
          navigate('/profile');
        }

        // Set the user ID in cookies for 7 days
        Cookies.set('user_id', userId, { expires: 7, secure: true, sameSite: 'Strict' });
        dispatch({ type: 'SET_LOADING', payload: false });
      })
      .catch((error) => {
        console.error("OTP verification failed:", error);
        dispatch({ type: 'SET_LOADING', payload: false });
        toast.error("OTP verification failed. Try again.");
      });
  }, [state.otp, state.phone, BACKEND_URL, navigate]);

  return (
    <div className='min-h-screen flex flex-col overflow-hidden font-quicksand'>
      <Toaster toastOptions={{ duration: 4000 }} />
      <div id='recaptcha-container'></div>
      
      {/* Navbar and Header */}
      <header className='bg-zinc-800 text-white p-12'>
        <div className='flex justify-between items-center'>
          <img src={Logo} alt="Logo" className='h-12 w-14' />
          <Sidebar />
        </div>
        <div className='text-orange-500 mt-6'>
          <h1 className='text-2xl'>Register</h1>
          <p>Life is either a thrilling ride or a stagnant existence</p>
        </div>
      </header>

      {/* Form Section */}
      <section className=''>
        <div className='h-full overflow-y-clip '>
          {state.user ? (
            <h2 className='text-center text-green-600 font-bold text-xl'>
              Login Success!
            </h2>
          ) : (
            <div className='px-4 md:px-40 p-10 font-quicksand inline-flex'>
              {state.showOtp ? (
                <div className='flex flex-col gap-4'>
                  <label htmlFor="otp" className='block text-black'>Enter your OTP</label>
                  <OtpInput value={state.otp} onChange={(value) => dispatch({ type: 'SET_OTP', payload: value })} OTPLength={6} otpType='number' inputStyles={{
                    border: "1px solid black",
                    borderRadius: "8px"
                  }} />

                  <button onClick={onOTPVerify} type="button"
                    className="inline-flex items-center justify-center gap-1 font-semibold font-quicksand text-white bg-orange-600 hover:bg-orange-700 focus:ring-2 focus:ring-orange-300 text-sm rounded-lg px-3 py-1.5 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800">
                    {state.loading ? <CgSpinner className='animate-spin' size={24} /> : 'Verify OTP'}
                  </button>
                </div>
              ) : (
                <div className='flex flex-col gap-4'>
                  <label htmlFor="phone" className='block text-gray-600'>Phone Number</label>
                  <PhoneInput country={'in'} value={state.phone} onChange={(phone) => dispatch({ type: 'SET_PHONE', payload: phone })} className='font-quicksand' />

                  <button onClick={onSignup} type="button"
                    className="inline-flex items-center justify-center gap-1 font-semibold font-quicksand text-white bg-orange-600 hover:bg-orange-700 focus:ring-2 focus:ring-orange-300 text-sm rounded-lg px-3 py-1.5 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800">
                    {state.loading ? <CgSpinner className='animate-spin' size={24} /> : 'Send OTP'}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
} 

export default Login;

