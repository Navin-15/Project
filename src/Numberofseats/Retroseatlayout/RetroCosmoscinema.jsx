// import React from 'react'
// import '../Seatlayout.css'
// import { useState, useEffect } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { IoIosClose } from "react-icons/io";
// import { FaChevronLeft } from "react-icons/fa6";
// import { useNavigate } from 'react-router-dom';

// function Cosmoscinema() {

//   const navigate = useNavigate();

//     // Initialize with current date/time
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [now, setNow] = useState(new Date());       

//   // Update 'now' every second
//   useEffect(() => {
//     const timer = setInterval(() => setNow(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const handlePreviousPage = () => {
//         window.scrollTo(0, 0);
//     navigate(-1);
//   };

//   return (
// <>
//     <div className=" toppy bg-white"> <FaChevronLeft onClick={handlePreviousPage}  className='fs-5' style={{position:"absolute", top:"20px",left:"20px",cursor:"pointer"}}/> 
//             <div className=" mx-5 "> 
//                 <div className=" p-2  ">
//                     <div className="">
//                         <a href="" className='text-dark' style={{textDecoration:"none"}}>Retro</a>
//                         <span className="bg-danger">
//                             <IoIosClose onClick={handlePreviousPage} className='fs-2' style={{position:"absolute", right:"3rem", cursor:'pointer'}} />
//                         </span>
//                     </div>
//                     <div className=" d-flex">
//                         <span style={{fontSize:"13px",fontWeight:"700",color:"rgb(88, 86, 86)"}}> Cosmo Cinemas PEELAMEDU AC 4K RGB Lase:Coimbatore </span>
                        
//                             &nbsp;

//                             <span style={{fontSize:"13px",fontWeight:"700",color:"rgb(88, 86, 86)"}}>
//                                 {/* <strong>Selected:</strong>{" "} */}
//                                 {selectedDate.toLocaleString("default", {
//                                   weekday: "long",
//                                   month: "long",
//                                   day: "numeric",
//                                   year: "numeric",
                               
//                                 })}
//                             </span>
//                     </div>
//                 </div>
//             </div>
    
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
// {/* ------------------------------------------------------------------------------------------------------------- */}
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
//=====================================================================================
// import React, { useState, useEffect } from "react";
// import "../Seatlayout.css";
// import { FaChevronLeft } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";

// const ROWS = ["A", "B", "C", "D"];
// const SEATS_PER_ROW = 12;
// const PRICE_PER_SEAT = 150;

// function Cosmoscinema() {
//   const navigate = useNavigate();
//   const [selectedSeats, setSelectedSeats] = useState(new Set());
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [now, setNow] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => setNow(new Date()), 1000);
//     // return () => clearInterval(timer);
//   }, []);

//   const toggleSeat = (seatId) => {
//     setSelectedSeats(prev => {
//       const updated = new Set(prev);
//       if (updated.has(seatId)) {
//         updated.delete(seatId);
//       } else {
//         updated.add(seatId);
//       }
//       setTotalPrice(updated.size * PRICE_PER_SEAT);
//       return updated;
//     });
//   };

//   const handlePay = () => {
//     alert(`Proceeding to payment for ${selectedSeats.size} seats, total ₹${totalPrice}`);
//   };

//   const handlePrevious = () => {
//     window.scrollTo(0,0);
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
//           cursor: "pointer",
//           margin: "2px",
//           padding: "8px",
//         }}
//       >
//         {num}
//       </div>
//     );
//   };

//   return (
//     <div className="container">
//       <div className="toppy bg-white position-relative">
//         <FaChevronLeft onClick={handlePrevious} className="fs-5 position-absolute start-3 top-3" style={{cursor:"pointer"}}/>
//         <div className="mx-5 p-2">
//           <a href="#" className="text-dark text-decoration-none">Retro</a>
//           <span className="bg-danger position-absolute end-5 top-3">
//             <FaChevronLeft onClick={handlePrevious} className="fs-2" style={{cursor:'pointer'}}/>
//           </span>
//           <div className="d-flex mt-2">
//             <span className="text-secondary fw-bold">
//               Cosmo Cinemas PEELAMEDU AC 4K RGB Laser: <strong>{now.toLocaleString()}</strong>
//             </span>
//           </div>
//         </div>
//       </div>

//       <div className="screen-layout mt-3">
//         <div className="screen-bar">Screen</div>
//         {ROWS.map(row => (
//           <div key={row} className="d-flex align-items-center mt-2">
//             <span className="seatR">{row}</span>
//             <div className="d-flex flex-wrap">
//               {[...Array(SEATS_PER_ROW)].map((_, i) => renderSeat(row, SEATS_PER_ROW - i))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Bottom bar */}
//       <div className="pay-bar fixed-bottom bg-white d-flex justify-content-between align-items-center p-3 shadow">
//         <div>
//           {/* Selected: <strong>{selectedSeats.size}</strong> seats — ₹<strong>{totalPrice}</strong> */}
//         </div>
//         <button
//           className="btn btn-primary"
//           disabled={selectedSeats.size === 0}
//           onClick={handlePay}
//         >
//           Pay ₹{totalPrice}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Cosmoscinema;

