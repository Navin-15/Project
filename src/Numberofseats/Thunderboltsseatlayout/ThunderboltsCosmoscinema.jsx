import React from 'react'
import '../Seatlayout.css'
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosClose } from "react-icons/io";
import { FaChevronLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function Cosmoscinema() {

  const navigate = useNavigate();
    // Initialize with current date/time
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [now, setNow] = useState(new Date());       

  // Update 'now' every second
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handlePreviousPage = () => {
        window.scrollTo(0, 0);
    navigate(-1);
  };

  return (
<>
    <div className=" toppy bg-white"> <FaChevronLeft onClick={handlePreviousPage} className='fs-5' style={{position:"absolute", top:"20px",left:"20px",cursor:"pointer"}}/> 
            <div className=" mx-5 "> 
                <div className=" p-2  ">
                    <div className="">
                        <a href="" className='text-dark' style={{textDecoration:"none"}}>Thunderbolts</a>
                        <span className="bg-danger">
                            <IoIosClose onClick={handlePreviousPage} className='fs-2' style={{position:"absolute", right:"3rem", cursor:'pointer'}} />
                        </span>
                    </div>
                    <div className=" d-flex">
                        <span style={{fontSize:"13px",fontWeight:"700",color:"rgb(88, 86, 86)"}}> Cosmo Cinemas PEELAMEDU AC 4K RGB Lase:Coimbatore </span>
                        
                            {/* <div style={{ fontFamily: "Arial, sans-serif", padding: 20 }}>
      <h3>Pick a date and time:</h3>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        showTimeSelect
        dateFormat="EEEE, MMMM d, yyyy h:mm aa"
      />

      <div style={{ marginTop: 20 }}>
        <strong>Current (Live):</strong>{" "}
        {now.toLocaleString("default", {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        })}
      </div>
</div>*/}
                            &nbsp;

                            <span style={{fontSize:"13px",fontWeight:"700",color:"rgb(88, 86, 86)"}}>
                                {/* <strong>Selected:</strong>{" "} */}
                                {selectedDate.toLocaleString("default", {
                                  weekday: "long",
                                  month: "long",
                                  day: "numeric",
                                  year: "numeric",
                                //   hour: "numeric",
                                //   minute: "numeric",
                                })}
                            </span>
                    </div>
                </div>
            </div>
    {/* box-shadow: rgba(0, 0, 0, 0.2)  0px 3px 4px 3px; */}
    <div className="toppy" style={{backgroundColor:'#f5f5fa',padding:"8px 0px",height:"auto",maxHeight:"50px",overflow:"hidden",boxShadow:"rgba(0, 0, 0, 0.1) 0px 4px 5px 1px"}}>
            <div className="w-75 ms-5">

              <ul className='d-flex'>
              
              <li className='timelistitem m-0'>
                  9:00 AM 
              </li>
              <li className='timelistitem'>
                  12:30 PM
              </li>
              <li className='timelistitem'>
                  04:00 PM
              </li>
              <li className='timelistitem'>
                  07:30 PM
              </li>
              <li className='timelistitem'>
                  11:00 PM
              </li>

            </ul>
            
          </div>
    </div>
    </div>
{/* ------------------------------------------------------------------------------------------------------------ */}
          <div className="seeat container">
                <div className="block">
{/* platinum div */}
                    <div className="blocklayout platinumlayout ">

                        <table className=' '>
                          <tbody className=''>
                            <tr>
                              <td> <div className="tirename">Rs.150 Platinum</div> </td>
                            </tr>
                          
                        <div className="emptyln"></div>
                        
                        <div className="">  
{/* ------------------------------------------------------------------------------------------------------------- */}
                        <tr className='mt-2 d-flex'>
                          
                            <div className="seatR ">A</div> 
                          
                          <td className='SRow-1'>

                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty"> <a className='seatno available' href="">8</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div> 
                            <div className="seatempty">&nbsp;</div> 
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">1</a> </div>
                            <div className="seatempty">&nbsp;</div>

                          </td>
                          
                        </tr>
{/* -------------------------------------------------------------------------------------------------------------- */}
                        <tr className=' d-flex'>
                          
                            <div className="seatR">B</div> 
                          
                          <td className='SRow-1'>
                            
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">9</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">8</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div> 
                            <div className="seatempty">&nbsp;</div> 
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

                          </td>
                        </tr>
{/* -------------------------------------------------------------------------------------------------------------- */}
                        <tr className=' d-flex'>
                          
                            <div className="seatR ">C</div> 
                          
                          <td className='SRow-1'>
                            
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">9</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">8</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div> 
                            <div className="seatempty">&nbsp;</div> 
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

                          </td>
                        </tr>
{/* ------------------------------------------------------------------------------------------------------------- */}
                        <tr className=' d-flex'>
                          
                            <div className="seatR ">D</div> 
                          
                          <td className='SRow-1'>
                            
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">9</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">8</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div> 
                            <div className="seatempty">&nbsp;</div> 
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

                          </td>
                        </tr>

                      </div>
                    </tbody>  
                  </table>               
                </div>
{/* ------------------------------------------------------------------------------------------------------------- */}
{/* gold div */}
                    <div className="blocklayout goldlayout ">

                        <table className=''>
                          <tbody className=''>
                            <tr>
                              <td> <div className="tirename">Rs.130 Gold</div> </td>
                            </tr>
              
                        <div className="emptyln"></div>
                            
                          <div className="">
                              {/* ------------------------------------------------------------------------------------------------------------- */}
                        <tr className='mt-2 d-flex'>
                          
                            <div className="seatR ">E</div> 
                          
                          <td className='SRow-1'>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">23</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">22</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">21</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">20</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">19</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">18</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">17</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">16</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">15</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">14</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">13</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">9</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">8</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

                          </td>
                        </tr>
{/* -------------------------------------------------------------------------------------------------------------- */}
                        <tr className=' d-flex'>
                          
                            <div className="seatR ">F</div> 
                          
                          <td className='SRow-1'>
                            
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">23</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">22</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">21</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">20</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">19</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">18</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">17</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">16</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">15</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">14</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">13</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">9</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">8</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

                          </td>
                        </tr>
{/* -------------------------------------------------------------------------------------------------------------- */}
                        <tr className=' d-flex'>
                          
                            <div className="seatR ">G</div> 
                          
                          <td className='SRow-1'>
                            
                          <div className="seatempty">   <a className='seatno availabledouble px-1 text-center' href="">23</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">22</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">21</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">20</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">19</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">18</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">17</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">16</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">15</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">14</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">13</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">9</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">8</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

                          </td>
                        </tr>
{/* ------------------------------------------------------------------------------------------------------------- */}
                        <tr className=' d-flex'>
                          
                            <div className="seatR ">H</div> 
                          
                          <td className='SRow-1'>
                            
                            <div className="seatempty">   <a className='seatno availabledouble px-1 text-center' href="">23</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">22</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">21</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">20</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">19</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">18</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">17</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">16</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">15</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">14</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">13</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">9</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">8</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

                          </td>
                        </tr>
{/* ------------------------------------------------------------------------------------------------------------- */}
                        <tr className=' d-flex'>
                          
                            <div className="seatR ">I</div> 
                          
                          <td className='SRow-1'>
                            
                            <div className="seatempty">   <a className='seatno availabledouble px-1 text-center' href="">23</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">22</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">21</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">20</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">19</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">18</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">17</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">16</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">15</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">14</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">13</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">9</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">8</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

                          </td>
                        </tr>
{/* ------------------------------------------------------------------------------------------------------------- */}
                        <tr className=' d-flex'>
                          
                            <div className="seatR ">J</div> 
                          
                          <td className='SRow-1'>
                            
                            <div className="seatempty">   <a className='seatno availabledouble px-1 text-center' href="">23</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">22</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">21</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">20</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">19</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">18</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">17</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">16</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">15</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">14</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">13</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">9</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">8</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

                          </td>
                        </tr>
{/* ------------------------------------------------------------------------------------------------------------- */}
                        <tr className=' d-flex'>
                          
                            <div className="seatR ">K</div> 
                          
                          <td className='SRow-1'>
                            
                            <div className="seatempty">   <a className='seatno availabledouble px-1 text-center' href="">23</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">22</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">21</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">20</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">19</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">18</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">17</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">16</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">15</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">14</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">13</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">9</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">8</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

                          </td>
                        </tr>
{/* ------------------------------------------------------------------------------------------------------------- */}
                        <tr className=' d-flex'>
                          
                            <div className="seatR ">L</div> 
                          
                          <td className='SRow-1'>
                            
                            <div className="seatempty">   <a className='seatno availabledouble px-1 text-center' href="">23</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">22</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">21</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">20</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">19</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">18</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">17</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">16</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">15</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">14</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">13</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">9</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">8</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

                          </td>
                        </tr>
{/* ------------------------------------------------------------------------------------------------------------- */}
                        <tr className=' d-flex'>
                          
                            <div className="seatR ">M</div> 
                          
                          <td className='SRow-1'>
                            
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">23</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">22</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">21</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">20</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">19</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">18</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">17</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">16</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">15</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">14</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">13</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">9</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">8</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

                          </td>
                        </tr>
{/* ---------------------------------------------------------------------------------------------------------------------------------------------- */}

                        <tr className=' d-flex mt-4'>
                          
                            <div className="seatR ">N</div> 
                          
                          <td className='SRow-1'>
                            
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">23</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">22</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">21</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">20</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">19</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">18</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">17</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">16</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">15</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">14</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">13</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">9</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">8</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

                          </td>
                        </tr>
{/* ---------------------------------------------------------------------------------------------------------------------------------------------- */}
                        <tr className=' d-flex'>
                          
                            <div className="seatR ">O</div> 
                          
                          <td className='SRow-1'>
                            
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">23</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">22</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">21</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">20</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">19</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">18</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">17</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">16</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">15</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">14</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">13</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">9</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">8</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

                          </td>
                        </tr>
{/* ---------------------------------------------------------------------------------------------------------------------------------------------- */}
                          </div>
                          </tbody>
                        </table>
                </div>
{/* ---------------------------------------------------------------------------------------------------------------------------------------------- */}
{/* silver div */}
                  <div className="blocklayout goldlayout ">

                        <table className=''>
                          <tbody className=''>
                            <tr>
                              <td> <div className="tirename">Rs.100 Silver</div> </td>
                            </tr>
              
                        <div className="emptyln"></div>
                            
                          <div className="">
{/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                        <tr className='mt-2 d-flex'>
                          
                            <div className="seatR ">P</div> 
                          
                          <td className='SRow-1'>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">23</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">22</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">21</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">20</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">19</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">18</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">17</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">16</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">15</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">14</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">13</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">9</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">8</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

                          </td>
                        </tr>
                          </div>
                          </tbody>
                        </table>
                </div>
{/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
              </div>
          </div>
{/* ----------------------------------------------------------------------------------------------------------------------------------------------- */}
{/* screen div */}
          <div className="parentscreendiv">
            
             <div className="screendiv">Screen</div>

          </div>
{/* -------------------------------------------------------------------------------------------------------------------------------------------- */}
          <div className=" profile w-100 d-flex justify-content-center bg-white" style={{boxShadow:"rgba(0, 0, 0, 0.1) 4px -5px 5px 1px"}}>
               <div className="w-50 d-flex mt-2 justify-content-center">
                
                <div className=" w-25">
                    <div className="seatempty"> <a className='seatno availabledouble' style={{padding:"9px"}} href=""></a></div>
                     Available
               </div>
               <div className=" w-25">
                    <div className="seatempty"> <a className='seatno availabledouble' style={{padding:"9px",backgroundColor:"green"}} href=""></a> </div>
                    Selected
               </div>
               <div className=" w-25">
                    <div className="seatempty"> <a className='seatno availabledouble' style={{padding:"9px",backgroundColor:"grey",border:"none"}} href=""></a> </div>
                    Sold
                </div></div>                 
          </div>                                
</>
  )
}

export default Cosmoscinema