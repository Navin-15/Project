//part 1

// import React, { useState, useEffect } from "react";
// import "../Seatlayout.css";
// import { FaChevronLeft } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';

// const ROWS = ["A", "B", "C", "D",'E','F','G','H'];
// const SEATS_PER_ROW = 25;
// const PRICE_PER_SEAT = 150;

// function Cosmoscinema() {
//   const navigate = useNavigate();
//   const [selectedSeats, setSelectedSeats] = useState(new Set());
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [now, setNow] = useState(new Date());
//   const [showSummary, setShowSummary] = useState(false);

//   useEffect(() => {
//     const timer = setInterval(() => setNow(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const toggleSeat = (seatId) => {
//     if (showSummary) return; // disable toggle in summary mode
//     setSelectedSeats((prev) => {
//       const updated = new Set(prev);
//       updated.has(seatId) ? updated.delete(seatId) : updated.add(seatId);
//       setTotalPrice(updated.size * PRICE_PER_SEAT);
//       return updated;
//     });
//   };

//   const handlePay = () => {
//     if (selectedSeats.size > 0) setShowSummary(true);
//   };

//   const handleConfirm = async () => {
//   const bookingData = {
//     seats: Array.from(selectedSeats),
//     totalPrice,
//     bookedAt: new Date().toISOString(),
//   };

//   try {
//     const response = await axios.post('http://localhost:5000/api/bookings', bookingData);
//     console.log(response.data);
//     alert('Booking confirmed and saved to database!');
//     setSelectedSeats(new Set());
//     setTotalPrice(0);
//     setShowSummary(false);
//   } catch (error) {
//     console.error('Booking failed:', error);
//     alert('Failed to confirm booking.');
//   }
// };


// //==============================================================================================================





// //===============================================================================================================

//   // const handleConfirm = () => {

//   //   // For demo: log or you can send booking to backend
//   //   console.log("Confirmed seats:", Array.from(selectedSeats), "Total:", totalPrice);
//   //   // Then navigate or clear:
//   //   // navigate("/payment", { state: { seats: Array.from(selectedSeats), totalPrice } });
//   //   alert("Booking confirmed!");
//   // };

// //======================     ==========================================     =========================================


// // ==================================     ======================================     ===============================
//   const handleBackToSeats = () => {
//     setShowSummary(false);
//   };

//   const handlePrevious = () => {
//     window.scrollTo(0, 0);
//     navigate(-1);
//   };

//   const renderSeat = (row, num) => {
//     const id = `${row}${num}`;
//     const isSelected = selectedSeats.has(id);
//     return (
//       <div
//         key={id}
//         className={`seatno ${isSelected ? "selected" : "available"}`}
//         onClick={() => toggleSeat(id)}
//         style={{
//           backgroundColor: isSelected ? "green" : "",
//           color: isSelected ? "white" : "",
//           cursor: showSummary ? "default" : "pointer",
//           margin: "2px",
//           padding: "8px",
//         }}
//       >
//         {num}
//       </div>
//     );
//   };

//   if (showSummary) {
//     return (
//       <div className="container summary-screen bg-warning mt-3">
//         <FaChevronLeft onClick={handleBackToSeats} className="fs-5" style={{ cursor: "pointer", margin: "16px" }} />
//         <h2>Booking Summary</h2>
//         <p>
//           <strong>Seats:</strong>{" "}
//           {Array.from(selectedSeats)
//             .sort()
//             .join(", ")}
//         </p>
//         <p>
//           <strong>Total Price:</strong> ₹{totalPrice}
//         </p>
//         <button className="btn btn-success me-2 mb-3" onClick={handleConfirm}>
//           Confirm Booking
//         </button>
//         <button className="btn btn-secondary mb-3" onClick={handleBackToSeats}>
//           Modify Selection
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="container seat-selection" style={{position:'sticky',top:'0px',padding:'3px,0px'}}>
//       <div className="toppy bg-secondary position-relative"  >
//         <FaChevronLeft onClick={handlePrevious} className="fs-5 position-absolute" style={{ top: "16px", left: "16px", cursor: "pointer" }} />
//         <div className="mx-5 p-1"  >
//           <h3>Retro</h3>
//           <h6>Cosmo Cinemas - PEELAMEDU</h6>
//           <p>
//             <strong>{now.toLocaleString()}</strong>
//           </p>
//         </div>
//       </div>

