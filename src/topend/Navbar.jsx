// -----------------------------------------------------------------------------------------------------------------------------------------

// chatgpt code 5
// working on project

// import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import bookmyshowlogo from '/images/bookmyshow.png';
// import search from '/images/search.png';
// import hamburgermenu from '/images/img.png';
// import dropdownimg from '/images/dropdownimg.svg';
// import Cities from '../insidenav/Cities';
// import Login from '../insidenav/Login';
// import Gift from '/images/giftbox.png'
// import Lockimg from '/images/lockimg.png'
// import { CiLock } from "react-icons/ci";
// import { CiBellOn } from "react-icons/ci";
// import { MdChevronRight } from "react-icons/md";
// import Streamimg from '/images/streamimg.png'
// import Playcreditcard from '/images/playcreditcard.png'
// import Helpandsupport from '/images/helpandsupport.png'
// import Accountandsettings from '/images/accountandsettings.png'
// import Rewards_1 from '/images/rewards_1.png'
// import Bookachange from '/images/bookachange.png'


// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// // import Footer from '../footer/Footer';


// function Navbar() {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');


// useEffect(() => {
//         const handleStorageChange = () => {
//             setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
//         };

//         // Listen for storage changes (in case other tabs update login)
//         window.addEventListener('storage', handleStorageChange);

//         return () => {
//             window.removeEventListener('storage', handleStorageChange);
//         };
//     }, []);

//     const handleLoginClick = () => {
//         navigate('/login');
//     };

//     const handleLogout = () => {
//         localStorage.removeItem('isLoggedIn');
//         setIsLoggedIn(false);
//         navigate('/');
//     };

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
//       if (
//         (showLocationPopup && locationPopupRef.current && !locationPopupRef.current.contains(event.target)) ||
//         (showSignInPopup && signInPopupRef.current && !signInPopupRef.current.contains(event.target))
//       ) {
//         setShowLocationPopup(false);
//         setShowSignInPopup(false);
//       }
//     };

//     document.addEventListener('mousedown', handleOutsideClick);
//     return () => document.removeEventListener('mousedown', handleOutsideClick);
//   }, [showLocationPopup, showSignInPopup]);

//   const handleSearchClick = () => {
//     navigate('/innerinput');
//   };
//   const handlehomepage = () => {
//     navigate('/');
//   };

//   const handleCurrentLocation = () => {
//     navigate('/cities');
//   };

//   const handleSignin = () => {
//     navigate('/login');
//   };




//   // const handleClosePopup = () => {
//   //   setShowLocationPopup(false);
//   //   setShowSignInPopup(false);
//   // };

//   return (
//     <>
//       <div className=" mt-1 navmain ">
//         <div className="row divrow">
//           {/* Logo */}
//           <div className="logodiv "> 
//             <img onClick={handlehomepage} src={bookmyshowlogo}  alt="Logo" className="logo " />
//           </div>

//           {/* Search */}
//           <div className="searchdiv ">
//             <input
//               className="input"
//               type="search"
//               placeholder="Search for Movies, Events, Plays, Sports and Activities"
//               onClick={handleSearchClick}
//               style={{ cursor: 'pointer' }}
//               />
//             <span className="searchimgdiv">
//               <img className="searchimg" src={search} alt="Search" />
//             </span>
//           </div>
// {/* ------------------------------------------------------------------------------------------------------------ */}

//           {/* Location */}
//           <div
//             className="location "
//             onClick={() => setShowLocationPopup(true)}
//             style={{ cursor: 'pointer' }}
//           >
//             <span className="coimbatore " onClick={handleCurrentLocation}>{city}</span>
//             <img className="dropdownimg " src={dropdownimg} alt="Dropdown" />
//           </div>
// {/* ------------------------------------------------------------------------------------------------------------ */}

//           {/* Sign In */}
           
//                 <div className="ms-auto d-flex" style={{width:'6.6%',height:'31px',position:'relative',right:'100px',top:'15px',}}>
//                     {isLoggedIn ? (
//                         <>
//                             <span className="me-3">Hi,Guest</span>
//                             <button onClick={handleLogout} className="btn btn-outline-danger btn-sm ">Logout</button>
//                         </>
//                     ) : (
//                         <button onClick={handleLoginClick} className="btn btn-outline-primary btn-sm">Sign In</button>
//                     )}
//                 </div>
          


//           {/* <div
//             className="signindiv  "
            
