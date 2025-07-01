
// chatgpt code 1

// import React,{useState,useRef,useEffect} from 'react'
// import { useNavigate } from 'react-router-dom'
// import bookmyshowlogo from '../images/bookmyshow.png'
// import search from '../images/search.png'
// import hamburgermenu from '../images/img.png'
// import dropdownimg from '../images/dropdownimg.svg'
// import Cities from '../src/Cities'
// function Navbar() {
//     const navigate = useNavigate();
//     const [showPopup, setShowPopup] = useState(false);
//     const [city, setCity] = useState('');
//     const [address, setAddress] = useState('');
//     const popupRef = useRef(null);
  
//     useEffect(() => {
//       const storedCity = localStorage.getItem('selectedCity') || 'Select Location';
//       const storedAddress = localStorage.getItem('selectedAddress') || '';
//       setCity(storedCity);
//       setAddress(storedAddress);
  
//       const handleLocationChange = () => {
//         setCity(localStorage.getItem('selectedCity') || 'Select Location');
//         setAddress(localStorage.getItem('selectedAddress') || '');
//       };
  
//       window.addEventListener('locationChanged', handleLocationChange);
  
//       return () => {
//         window.removeEventListener('locationChanged', handleLocationChange);
//       };
//     }, []);
  
//     useEffect(() => {
//       if (showPopup) {
//         document.body.style.overflow = 'hidden';
//       } else {
//         document.body.style.overflow = 'auto';
//       }
  
//       return () => {
//         document.body.style.overflow = 'auto';
//       };
//     }, [showPopup]);
  
//     // Click outside to close popup
//     useEffect(() => {
//       const handleOutsideClick = (event) => {
//         if (popupRef.current && !popupRef.current.contains(event.target)) {
//           setShowPopup(false);
//         }
//       };
  
//       if (showPopup) {
//         document.addEventListener('mousedown', handleOutsideClick);
//       }
  
//       return () => {
//         document.removeEventListener('mousedown', handleOutsideClick);
//       };
//     }, [showPopup]);
  
//     const handleLocationClick = () => {
//       setShowPopup(true);
//     };
  
//     const handleClosePopup = () => {
//       setShowPopup(false);
//     };
  
  
//   return (
//  <>
// <div className="container mt-1">
//   <div className="row ">

//         {/*  logo */}
//         <div className="  logodiv col ">
//             <img src={bookmyshowlogo} alt="" className='logo '/>
//         </div>

//         {/*  search  */}
//         <div className=" searchdiv col ">
//             <input className='input '  type="search"  placeholder='Search for Movies , Events, plays, Sports and Activities'/>
//             <span className='searchimgdiv '><img className='searchimg ' src={search}alt="" /></span>
//         </div>

//         {/* location & sign in */}

//             <div className="location col "  onClick={handleLocationClick} style={{cursor:"pointer"}}> 
//                 <span className=' coimbatore '>Coimbatore</span>
//                 <span><img className='dropdownimg ' src={dropdownimg} alt="" /></span>
//             </div>

//         {/* Popup */}
//         {showPopup && (
//             <div className="popup-overlay" style={overlayStyle}>
//               <div className="popup-content" ref={popupRef} style={popupStyle}>
//                 <button onClick={handleClosePopup} style={closeButtonStyle}>×</button>
//                 <Cities/>
//               </div>
//             </div>
//           )}

             
//             <div className=" signindiv col ">
//                 <span className="signin ">Sign in</span>
//                 <img className='hamburger ' src={hamburgermenu} alt="" />
//             </div>
//     </div>
//   </div>
//  </>
//   )
// }

// export default Navbar   

// // Popup styles
// const overlayStyle = {
//     position: 'fixed',
//     top: 72,
//     left: 0,
//     width: '100vw',
//     height: '100vh',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     zIndex: 1000,
//     // display: 'flex',
//     // justifyContent: 'center',
//     // alignItems: 'center',
//   };
  
//   const popupStyle = {
//     // backgroundColor: '#fff',
//     // padding: '30px',
//     // borderRadius: '10px',
//     // width: '90%',
//     // maxWidth: '600px',
//     // position: 'relative',
//     // maxHeight: '80vh',
//     // overflowY: 'auto',
//   };
  
//   const closeButtonStyle = {
//     position: 'absolute',
//     top: '10px',
//     right: '15px',
//     background: 'none',
//     border: 'none',
//     fontSize: '20px',
//     cursor: 'pointer',
//   };
//-----------------------------------------------------------------------------------------------------------   

