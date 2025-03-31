import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { vehiclesApi } from "../features/api/vehiclesApi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { bookingApi } from "../features/api/bookingApi";
import { useNavigate } from "react-router-dom";

interface BookingDetails {
  booking_date: string;
  return_date: string;
  location_name: string;
}

const VehicleDetails: React.FC = () => {
  const navigate = useNavigate();
  const [createBooking] = bookingApi.useCreateBookingMutation();
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);
  const vehicle_id = window.location.pathname.split("/")[2];
  const user_id = user?.id;

  const { data: carWithDetails, error, isLoading } = vehiclesApi.useGetOneVehicleWithDetailsByIdQuery(vehicle_id);

  const { register, handleSubmit, watch, formState: { errors } } = useForm<BookingDetails>();
console.log(errors)
  const [total_amount, setAmount] = useState<number>(0);
  const rentalRate = carWithDetails?.rental_rate ? parseFloat(carWithDetails.rental_rate) : 0;

  const booking_date = watch("booking_date");
  const return_date = watch("return_date");

  useEffect(() => {
    if (booking_date && return_date) {
      const booking = new Date(booking_date);
      const returning = new Date(return_date);
      const diffTime = Math.abs(returning.getTime() - booking.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const totalAmount = diffDays * rentalRate;
      setAmount(totalAmount);
    }
  }, [booking_date, return_date, rentalRate]);

  const onSubmit = async (data: BookingDetails) => {
    const vehicleIdNumber = parseInt(vehicle_id, 10);
    const bookingData = {
      ...data,
      total_amount,
      user_id,
      vehicle_id: vehicleIdNumber,
    };

    if (!isAuthenticated) {
      alert("Please login to book a vehicle");
      return;
    }

    try {
      await createBooking(bookingData).unwrap();
      navigate("/dashboard/bookings");
    } catch (error) {
      console.error("Failed to book vehicle:", error);
    }
  };

  if (isLoading) return <div className="text-center text-gray-300">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error fetching vehicle data</div>;
  if (!carWithDetails) return <div className="text-center text-gray-400">No vehicle details available</div>;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-900 text-white py-12 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Left Section: Image + Details */}
          <div className="md:w-1/2">
            <img
              src={carWithDetails.vehicleSpecs.imageUrl}
              alt={`${carWithDetails.vehicleSpecs.manufacturer} ${carWithDetails.vehicleSpecs.model}`}
              className="w-full h-80 object-cover rounded-lg "
            />
            <div className="mt-6 bg-blue-950 p-6 rounded-lg shadow-lg text-white font-bold">
              <h2 className="text-3xl font-bold text-[#EAEAEA] mb-4">{`${carWithDetails.vehicleSpecs.manufacturer} ${carWithDetails.vehicleSpecs.model} (${carWithDetails.vehicleSpecs.year})`}</h2>
              <div className="grid grid-cols-2 gap-4 text-[#EAEAEA] text-lg">
                <p className="font-semibold"><strong>Fuel:</strong> {carWithDetails.vehicleSpecs.fuel_type}</p>
                <p className="font-semibold"><strong>Engine:</strong> {carWithDetails.vehicleSpecs.engine_capacity}</p>
                <p className="font-semibold"><strong>Transmission:</strong> {carWithDetails.vehicleSpecs.transmission}</p>
                <p className="font-semibold"><strong>Seats:</strong> {carWithDetails.vehicleSpecs.seating_capacity}</p>
                <p className="font-semibold"><strong>Color:</strong> {carWithDetails.vehicleSpecs.color}</p>
                <p className="font-semibold"><strong>Rate:</strong> ${carWithDetails.rental_rate}/day</p>
                <p className="col-span-2"><strong>Availability:</strong> {carWithDetails.availability}</p>
              </div>
            </div>
          </div>

          {/* Right Section: Booking Form */}
          <div className="md:w-1/2 bg-blue-300 p-8 rounded-lg shadow-lg text-black">
            <h2 className="text-4xl font-bold text-center  mb-6">Book This Vehicle</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4  text-md">
                <label className="block text-black text-xl font-bold mb-2">Booking Date</label>
                <input
                  type="date"
                  {...register("booking_date", { required: "Booking date is required" })}
                  className="w-full p-3 border rounded bg-[#1E3A8A] text-white focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="mb-4">
                <label className="block text-black text-xl font-bold mb-2">Return Date</label>
                <input
                  type="date"
                  {...register("return_date", { required: "Return date is required" })}
                  className="w-full p-3 border rounded bg-[#1E3A8A] text-white focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="mb-4">
                <label className="block text-black text-xl font-bold mb-2">Location</label>
                <select
                  {...register("location_name", { required: "Location is required" })}
                  className="w-full p-3 border rounded bg-[#1E3A8A] text-white focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Select Location</option>
                  <option value="Nairobi">Nairobi</option>
                  <option value="Mombasa">Mombasa</option>
                  <option value="Kisumu">Kisumu</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-black text-xl font-bold mb-2">Total Amount</label>
                <input type="number" value={total_amount} readOnly className="w-full p-3 border rounded bg-[#1E3A8A] text-white" />
              </div>

              <button type="submit" className="w-full bg-[#3A7CA5] hover:bg-[#2563EB] text-black text-2xl font-bold py-3 rounded transition">
                Book Now 🚗
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VehicleDetails;