//       <div className="screen-layout mt-3 mb-3 pb-2 bg-secondary">
//         <div className="screen-bar ">Screen</div>
//         { ROWS.map((row) => (
//           <div key={row} className="d-flex align-items-center mt-2"style={{padding:'10px,0px'}}  >
//             <span className="seatR">{row}</span>
//             <div className="d-flex flex-wrap "style={{position:'relative',left:'160px',padding:'5px,0px'}} >{[...Array(SEATS_PER_ROW)].map((_, i) => renderSeat(row, SEATS_PER_ROW - i))}</div>
//           </div>
//         ))}
//       </div>

//       <div className="pay-bar mb-3 fixed-bottom bg-secondary d-flex justify-content-center align-items-center p-2 shadow-lg"style={{position:'sticky',bottom:'5px'}} >
//         <div className=" p-3 bg-warning d-flex justify-content-center"  style={{width:'130px',height:"50px"}}>
//           Screen
//         </div> 
//       </div>

//       <div className="pay-bar fixed-bottom bg-secondary d-flex justify-content-center align-items-center p-2 shadow-lg"style={{position:'sticky',bottom:'0px'}} >
//         <div className=""  style={{position: 'relative',right: '300px'}}>
//           Selected: <strong>{selectedSeats.size}</strong> seats — ₹<strong>{totalPrice}</strong>
//         </div>
//         <button className="btn btn-primary" disabled={selectedSeats.size === 0} onClick={handlePay}style={{width:'200px',height:"40px",position: 'relative',right: '95px',}} >
//           Pay ₹{totalPrice}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Cosmoscinema;

// part 2 


// import React, { useState, useEffect } from "react";
// import "../Seatlayout.css";
// import { FaChevronLeft } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';

// const ROWS = ["H","G","F","E","D","C","B","A"];
// const SEATS_PER_ROW = 25;
// const PRICE_PER_SEAT = 150;

// function Cosmoscinema() {
//   const navigate = useNavigate();
//   const [selectedSeats, setSelectedSeats] = useState(new Set());
//   const [bookedSeats, setBookedSeats] = useState(new Set());
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [now, setNow] = useState(new Date());
//   const [showSummary, setShowSummary] = useState(false);

//   useEffect(() => {
//     // 1️⃣ Load already booked seats on initial render
//     // axios.get('http://localhost:5000/api/bookings/seats')
//     axios.get('http://localhost:5000/api/bookings/seats')
//       .then(res => {
//         setBookedSeats(new Set(res.data)); // e.g. ["A3", "B10", ...]
//       })
//       .catch(console.error);

//     const timer = setInterval(() => setNow(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const toggleSeat = (seatId) => {
//     if (showSummary || bookedSeats.has(seatId)) return;
//     setSelectedSeats(prev => {
//       const updated = new Set(prev);
//       updated.has(seatId) ? updated.delete(seatId) : updated.add(seatId);
//       setTotalPrice(updated.size * PRICE_PER_SEAT);
//       return updated;
//     });
//   };

//   const handlePay = () => {
//     if (selectedSeats.size > 0) setShowSummary(true);
//   };

//   const handleConfirm = async () => {
//     const seatsToBook = Array.from(selectedSeats);
//     const bookingData = {
//       seats: seatsToBook,
//       totalPrice,
//       bookedAt: new Date().toISOString(),
//     };
//     try {
//       await axios.post('http://localhost:5000/api/bookings', bookingData);
//       alert('Booking confirmed!');
//       console.log(bookingData);
      

//       // 2️⃣ Add new bookings to disabled list
//       setBookedSeats(prev => {
//         const merged = new Set(prev);
//         seatsToBook.forEach(s => merged.add(s));
//         return merged;
//       });

