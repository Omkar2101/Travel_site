import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Logo from "../assets/Logoo.svg"
import OtpInput from 'otp-input-react'
import { CgSpinner } from 'react-icons/cg'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { auth } from '../../firebase.config'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import toast, { Toaster } from 'react-hot-toast'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import Footer from '../components/Footer'
import axios from 'axios'

function Login() {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  

  // Check if user is already logged in
  useEffect(() => {
    const userId = Cookies.get('user_id');
    if (userId) {
      navigate('/profile');
    }
  }, [navigate]);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', 
        {
          size: 'invisible',
          callback: (response) => {
            // onSignup()
          },
          'expired-callback': () => {}
        });
    }
  }

  function onSignup() {
    setLoading(true)
    onCaptchVerify()

    const appVerifier = window.recaptchaVerifier
    const formatPh = '+' + ph
    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        console.log("Done!")
        setShowOtp(true);
        toast.success("OTP sent successfully!")
      }).catch((error) => {
        console.log("Hello from error!")
        console.log(error)
        setLoading(false)
    });
  }

  // function onOTPVerify() {
  //   setLoading(true)
  //   window.confirmationResult.confirm(otp).then(async (res) => {
  //     console.log(res);
  //     setUser(res.user);

  //     const formatPh = ph;
  //     // console.log('Formatted Phone:', formatPh);

  //     const datas = await axios.get(`http://localhost:5000/user/${formatPh}`, {
  //       headers: {
  //           'Accept': 'application/json',
  //           'Content-Type': 'application/json',
  //       },
  //     });

  //     let user_Id;
  //     if(datas){
  //       console.log('Exist')
  //       user_Id = datas.data.userid;
  //     } else{
  //       console.log('Not exist')
  //       user_Id = uuidv4();
  //     }

  //     Cookies.set('user_id', user_Id, { expires: 7 }); 

  //     console.log(user_Id);
  //     // Set a cookie with a unique UUID for the user
  //     // const userId = uuidv4();
  //     // Cookies.set('user_id', userId, { expires: 7 }); // Cookie expires in 7 days

  //     setLoading(false);
      
  //     // Redirect to the profile page
  //     if(datas){
  //       navigate('/dashboard');
  //     } else{
  //       navigate('/profile');
  //     }
  //   }).catch(err => {
  //     console.log(err);
  //     setLoading(false);
  //   })
  // }

  // if (window.recaptchaVerifier) {
  //   window.recaptchaVerifier.clear();
  // }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult.confirm(otp).then(async (res) => {
      console.log(res);
      setUser(res.user);
  
      const formatPh = ph;
  
      let user_Id;
      try {
        const datas = await axios.get(`http://localhost:5000/user/${formatPh}`, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });
  
        // Check if the response has the desired properties
        if (datas && datas.data && datas.data.userid) {
          console.log('User exists');
          user_Id = datas.data.userid;
          navigate('/dashboard');
        } else {
          console.log('User does not exist');
          user_Id = uuidv4();
          navigate('/profile');
        }
  
        // Set the user ID cookie
        Cookies.set('user_id', user_Id, { expires: 7 });
        console.log('User ID:', user_Id);
  
      } catch (error) {
        console.log("Error occurred while fetching user data:", error);
        user_Id = uuidv4(); // If there's an error, treat as a new user
        Cookies.set('user_id', user_Id, { expires: 7 });
        navigate('/profile'); // Redirect to profile page as a new user
      }
  
      setLoading(false);
    }).catch(err => {
      console.log("OTP verification failed:", err);
      setLoading(false);
    });
  }
  

  return (
    <div className='overflow-x-hidden h-screen'>
      <div className='bg-zinc-800 relative text-white w-screen p-12 h-[250px]'>
          <div className='flex items-center justify-between'>
            <div className=' h-[50px] w-[70px]'>
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className='z-20 absolute top-8 right-10 '>
            <Sidebar></Sidebar>
          </div>
          <div className='text-orange-500 mt-6'>
            <h1 className='text-2xl'>Register</h1>
            <h1>Life is either a thrilling ride or a stagnant existence</h1>
          </div>
        </div>

        <section className='h-full overflow-y-clip '>
          <Toaster toastOptions={{duration: 4000}}/>
          <div id='recaptcha-container'></div>
          {
            user ? (
              <h2 className='text-center text-white font-medium text-2xl'>
                Login Success
              </h2>
            ) : (
              <div className='px-4 md:px-40 p-10 font-quicksand inline-flex'>
                {showOtp ? (
                  <div className='flex flex-col gap-4'>
                    <label htmlFor="otp">Enter your OTP</label>
                    <OtpInput value={otp} onChange={setOtp} OTPLength={6} otpType='number' disabled={false} autoFocus inputStyles={{
                      border: "1px solid black",
                      borderRadius: "8px"
                    }} />

                    <button onClick={onOTPVerify} type="button"
                        className="inline-flex items-center justify-center gap-1 font-semibold font-quicksand text-white bg-orange-600 hover:bg-orange-700 focus:ring-2 focus:ring-orange-300 text-sm rounded-lg px-3 py-1.5 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800">
                      {loading && <CgSpinner className='mt-1 animate-spin' size={20} />}
                      <span>Verify OTP</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                        <path fillRule="evenodd" d="M2 8c0 .414.336.75.75.75h8.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H2.75A.75.75 0 0 0 2 8Z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <div className='flex flex-col gap-4'>
                    <label htmlFor="">Phone Number</label>
                    <PhoneInput country={'in'} value={ph} onChange={setPh} className='font-quicksand'/>
                    {/* <p className='text-sm inline-flex'>We'll send OTP (One Time Password) to this phone number to login to your account.</p> */}
                    <button onClick={onSignup} type="button"
                      className="inline-flex items-center justify-center gap-1 font-semibold font-quicksand text-white bg-orange-600 hover:bg-orange-700 focus:ring-2 focus:ring-orange-300 text-sm rounded-lg px-3 py-1.5 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800">
                      {loading && <CgSpinner className='mt-1 animate-spin' size={12} />}
                      <span>Send OTP</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                        <path fillRule="evenodd" d="M2 8c0 .414.336.75.75.75h8.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H2.75A.75.75 0 0 0 2 8Z" clipRule="evenodd" />
                      </svg>
                    </button>

                  </div>
                )}
              </div>
            )
          }
        </section>

        <Footer></Footer>
    </div>
  )
}

export default Login;