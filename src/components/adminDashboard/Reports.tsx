import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

// Dummy data for the report
const bookingData = [
  { name: 'Jan', bookings: 4000 },
  { name: 'Feb', bookings: 3000 },
  { name: 'Mar', bookings: 5000 },
  { name: 'Apr', bookings: 4500 },
  { name: 'May', bookings: 6000 },
];

const revenueData = [
  { month: 'Jan', revenue: 10000 },
  { month: 'Feb', revenue: 8000 },
  { month: 'Mar', revenue: 12000 },
  { month: 'Apr', revenue: 11000 },
  { month: 'May', revenue: 15000 },
];

const ticketData = [
  { type: 'Resolved', count: 300 },
  { type: 'Pending', count: 150 },
  { type: 'Closed', count: 200 },
];

const userData = [
  { role: 'Admins', count: 10 },
  { role: 'Drivers', count: 50 },
  { role: 'Customers', count: 200 },
];

const Report: React.FC = () => {
  return (
    <div className="container w-5/5 mx-auto py-6 bg-gradient-to-r from-blue-100 to-blue-200">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">Car Rental System Report</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Monthly Bookings */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Monthly Bookings</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={bookingData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="bookings" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Monthly Revenue */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Monthly Revenue</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={revenueData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Ticket Statistics */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Ticket Status</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={ticketData}>
              <XAxis dataKey="type" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* User Distribution */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">User Distribution</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={userData}>
              <XAxis dataKey="role" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Report;
