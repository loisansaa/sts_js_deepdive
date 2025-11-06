import './App.css'

import React, { useState } from "react";

export default function UserForm() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
    age: "",
    occupation: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    setSubmittedData(formData);
    setFormData({
      email: "",
      phone: "",
      name: "",
      age: "",
      occupation: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">
          User Information Form
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="text"
          name="occupation"
          placeholder="Occupation"
          value={formData.occupation}
          onChange={handleChange}
          className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>

      {submittedData && (
        <div className="bg-white mt-6 p-4 rounded-2xl shadow-md w-full max-w-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Submitted Data
          </h3>
          <ul className="list-disc list-inside text-gray-600">
            <li><strong>Email:</strong> {submittedData.email}</li>
            <li><strong>Phone:</strong> {submittedData.phone}</li>
            <li><strong>Name:</strong> {submittedData.name}</li>
            <li><strong>Age:</strong> {submittedData.age}</li>
            <li><strong>Occupation:</strong> {submittedData.occupation}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