//==================================================================================================================

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


import React, { useState, useEffect } from "react";
import "../Seatlayout.css";
import { FaChevronLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const ROWS = ["A","B","C","D","E","F","G","H"];
const SEATS_PER_ROW = 25;
const PRICE_PER_SEAT = 150;

function Cosmoscinema() {
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState(new Set());
  const [bookedSeats, setBookedSeats] = useState(new Set());
  const [totalPrice, setTotalPrice] = useState(0);
  const [now, setNow] = useState(new Date());
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    // 1️⃣ Load already booked seats on initial render
    // axios.get('http://localhost:5000/api/bookings/seats')
    axios.get('/api/bookings/seats')
      .then(res => {
        setBookedSeats(new Set(res.data)); // e.g. ["A3", "B10", ...]
      })
      .catch(console.error);

    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleSeat = (seatId) => {
    if (showSummary || bookedSeats.has(seatId)) return;
    setSelectedSeats(prev => {
      const updated = new Set(prev);
      updated.has(seatId) ? updated.delete(seatId) : updated.add(seatId);
      setTotalPrice(updated.size * PRICE_PER_SEAT);
      return updated;
    });
  };

  const handlePay = () => {
    if (selectedSeats.size > 0) setShowSummary(true);
  };

  const handleConfirm = async () => {
    const seatsToBook = Array.from(selectedSeats);
    const bookingData = {
      seats: seatsToBook,
      totalPrice,
      bookedAt: new Date().toISOString(),
    };
    try {
      await axios.post('http://localhost:5000/api/bookings', bookingData);
      alert('Booking confirmed!');
      console.log(bookingData);
      

      // 2️⃣ Add new bookings to disabled list
      setBookedSeats(prev => {
        const merged = new Set(prev);
        seatsToBook.forEach(s => merged.add(s));
        return merged;
      });

      setSelectedSeats(new Set()); // clear selection
      setTotalPrice(0);
      setShowSummary(false);
    } catch (err) {
      console.error(err);
      alert('Booking failed.');
    }
  };

  const handleBackToSeats = () => setShowSummary(false);
  const handlePrevious = () => { window.scrollTo(0,0); navigate(-1); };

  const renderSeat = (row, num) => {
    const id = `${row}${num}`;
    const isBooked = bookedSeats.has(id);
    const isSelected = selectedSeats.has(id);
    const bgColor = isBooked ? 'orange' : isSelected ? 'green' : '';
    return (
      <div
        key={id}
        className="seatno"
        onClick={() => toggleSeat(id)}
        style={{
          backgroundColor: bgColor,
          color: isSelected ? 'white' : '',
          cursor: isBooked || showSummary ? 'not-allowed' : 'pointer',
          margin: '2px',
          padding: '8px',
        }}
      >{num}</div>
    );
  };

  if (showSummary) {
    return (
      <div className="container summary-screen bg-warning mt-3">
        <FaChevronLeft onClick={handleBackToSeats} className="fs-5" style={{ cursor: "pointer", margin: "16px" }} />
        <h2>Booking Summary</h2>
        <p><strong>Seats:</strong> {Array.from(selectedSeats).sort().join(", ")}</p>
        <p><strong>Total Price:</strong> ₹{totalPrice}</p>
        <button className="btn btn-success me-2 mb-3" onClick={handleConfirm}>Confirm Booking</button>
        <button className="btn btn-secondary mb-3" onClick={handleBackToSeats}>Modify Selection</button>
      </div>
    );
  }

  return (
    <div className="container seat-selection" style={{ position:'sticky', top:0 }}>
      <div className="toppy bg-secondary position-relative">
        <FaChevronLeft onClick={handlePrevious} className="fs-5 position-absolute" style={{ top:"16px", left:"16px", cursor:"pointer" }} />
        <div className="mx-5 p-1">
          <h3>Retro</h3>
          <h6>Cosmo Cinemas - PEELAMEDU</h6>
          <p><strong>{now.toLocaleString()}</strong></p>
        </div>
      </div>

      <div className="screen-layout mt-3 mb-3 pb-2 bg-secondary">
        <div className="screen-bar">Screen</div>
        {ROWS.map(row => (
          <div key={row} className="d-flex align-items-center mt-2">
            <span className="seatR">{row}</span>
            <div className="d-flex flex-wrap" style={{ marginLeft: '160px' }}>
              {[...Array(SEATS_PER_ROW)].map((_, i) => renderSeat(row, SEATS_PER_ROW - i))}
            </div>
          </div>
        ))}
      </div>

      <div className="pay-bar fixed-bottom bg-secondary d-flex justify-content-between align-items-center p-2 shadow-lg">
        <div style={{ marginLeft: '20px' }}>
          Selected: <strong>{selectedSeats.size}</strong> — ₹<strong>{totalPrice}</strong>
        </div>
        <button className="btn btn-primary" disabled={selectedSeats.size === 0} onClick={handlePay} style={{ marginRight:'20px' }}>
          Pay ₹{totalPrice}
        </button>
      </div>
    </div>
  );
}

export default Cosmoscinema;