//       setSelectedSeats(new Set()); // clear selection
//       setTotalPrice(0);
//       setShowSummary(false);
//     } catch (err) {
//       console.error(err);
//       alert('Booking failed.');
//     }
//   };

//   const handleBackToSeats = () => setShowSummary(false);
//   const handlePrevious = () => { window.scrollTo(0,0); navigate(-1); };

//   const renderSeat = (row, num) => {
//     const id = `${row}${num}`;
//     const isBooked = bookedSeats.has(id);
//     const isSelected = selectedSeats.has(id);
//     const bgColor = isBooked ? 'orange' : isSelected ? 'green' : '';
//     return (
//       <div
//         key={id}
//         className="seatno"
//         onClick={() => toggleSeat(id)}
//         style={{
//           backgroundColor: bgColor,
//           color: isSelected ? 'white' : '',
//           cursor: isBooked || showSummary ? 'not-allowed' : 'pointer',
//           margin: '2px',
//           padding: '8px',
//         }}
//       >{num}</div>
//     );
//   };

//   if (showSummary) {
//     return (
//       <div className="container summary-screen bg-warning mt-3">
//         <FaChevronLeft onClick={handleBackToSeats} className="fs-5" style={{ cursor: "pointer", margin: "16px" }} />
//         <h2>Booking Summary</h2>
//         <p><strong>Seats:</strong> {Array.from(selectedSeats).sort().join(", ")}</p>
//         <p><strong>Total Price:</strong> ₹{totalPrice}</p>
//         <button className="btn btn-success me-2 mb-3" onClick={handleConfirm}>Confirm Booking</button>
//         <button className="btn btn-secondary mb-3" onClick={handleBackToSeats}>Modify Selection</button>
//       </div>
//     );
//   }

//   return (
//     <div className="container seat-selection">
//       <div className="toppy position-relative" style={{backgroundColor:'lightgrey' }} >
//         <FaChevronLeft onClick={handlePrevious} className="fs-5 position-absolute" style={{ top:"16px", left:"16px", cursor:"pointer" }} />
//         <div className="mx-5 p-1">
//           <h3>Retro</h3>
//           <h6>Cosmo Cinemas - PEELAMEDU</h6>
//           <p><strong>{now.toLocaleString()}</strong></p>
//         </div>
//       </div>

//       <div className="screen-layout mt-3 mb-3 pb-2" style={{backgroundColor:'lightgrey'}} >
//         <div className="screen-bar w-25 text-center" style={{position: 'relative',left: '420px',}}>Seats</div>
//         {ROWS.map(row => (
//           <div key={row} className="d-flex align-items-center mt-2">
//             <span className="seatR bg-dark">{row}</span>
//             <div className="d-flex flex-wrap  p-2" style={{ marginLeft: '160px' }}>
//               {[...Array(SEATS_PER_ROW)].map((_, i) => renderSeat(row, SEATS_PER_ROW - i))}
//             </div>
//           </div>
//         ))}
//       </div>


//       <div className="pay-bar mb-3 fixed-bottom d-flex justify-content-center align-items-center p-2 shadow-lg"style={{position:'sticky',bottom:'5px',backgroundColor:'lightgrey'}} >
//          <div className=" p-3 bg-success text-light d-flex justify-content-center" style={{width:'150px',height:"50px"}}>
//            Screen
//          </div> 
//       </div>
      

//       <div className="pay-bar fixed-bottom bg-light d-flex justify-content-center align-items-center p-2 shadow-lg"style={{position:'sticky',bottom:'0px'}} >
//          {/* <div className=""  style={{position: 'relative',right: '300px'}}>
//            Selected: <strong>{selectedSeats.size}</strong> seats — ₹<strong>{totalPrice}</strong>
//          </div> */}
//          <button className="btn btn-danger" disabled={selectedSeats.size === 0} onClick={handlePay}style={{width:'200px',height:"40px",position: 'relative',right: '0px',}} >
//            Pay ₹{totalPrice}
//         </button>
//       </div>

//     </div>
//   );
// }

// export default Cosmoscinema;