// chatgpt code 2 
// handleclick is not defined

// import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import bookmyshowlogo from '../images/bookmyshow.png';
// import search from '../images/search.png';
// import hamburgermenu from '../images/img.png';
// import dropdownimg from '../images/dropdownimg.svg';
// import Cities from '../src/Cities';

// function Navbar() {
//   const navigate = useNavigate();
//   const [showPopup, setShowPopup] = useState(false);
//   const [city, setCity] = useState('');
//   const [address, setAddress] = useState('');
//   const popupRef = useRef(null);

//   useEffect(() => {
//     const storedCity = localStorage.getItem('selectedCity') || 'Select Location';
//     const storedAddress = localStorage.getItem('selectedAddress') || '';
//     setCity(storedCity);
//     setAddress(storedAddress);

//     const handleLocationChange = () => {
//       setCity(localStorage.getItem('selectedCity') || 'Select Location');
//       setAddress(localStorage.getItem('selectedAddress') || '');
//     };

//     window.addEventListener('locationChanged', handleLocationChange);

//     return () => {
//       window.removeEventListener('locationChanged', handleLocationChange);
//     };
//   }, []);

//   useEffect(() => {
//     if (showPopup) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }

//     const handleOutsideClick = (event) => {
//       if (popupRef.current && !popupRef.current.contains(event.target)) {
//         setShowPopup(false);
//       }
//     };

//     if (showPopup) {
//       document.addEventListener('mousedown', handleOutsideClick);
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleOutsideClick);
//     };
//   }, [showPopup]);

//   const handleLocationClick = () => {
//     setShowPopup(true);
//   };

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };

//   return (
//     <>
//       <div className="container  mt-1">
//         <div className="row">
//           {/* Logo */}
//           <div className="logodiv col">
//             <img src={bookmyshowlogo} alt="Logo" className="logo" />
//           </div>

//           {/* Search */}
//           <div className="searchdiv col">
//             <input
//               className="input"
//               type="search"
//               placeholder="Search for Movies, Events, Plays, Sports and Activities"
//             />
//             <span className="searchimgdiv">
//               <img className="searchimg" src={search} alt="Search" />
//             </span>
//           </div>

//           {/* Location */}
//           <div className="location col" onClick={handleLocationClick} style={{ cursor: 'pointer' }}>
//             <span className="coimbatore">Coimbatore</span>
//             <span>
//               <img className="dropdownimg" src={dropdownimg} alt="Dropdown" />
//             </span>
//           </div>

//           {/* Popup-for-Location */}
//           {showPopup && (
//             <div className="popup-overlay">
//               <div className="popup-content" ref={popupRef}>
//                 <button onClick={handleClosePopup} className="close-button">
//                   ×
//                 </button>
//                 <Cities />
//               </div>
//             </div>
//           )}

//           {/* Sign In */}
//           <div className="signindiv col" onClick={handleSignClick}>
            
//             <span className="signin">Sign in</span>
//             <img className="hamburger" src={hamburgermenu} alt="Menu" />
//           </div>

//           {/* Popup-for-sign-in */}
//           {showPopup && (
//             <div className="popup-overlay">
//               <div className="popup-content" ref={popupRef}>
//                 <button onClick={handleClosePopup} className="close-button">
//                   ×
//                 </button>
//                 <Login />
//               </div>
//             </div>
//           )}

//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;

// --------------------------------------------------------------------------------------------------------------

// chatgptcode 3

// import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import bookmyshowlogo from '../images/bookmyshow.png';
// import search from '../images/search.png';
// import hamburgermenu from '../images/img.png';
// import dropdownimg from '../images/dropdownimg.svg';
// import Cities from '../src/Cities';

// function Navbar() {
//   const navigate = useNavigate();
//   const [showPopup, setShowPopup] = useState(false);
//   const [city, setCity] = useState('');
//   const [address, setAddress] = useState('');
//   const popupRef = useRef(null);

//   useEffect(() => {
//     const storedCity = localStorage.getItem('selectedCity') || 'Select Location';
//     const storedAddress = localStorage.getItem('selectedAddress') || '';
//     setCity(storedCity);
//     setAddress(storedAddress);

//     const handleLocationChange = () => {
//       setCity(localStorage.getItem('selectedCity') || 'Select Location');
//       setAddress(localStorage.getItem('selectedAddress') || '');
//     };

