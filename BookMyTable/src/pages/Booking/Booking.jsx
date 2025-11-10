import React from "react";
import "./Booking.css";

const Booking = () => {
  return (
    <div className="booking">
      <h2>Book Your Table</h2>
      <form className="booking-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="datetime-local" required />
        <select>
          <option value="">Select Guests</option>
          <option>2</option>
          <option>4</option>
          <option>6</option>
        </select>
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default Booking;
