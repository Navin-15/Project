import React from 'react'
import { SlArrowLeft } from "react-icons/sl";
import { RiCloseFill } from "react-icons/ri";
import { IoIosHeart } from "react-icons/io";

function Innerinput() {
        
  return (
    <>
    <div className=" main-div container-fluid ">
        <div className="innerinputsearchdiv row">

            <span className=' col-4  leftspan '>
                <SlArrowLeft className='leftarrow ' />
            </span>

            <input className=' col-4 innerinputfield '  type="search"  placeholder='Search for Movies , Events, plays, Sports and Activities'/>

            <span className=' col-4 closespan '>
                <RiCloseFill className='close '/>
            </span>
        </div>

    </div>

    <div className=' suggestiondiv container'>
    
            <div className='fixed-div'>
            <div className=' top-entertainmentdiv '>
                <div className=" entertainment ">
                    <div className=" movies">movies</div>
                    <div className=" cinemas">cinemas</div>
                </div>

                <div className=" langdiv ">
                    
                    <div className=" languagesdiv ">
                            <span className='filter'>Filter</span>
                            <span className='language'>Tamil</span>
                            <span className='language'>English</span>
                            <span className='language'>Telugu</span>
                            <span className='language'>Hindi</span>
                            <span className='language'>Marathi</span>
                            <span className='language'>Malayalam</span>
                            <span className='onemore'>+ 1 more</span>
                    </div>
                    
                </div>
            </div>
            </div>

             <div className="  ">
                        
                                
                    <div className="column-one container ">

                        <div className="lungs">Tamil</div>

                            <div className="moviediv">
                                <span className='moviespan'> <a href="" className='moviename'>Billa (UA)</a> </span>
                                <span> <IoIosHeart className='heart' /> </span>
                                <span className='percentage'>95%</span>
                            </div>

                            <div className="moviediv">
                                <span className='gangers moviespan'> <a href="" className='moviename'>Gangers (UA13)</a> </span>
                                <span> <IoIosHeart className='heart' /> </span>
                                <span className='percentage'>80%</span>
                            </div>

                            <div className="moviediv">
                                <span className='moviespan'> <a href="" className='moviename'>Good Bad Ugly (UA16)</a> </span>
                                <span> <IoIosHeart className='heart' /> </span>
                                <span className='percentage'>84%</span>
                            </div>

                            <div className="moviediv">
                                <span className=' gangers moviespan'> <a href="" className='moviename'>HIT: The Third Case (Tamil) (A)</a> </span>
                            </div>

                            <div className="moviediv">
                                <span className='gangers moviespan'> <a href="" className='moviename'>Retro (UA16)</a> </span>
                            </div>
                                    
                            <div className="moviediv">
                                <span className='moviespan'> <a href='' className='moviename'>Sachein</a> </span>
                                <span> <IoIosHeart className='heart' /> </span>
                                <span className='percentage'>96%</span>
                            </div>

                            <div className="moviediv">
                                <span className='moviespan'> <a href="" className='moviename'>Sumo (U)</a> </span>
                                <span> <IoIosHeart className='heart' /> </span>
                                <span className='percentage'>54%</span>
                            </div>

                            <div className="moviediv">
                                    <span className='moviespan'> <a href="" className='moviename'>Ten Hours (UA)</a> </span>
                                    <span> <IoIosHeart className='heart' /> </span>
                                    <span className='percentage'>77%</span>
                            </div>

                            <div className="moviediv">
                                <span className='gangers moviespan'> <a href="" className='moviename'>Thunderbolts* </a> </span>
                                <div className=" dimentiondiv">
                                    <a href="" className='dimention'>3D</a>
                                    <a href="" className='dimention'>2D</a>
                                </div>
                            </div>

                            <div className="moviediv">
                                    <span className=' gangers moviespan'> <a href="" className='moviename'>Tourist Family (U)</a> </span>
                            </div>

                            <div className="moviediv">
                                    <span className='moviespan'> <a href="" className='moviename'>Vaali (A)</a> </span>
                                    <span> <IoIosHeart className='heart' /> </span>
                                    <span className='percentage'>81%</span>
                            </div>

                            <div className="moviediv">
                                    <span className='moviespan'> <a href="" className='moviename'>Vallamai (UA13)</a> </span>
                                    <span> <IoIosHeart className='heart' /> </span>
                                    <span className='percentage'>96%</span>
                            </div>

                            <div className="moviediv">
                                    <span className='moviespan'> <a href="" className='moviename'>Veera Dheera Sooran -Part 2 (UA13)</a> </span>
                                    <span> <IoIosHeart className='heart' /> </span>
                                    <span className='percentage'>84%</span>
                            </div>

                            <div className="moviediv">
                                    <span className='moviespan'> <a href="" className='moviename'>Veeram (Tamil) (U)</a> </span>
                                    <span> <IoIosHeart className='heart' /> </span>
                                    <span className='percentage'>77%</span>
                            </div>

                            <div className="moviediv">
                                    <span className='moviespan'> <a href="" className='moviename'>Vinnaithaandi Varuvaaya (UA)</a> </span>
                                    <span> <IoIosHeart className='heart' /> </span>
                                    <span className='percentage'>90%</span>
                            </div>



                                    
                    </div>

                    <div className="column-two container ">

                        <div className="lungs">English</div>

                            <div className="moviediv">
                                    <span className=' moviespan'> <a href="" className='moviename'>A MineCraft Movie</a> </span>
                                    <span> <IoIosHeart className='heart' /> </span>
                                    <span className='percentage'>83%</span>
                                <div className=" dimentiondiv">
                                    <a href="" className='dimention'>3D</a>
                                    <a href="" className='dimention'>IMAX3D</a>
                                </div>

                            </div>

                            <div className="moviediv">
                                    <span className='moviespan'> <a href="" className='moviename'>Conclave (UA/13)</a> </span>
                                    <span> <IoIosHeart className='heart' /> </span>
                                    <span className='percentage'>84%</span>
                            </div>

                            <div className="moviediv">
                                    <span className='moviespan'> <a href="" className='moviename'>Dog Man (U)</a> </span>
                                    <span> <IoIosHeart className='heart' /> </span>
                                    <span className='percentage'>83%</span>
                            </div>

                            <div className="moviediv">
                                    <span className='moviespan'> <a href="" className='moviename'>Flow (U)</a> </span>
                                    <span> <IoIosHeart className='heart' /> </span>
                                    <span className='percentage'>90%</span>
                            </div>

                            <div className="moviediv">
                                    <span className='moviespan'> <a href="" className='moviename'>Interstellar (13+)</a> </span>
                                    <span> <IoIosHeart className='heart' /> </span>
                                    <span className='percentage'>96%</span>
                            </div>

                            <div className="moviediv">
                                    <span className='moviespan'> <a href="" className='moviename'>Mission Impossible (UA)</a> </span>
                                    <span> <IoIosHeart className='heart' /> </span>
                                    <span className='percentage'>91%</span>
                            </div>

                            <div className="moviediv">
                                    <span className='moviespan'> <a href="" className='moviename'>Paddington in Peru (U)</a> </span>
                                    <span> <IoIosHeart className='heart' /> </span>
                                    <span className='percentage'>85%</span>
                            </div>

                            <div className="moviediv">
                                    <span className='moviespan'> <a href="" className='moviename'>Sinners</a> </span>
                                    <span> <IoIosHeart className='heart' /> </span>
                                    <span className='percentage'>84%</span>
                                <div className=" dimentiondiv">
                                    <a href="" className='dimention'>IMAX 2D</a>
                                    <a href="" className='dimention'>2D</a>
                                </div>
                            </div>

                            <div className="moviediv">
                                    <span className='moviespan'> <a href="" className='moviename'>The Chosen: Last Supper (UA13)</a> </span>
                                    <span> <IoIosHeart className='heart' /> </span>
                                    <span className='percentage'>94%</span>
                            </div>

                            <div className="moviediv">
                                <span className='gangers moviespan'> <a href="" className='moviename'>Thunderbolts* </a> </span>
                                <div className=" dimentiondiv">
                                    <a href="" className='dimention'>3D</a>
                                    <a href="" className='dimention'>IMAX 3D</a>
                                </div>
                            </div>

                            <div className="moviediv">
                                    <span className=' gangers moviespan'> <a href="" className='moviename'>Until Dawn (A)</a> </span>
                                    <span> <IoIosHeart className='heart' /> </span>
                                    <span className='percentage'>80%</span>
                            </div>


                    </div>

                    <div className="column-three container ">

                            <div className="lungs">telugu</div>

                            <div className="moviediv">
                                    <span className=' gangers moviespan'> <a href="" className='moviename'>Chaurya Paatam (UA13)</a> </span>
                                    <span> <IoIosHeart className='heart' /> </span>
                                    <span className='percentage'>89%</span>
                            </div>

                            <div className="moviediv">
                                    <span className=' gangers moviespan'> <a href="" className='moviename'>HIT: The Third Case (A)</a> </span>   
                            </div>

                            <div className="moviediv">
                                    <span className=' gangers moviespan'> <a href="" className='moviename'>Retro (Telugu) (UA16)</a> </span>   
                            </div>

                            <div className="moviediv">
                                    <span className=' gangers moviespan'> <a href="" className='moviename'>Sarangapani Jathakam (UA13)</a> </span>
                                    <span> <IoIosHeart className='heart' /> </span>
                                    <span className='percentage'>83%</span>
                            </div>
                    </div>


                    <div className="column-four container ">

                            <div className="lungs">Hindi</div>

                            <div className="moviediv">
                                    <span className=' moviespan'> <a href="" className='moviename'>Andaz Apna Apna (U)</a> </span>
                                    <span> <IoIosHeart className='heart' /> </span>
                                    <span className='percentage'>96%</span>
                            </div>

                            <div className="moviediv">
                                    <span className=' gangers moviespan'> <a href="" className='moviename'>Ground Zero (UA)</a> </span>
                                    <span> <IoIosHeart className='heart' /> </span>
                                    <span className='percentage'>86%</span>
                            </div>

                            <div className="moviediv">
                                    <span className=' gangers moviespan'> <a href="" className='moviename'>Kesari Chapter 2: The Untold Story of Jallianwala Bagh (A)</a> </span>
                                    <span> <IoIosHeart className='heart' /> </span>
                                    <span className='percentage'>93%</span>
                            </div>

                            <div className="moviediv">
                                    <span className=' gangers moviespan'> <a href="" className='moviename'>Phule (U)</a> </span>
                                    <span> <IoIosHeart className='heart' /> </span>
                                    <span className='percentage'>94%</span>
                            </div>

                            <div className="moviediv">
                                    <span className=' gangers moviespan'> <a href="" className='moviename'>Rab Ne Bana Di  Jodi (U)</a> </span>
                                    <span> <IoIosHeart className='heart' /> </span>
                                    <span className='percentage'>87%</span>
                            </div>

                            <div className="moviediv">
                                    <span className=' gangers moviespan'> <a href="" className='moviename'>Raid 2 (UA7)</a> </span>
                            </div>


                        
                            

                    </div>

                    <div className="column-five container ">

                            <div className="lungs">marathi</div>

                            <div className="moviediv">
                                    <span className=' gangers moviespan'> <a href="" className='moviename'>Devmanus (UA16)</a> </span>
                                    <span> <IoIosHeart className='heart' /> </span>
                                    <span className='percentage'>86%</span>
                            </div>

                    </div>


                    <div className="column-six container ">

                            <div className="lungs">Malayalam</div>

                            <div className="moviediv">
                                    <span className=' gangers moviespan'> <a href="" className='moviename'>Alappuzha Gymkhana (UA7)</a> </span>
                                    <span> <IoIosHeart className='heart' /> </span>
                                    <span className='percentage'>82%</span>
                            </div>

                            <div className="moviediv">
                                    <span className=' gangers moviespan'> <a href="" className='moviename'>Thudarum (UA16)</a> </span>
                                    <span> <IoIosHeart className='heart' /> </span>
                                    <span className='percentage'>95%</span>
                            </div>

                    </div>

                    <div className="column-seven container ">

                            <div className="lungs">Mandarin</div>

                            <div className="moviediv">
                                    <span className=' gangers moviespan'> <a href="" className='moviename'>Ne Zha 2</a> </span>
                                    <span> <IoIosHeart className='heart' /> </span>
                                    <span className='percentage'>95%</span>
                                    <div className=" dimentiondiv">
                                    <a href="" className='dimention'>3D</a>
                                    <a href="" className='dimention'>IMAX 3D</a>
                                </div>
                            </div>

                    </div>

            </div>
                         
                
    </div>
        
    </>
)
}

export default Innerinput