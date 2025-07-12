// import React from 'react'
// import '../Seatlayout.css'
// import { useState, useEffect } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { IoIosClose } from "react-icons/io";
// import { FaChevronLeft } from "react-icons/fa6";
// import { useNavigate } from 'react-router-dom';

// function Cosmoscinema() {

//     const navigate = useNavigate();

//   // Initialize with current date/time
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [now, setNow] = useState(new Date());       

//   // Update 'now' every second
//   useEffect(() => {
//     const timer = setInterval(() => setNow(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const handlePreviousPage = () => {
//        window.scrollTo(0, 0); 
//     navigate(-1);
//   };

//   return (
// <>
//     <div className=" toppy bg-white"> <FaChevronLeft onClick={handlePreviousPage} className='fs-5' style={{position:"absolute", top:"20px",left:"20px",cursor:"pointer"}}/> 
//             <div className=" mx-5 "> 
//                 <div className=" p-2  ">
//                     <div className="">
//                         <a href="" className='text-dark' style={{textDecoration:"none"}}>HIT: The Third Case</a>
//                         <span className="bg-danger">
//                             <IoIosClose onClick={handlePreviousPage} className='fs-2' style={{position:"absolute", right:"3rem", cursor:'pointer'}} />
//                         </span>
//                     </div>
//                     <div className=" d-flex">
//                         <span style={{fontSize:"13px",fontWeight:"700",color:"rgb(88, 86, 86)"}}> Cosmo Cinemas PEELAMEDU AC 4K RGB Lase:Coimbatore </span>
                        
//                             {/* <div style={{ fontFamily: "Arial, sans-serif", padding: 20 }}>
//       <h3>Pick a date and time:</h3>
//       <DatePicker
//         selected={selectedDate}
//         onChange={(date) => setSelectedDate(date)}
//         showTimeSelect
//         dateFormat="EEEE, MMMM d, yyyy h:mm aa"
//       />

//       <div style={{ marginTop: 20 }}>
//         <strong>Current (Live):</strong>{" "}
//         {now.toLocaleString("default", {
//           weekday: "long",
//           month: "long",
//           day: "numeric",
//           year: "numeric",
//           hour: "numeric",
//           minute: "numeric",
//           second: "numeric",
//         })}
//       </div>
// </div>*/}
//                             &nbsp;

//                             <span style={{fontSize:"13px",fontWeight:"700",color:"rgb(88, 86, 86)"}}>
//                                 {/* <strong>Selected:</strong>{" "} */}
//                                 {selectedDate.toLocaleString("default", {
//                                   weekday: "long",
//                                   month: "long",
//                                   day: "numeric",
//                                   year: "numeric",
//                                 //   hour: "numeric",
//                                 //   minute: "numeric",
//                                 })}
//                             </span>
//                     </div>
//                 </div>
//             </div>
//     {/* box-shadow: rgba(0, 0, 0, 0.2)  0px 3px 4px 3px; */}
//     <div className="toppy" style={{backgroundColor:'#f5f5fa',padding:"8px 0px",height:"auto",maxHeight:"50px",overflow:"hidden",boxShadow:"rgba(0, 0, 0, 0.1) 0px 4px 5px 1px"}}>
//             <div className="w-75 ms-5">

//               <ul className='d-flex'>
              
//               <li className='timelistitem m-0'>
//                   9:00 AM 
//               </li>
//               <li className='timelistitem'>
//                   12:30 PM
//               </li>
//               <li className='timelistitem'>
//                   04:00 PM
//               </li>
//               <li className='timelistitem'>
//                   07:30 PM
//               </li>
//               <li className='timelistitem'>
//                   11:00 PM
//               </li>

//             </ul>
            
//           </div>
//     </div>
//     </div>
// {/* ------------------------------------------------------------------------------------------------------------ */}
//           <div className="seeat container">
//                 <div className="block">
// {/* platinum div */}
//                     <div className="blocklayout platinumlayout ">

//                         <table className=' '>
//                           <tbody className=''>
//                             <tr>
//                               <td> <div className="tirename">Rs.150 Platinum</div> </td>
//                             </tr>
                          
//                         <div className="emptyln"></div>
                        
//                         <div className="">  
// {/* ------------------------------------------------------------------------------------------------------------- */}
//                         <tr className='mt-2 d-flex'>
                          
//                             <div className="seatR ">A</div> 
                          
//                           <td className='SRow-1'>

//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty"> <a className='seatno available' href="">8</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty">&nbsp;</div> 
//                             <div className="seatempty">&nbsp;</div> 
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">1</a> </div>
//                             <div className="seatempty">&nbsp;</div>

//                           </td>
                          
//                         </tr>
// {/* -------------------------------------------------------------------------------------------------------------- */}
//                         <tr className=' d-flex'>
                          