//     window.addEventListener('locationChanged', handleLocationChange);

//     return () => {
//       window.removeEventListener('locationChanged', handleLocationChange);
//     };
//   }, []);

//   useEffect(() => {
//     if (showPopup) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }

//     const handleOutsideClick = (event) => {
//       if (popupRef.current && !popupRef.current.contains(event.target)) {
//         setShowPopup(false);
//       }
//     };

//     if (showPopup) {
//       document.addEventListener('mousedown', handleOutsideClick);
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleOutsideClick);
//     };
//   }, [showPopup]);

//   const handleLocationClick = () => {
//     setShowPopup(true);
//   };

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };
//    // Define the sign-in logic here
//   const handleSignClick = () => {
 
//     console.log('Sign in clicked');
//   };
  


//   return (
//     <>
//       <div className="container mt-1">
//         <div className="row">
//           {/* Logo */}
//           <div className="logodiv col">
//             <img src={bookmyshowlogo} alt="Logo" className="logo" />
//           </div>

//           {/* Search */}
//           <div className="searchdiv col">
//             <input
//               className="input"
//               type="search"
//               placeholder="Search for Movies, Events, Plays, Sports and Activities"
//             />
//             <span className="searchimgdiv">
//               <img className="searchimg" src={search} alt="Search" />
//             </span>
//           </div>

//           {/* Location */}
//           <div className="location col" onClick={handleLocationClick} style={{ cursor: 'pointer' }}>
//             <span className="coimbatore">Coimbatore</span>
//             <span>
//               <img className="dropdownimg" src={dropdownimg} alt="Dropdown" />
//             </span>
//           </div>

//           {/* Popup for location */}
//       {showPopup && (
//         <div className="popup-overlay">
//           <div className="popup-content" ref={popupRef}>
//             <button onClick={handleClosePopup} className="close-button">  </button>
//             <Cities />
//           </div>
//         </div>
//       )}

//           {/* Sign In */}
//           <div className="signindiv col" onClick={handleSignClick} style={{cursor: 'pointer'}}>
//             <span className="signin">Sign in</span>
//             <img className="hamburger" src={hamburgermenu} alt="Menu" />
//           </div>

//         </div>

//       </div>

//       {/* Popup for sign-in */}
//       {/* {showPopup && (
//         <div className="popup-overlay">
//           <div className="popup-content" ref={popupRef}>
//             <button onClick={handleClosePopup} className="close-button">
//               ×
//             </button>
//             <Login />
//           </div>
//         </div>
//       )} */}
//     </>
//   );
// }

// export default Navbar;

// -----------------------------------------------------------------------------------------------------------------

// chatgptcode 4
          
// import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import bookmyshowlogo from '../images/bookmyshow.png';
// import search from '../images/search.png';
// import hamburgermenu from '../images/img.png';
// import dropdownimg from '../images/dropdownimg.svg';
// import Cities from '../src/Cities';
// import Login from '../src/Login'; // ✅ Make sure Login component exists at this path

// function Navbar() {
//   const navigate = useNavigate();
//   const [showLocationPopup, setShowLocationPopup] = useState(false);
//   const [showSignInPopup, setShowSignInPopup] = useState(false);
//   const [city, setCity] = useState('');
//   const [address, setAddress] = useState('');
//   const locationPopupRef = useRef(null);
//   const signInPopupRef = useRef(null);

//   // Load location from localStorage
//   useEffect(() => {
//     const storedCity = localStorage.getItem('selectedCity') || 'Select Location';
//     const storedAddress = localStorage.getItem('selectedAddress') || '';
//     setCity(storedCity);
//     setAddress(storedAddress);

//     const handleLocationChange = () => {
//       setCity(localStorage.getItem('selectedCity') || 'Select Location');
//       setAddress(localStorage.getItem('selectedAddress') || '');
//     };

//     window.addEventListener('locationChanged', handleLocationChange);
//     return () => window.removeEventListener('locationChanged', handleLocationChange);
//   }, []);

//   // Prevent body scroll on popup
//   useEffect(() => {
//     document.body.style.overflow = (showLocationPopup || showSignInPopup) ? 'hidden' : 'auto';
//   }, [showLocationPopup, showSignInPopup]);

//   // Close popups on outside click
//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (showLocationPopup && locationPopupRef.current && !locationPopupRef.current.contains(event.target)) {
//         setShowLocationPopup(false);
//       }
//       if (showSignInPopup && signInPopupRef.current && !signInPopupRef.current.contains(event.target)) {
//         setShowSignInPopup(false);
//       }
//     };

