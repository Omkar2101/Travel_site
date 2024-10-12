import Logo from "../assets/Logoo.svg";
import Sidebar from "../components/Sidebar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Cookies from "js-cookie"; // Ensure you have js-cookie installed
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import TextField from '@mui/material/TextField';
import "react-toastify/dist/ReactToastify.css";


function Profile() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [toastmsg, setToastmsg] = useState("Please fill all the details");
  const notify = () =>
    toast(toastmsg, {
      className: "bg-red-500 text-white", // Tailwind classes for red background and white text
      bodyClassName: "font-medium", // Optional: style the text inside the toast
      progressClassName: "bg-red-500", // Optional: style the progress bar
    });
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    passportnumber: "",
    lastName: "",
    birthDate: "",
    gender: "",
    email: "",
    mobile: "",
    bloodGroup: "",
    address: "",
    userid: "", // Initialize userid in the formData state
    profilePicture: "",
    idProof: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Set userid from cookie when the component mounts
  useEffect(() => {
    const useridFromCookie = Cookies.get("user_id");
    if (useridFromCookie) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        userid: useridFromCookie, // Set userid from the cookie
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData.birthDate);
    
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    // Validate mobile number
    if (formData.mobile.length < 12) {
      setToastmsg("Enter a valid number with country code.");
      notify();
      setLoading(false);
      return;
    }

    try {
      // Prepare the form data for submission
      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      console.log(data);

      // Make the POST request
      const response = await axios.post(`${BACKEND_URL}/profile`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("response ++++++++++++++", response);

      if (response.status === 201) {
        setSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          passportnumber: "",
          birthDate: "",
          gender: "",
          email: "",
          mobile: "",
          bloodGroup: "",
          address: "",
          userid: "", // Reset userid after form submission
          profilePicture: "",
          idProof: "",
        });
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      setToastmsg("An error occurred while submitting the form.");
      notify();
      // setError("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="overflow-x-hidden">
        <div className="container  font-quicksand">
          <div className="bg-zinc-800 w-screen relative text-white p-6 md:p-12 h-[200px] md:h-[250px]">
            <div className="flex items-center justify-between">
              <div className="h-[40px] md:h-[50px] w-[60px] md:w-[70px]">
                <img src={Logo} alt="" />
              </div>
            </div>
            <div className="absolute top-4 md:top-8 right-5 md:right-10">
              <Sidebar />
            </div>

            <div className="text-orange-500 mt-4 md:mt-6">
              <h1 className="text-xl md:text-2xl">My Profile</h1>
              <h1>
                Keep your profile up to date for a better travel experience.
              </h1>
            </div>
          </div>

          <form
            className="max-w-4xl mx-auto mt-6 mb-6 p-6 md:p-12 bg-gray-100 shadow-md rounded-lg"
            onSubmit={handleSubmit}
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Personal Details
            </h2>

            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && (
              <p className="text-green-500 mb-4">
                Form submitted successfully!
              </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Profile Picture
                </label>
                <input
                  type="file"
                  name="profilePicture"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="mt-1 block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-gray-500 file:text-white
                    hover:file:bg-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ID Proof
                </label>
                <input
                  type="file"
                  name="idProof"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="mt-1 block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-gray-500 file:text-white
                    hover:file:bg-gray-600"
                />
              </div>
            </div>

            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Passport Number
                </label>
                <input
                  type="text"
                  name="passportnumber"
                  value={formData.passportnumber}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Birth Date
                </label>
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile
                </label>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  maxLength="12"
                  className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  placeholder="XX 1234567890"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Blood Group
                </label>
                <select
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="py-2 px-4 bg-orange-500 text-white rounded-md shadow-md hover:bg-orange-600 focus:outline-none"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>

        <Footer />
        <ToastContainer />
      </div>
    </>
  );
}

export default Profile;