//           >
//                 <div className=" signburger">
//                     <span className="signin " onClick={handleSignin}>Sign in</span> 
                    
                          


      
      
        
//         <img className="hamburger "
//         type="button"
//         data-bs-toggle="offcanvas"
//         data-bs-target="#offcanvasLogin"
//         aria-controls="offcanvasLogin"
//         src={hamburgermenu}/>

   
//       <div
//         className="offcanvas offcanvas-end  w-30 right-canvas "
//         tabIndex="-1"
//         id="offcanvasLogin"
//         aria-labelledby="offcanvasLoginLabel"
//         >
//         <div className="offcanvas-header hey-div-1 ">
//           <div className="hey-div-2">
//             <div className="hey-div-3">
//               <div className="hey-div-4">
//                   <div className="hey-div-5">Hey!</div>
//               </div>
//             </div>
//           </div>
        
//           <button
//             type="button"
//             className="btn-close text-reset "
//             data-bs-dismiss="offcanvas"
//             aria-label="Close"
//             ></button>
//           <hr />
          
//         </div>
//         <div className="offcanvas-body border  ">

//                 <div className="off-div-1 ">

//                   <div className="left-off-div ">
//                     <div className="gift-div ">
                      
//                         <img className="gift-img " src={Gift} alt="gift-image" />
                      
//                     </div>
//                     <div className="off-text ">Unlock special offers & great benefits</div>
//                   </div>

//                   <div className="right-reg-div ">
//                     <div className="regi ">Login / Register</div>
//                   </div>

//                 </div>

//                 <section className='sec-1 '>

//                     <div className="notification-div ">
//                         <div className="noti ">
//                           <div className="noti-img-div "><CiBellOn className='noti-img' /></div>
//                           <div className="noti-text ">Notifications</div>
//                         </div>
//                         <div className="right-aro-div-1">
//                           <div className="right-aro-div-2">
//                             <MdChevronRight className='right-aro-img' />
//                           </div>
//                         </div>
//                     </div>

//                     <div className="your-order-div-1 ">
//                         <div className="your-order-div-2 ">
//                             <img className='lockimg' src={Lockimg} alt="" />
//                             <div className="your-order-text-div ">
//                               <div className="yo ">Your Orders</div>
//                               <div className="vaybp ">View all your bookings & purchases</div>
//                             </div>
//                             <span className='kutty-lock '><CiLock /></span>
//                         </div>
//                     </div>

//                     <div className="your-order-div-1 ">
//                         <div className="your-order-div-2 ">
//                             <img className='lockimg' src={Streamimg} alt="" />
//                             <div className="your-order-text-div ">
//                               <div className="yo ">Stream Library</div>
//                               <div className="vaybp ">Rented & purchased Movies</div>
//                             </div>
//                             <span className='kutty-lock '><CiLock /></span>
//                         </div>
//                     </div>

//                     <div className="play-credit-div-1 ">
//                         <div className="play-credit-div-2 ">
//                             <img className='lockimg' src={Playcreditcard} alt="" />
//                             <div className="your-order-text-div ">
//                               <div className="yo ">Play Credit Card</div>
//                               <div className="vaybp ">View your play credit card details and offers</div>
//                             </div>
                            
                            
//                             <div className="right-aro-div-1 ">
//                               <div className="right-aro-div-2">
//                                   <MdChevronRight className='right-aro-img' />
//                               </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="play-credit-div-1 ">
//                         <div className="play-credit-div-2 ">
//                             <img className='lockimg' src={Helpandsupport} alt="" />
//                             <div className="your-order-text-div ">
//                                 <div className="yo ">Help & Support</div>
//                                 <div className="vaybp ">View commonly asked queries and Chat</div>
//                             </div>
                            
                         
//                             <div className="right-aro-div-1 ">
//                               <div className="right-aro-div-2">
//                                   <MdChevronRight className='right-aro-img' />
//                               </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="your-order-div-1 ">
//                         <div className="your-order-div-2 ">
//                             <img className='lockimg' src={Accountandsettings} alt="" />
//                             <div className="your-order-text-div ">
//                               <div className="yo ">Accounts & Settings</div>
//                               <div className="vaybp ">Locations, Payments permissions & More</div>
//                             </div>
//                             <span className='kutty-lock '><CiLock /></span>
//                         </div>
//                     </div>

//                 </section>

//                 <section className='sec-2'>

