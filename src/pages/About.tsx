import React from 'react';
import { Info } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About: React.FC = () => {
  const staffData = [
    { name: 'John Doe', position: 'CEO', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { name: 'Jim Brown', position: 'CFO', image: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { name: 'Jenny Green', position: 'HR Manager', image: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { name: 'Jerry Blue', position: 'Lead Developer', image: 'https://randomuser.me/api/portraits/men/4.jpg' },
    { name: 'Jessica Yellow', position: 'Product Manager', image: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { name: 'Joan Orange', position: 'Customer Support', image: 'https://randomuser.me/api/portraits/women/5.jpg' },
  ];

  const services = [
    { name: 'Wide Range of Vehicles', description: 'Choose from sedans, SUVs, and luxury cars.' },
    { name: 'Flexible Booking', description: 'Short-term and long-term rental options available.' },
    { name: '24/7 Support', description: 'Round-the-clock customer service assistance.' },
    { name: 'Online Booking', description: 'Book vehicles easily through our platform.' },
    { name: 'Competitive Pricing', description: 'Affordable rates with no hidden fees.' },
  ];

  return (
    <>
      <Navbar />
      <div className="p-6 min-h-screen max-w-5xl mx-auto bg-gradient-to-b from-blue-500 to-blue-900 text-gray-50">
        {/* Header */}
        <div className="flex items-center space-x-2 text-white">
          <Info className="w-6 h-6" />
          <h1 className="text-2xl font-bold">About Us</h1>
        </div>

        {/* About Text */}
        <p className="mt-4 text-sm text-justify">
          Welcome to our Vehicle Rental Management System. We provide an efficient platform for renting vehicles, ensuring a smooth experience for customers and administrators.
        </p>

        {/* Features & Services in One Row */}
        <div className="flex flex-row mr-30 md:flex-row md:space-x-10 mt-6">
          {/* Features */}
          <div className="md:w-3/5 mr-52">
            <h2 className="text-lg font-semibold text-white">Our Features</h2>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
              <li>Easy-to-use booking system</li>
              <li>Secure online payments</li>
              <li>Comprehensive admin dashboard</li>
              <li>Detailed reports and analytics</li>
              <li>Responsive and accessible UI</li>
            </ul>
          </div>

          {/* Services */}
          <div className="md:w-1/2">
            <h2 className="text-lg font-semibold text-white">Our Services</h2>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
              {services.map((service, index) => (
                <li key={index}>
                  <strong>{service.name}:</strong> {service.description}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <h2 className="text-lg font-semibold text-while mt-6">Meet Our Team</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2">
          {staffData.map((staff, index) => (
            <div key={index} className="text-center">
              <img src={staff.image} alt={staff.name} className="w-16 h-16 mx-auto rounded-full object-cover" />
              <h3 className="text-sm font-bold mt-2">{staff.name}</h3>
              <p className="text-xs text-gray-50">{staff.position}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