//  <div className="pay-bar fixed-bottom bg-secondary d-flex justify-content-between align-items-center p-2 shadow-lg">
//         <div style={{ marginLeft: '20px' }}>
//           Selected: <strong>{selectedSeats.size}</strong> — ₹<strong>{totalPrice}</strong>
//         </div>
//         <button className="btn btn-primary" disabled={selectedSeats.size === 0} onClick={handlePay} style={{ marginRight:'20px' }}>
//           Pay ₹{totalPrice}
//         </button>
//       </div>


//=============== = ========================== = ============================= = =============================
//full fledge code

// import React, { useState, useEffect } from 'react';
// import '../Seatlayout.css';
// import { IoIosClose } from "react-icons/io";
// import { FaChevronLeft } from "react-icons/fa6";
// import { useNavigate } from 'react-router-dom';

// import axios from 'axios';

// const SEAT_PRICE = {
//   platinum: 150,
//   gold: 130,
//   silver: 100,
// };

// const ROWS = {
//   platinum: ['A','B','C','D','E','F','G'],
//   gold: ['H','I','J','K','L', 'M', 'N'],
//   silver: [ 'O','P']
// };

// const Seatlayout = () => {
//   const navigate = useNavigate();
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [bookedSeats, setBookedSeats] = useState([]);
//   const [selectedTime, setSelectedTime] = useState("");
  

//   // Fetch booked seats from backend

//   useEffect(() => {
//   const fetchBookedSeats = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/bookings');
//       const allBooked = response.data.flatMap(b => b.seats);
//       setBookedSeats(allBooked);
//     } catch (err) { console.error(err); }
//   };
//   fetchBookedSeats();

//   // If arriving after "Modify", restore previous
//   if (location.state?.selectedSeats) {
//     setSelectedSeats(location.state.selectedSeats);
//   }
// }, []);

//   const handlePreviousPage = () => {
//     window.scrollTo(0, 0);
//     navigate(-1);
//   };

  
//   const handlepay = () => {
//     if (selectedSeats.length === 0) {
//       alert("Please select at least one seat before paying.");
//       return;
//     }

//     const TheaterName = "Cosmo Cinemas PEELAMEDU AC 4K RGB Lase:Coimbatore";
//     const moviename = "Retro";
//     const summaryData = {
//       moviename: moviename,
//       theater: TheaterName,
//       selectedSeats,
//       totalPrice,
//       date: selectedDate.toLocaleDateString(),
//       time: selectedTime
//     };

//     // Immediately mark selected seats as booked
//     setBookedSeats(prev => [...prev, ...selectedSeats.map(s => s.id)]);
//     setSelectedSeats([]); // optional: clear UI selection

//     navigate('/booking-summary', { state: summaryData });
//   };

//   const handleSeatClick = (row, seat, type) => {
//     const seatId = `${row}${seat}`;

//     if (bookedSeats.includes(seatId)) return; // prevent selecting booked seat

//     const isSelected = selectedSeats.find(s => s.id === seatId);
//     if (isSelected) {
//       setSelectedSeats(prev => prev.filter(s => s.id !== seatId));
//     } else {
//       setSelectedSeats(prev => [...prev, { id: seatId, type, price: SEAT_PRICE[type] }]);
//     }
//   };

//   const getSeatClass = (row, seat, type) => {
//     const seatId = `${row}${seat}`;
//     const isBooked = bookedSeats.includes(seatId);
//     const isSelected = selectedSeats.find(s => s.id === seatId);

//     if (isBooked) return 'seatno orange-disabled ';
//     if (isSelected) return 'seatno selected-seat px-2 text-center';
//     return 'seatno availabledouble px-1 text-center';
//   };

//   const totalPrice = selectedSeats.reduce((acc, seat) => acc + seat.price, 0);