//                       <div className="play-credit-div-1 ">
//                         <div className="play-credit-div-2 ">
//                             <img className='lockimg' src={Rewards_1} alt="" />
//                             <div className="your-order-text-div ">
//                                 <div className="yo ">Rewards</div>
//                                 <div className="vaybp ">View your rewards & unlock new ones</div>
//                             </div>
                            
                            
//                             <div className="right-aro-div-1 ">
//                               <div className="right-aro-div-2">
//                                   <MdChevronRight className='right-aro-img' />
//                               </div>
//                             </div>
//                         </div>
//                       </div>

//                       <div className="play-credit-div-1 ">
//                         <div className="play-credit-div-2 ">
//                             <img className='lockimg' src={Bookachange} alt="" />
//                             <div className="your-order-text-div ">
//                                 <div className="yo ">Rewards</div>
//                                 <div className="vaybp ">View your rewards & unlock new ones</div>
//                             </div>
                            
                     
//                             <div className="right-aro-div-1 ">
//                               <div className="right-aro-div-2">
//                                   <MdChevronRight className='right-aro-img' />
//                               </div>
//                             </div>
//                         </div>
//                     </div>

//                 </section>
//         </div>
//       </div>
//     </div>


//           </div> */}
//         </div>
//       </div>
//       {/* <Footer/> */}

      
//     </>
//   );
// }

// export default Navbar;

//=====================================================================================
// working

// import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import bookmyshowlogo from '/images/bookmyshow.png';
// import search from '/images/search.png'
// import dropdownimg from '/images/dropdownimg.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';


// function Navbar() {

// const [city, setCity] = useState('Select Location');

//   const handleCitySelect = (detectedCity) => {
//     setCity(detectedCity);
//     localStorage.setItem('selectedCity', detectedCity);
//     const event = new Event('locationChanged');
//     window.dispatchEvent(event);
//   };


//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');


// useEffect(() => {
//         const handleStorageChange = () => {
//             setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
//         };

//         // Listen for storage changes (in case other tabs update login)
//         window.addEventListener('storage', handleStorageChange);

//         return () => {
//             window.removeEventListener('storage', handleStorageChange);
//         };
//     }, []);

//     const handleLoginClick = () => {
//         navigate('/login');
//     };

//     const handleLogout = () => {
//         localStorage.removeItem('isLoggedIn');
//         setIsLoggedIn(false);
//         navigate('/');
//     };

 

//   const handleSearchClick = () => {
//     navigate('/innerinput');
//   };
//   const handlehomepage = () => {
//     navigate('/');
//   };

//   const handleCurrentLocation = () => {
//     navigate('/cities');
//   };




//   return (
//     <>
//       <div className=" mt-1 navmain ">
//         <div className="row divrow">
//           {/* Logo */}
//           <div className="logodiv "> 
//             <img onClick={handlehomepage} src={bookmyshowlogo}  alt="Logo" className="logo " />
//           </div>

//           {/* Search */}
//           <div className="searchdiv ">
//             <input
//               className="input"
//               type="search"
//               placeholder="Search for Movies, Events, Plays, Sports and Activities"
//               onClick={handleSearchClick}
//               style={{ cursor: 'pointer' }}
//               />
//             <span className="searchimgdiv">
//               <img className="searchimg" src={search} alt="Search" />
//             </span>
//           </div>
// {/* ------------------------------------------------------------------------------------------------------------ */}

//           {/* Location */}
//           <div
//             className="location "
//             style={{ cursor: 'pointer' }}
//           >
//             <span className="coimbatore " onClick={handleCurrentLocation}>{city}</span>
//             <img className="dropdownimg " src={dropdownimg} alt="Dropdown" />
//           </div>

        
// {/* ------------------------------------------------------------------------------------------------------------ */}

//           {/* Sign In */}
           
//                 <div className="ms-auto d-flex" style={{width:'6.6%',height:'31px',position:'relative',right:'100px',top:'15px',}}>
//                     {isLoggedIn ? (
//                         <>
//                             <span className="me-3">Hi,Guest</span>
//                             <button onClick={handleLogout} className="btn btn-outline-danger btn-sm ">Logout</button>
//                         </>
//                     ) : (
//                         <button onClick={handleLoginClick} className="btn btn-outline-primary btn-sm">Sign In</button>
//                     )}
//                 </div>
          


          
//         </div>
//       </div>
//       {/* <Footer/> */}

      
//     </>
//   );
// }