//                             <div className="seatR">B</div> 
                          
//                           <td className='SRow-1'>
                            
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">9</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">8</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty">&nbsp;</div> 
//                             <div className="seatempty">&nbsp;</div> 
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

//                           </td>
//                         </tr>
// {/* -------------------------------------------------------------------------------------------------------------- */}
//                         <tr className=' d-flex'>
                          
//                             <div className="seatR ">C</div> 
                          
//                           <td className='SRow-1'>
                            
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">9</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">8</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty">&nbsp;</div> 
//                             <div className="seatempty">&nbsp;</div> 
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

//                           </td>
//                         </tr>
// {/* ------------------------------------------------------------------------------------------------------------- */}
//                         <tr className=' d-flex'>
                          
//                             <div className="seatR ">D</div> 
                          
//                           <td className='SRow-1'>
                            
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">9</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">8</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty">&nbsp;</div> 
//                             <div className="seatempty">&nbsp;</div> 
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

//                           </td>
//                         </tr>

//                       </div>
//                     </tbody>  
//                   </table>               
//                 </div>
// {/* ------------------------------------------------------------------------------------------------------------- */}
// {/* gold div */}
//                     <div className="blocklayout goldlayout ">

//                         <table className=''>
//                           <tbody className=''>
//                             <tr>
//                               <td> <div className="tirename">Rs.130 Gold</div> </td>
//                             </tr>
              
//                         <div className="emptyln"></div>
                            
//                           <div className="">
//                               {/* ------------------------------------------------------------------------------------------------------------- */}
//                         <tr className='mt-2 d-flex'>
                          
//                             <div className="seatR ">E</div> 
                          
//                           <td className='SRow-1'>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">23</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">22</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">21</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">20</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">19</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">18</a> </div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">17</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">16</a> </div> 
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">15</a> </div> 
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">14</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">13</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>  
//                             <div className="seatempty"> <a className='seatno available' href="">9</a> </div>  
//                             <div className="seatempty"> <a className='seatno available' href="">8</a> </div>  
//                             <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

//                           </td>
//                         </tr>
// {/* -------------------------------------------------------------------------------------------------------------- */}
//                         <tr className=' d-flex'>
                          
//                             <div className="seatR ">F</div> 
                          
//                           <td className='SRow-1'>
                            
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">23</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">22</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">21</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">20</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">19</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">18</a> </div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">17</a> </div> 
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">16</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">15</a> </div> 
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">14</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">13</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>  
//                             <div className="seatempty"> <a className='seatno available' href="">9</a> </div>  
//                             <div className="seatempty"> <a className='seatno available' href="">8</a> </div>  
//                             <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

//                           </td>
//                         </tr>
// {/* -------------------------------------------------------------------------------------------------------------- */}
//                         <tr className=' d-flex'>
                          
//                             <div className="seatR ">G</div> 
                          
//                           <td className='SRow-1'>
                            
//                           <div className="seatempty">   <a className='seatno availabledouble px-1 text-center' href="">23</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">22</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">21</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">20</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">19</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">18</a> </div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">17</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">16</a> </div> 
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">15</a> </div> 
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">14</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">13</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>  
//                             <div className="seatempty"> <a className='seatno available' href="">9</a> </div>  
//                             <div className="seatempty"> <a className='seatno available' href="">8</a> </div>  
//                             <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

//                           </td>
//                         </tr>
// {/* ------------------------------------------------------------------------------------------------------------- */}
//                         <tr className=' d-flex'>
                          
//                             <div className="seatR ">H</div> 
                          
//                           <td className='SRow-1'>
                            
//                             <div className="seatempty">   <a className='seatno availabledouble px-1 text-center' href="">23</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">22</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">21</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">20</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">19</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">18</a> </div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">17</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">16</a> </div> 
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">15</a> </div> 
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">14</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">13</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>  
//                             <div className="seatempty"> <a className='seatno available' href="">9</a> </div>  
//                             <div className="seatempty"> <a className='seatno available' href="">8</a> </div>  
//                             <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

//                           </td>
//                         </tr>
// {/* ------------------------------------------------------------------------------------------------------------- */}
//                         <tr className=' d-flex'>
                          
//                             <div className="seatR ">I</div> 
                          
//                           <td className='SRow-1'>
                            
//                             <div className="seatempty">   <a className='seatno availabledouble px-1 text-center' href="">23</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">22</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">21</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">20</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">19</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">18</a> </div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">17</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">16</a> </div> 
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">15</a> </div> 
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">14</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">13</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>  
//                             <div className="seatempty"> <a className='seatno available' href="">9</a> </div>  
//                             <div className="seatempty"> <a className='seatno available' href="">8</a> </div>  
//                             <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

