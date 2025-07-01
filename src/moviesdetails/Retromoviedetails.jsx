// import React from 'react'
// import ret from '/innerimages/retro-innerimage.jpg'
// import retrotrailerimg from '/innerimages/retro-trailerimg.jpg'

// function Moviesdetail() {
//   return (
//     <> 
//     <div className="maindiv border border-black mt-3">
//         <section className='detailsection'>
//             <div className="innerimage bg-danger px-3">
//                 <div className="imagecont border border-black bg-info"> 
//                 {/* <img className='innerimg py-4 w-100' src={ret} alt="" /> */}
//                     <div className="imagecont-1">
//                         <section className='trailer'>
//                             <div className="trailer-div">
//                                 <div className="trailer-img-div border border-black">
//                                     <img className='trailer-i' src={retrotrailerimg} style={{height:"25%", width:"15%"}} alt="" />
//                                 </div>
//                                 <div className="">
                                    
//                                     <span>trailer(7)</span>
//                                 </div>
//                             </div>
//                             <section>
//                                 <div className="">
//                                     <span>in cinemas</span>
//                                 </div>
//                             </section>
//                         </section>
//                     </div>
//                     <div className="imagecont-2"></div>
//                     <div className="imagecont-3"></div>
//                 </div>
//             </div>
//         </section>
//     </div>
//     </>

//   )
// }

// export default Moviesdetail

// import React from 'react';
// // import ret from '/innerimages/retro-innerimage.jpg'
// import retrotrailerimg from '/innerimages/retro-trailerimg.jpg'

// const Moviesdetail = () => {
//   return (
//     <div className="bg-[#1a1a1a] text-white min-h-screen flex justify-center items-center p-8">
//       <div className="bg-[#121212] rounded-lg shadow-lg flex max-w-6xl w-full overflow-hidden">
//         {/* Left Poster */}
//         <div className="relative w-1/3">
//           <img
//             src={retrotrailerimg}
//             alt="Retro Movie Poster"
//             className="w-full h-full object-cover"
//           />
//           <button className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 px-4 py-2 text-white rounded-full">
//             ▶ Trailers (7)
//           </button>
//           <div className="text-center py-4 font-semibold text-sm bg-black">In cinemas</div>
//         </div>

//         {/* Right Content */}
//         <div className="p-8 flex-1">
//           <h1 className="text-4xl font-bold mb-4">Retro</h1>

//           {/* Rating */}
//           <div className="flex items-center bg-[#2c2c2c] p-4 rounded-lg mb-4">
//             <span className="text-pink-500 text-xl mr-2">★</span>
//             <span className="text-xl font-semibold mr-2">7.5/10</span>
//             <span className="text-gray-400">(48K Votes)</span>
//             <button className="ml-auto bg-white text-black px-4 py-1 rounded-md">Rate now</button>
//           </div>

//           {/* Language and Format */}
//           <div className="flex items-center gap-2 mb-4">
//             <span className="bg-white text-black px-3 py-1 rounded">2D</span>
//             <span className="bg-[#2c2c2c] px-3 py-1 rounded">Tamil, Kannada, Hindi, Telugu</span>
//           </div>

//           {/* Details */}
//           <div className="text-gray-300 mb-6">
//             <p>2h 48m • Action, Thriller • UA16+ • 1 May, 2025</p>
//           </div>

//           {/* Book Tickets Button */}
//           <button className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-md text-white text-lg font-semibold">
//             Book tickets
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Moviesdetail;

//=======================================================================


