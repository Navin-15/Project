// src/pages/BookingSummary.jsx
// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const BookingSummary = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const booking = location.state;

//   if (!booking) {
//     return <p>No booking data available.</p>;
//   }

//   return (
//     <div className="container mt-4">
//       <h2>🎟 Booking Summary</h2>
//       <p><strong>Date:</strong> {booking.date}</p>
//       <p><strong>Time:</strong> {booking.time}</p>
//       <p><strong>Seats:</strong> {booking.seats.join(', ')}</p>
//       <p><strong>Total Price:</strong> ₹{booking.totalPrice}</p>
//       <button className="btn btn-primary" onClick={() => navigate('/')}>Back to Home</button>
//     </div>
//   );
// };

// export default BookingSummary;