// export default Navbar;
//--------------------------------------------------
//responsive navbar

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bookmyshowlogo from '/images/bookmyshow.png';
import searchIcon from '/images/search.png';
import dropdownImg from '/images/dropdownimg.svg';

import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const [city, setCity] = useState(localStorage.getItem('selectedCity') || 'Location');
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const navigate = useNavigate();

  useEffect(() => {
    const onStorage = () => setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const handleCitySelect = (detectedCity) => {
    setCity(detectedCity);
    localStorage.setItem('selectedCity', detectedCity);
    window.dispatchEvent(new Event('locationChanged'));
  };
  const handleSearch = () => navigate('/innerinput');
  const handleHome = () => navigate('/');
  const handleLogin = () => navigate('/login');
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/');
  };
  const handleCityPicker = () => navigate('/cities');

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white py-2 shadow-sm">
      <div className="container-fluid ">
        <a className="navbar-brand d-flex align-items-center" onClick={handleHome} style={{ cursor: 'pointer' }}>
          <img className='' src={bookmyshowlogo} alt="Logo" height="40" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <form className="d-flex my-2 my-md-0 ms-md-3 w-75 w-md-auto ">
            <input
              className="form-control me-2 flex-grow-1"
              type="search"
              placeholder="Search for Movies, Events, Plays…"
              onClick={handleSearch}
              readOnly
              style={{ cursor: 'pointer' }}
            />
            <button
              className="btn btn-outline-secondary "
              type="button"
              onClick={handleSearch}>
              <img src={searchIcon} alt="Search" height="20" />
            </button>
          </form>

          <ul className="navbar-nav ms-auto align-items-center gap-5">
            <li className="nav-item d-flex align-items-center me-3">
              <span className="nav-link p-0 d-flex " onClick={handleCityPicker} style={{ cursor: 'pointer' }}>
                {city} <img className='mt-2' src={dropdownImg} alt="▼" height="12" />
              </span>
            </li>
            <li className="nav-item w-50 me-3">
              {isLoggedIn ? (
                <>
                  <span className="nav-link">Hi, Guest</span>
                  <button className="btn btn-outline-danger btn-sm ms-2" onClick={handleLogout}>
                    Logout
                  </button>
                </>
              ) : (
                <button className="btn btn-outline-primary btn-sm" onClick={handleLogin}>
                  Sign In
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
//--------------------------------------------------
// optional code

// .navbar .form-control {
//   min-width: 0;
// }
// .navbar .nav-link {
//   cursor: pointer;
// }
// .navbar .navbar-brand img {
//   max-height: 40px;
// }
// @media (max-width: 575px) {
//   .navbar-nav .btn,
//   .navbar-nav .nav-link {
//     width: 100%;
//     text-align: center;
//   }
// }

//




//=================================
{/* <div
            className="signindiv  "
            
          >
                <div className=" signburger">
                    <span className="signin " onClick={handleSignin}>Sign in</span> 
        <img className="hamburger "
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasLogin"
        aria-controls="offcanvasLogin"
        src={hamburgermenu}/>

   
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
                            
                     
                            <div className="right-aro-div-1 ">
                              <div className="right-aro-div-2">
                                  <MdChevronRight className='right-aro-img' />
                              </div>
                            </div>
                        </div>
                    </div>

                </section>
        </div>
      </div>
    </div>


          </div> */}
//===========
//  const [showLocationPopup, setShowLocationPopup] = useState(false);
//   const [showSignInPopup, setShowSignInPopup] = useState(false);
//   const locationPopupRef = useRef(null);
//   const signInPopupRef = useRef(null);

//   // Prevent body scroll on popup
//   useEffect(() => {
//     document.body.style.overflow = (showLocationPopup || showSignInPopup) ? 'hidden' : 'auto';
//   }, [showLocationPopup, showSignInPopup]);

//   // Close popups on outside click
//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (
//         (showLocationPopup && locationPopupRef.current && !locationPopupRef.current.contains(event.target)) ||
//         (showSignInPopup && signInPopupRef.current && !signInPopupRef.current.contains(event.target))
//       ) {
//         setShowLocationPopup(false);
//         setShowSignInPopup(false);
//       }
//     };

//     document.addEventListener('mousedown', handleOutsideClick);
//     return () => document.removeEventListener('mousedown', handleOutsideClick);
//   }, [showLocationPopup, showSignInPopup]);
//===========
//=================================

    
    