import ret from '/retroinnerimages/retro-innerimage.jpg'
import retrotrailerimg from '/retroinnerimages/retro-trailerimg.jpg'
import { FaCaretRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { MdChevronRight } from "react-icons/md";
import { BsShare } from "react-icons/bs";
import pooja from '/retroinnerimages/pooja-hegde.jpg'
import suriya from '/retroinnerimages/suriya-sivakumar.jpg'
import prakashraj from '/retroinnerimages/prakash-raj.jpg'
import joju from '/retroinnerimages/joju.jpg'
import nassar from '/retroinnerimages/nassar.jpg'

import karthik from '/retroinnerimages/karthik-subbaraj.jpg'
import jyothika from '/retroinnerimages/jyothika.jpg'
import sana from '/retroinnerimages/sana.jpg'
import shreyaas from '/retroinnerimages/shreyaas-krishna.jpg'
import shafique from '/retroinnerimages/shafique-muhammed-ali.jpg'








function Retromoviedetails() {

    
  return (
    <>

        <div className="overflow-hidden">
            
            <div className="A bg-dark">

            <section className='B'> 
                <img className='B-img ' style={{width:"100%"}} src={ret} alt="" /> 
            
                <div className="dev-one ">

                        <div className="L  "> 
                            <img className='trailerimage' src={retrotrailerimg} alt="" />
                        </div>

                        <div className=" C ">
                            <FaCaretRight /> <span>Trailers(7)</span>
                        </div>
                        <section className='D'>
                            <div className="D1">
                                in cinemas
                            </div>
                        </section>

                </div>

                <div className="dev-two w-50 ">
                        <h1 className='text-white fw-bold'>Retro</h1>
                        
                        <section>
                            <div className="rating-dev">
                                <div className="rating-content">
                                    <FaStar className='fastar' />
                                    <h5 className='rate'>7.5/10</h5>
                                            <h6 className='votes'>(48.1k votes)</h6>
                                    <MdChevronRight className='right-aro-img' />
                                </div>
                                <button className='butt'>
                                    <span className='butt-span'>Rate now</span>
                                </button>
                            </div>
                        </section>

                        <div className="movie-about-div ">
                            <div className="dimention-lang-div ">
                                <div className="diment-lang">
                                    <a className='di' href="">2D</a>
                                </div>
                                <div className="diment-lang">
                                    <a className='di'  href="">Tamil</a>  <span className='comma' >,</span>
                                    <a className='di' href="">Kannada</a> <span className='comma' >,</span>
                                    <a className='di' href="">Hindi</a>   <span className='comma' >,</span>
                                    <a className='di' href="">Telugu</a>
                                </div>
                            </div>

                            <div className="duration">
                                2hr 48m 
                                <span className='dot'>.</span>
                                <a className='journer' href="">Action</a>
                                <span className='journer-comma'>,</span>
                                <a className='journer' href="">Thriller</a>
                                <span className='dot'>.</span> 
                                UA16+
                                <span className='dot'>.</span>
                                1 May, 2025

                            </div>
                        </div>

                        <div className="book-tickets-div">
                            <div className="book-tickets-button-div">
                                <button className='book-tickets-button'>
                                    <div className="book-tickets-text-div">
                                        <span className='book-tickets'>Book Tickets</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                </div>

                <div className="dev-three ">
                    <section className='share-section'>
                        <div className="section-dev">
                            <div className="share-img-div">
                                <BsShare />
                            </div>
                            <div className="share-text-div">Share</div>
                        </div>
                    </section>
                </div>

            </section>

            {/* <section className='invisible-section bg-info'>
                <div className="invisible-div-one">
                    <div className="invisible-div-left">
                        <div className="invisible-div-retro">Retro</div>
                    </div>

                    <div className="invisible-div-right">
                        <div className="invisible-button-div">
                            <button className='book-tickets-button'>
                                <div className="book-tickets-text-div">
                                <span className='book-tickets'>Book Tickets</span>
                            </div>
                            </button>
                            
                        </div>
                    </div>
                </div>
            </section> */}

            <div className="details-of-movie-div ">
                <div className="inner-details-of-movie-div">

                    <section className='component-1 d-block ' >
                        <section className='component-1-parent '>
                            <span className='component-1-child w-75 border border-black'>
                                <h4 className='about-the-movie-text'>About the Movie</h4>
                                <div className="about-movie-description ">
                                    <span>A gangster, caught between his love for his wife and the shadows of his violent past, attempts to turn over a new leaf. But walking away isn`t as easy as it seems. As buried secrets resurface and enemies close in, his journey toward peace spirals into chaos. Blending raw emotion with high-octane action, this is a story of love, redemption, and the haunting pull of a life once lived.</span>
                                </div>

                            </span>
                        </section>
                        <span className='line'>___________________________________________________________________________________________________</span>
                    </section>

                    <section className='component-2 d-block border border-black '>
                            <section className='component-2-parent '>

                                <div className="cast-div border border-black w-25">
                                    <div className="cast-child ">
                                        <h4 className='cast-text'>Cast</h4>
                                    </div>
                                </div>

                                <div className="cast-crew-div  ">
                                    <div className="cast-crew-img-div border border-black">

                                        <div className="d-flex border border-black ms-3 p-2">

                                            <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={pooja} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Pooja Hegde</h5>
                                            <h5 className='actor-profession'>Actor</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={suriya} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Suriya</h5>
                                            <h5 className='actor-profession'>Actor</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={prakashraj} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Prakash Raj</h5>
                                            <h5 className='actor-profession'>Actor</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={joju} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Joju George</h5>
                                            <h5 className='actor-profession'>Actor</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={nassar} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Naasar</h5>
                                            <h5 className='actor-profession'>Actor</h5>
                                        </a>
                                        </div>

                                    </div>
                                </div>
                            </section>
                    </section>

                    <section className='component-3 d-block border border-black '>
                            <section className='component-2-parent '>

                                <div className="cast-div border border-black w-25">
                                    <div className="cast-child ">
                                        <h4 className='cast-text'>Crew</h4>
                                    </div>
                                </div>

                                <div className="cast-crew-div  ">
                                    <div className="cast-crew-img-div   border border-black">

                                        <div className="d-flex border border-black ms-3 p-2">
                                            <a className='anchor-image  ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={karthik} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Karthik Subbaraj</h5>
                                            <h5 className='actor-profession'>Director</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={suriya} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Suriya</h5>
                                            <h5 className='actor-profession'>producer</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={jyothika} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Jyothika Sadanah</h5>
                                            <h5 className='actor-profession'>Producer</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={sana} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Santhosh Narayanan</h5>
                                            <h5 className='actor-profession'>Musician</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={shreyaas} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Shreyaas krishnan</h5>
                                            <h5 className='actor-profession'>Cinemotography</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={shafique} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Shafique-muhammed-ali</h5>
                                            <h5 className='actor-profession'>Editor</h5>
                                        </a>

                                        </div>

                                    </div>
                                </div>
                            </section>
                    </section>
                </div>
            </div>

        </div>
        </div>

    </>
  )
}

export default Retromoviedetails