//     document.addEventListener('mousedown', handleOutsideClick);
//     return () => document.removeEventListener('mousedown', handleOutsideClick);
//   }, [showLocationPopup, showSignInPopup]);
//   const handleSearchClick=()=>{
//     navigate('/innerinput');
//   }
//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };

//   return (
//     <>
//       <div className="container mt-1">
//         <div className="row">
//           {/* Logo */}
//           <div className="logodiv col">
//             <img src={bookmyshowlogo} alt="Logo" className="logo" />
//           </div>

//           {/* Search */}
//           <div className="searchdiv col">
//             <input className="input" type="search" placeholder="Search for Movies, Events, Plays, Sports and Activities" onClick={handleSearchClick} style={{ cursor: 'pointer' }}/>
//             <span className="searchimgdiv">
//               <img className="searchimg" src={search} alt="Search" />
//             </span>
//           </div>

//           {/* Location */}
//           <div className="location col" onClick={() => setShowLocationPopup(true)} style={{ cursor: 'pointer' }}>
//             <span className="coimbatore">{city}</span>
//             <img className="dropdownimg" src={dropdownimg} alt="Dropdown" />
//           </div>

//           {/* Sign In */}
//           <div className="signindiv col" onClick={() => setShowSignInPopup(true)} style={{ cursor: 'pointer' }}>
//             <span className="signin">Sign in</span>
//             <img className="hamburger" src={hamburgermenu} alt="Menu" />
//           </div>
//         </div>
//       </div>

//       {/* Location Popup */}
//       {showLocationPopup && (
//         <div className="popup-overlay">
//           <div className="popup-content" ref={locationPopupRef}>
//             {/* <button onClick={() => setShowLocationPopup(false)} className="close-button">×</button> */}
//             <button onClick={handleClosePopup} className='close-button'></button>
//             <Cities />
//           </div>
//         </div>
//       )}

//       {/* Sign In Popup */}
//       {showSignInPopup && (
//         <div className="popup-overlay">
//           <div className="popup-content" ref={signInPopupRef}>
//             {/* <button onClick={() => setShowSignInPopup(false)} className="close-button">×</button> */}
//             <button onClick={handleClosePopup} className='close-button'></button>
//             <Login />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Navbar;

// -----------------------------------------------------------------------------------------------------------------------------------------

// chatgpt code 5
// working on project

import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bookmyshowlogo from '/images/bookmyshow.png';
import search from '/images/search.png';
import hamburgermenu from '/images/img.png';
import dropdownimg from '/images/dropdownimg.svg';
import Cities from '../insidenav/Cities';
import Login from '../insidenav/Login';
import Gift from '/images/giftbox.png'
import Lockimg from '/images/lockimg.png'
import { CiLock } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { MdChevronRight } from "react-icons/md";
import Streamimg from '/images/streamimg.png'
import Playcreditcard from '/images/playcreditcard.png'
import Helpandsupport from '/images/helpandsupport.png'
import Accountandsettings from '/images/accountandsettings.png'
import Rewards_1 from '/images/rewards_1.png'
import Bookachange from '/images/bookachange.png'


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import Footer from '../footer/Footer';


