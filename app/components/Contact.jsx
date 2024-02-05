"use client";
import React, { useState } from "react";

const Contact = () => {
  const [submit, setSubmit] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const newObj = { ...formData, [event.target.name]: event.target.value };
    setFormData(newObj);
  };

  const handleSubmit = (e) => {
    const validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    }
    if (!formData.message.trim()) {
      validationErrors.message = "Message is required";
    }

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmit(true);
      e.target.submit();
    } else {
      setSubmit(false);
      e.preventDefault();
    }
  };

  return (
    <div
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
      name="contact"
    >
      <form
        onSubmit={handleSubmit}
        method="post"
        action={
          submit
            ? "https://getform.io/f/294ea929-1973-42bc-a8a1-ce7952929ef9"
            : undefined
        }
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email -
            normanamorganda@gmail.com
          </p>
        </div>
        <input
          type="text"
          placeholder={errors.name == undefined ? "Name" : errors.name}
          name="name"
          className="bg-[#ccd6f6] p-2"
          onChange={handleChange}
        >
          {/* {errors.name && <span>{errors.name}</span>} */}
        </input>
        <input
          type="email"
          placeholder={errors.email == undefined ? "Email" : errors.email}
          name="email"
          className="my-4 p-2 bg-[#ccd6f6]"
          onChange={handleChange}
        >
          {/* {errors.email && <span>{errors.email}</span>} */}
        </input>
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder={errors.message == undefined ? "Message" : errors.message}
          onChange={handleChange}
        >
          {/* {errors.message && <span>{errors.message}</span>} */}
        </textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Lets Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
