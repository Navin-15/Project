
// import {useEffect} from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const BookingSummaryPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { theater, moviename, selectedSeats, totalPrice, date, time } = location.state || {};

// const handleConfirmBooking = async () => {
//   const bookingData = {
//     theater: theater,
//     moviename: moviename,
//     seats: selectedSeats.map(s => s.id),
//     seatDetails: selectedSeats,
//     totalPrice,
//     date,
//     time
//   };

  
//   try {
//     const response = await axios.post('http://localhost:5000/api/bookings', bookingData);
//     if (response.status === 200 || response.status === 201) {
//       alert("✅ Booking confirmed!");
//       console.log('Bookingdata:', bookingData);

//       // navigate('/seatlayout');
//     }
//   } catch (error) {
//     console.error("❌ Error saving booking:", error);
//   }
// };


//   const handleModify = () => {
//     // navigate('/seatlayout', { state: { selectedSeats } });
//     window.scrollTo(0, 0);
//     navigate(-1);
//   };

//   return (
//     <div className="container mt-5">
//       <h3>🎫 Booking Summary</h3>
//       <hr />
//       <p><strong>Theater:</strong> {theater}</p>
//       <p><strong>Movie Name:</strong> {moviename}</p>
//       <p><strong>Show Date:</strong> {date}</p>
//       <p><strong>Show Time:</strong> {time}</p>
//       <p><strong>Seats Selected:</strong> {selectedSeats?.map(s => s.id).join(', ')}</p>
//       <p><strong>Total Price:</strong> ₹{totalPrice}</p>

//       <div className="mt-4 d-flex gap-3">
//         <button className="btn btn-success" onClick={handleConfirmBooking}>Confirm Booking</button>
//         <button className="btn btn-warning" onClick={handleModify}>Modify Selection</button>
//       </div>
//     </div>
//   );
// };

// export default BookingSummaryPage;

//====================================================================================================================

// new code

// BookingSummaryPage.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';


function BookingSummaryPage() {
    const location = useLocation();
    
    const { movieName, theater, selectedSeats, totalPrice, date, time, screen } = location.state || {};

    const handleConfirmBooking = async () => {
    const bookingData = {
    theater: theater,
    moviename: movieName,
    seats: selectedSeats.map(s => s.id),
    seatDetails: selectedSeats,
    totalPrice,
    date,
    time,
    screen,
  };

  
  try {
    const response = await axios.post('http://localhost:5000/api/bookings', bookingData);
    if (response.status === 200 || response.status === 201) {
      alert("✅ Booking confirmed!");
      console.log('Bookingdata:', bookingData);

     
    }
  } catch (error) {
    console.error("❌ Error saving booking:", error);
  }
};


   

    if (!location.state) {
        return (
            <div>
               
                <div className="container my-5">
                    <h2>No Booking Information Found</h2>
                    <p>Please go back and select a movie and seats to view your booking summary.</p>
                    <button className="btn btn-primary" onClick={handleBackToHome}>Back to Home</button>
                </div>
                
            </div>
        );
    }

    return (
        <>
            {/* <Navbar /> */}
            <div className="container my-5 p-3 bg-light">
                <h3 className="mb-4">🎫 Booking Summary</h3>
                <div className="card p-4 shadow-sm">
                    <p className="card-text fw-medium"><strong>Theater:</strong> {theater}</p>
                    <p className="card-text fw-medium"><strong>Movie:</strong> {movieName}</p>
                    <p className="card-text fw-medium"><strong>Screen:</strong> {screen}</p> 
                    <p className="card-text"><strong>Date:</strong> {date}</p>
                    <p className="card-text"><strong>Time:</strong> {time}</p>
                    <p className="card-text"><strong>Selected Seats:</strong> {selectedSeats.map(seat => seat.id).join(', ')}</p>
                    <h4 className="mt-2"><strong className='text-danger'>Total Price:</strong> ₹{totalPrice}</h4>
                </div>
                
                <div className="mt-4 d-flex gap-3">
                    <button className="btn btn-success" onClick={handleConfirmBooking}>Confirm Booking</button>
                    
                </div>
            </div>
            
        </>
    );
}

export default BookingSummaryPage;