function Navbar() {
  const navigate = useNavigate();
  const [showLocationPopup, setShowLocationPopup] = useState(false);
  const [showSignInPopup, setShowSignInPopup] = useState(false);
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const locationPopupRef = useRef(null);
  const signInPopupRef = useRef(null);

  // Load location from localStorage
  useEffect(() => {
    const storedCity = localStorage.getItem('selectedCity') || 'Select Location';
    const storedAddress = localStorage.getItem('selectedAddress') || '';
    setCity(storedCity);
    setAddress(storedAddress);

    const handleLocationChange = () => {
      setCity(localStorage.getItem('selectedCity') || 'Select Location');
      setAddress(localStorage.getItem('selectedAddress') || '');
    };

    window.addEventListener('locationChanged', handleLocationChange);
    return () => window.removeEventListener('locationChanged', handleLocationChange);
  }, []);

  // Prevent body scroll on popup
  useEffect(() => {
    document.body.style.overflow = (showLocationPopup || showSignInPopup) ? 'hidden' : 'auto';
  }, [showLocationPopup, showSignInPopup]);

  // Close popups on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        (showLocationPopup && locationPopupRef.current && !locationPopupRef.current.contains(event.target)) ||
        (showSignInPopup && signInPopupRef.current && !signInPopupRef.current.contains(event.target))
      ) {
        setShowLocationPopup(false);
        setShowSignInPopup(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [showLocationPopup, showSignInPopup]);

  const handleSearchClick = () => {
    navigate('/innerinput');
  };
  const handlehomepage = () => {
    navigate('/');
  };


  const handleClosePopup = () => {
    setShowLocationPopup(false);
    setShowSignInPopup(false);
  };

  return (
    <>
      <div className=" mt-1 navmain ">
        <div className="row divrow">
          {/* Logo */}
          <div className="logodiv ">
            <img onClick={handlehomepage} src={bookmyshowlogo} alt="Logo" className="logo " />
          </div>

          {/* Search */}
          <div className="searchdiv ">
            <input
              className="input"
              type="search"
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
              onClick={handleSearchClick}
              style={{ cursor: 'pointer' }}
              />
            <span className="searchimgdiv">
              <img className="searchimg" src={search} alt="Search" />
            </span>
          </div>
{/* ------------------------------------------------------------------------------------------------------------ */}

          {/* Location */}
          <div
            className="location "
            onClick={() => setShowLocationPopup(true)}
            style={{ cursor: 'pointer' }}
          >
            <span className="coimbatore ">{city}</span>
            <img className="dropdownimg " src={dropdownimg} alt="Dropdown" />
          </div>
{/* ------------------------------------------------------------------------------------------------------------ */}

          {/* Sign In */}
          <div
            className="signindiv  "
            // onClick={() => setShowSignInPopup(true)}
            // style={{ cursor: 'pointer' }}
          >
                <div className=" signburger">
                    {/* <span className="signin border border-black">Sign in</span> */}
                    <span className="signin  " onClick={() => setShowSignInPopup(true)}
                          style={{ cursor: 'pointer' }} >Sign in</span>
                          

{/* ------------------------------------------------------------------------------------------------------------ */}
        {/* <img className="hamburger border border-black" src={hamburgermenu} alt="Menu" /> */}
        {/* Trigger Button */}
        {/* off-canvas */}
      
        {/* <img className="hamburger border border-black  " src={hamburgermenu} alt="Menu" /> */}
        <img className="hamburger "
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasLogin"
        aria-controls="offcanvasLogin"
        src={hamburgermenu}/>

      {/* Offcanvas */}
      <div
        className="offcanvas offcanvas-end  w-30 right-canvas "
        tabIndex="-1"
        id="offcanvasLogin"
        aria-labelledby="offcanvasLoginLabel"
        >
        <div className="offcanvas-header hey-div-1 ">
          <div className="hey-div-2">
            <div className="hey-div-3">
              <div className="hey-div-4">
                  <div className="hey-div-5">Hey!</div>
              </div>
            </div>
          </div>
          {/* <h5  id="offcanvasLoginLabel" className='border border-black'>Hey!</h5> */}
          <button
            type="button"
            className="btn-close text-reset "
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            ></button>
          <hr />
          
        </div>
        <div className="offcanvas-body border  ">

                <div className="off-div-1 ">

                  <div className="left-off-div ">
                    <div className="gift-div ">
                      
                        <img className="gift-img " src={Gift} alt="gift-image" />
                      
                    </div>
                    <div className="off-text ">Unlock special offers & great benefits</div>
                  </div>

                  <div className="right-reg-div ">
                    <div className="regi ">Login / Register</div>
                  </div>

                </div>

                <section className='sec-1 '>

                    <div className="notification-div ">
                        <div className="noti ">
                          <div className="noti-img-div "><CiBellOn className='noti-img' /></div>
                          <div className="noti-text ">Notifications</div>
                        </div>
                        <div className="right-aro-div-1">
                          <div className="right-aro-div-2">
                            <MdChevronRight className='right-aro-img' />
                          </div>
                        </div>
                    </div>

                    <div className="your-order-div-1 ">
                        <div className="your-order-div-2 ">
                            <img className='lockimg' src={Lockimg} alt="" />
                            <div className="your-order-text-div ">
                              <div className="yo ">Your Orders</div>
                              <div className="vaybp ">View all your bookings & purchases</div>
                            </div>
                            <span className='kutty-lock '><CiLock /></span>
                        </div>
                    </div>

                    <div className="your-order-div-1 ">
                        <div className="your-order-div-2 ">
                            <img className='lockimg' src={Streamimg} alt="" />
                            <div className="your-order-text-div ">
                              <div className="yo ">Stream Library</div>
                              <div className="vaybp ">Rented & purchased Movies</div>
                            </div>
                            <span className='kutty-lock '><CiLock /></span>
                        </div>
                    </div>

                    <div className="play-credit-div-1 ">
                        <div className="play-credit-div-2 ">
                            <img className='lockimg' src={Playcreditcard} alt="" />
                            <div className="your-order-text-div ">
                              <div className="yo ">Play Credit Card</div>
                              <div className="vaybp ">View your play credit card details and offers</div>
                            </div>
                            
                            {/* <span className='kutty-lock '><CiLock /></span> */}
                            <div className="right-aro-div-1 ">
                              <div className="right-aro-div-2">
                                  <MdChevronRight className='right-aro-img' />
                              </div>
                            </div>
                        </div>
                    </div>

                    <div className="play-credit-div-1 ">
                        <div className="play-credit-div-2 ">
                            <img className='lockimg' src={Helpandsupport} alt="" />
                            <div className="your-order-text-div ">
                                <div className="yo ">Help & Support</div>
                                <div className="vaybp ">View commonly asked queries and Chat</div>
                            </div>
                            
                            {/* <span className='kutty-lock '><CiLock /></span> */}
                            <div className="right-aro-div-1 ">
                              <div className="right-aro-div-2">
                                  <MdChevronRight className='right-aro-img' />
                              </div>
                            </div>
                        </div>
                    </div>

                    <div className="your-order-div-1 ">
                        <div className="your-order-div-2 ">
                            <img className='lockimg' src={Accountandsettings} alt="" />
                            <div className="your-order-text-div ">
                              <div className="yo ">Accounts & Settings</div>
                              <div className="vaybp ">Locations, Payments permissions & More</div>
                            </div>
                            <span className='kutty-lock '><CiLock /></span>
                        </div>
                    </div>

                </section>

                <section className='sec-2'>

                      <div className="play-credit-div-1 ">
                        <div className="play-credit-div-2 ">
                            <img className='lockimg' src={Rewards_1} alt="" />
                            <div className="your-order-text-div ">
                                <div className="yo ">Rewards</div>
                                <div className="vaybp ">View your rewards & unlock new ones</div>
                            </div>
                            
                            {/* <span className='kutty-lock '><CiLock /></span> */}
                            <div className="right-aro-div-1 ">
                              <div className="right-aro-div-2">
                                  <MdChevronRight className='right-aro-img' />
                              </div>
                            </div>
                        </div>
                      </div>

                      <div className="play-credit-div-1 ">
                        <div className="play-credit-div-2 ">
                            <img className='lockimg' src={Bookachange} alt="" />
                            <div className="your-order-text-div ">
                                <div className="yo ">Rewards</div>
                                <div className="vaybp ">View your rewards & unlock new ones</div>
                            </div>
                            
                            {/* <span className='kutty-lock '><CiLock /></span> */}
                            <div className="right-aro-div-1 ">
                              <div className="right-aro-div-2">
                                  <MdChevronRight className='right-aro-img' />
                              </div>
                            </div>
                        </div>
                    </div>

                </section>


          {/* <form>
            <div className="mb-3">
              <label htmlFor="mobileNumber" className="form-label">
                Mobile Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="mobileNumber"
                placeholder="Enter your mobile number"
              />
            </div>
            <button className="btn btn-secondary w-100" disabled>
              Proceed Via OTP
            </button>
            <p className="mt-3 text-center">
              By signing in you agree to our{" "}
              <span className="text-danger">terms and conditions</span>
            </p>
          </form> */}
        </div>
      </div>
    </div>
{/* ------------------------------------------------------------------------------------------------------------ */}

          </div>
        </div>
      </div>
      {/* <Footer/> */}

      {/* Location Popup */}
      {showLocationPopup && (
        <div className="popup-overlay">
          <div className="popup-content" ref={locationPopupRef} onClick={(e) => e.stopPropagation()}>
            <button onClick={handleClosePopup} className="close-button"></button>
            <Cities />
          </div>
        </div>
      )}

      {/* Sign In Popup */}
      {showSignInPopup && (
        <div className="popup-overlay">
          <div className="popup-content" ref={signInPopupRef} onClick={(e) => e.stopPropagation()}>
            <button onClick={handleClosePopup} className="close-button"></button>
            <Login />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;

    
    
