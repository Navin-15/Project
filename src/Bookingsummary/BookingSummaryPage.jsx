
import {useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BookingSummaryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theater, moviename, selectedSeats, totalPrice, date, time } = location.state || {};

const handleConfirmBooking = async () => {
  const bookingData = {
    theater: theater,
    moviename: moviename,
    seats: selectedSeats.map(s => s.id),
    seatDetails: selectedSeats,
    totalPrice,
    date,
    time
  };

  
  try {
    const response = await axios.post('http://localhost:5000/api/bookings', bookingData);
    if (response.status === 200 || response.status === 201) {
      alert("✅ Booking confirmed!");
      console.log('Bookingdata:', bookingData);

      // navigate('/seatlayout');
    }
  } catch (error) {
    console.error("❌ Error saving booking:", error);
  }
};


  const handleModify = () => {
    // navigate('/seatlayout', { state: { selectedSeats } });
    window.scrollTo(0, 0);
    navigate(-1);
  };

  return (
    <div className="container mt-5">
      <h3>🎫 Booking Summary</h3>
      <hr />
      <p><strong>Theater:</strong> {theater}</p>
      <p><strong>Movie Name:</strong> {moviename}</p>
      <p><strong>Show Date:</strong> {date}</p>
      <p><strong>Show Time:</strong> {time}</p>
      <p><strong>Seats Selected:</strong> {selectedSeats?.map(s => s.id).join(', ')}</p>
      <p><strong>Total Price:</strong> ₹{totalPrice}</p>

      <div className="mt-4 d-flex gap-3">
        <button className="btn btn-success" onClick={handleConfirmBooking}>Confirm Booking</button>
        <button className="btn btn-warning" onClick={handleModify}>Modify Selection</button>
      </div>
    </div>
  );
};

export default BookingSummaryPage;









