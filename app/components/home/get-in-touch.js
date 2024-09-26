"use client";
import React, { useState } from 'react';

function GetInTouch() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    toEmail: 'mateen@thesysnetic.com'
  });
  
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        setSuccessMessage('Thank you for getting in touch! We will contact you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      } else {
        setSuccessMessage('There was an issue sending the email.');
      
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      }
    } catch (error) {
      setSuccessMessage('Error: Unable to send message.');
    
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-[1200px] mx-auto" id="contact">
      <div className="flex flex-col gap-10 py-24 px-5 xl:px-0">
        <div className="text-black font-semibold text-3xl">Get in touch</div>
        <div className="text-black font-normal text-xl">
          Remember, in the world of startups, you&apos;re either disrupting or being disrupted. With Product House, disruption isn&apos;t just a buzzword - it&apos;s a way of life.
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-3 gap-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="border-b-2 border-[#C7C7C7] focus:outline-none focus:border-primary1 w-full py-5 px-2 placeholder-black placeholder:font-medium placeholder:text-[17px]"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="border-b-2 border-[#C7C7C7] focus:outline-none focus:border-primary1 w-full py-5 px-2 placeholder-black placeholder:font-medium placeholder:text-[17px]"
            />

            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number (optional)"
              className="border-b-2 border-[#C7C7C7] focus:outline-none focus:border-primary1 w-full py-5 px-2 placeholder-black placeholder:font-medium placeholder:text-[17px]"
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required
            className="border-b-2 border-[#C7C7C7] focus:outline-none focus:border-primary1 w-full py-5 px-2 md:mt-10 mt-4 placeholder-black placeholder:font-medium placeholder:text-[17px]"
          />
          <button
            type="submit"
            className="rounded text-primary1 bg-primary2 w-[212px] h-[52px] font-bold text-[16px] mt-10 hover:bg-[#47D5AC] focus:bg-[#13AF82]"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Leave us a message'}
          </button>
          {successMessage && <p className="mt-4 text-primary2">{successMessage}</p>}
        </form>
      </div>
    </section>
  );
}

export default GetInTouch;