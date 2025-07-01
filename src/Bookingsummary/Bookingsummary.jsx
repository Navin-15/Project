import React from 'react';
import '../Bookingsummary/Bookingsummary.css'

const Summary = ({
  category,
  seats = [],
  seatPrice = 150,
  convenienceFee = 23.4,
}) => {
  const tickets = seats.length;
  const seatsLabel = seats.join(', ');

  const itemsTotal = tickets * seatPrice;
  const subtotal = itemsTotal + convenienceFee;

  return (
    <div className="booking-summary">
      <h2>BOOKING SUMMARY</h2>

      <div className="line-item">
        <span>
          {category} – {seatsLabel} ({tickets} Ticket{tickets !== 1 && 's'})
        </span>
        <span>Rs. {itemsTotal.toFixed(2)}</span>
      </div>

      <div className="line-item">
        <span>Convenience fees</span>
        <span>Rs. {convenienceFee.toFixed(2)}</span>
      </div>

      <hr />

      <div className="line-item subtotal">
        <strong>Sub total</strong>
        <strong>Rs. {subtotal.toFixed(2)}</strong>
      </div>

      <div className="current-location">
        Your current state is Tamil Nadu
      </div>

      <div className="amount-payable">
        Amount Payable <strong>Rs. {subtotal.toFixed(2)}</strong>
      </div>

      <div className="footer">
        <span>TOTAL: Rs. {subtotal.toFixed(2)}</span>
        <button onClick={() => alert('Proceeding')}>
          Proceed
        </button>
      </div>
    </div>
  );
};

export default Summary;



