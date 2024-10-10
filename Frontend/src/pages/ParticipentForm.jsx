import React, { useState } from 'react';

function ParticipantForm({ index, updateParticipantData }) {
  const [formData, setFormData] = useState({
    profilePicture: null,
    firstName: '',
    lastName: '',
    birthDate: '',
    gender: '',
    height: '',
    weight: '',
    passportnumber: '', 
    email: '',
    idProof: null,
    mobile: '',
    bloodGroup: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = {
      ...formData,
      [name]: value,
    };
    setFormData(newFormData);
    updateParticipantData(index, newFormData);
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const newFormData = {
      ...formData,
      [name]: files[0],
    };
    setFormData(newFormData);
    updateParticipantData(index, newFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Additional submission logic if needed
  };

  return (
    <form
      className="max-w-4xl mx-auto mt-6 mb-6 p-12 font-quicksand bg-gray-100 shadow-md rounded-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Personal Details</h2>

      {/* Profile Picture */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="flex flex-row items-center gap-1 text-sm font-medium text-gray-700 mb-1">Profile Picture <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#a10534" class="size-1.5">
              <path fill-rule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z" clip-rule="evenodd" />
            </svg></label>
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
      </div>

      {/* Personal Information Fields */}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <label className=" text-sm font-medium text-gray-700 mb-1 flex flex-row items-center gap-1">First Name <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#a10534" class="size-1.5">
              <path fill-rule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z" clip-rule="evenodd" />
            </svg></label>
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
          <label className="flex flex-row items-center gap-1 text-sm font-medium text-gray-700 mb-1">Last Name <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#a10534" class="size-1.5">
              <path fill-rule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z" clip-rule="evenodd" />
            </svg></label>
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
          <label className="flex flex-row items-center gap-1 text-sm font-medium text-gray-700 mb-1">Birth Date <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#a10534" class="size-1.5">
              <path fill-rule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z" clip-rule="evenodd" />
            </svg></label>
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
          <label className="flex flex-row items-center gap-1 text-sm font-medium text-gray-700 mb-1">Gender <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#a10534" class="size-1.5">
              <path fill-rule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z" clip-rule="evenodd" />
            </svg></label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Height (cm)</label>
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Weight (kg)</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
        <div>
          <label className="flex flex-row items-center gap-1 text-sm font-medium text-gray-700 mb-1">Passport Number <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#a10534" class="size-1.5">
              <path fill-rule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z" clip-rule="evenodd" />
            </svg></label>
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
          <label className="flex flex-row items-center gap-1 text-sm font-medium text-gray-700 mb-1">Email <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#a10534" class="size-1.5">
              <path fill-rule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z" clip-rule="evenodd" />
            </svg></label>
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
          <label className="flex flex-row gap-1 items-center text-sm font-medium text-gray-700 mb-1">Blood Group <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#a10534" class="size-1.5">
              <path fill-rule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z" clip-rule="evenodd" />
            </svg></label>
          <input
            type="text"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
        <div>
          <label className="flex flex-row items-center gap-1 text-sm font-medium text-gray-700 mb-1">Mobile <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#a10534" class="size-1.5">
              <path fill-rule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z" clip-rule="evenodd" />
            </svg></label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">ID Proof</label>
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

      {/* <div className="flex justify-end mt-8">
        <button
          type="submit"
          className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
        >
          Save →
        </button>
      </div> */}
    </form>
  );
}

export default ParticipantForm;