//   return (
//     <>
//       {/* Header */}
//       <div className="toppy bg-white">
//         <FaChevronLeft onClick={handlePreviousPage} className='fs-5' style={{ position: "absolute", top: "20px", left: "20px", cursor: "pointer" }} />
//         <div className="mx-5">
//           <div className="p-2">
//             <a href="#" className='text-dark' style={{ textDecoration: "none" }}>Retro</a>
//             <IoIosClose onClick={handlePreviousPage} className='fs-2' style={{ position: "absolute", right: "3rem", cursor: 'pointer' }} />
//             <div className="d-flex mt-2">
//               <span style={{ fontSize: "13px", fontWeight: "700", color: "rgb(88, 86, 86)" }}>
//                 Cosmo Cinemas PEELAMEDU AC 4K RGB Lase: Coimbatore
//               </span>
//               &nbsp;&nbsp;
//               <span style={{ fontSize: "13px", fontWeight: "700", color: "rgb(88, 86, 86)" }}>
//                 {selectedDate.toLocaleDateString()}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Time Selection */}
//       {/* <div className="mx-5 mt-2">
//         <label htmlFor="time" style={{ fontWeight: "600", fontSize: "13px", marginRight: "10px" }}>Select Show Time:</label>
//         <select
//           id="time"
//           value={selectedTime}
//           onChange={(e) => setSelectedTime(e.target.value)}
//           style={{ padding: "4px", fontSize: "13px" }}
//         >
//           <option>Select Time</option>
//           <option>09:00 AM</option>
//           <option>12:30 PM</option>
//           <option>4:00 PM</option>
//           <option>7:30 PM</option>
//           <option>11:00 PM</option>
//         </select>
//       </div> */}

//       {/* Seat Layout */}
//       <div className="seeat container">
//         <div className="block ">
//           {Object.keys(ROWS).map(category => (
//             <div key={category} className={`blocklayout ${category}layout`}>
//               <table>
//                 <tbody>
//                   <tr>
//                     <td><div className="tirename">Rs.{SEAT_PRICE[category]} {category.charAt(0).toUpperCase() + category.slice(1)}</div></td>
//                   </tr>
//                   {ROWS[category].map(row => (
//                     <tr key={row} className='d-flex'>
//                       <div className="seatR bg-dark">{row}</div>
//                       <td className='SRow-1 ms-5 ps-5 pe-5 py-1'>
//                         {[...Array(23).keys()].map(i => {
//                           const seatNo = 23 - i;
//                           if (seatNo === 17 || seatNo === 7) return <div className="seatempty" key={i}>&nbsp;</div>;
//                           return (
//                             <div className="seatempty" key={i}>
//                               <a
//                                 href="#"
//                                 className={getSeatClass(row, seatNo, category)}
//                                 onClick={(e) => {
//                                   e.preventDefault();
//                                   handleSeatClick(row, seatNo, category);
//                                 }}
//                                 style={bookedSeats.includes(`${row}${seatNo}`) ? { cursor: 'not-allowed' } : {}}
//                               >
//                                 {seatNo}
//                               </a>
//                             </div>
//                           );
//                         })}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Screen */}
//       <div className="parentscreendiv">
//         <div className="screendiv">Screen</div>
//       </div>

//       {/* Legends */}
//       <div className="profile w-100 d-flex justify-content-center bg-white" style={{ boxShadow: "rgba(0, 0, 0, 0.1) 4px -5px 5px 1px" }}>
//         <div className="w-50 d-flex mt-2 justify-content-center">
//           <div className="w-25 ">
//             <div className="seatempty "><span className='seatno availabledouble ' style={{ padding: "10px",width: "20px", height: "20px",position: "relative", bottom: '4px'}} href="#"></span></div>
//             Available
//           </div>
//           <div className="w-25">
//             <div className="seatempty"><span className='seatno selected-seat' style={{ padding: "10px",width: "20px", height: "20px",position: "relative", bottom: '4px'}} href="#"></span></div>
//             Selected
//           </div>
//           <div className="w-25">
//             <div className="seatempty"><span className='seatno orange-disabled' style={{ padding: "10px",width: "20px", height: "20px",position: "relative", bottom: '4px' }} href="#"></span></div>
//             Booked
//           </div>
//         </div>
//       </div>

//       {/* Pay Button */}
//       <div className="d-flex justify-content-center">
//         <button onClick={handlepay} className="btn btn-danger w-25 my-3" disabled={selectedSeats.length === 0}>
//           Pay ₹{totalPrice}
//         </button>
//       </div>
//     </>
//   );
// };