//                           </td>
//                         </tr>
// {/* ------------------------------------------------------------------------------------------------------------- */}
//                         <tr className=' d-flex'>
                          
//                             <div className="seatR ">J</div> 
                          
//                           <td className='SRow-1'>
                            
//                             <div className="seatempty">   <a className='seatno availabledouble px-1 text-center' href="">23</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">22</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">21</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">20</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">19</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">18</a> </div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">17</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">16</a> </div> 
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">15</a> </div> 
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">14</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">13</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>  
//                             <div className="seatempty"> <a className='seatno available' href="">9</a> </div>  
//                             <div className="seatempty"> <a className='seatno available' href="">8</a> </div>  
//                             <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

//                           </td>
//                         </tr>
// {/* ------------------------------------------------------------------------------------------------------------- */}
//                         <tr className=' d-flex'>
                          
//                             <div className="seatR ">K</div> 
                          
//                           <td className='SRow-1'>
                            
//                             <div className="seatempty">   <a className='seatno availabledouble px-1 text-center' href="">23</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">22</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">21</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">20</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">19</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">18</a> </div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">17</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">16</a> </div> 
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">15</a> </div> 
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">14</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">13</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>  
//                             <div className="seatempty"> <a className='seatno available' href="">9</a> </div>  
//                             <div className="seatempty"> <a className='seatno available' href="">8</a> </div>  
//                             <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

//                           </td>
//                         </tr>
// {/* ------------------------------------------------------------------------------------------------------------- */}
//                         <tr className=' d-flex'>
                          
//                             <div className="seatR ">L</div> 
                          
//                           <td className='SRow-1'>
                            
//                             <div className="seatempty">   <a className='seatno availabledouble px-1 text-center' href="">23</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">22</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">21</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">20</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">19</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">18</a> </div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">17</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">16</a> </div> 
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">15</a> </div> 
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">14</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">13</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>  
//                             <div className="seatempty"> <a className='seatno available' href="">9</a> </div>  
//                             <div className="seatempty"> <a className='seatno available' href="">8</a> </div>  
//                             <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

//                           </td>
//                         </tr>
// {/* ------------------------------------------------------------------------------------------------------------- */}
//                         <tr className=' d-flex'>
                          
//                             <div className="seatR ">M</div> 
                          
//                           <td className='SRow-1'>
                            
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">23</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">22</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">21</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">20</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">19</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">18</a> </div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">17</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">16</a> </div> 
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">15</a> </div> 
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">14</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">13</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>  
//                             <div className="seatempty"> <a className='seatno available' href="">9</a> </div>  
//                             <div className="seatempty"> <a className='seatno available' href="">8</a> </div>  
//                             <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

//                           </td>
//                         </tr>
// {/* ---------------------------------------------------------------------------------------------------------------------------------------------- */}

//                         <tr className=' d-flex mt-4'>
                          
//                             <div className="seatR ">N</div> 
                          
//                           <td className='SRow-1'>
                            
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">23</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">22</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">21</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">20</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">19</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">18</a> </div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">17</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">16</a> </div> 
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">15</a> </div> 
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">14</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">13</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>  
//                             <div className="seatempty"> <a className='seatno available' href="">9</a> </div>  
//                             <div className="seatempty"> <a className='seatno available' href="">8</a> </div>  
//                             <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

//                           </td>
//                         </tr>
// {/* ---------------------------------------------------------------------------------------------------------------------------------------------- */}
//                         <tr className=' d-flex'>
                          
//                             <div className="seatR ">O</div> 
                          
//                           <td className='SRow-1'>
                            
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">23</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">22</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">21</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">20</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">19</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">18</a> </div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">17</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">16</a> </div> 
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">15</a> </div> 
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">14</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">13</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>  
//                             <div className="seatempty"> <a className='seatno available' href="">9</a> </div>  
//                             <div className="seatempty"> <a className='seatno available' href="">8</a> </div>  
//                             <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty">&nbsp;</div>  
//                             <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

//                           </td>
//                         </tr>
// {/* ---------------------------------------------------------------------------------------------------------------------------------------------- */}
//                           </div>
//                           </tbody>
//                         </table>
//                 </div>
// {/* ---------------------------------------------------------------------------------------------------------------------------------------------- */}
// {/* silver div */}
//                   <div className="blocklayout goldlayout ">

//                         <table className=''>
//                           <tbody className=''>
//                             <tr>
//                               <td> <div className="tirename">Rs.100 Silver</div> </td>
//                             </tr>
              
//                         <div className="emptyln"></div>
                            
//                           <div className="">
// {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
//                         <tr className='mt-2 d-flex'>
                          
//                             <div className="seatR ">P</div> 
                          
