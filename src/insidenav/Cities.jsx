import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { ImTarget } from "react-icons/im";
import Mumbai from '/images/mumbai.png'
import NCR from '/images/ncr.png'
import Bang from '/images/bang.png'
import Hyd from '/images/hyd.png'
import Chd from '/images/chd.png'
import Ahd from '/images/ahd.png'
import Chen from '/images/chen.png'
import Pune from '/images/pune.png'
import Kolk from '/images/kolk.png'
import Koch from '/images/koch.jpeg'




function Cities() {
  return (
    <>
    <div className="city-main-div container">
        <div className="city-sub-div ">
            <div className="city-inner-div "> 

            <div className=" input-parent container ">
                <div className="input-child ">
                    <div className="input-grand-child border ">
                        <div className="input-grand-grand-child  ">
                            <IoIosSearch className='magnifier-glass'/>
                        </div>
                        <input type="text" placeholder='Search for your city' className='city-input'/>
                    </div>
                </div>
            </div>

            <div className="target-parent container ">
                <div className="target-child">
                    <div className="target-icon-div ">
                        <ImTarget className='target-img'/>
                    </div>
                    <div onClick={handleCurrentLocation} className="target-text">Detect my location</div>
                </div>
            </div>

            <div className="popular-city-div ">
                <span className='popular-city-text '>Popular Cities</span>
                <ul className='unorder-list '>
                    <li> <div className="list-item">
                       
                                <div className="city-div">
                                    <div className="city-img-div">
                                        <img className='city-img' src={Mumbai} alt="mumbai" />
                                    </div>
                                </div>
                                <span className='list-text'>Mumbai</span>
                        </div>

                    </li>

                    <li> <div className="list-item">
                       
                                <div className="city-div">
                                    <div className="city-img-div">
                                        <img className='city-img' src={NCR} alt="delhi" />
                                    </div>
                                </div>
                                <span className='list-text'>Delhi-NCR</span>
                        </div>

                    </li>

                    <li> <div className="list-item">
                       
                                <div className="city-div">
                                    <div className="city-img-div">
                                        <img className='city-img' src={Bang} alt="benguluru" />
                                    </div>
                                </div>
                                <span className='list-text'>Bengaluru</span>
                        </div>

                    </li>

                    <li> <div className="list-item">
                       
                                <div className="city-div">
                                    <div className="city-img-div">
                                        <img className='city-img' src={Hyd} alt="hyderabad" />
                                    </div>
                                </div>
                                <span className='list-text'>Hyderabad</span>
                        </div>

                    </li>

                    <li> <div className="list-item">
                       
                                <div className="city-div">
                                    <div className="city-img-div">
                                        <img className='city-img'  src={Chd} alt="" />
                                    </div>
                                </div>
                                <span className='list-text'>Chandighar</span>
                        </div>

                    </li>

                    <li> <div className="list-item">
                       
                                <div className="city-div">
                                    <div className="city-img-div">
                                        <img className='city-img' src={Ahd} alt="" />
                                    </div>
                                </div>
                                <span className='list-text'>Ahmedabad</span>
                        </div>

                    </li>

                    <li> <div className="list-item">
                       
                                <div className="city-div">
                                    <div className="city-img-div">
                                        <img className='city-img' src={Chen} alt="" />
                                    </div>
                                </div>
                                <span className='list-text'>Chennai</span>
                        </div>

                    </li>

                    <li> <div className="list-item">
                       
                                <div className="city-div">
                                    <div className="city-img-div">
                                        <img className='city-img' src={Pune} alt="" />
                                    </div>
                                </div>
                                <span className='list-text'>Pune</span>
                        </div>

                    </li>

                    <li> <div className="list-item">
                       
                                <div className="city-div">
                                    <div className="city-img-div">
                                        <img className='city-img' src={Kolk} alt="" />
                                    </div>
                                </div>
                                <span className='list-text'>Kolkata</span>
                        </div>

                    </li>

                    <li> <div className="list-item">
                       
                                <div className="city-div">
                                    <div className="city-img-div">
                                        <img className='city-img' src={Koch} alt="" />
                                    </div>
                                </div>
                                <span className='list-text'>Kochi</span>
                        </div>

                    </li>

                </ul>
            </div>

            <div className="view-all-cities-div ">
                <span className='view-all-cities-text '>View All Cities</span>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Cities