// export default Seatlayout;

//==========================================================================================================

// new code

// Seatlayout.jsx
import React, { useState, useEffect } from 'react';
import '../Seatlayout.css';
import { IoIosClose } from "react-icons/io";
import { FaChevronLeft } from "react-icons/fa6";
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation

import axios from 'axios';

const SEAT_PRICE = {
    platinum: 150,
    gold: 130,
    silver: 100,
};

const ROWS = {
    platinum: ['A','B','C','D','E','F','G'],
    gold: ['H','I','J','K','L', 'M', 'N'],
    silver: [ 'O','P']
};

const Seatlayout = () => {
    const navigate = useNavigate();
    const location = useLocation(); // Use useLocation hook to access state
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [bookedSeats, setBookedSeats] = useState([]);
    const [selectedTime, setSelectedTime] = useState("");
    const [theaterName, setTheaterName] = useState(""); // State to store theater name
    const [movieName, setMovieName] = useState(""); // State to store movie name
    const [screen, setSelectedScreen] = useState(""); // State to store movie name
 


    useEffect(() => {
        // Retrieve data from location.state
        if (location.state) {
            setTheaterName(location.state.theater || "");
            setSelectedTime(location.state.time || "");
            setMovieName(location.state.movieName || "");
            setSelectedScreen(location.state.screen || "");
            if (location.state.selectedSeats) {
                setSelectedSeats(location.state.selectedSeats);
            }
        }

        const fetchBookedSeats = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/bookings');
                const allBooked = response.data.flatMap(b => b.seats);
                setBookedSeats(allBooked);
            } catch (err) { console.error(err); }
        };
        fetchBookedSeats();
    }, [location.state]); // Add location.state to dependency array

    const handlePreviousPage = () => {
        window.scrollTo(0, 0);
        navigate(-1);
    };

    const handlepay = () => {
        if (selectedSeats.length === 0) {
            alert("Please select at least one seat before paying.");
            return;
        }

        const summaryData = {
            movieName: movieName, // Use state variable
            theater: theaterName, // Use state variable
            selectedSeats,
            totalPrice,
            date: selectedDate.toLocaleDateString(),
            time: selectedTime, // Use state variable
            screen: screen // Use state variable
        };

        // Immediately mark selected seats as booked (this logic might need backend integration for persistence)
        setBookedSeats(prev => [...prev, ...selectedSeats.map(s => s.id)]);
        setSelectedSeats([]); // optional: clear UI selection

        navigate('/booking-summary', { state: summaryData });
    };

    const handleSeatClick = (row, seat, type) => {
        const seatId = `${row}${seat}`;

        if (bookedSeats.includes(seatId)) return; // prevent selecting booked seat

        const isSelected = selectedSeats.find(s => s.id === seatId);
        if (isSelected) {
            setSelectedSeats(prev => prev.filter(s => s.id !== seatId));
        } else {
            setSelectedSeats(prev => [...prev, { id: seatId, type, price: SEAT_PRICE[type] }]);
        }
    };

    const getSeatClass = (row, seat, type) => {
        const seatId = `${row}${seat}`;
        const isBooked = bookedSeats.includes(seatId);
        const isSelected = selectedSeats.find(s => s.id === seatId);

        if (isBooked) return 'seatno orange-disabled ';
        if (isSelected) return 'seatno selected-seat px-2 text-center';
        return 'seatno availabledouble px-1 text-center';
    };

    const totalPrice = selectedSeats.reduce((acc, seat) => acc + seat.price, 0);

    return (
        <>
            {/* Header */}
            <div className="toppy ">
                <FaChevronLeft onClick={handlePreviousPage} className='fs-5' style={{ position: "absolute", top: "20px", left: "20px", cursor: "pointer" }} />
                <div className="mx-5">
                    <div className="p-2">
                        <a href="#" className='text-dark' style={{ textDecoration: "none" }}>{movieName}</a> {/* Display movie name */}
                        <IoIosClose onClick={handlePreviousPage} className='fs-2' style={{ position: "absolute", right: "3rem", cursor: 'pointer' }} />
                        <div className="d-flex mt-2">
                            <span style={{ fontSize: "13px", fontWeight: "700", color: "rgb(88, 86, 86)" }}>
                                {theaterName} {/* Display theater name */} 
                            </span>
                            &nbsp;&nbsp;
                            <span style={{ fontSize: "13px", fontWeight: "700", color: "rgb(88, 86, 86)" }}>
                                {selectedDate.toLocaleDateString()}
                            </span>
                             &nbsp;&nbsp;
                            <span style={{ fontSize: "13px", fontWeight: "700", color: "rgb(88, 86, 86)", backgroundColor: "rgba(58, 130, 93, 1)",padding: " 8px 10px",position: "relative",bottom: "8px" , color: "rgba(255, 255, 255, 1)", borderRadius: "2px" }}>
                                {selectedTime} {/* Display selected time */}
                            </span>
                             &nbsp;&nbsp;
                            <span style={{ fontSize: "13px", fontWeight: "700", color: "rgb(88, 86, 86)", backgroundColor: "rgba(58, 130, 93, 1)",padding: " 8px 10px",position: "relative",bottom: "8px" , color: "rgba(255, 255, 255, 1)", borderRadius: "2px" }}>
                                {screen} {/* Display selected screen */}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Seat Layout (rest of your existing seat layout code remains the same) */}
            <div className="seeat container">
                <div className="block ">
                    {Object.keys(ROWS).map(category => (
                        <div key={category} className={`blocklayout ${category}layout`}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><div className="tirename">Rs.{SEAT_PRICE[category]} {category.charAt(0).toUpperCase() + category.slice(1)}</div></td>
                                    </tr>
                                    {ROWS[category].map(row => (
                                        <tr key={row} className='d-flex'>
                                            <div className="seatR bg-dark">{row}</div>
                                            <td className='SRow-1 ms-5 ps-5 pe-5 py-1'>
                                                {[...Array(23).keys()].map(i => {
                                                    const seatNo = 23 - i;
                                                    if (seatNo === 17 || seatNo === 7) return <div className="seatempty" key={i}>&nbsp;</div>;
                                                    return (
                                                        <div className="seatempty" key={i}>
                                                            <a
                                                                href="#"
                                                                className={getSeatClass(row, seatNo, category)}
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    handleSeatClick(row, seatNo, category);
                                                                }}
                                                                style={bookedSeats.includes(`${row}${seatNo}`) ? { cursor: 'not-allowed' } : {}}
                                                            >
                                                                {seatNo}
                                                            </a>
                                                        </div>
                                                    );
                                                })}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            </div>

            {/* Screen */}
            <div className="parentscreendiv">
                <div className="screendiv">Screen</div>
            </div>

            {/* Legends */}
            <div className="profile w-100 d-flex justify-content-center bg-white" style={{ boxShadow: "rgba(0, 0, 0, 0.1) 4px -5px 5px 1px" }}>
                <div className="w-50 d-flex mt-2 justify-content-center">
                    <div className="w-25 ">
                        <div className="seatempty "><span className='seatno availabledouble ' style={{ padding: "10px",width: "20px", height: "20px",position: "relative", bottom: '4px'}} href="#"></span></div>
                        Available
                    </div>
                    <div className="w-25">
                        <div className="seatempty"><span className='seatno selected-seat' style={{ padding: "10px",width: "20px", height: "20px",position: "relative", bottom: '4px'}} href="#"></span></div>
                        Selected
                    </div>
                    <div className="w-25">
                        <div className="seatempty"><span className='seatno orange-disabled' style={{ padding: "10px",width: "20px", height: "20px",position: "relative", bottom: '4px' }} href="#"></span></div>
                        Booked
                    </div>
                </div>
            </div>

            {/* Pay Button */}
            <div className="d-flex justify-content-center paybutton">
                <button onClick={handlepay} className="btn btn-danger w-25 my-3" disabled={selectedSeats.length === 0}>
                    Pay ₹{totalPrice}
                </button>
            </div>
        </>
    );
};

export default Seatlayout;