//                           <td className='SRow-1'>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">23</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">22</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">21</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">20</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">19</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">18</a> </div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">17</a> </div>
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">16</a> </div> 
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">15</a> </div> 
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">14</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">13</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>  
//                             <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>  
//                             <div className="seatempty"> <a className='seatno available' href="">9</a> </div>  
//                             <div className="seatempty"> <a className='seatno available' href="">8</a> </div>  
//                             <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty">&nbsp;</div>
//                             <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
//                             <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

//                           </td>
//                         </tr>
//                           </div>
//                           </tbody>
//                         </table>
//                 </div>
// {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
//               </div>
//           </div>
// {/* ----------------------------------------------------------------------------------------------------------------------------------------------- */}
// {/* screen div */}
//           <div className="parentscreendiv">
            
//              <div className="screendiv">Screen</div>

//           </div>
// {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}
//           <div className=" profile w-100 d-flex justify-content-center bg-white" style={{boxShadow:"rgba(0, 0, 0, 0.1) 4px -5px 5px 1px"}}>
//                <div className="w-50 d-flex mt-2 justify-content-center">
                
//                 <div className=" w-25">
//                     <div className="seatempty"> <a className='seatno availabledouble' style={{padding:"9px"}} href=""></a></div>
//                      Available
//                </div>
//                <div className=" w-25">
//                     <div className="seatempty"> <a className='seatno availabledouble' style={{padding:"9px",backgroundColor:"green"}} href=""></a> </div>
//                     Selected
//                </div>
//                <div className=" w-25">
//                     <div className="seatempty"> <a className='seatno availabledouble' style={{padding:"9px",backgroundColor:"grey",border:"none"}} href=""></a> </div>
//                     Sold
//                 </div></div>                 
//           </div>                                
// </>
//   )
// }

// export default Cosmoscinema

//===================== ======================================= = ==================== = =  = = = = = =========
// full fledge code

import React, { useState, useEffect } from 'react';
import '../Seatlayout.css';
import { IoIosClose } from "react-icons/io";
import { FaChevronLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

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
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [bookedSeats, setBookedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");
  

  // Fetch booked seats from backend

  useEffect(() => {
  const fetchBookedSeats = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/bookings');
      const allBooked = response.data.flatMap(b => b.seats);
      setBookedSeats(allBooked);
    } catch (err) { console.error(err); }
  };
  fetchBookedSeats();

  // If arriving after "Modify", restore previous
  if (location.state?.selectedSeats) {
    setSelectedSeats(location.state.selectedSeats);
  }
}, []);

  const handlePreviousPage = () => {
    window.scrollTo(0, 0);
    navigate(-1);
  };


  const handlepay = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat before paying.");
      return;
    }

    const TheaterName = "Cosmo Cinemas PEELAMEDU AC 4K RGB Laser, Coimbatore";
    const moviename = "HIT: The Third Case";
    const summaryData = {
      moviename: moviename,
      theater: TheaterName,
      selectedSeats,
      totalPrice,
      date: selectedDate.toLocaleDateString(),
      time: selectedTime
    };

    // Immediately mark selected seats as booked
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
      <div className="toppy bg-white">
        <FaChevronLeft onClick={handlePreviousPage} className='fs-5' style={{ position: "absolute", top: "20px", left: "20px", cursor: "pointer" }} />
        <div className="mx-5">
          <div className="p-2">
            <a href="#" className='text-dark' style={{ textDecoration: "none" }}>HIT: The Third Case</a>
            <IoIosClose onClick={handlePreviousPage} className='fs-2' style={{ position: "absolute", right: "3rem", cursor: 'pointer' }} />
            <div className="d-flex mt-2">
              <span style={{ fontSize: "13px", fontWeight: "700", color: "rgb(88, 86, 86)" }}>
                Cosmo Cinemas PEELAMEDU AC 4K RGB Lase: Coimbatore
              </span>
              &nbsp;&nbsp;
              <span style={{ fontSize: "13px", fontWeight: "700", color: "rgb(88, 86, 86)" }}>
                {selectedDate.toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Time Selection */}
      <div className="mx-5 mt-2">
        <label htmlFor="time" style={{ fontWeight: "600", fontSize: "13px", marginRight: "10px" }}>Select Show Time:</label>
        <select
          id="time"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          style={{ padding: "4px", fontSize: "13px" }}
        >
          <option>Select Time</option>
          <option>09:00 AM</option>
          <option>12:30 PM</option>
          <option>4:00 PM</option>
          <option>7:30 PM</option>
          <option>11:00 PM</option>
        </select>
      </div>

      {/* Seat Layout */}
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
      <div className="d-flex justify-content-center">
        <button onClick={handlepay} className="btn btn-danger w-25 my-3" disabled={selectedSeats.length === 0}>
          Pay ₹{totalPrice}
        </button>
      </div>
    </>
  );
};

export default Seatlayout;
