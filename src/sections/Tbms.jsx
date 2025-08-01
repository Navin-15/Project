// import Thunderboltsinnerimage from '/thunderboltsinnerimages/thunderboltsinnerimage.jpg'
// import Thunderboltstrailerimg from '/thunderboltsinnerimages/thunderbolts-trailerimage.jpg'
// import { FaCaretRight } from "react-icons/fa";
// import { FaStar } from "react-icons/fa6";
// import { MdChevronRight } from "react-icons/md";
// import { BsShare } from "react-icons/bs";
// import florence from'/thunderboltsinnerimages/florence.jpg'
// import sebastian from  '/thunderboltsinnerimages/sebastian.jpg'
// import david from  '/thunderboltsinnerimages/david.jpg'
// import wyatt from'/thunderboltsinnerimages/wyatt.jpg'
// import olga from    '/thunderboltsinnerimages/olga.jpg'
// import lewis from  '/thunderboltsinnerimages/lewis.jpg'
// import geraldine from'/thunderboltsinnerimages/geraldine.jpg'
// import chris from  '/thunderboltsinnerimages/chris.jpg'
// import rachel from    '/thunderboltsinnerimages/rachel.jpg'
// import hannah from    '/thunderboltsinnerimages/hannah.jpg'
// import julia from    '/thunderboltsinnerimages/julia.jpg'

// import jake from '/thunderboltsinnerimages/jake.jpg'
// import kevin from '/thunderboltsinnerimages/kevin.jpg'
// import eric from  '/thunderboltsinnerimages/eric.jpg'
// import davidj from    '/thunderboltsinnerimages/davidj.jpg'
// import Navbar from '../topend/Navbar';
// import Categories from '../cat/Categories';
// import { useNavigate } from 'react-router-dom';
// import Footer from '../footer/Footer';






// function Thunderbolts() {

//     const navigate = useNavigate();

//      const handleBookticket = () => {
//         window.scrollTo(0, 0);
//     navigate('/thunderbolts/buytickets');
//   };

//   return (
//     <>

//         <div className="overflow-hidden">
            
//             <Navbar/>
//             <Categories/>
            
//             <div className="A bg-dark">

//             <section className='B'> 
//                 <img className='B-img ' style={{width:"100%"}} src={Thunderboltsinnerimage} alt="" /> 
            
//                 <div className="dev-one ">

//                         <div className="L  "> 
//                             <img className='trailerimage' src={Thunderboltstrailerimg} alt="" />
//                         </div>

//                         <div className=" Tbolttrailerdiv ">
//                             <FaCaretRight /> <span>Trailer(5)</span>
//                         </div>
//                         <section className='D'>
//                             <div className=" D1 ">
//                                 in cinemas
//                             </div>
//                         </section>

//                 </div>

//                 <div className="dev-two w-50 ">
//                         <h1 className='text-white fw-bold'>Thunderbolts*</h1>
                        
//                         <section>
//                             <div className="rating-dev">
//                                 <div className="rating-content">
//                                     <FaStar className='fastar' />
//                                     <h5 className='rate'>8.1/10</h5>
//                                     <h6 className='votes'>(27.7k Votes)</h6>
//                                     <MdChevronRight className='right-aro-img' />
//                                 </div>
//                                 <button className='butt'>
//                                     <span className='butt-span'>Rate now</span>
//                                 </button>
//                             </div>
//                         </section>

//                         <div className="movie-about-div ">
//                             <div className="dimention-lang-div ">
//                                 <div className="diment-lang">
//                                     <a className='di' href="">2D</a>  <span className='comma' >,</span>      
//                                     <a className='di' href="">IMAX 3D</a> <span className='comma' >,</span>
//                                     <a className='di' href="">MX4D 3D</a> <span className='comma' >,</span>
//                                     <a className='di' href="">IMAX 2D</a> <span className='comma' >,</span>
//                                     <a className='di' href="">4DX 3D</a> <span className='comma' >,</span>
//                                     <a className='di' href="">3D</a> <span className='comma' >,</span>
//                                     <a className='di' href="">3D SCREEN X</a> <span className='comma' >,</span>
//                                     <a className='di' href="">ICE</a> <span className='comma' >,</span>
//                                     <a className='di' href="">ICE 3D</a> <span className='comma' >,</span>
//                                 </div>
//                                 <div className="diment-lang">
//                                     <a className='di'  href="">English</a>  <span className='comma' ></span>
//                                     <a className='di' href="">Hindi</a> <span className='comma' >,</span>
//                                     <a className='di' href="">Telugu</a>   <span className='comma' >,</span>
//                                     <a className='di' href="">Tamil</a>
//                                 </div>
//                             </div>

//                             <div className="duration">
//                                 2hr 7m 
//                                 <span className='dot'>.</span>
//                                 <a className='journer' href="">Action</a>
//                                 <span className='journer-comma'>,</span>
//                                 <a className='journer' href="">Superhero</a>
//                                 <span className='dot'>.</span> 
//                                 UA13+
//                                 <span className='dot'>.</span>
//                                 1 May, 2025

//                             </div>
//                         </div>

//                         <div className="book-tickets-div">
//                             <div className="book-tickets-button-div">
//                                 <button onClick={handleBookticket} className='book-tickets-button'>
//                                     <div className="book-tickets-text-div">
//                                         <span className='book-tickets'>Book Tickets</span>
//                                     </div>
//                                 </button>
//                             </div>
//                         </div>
//                 </div>

//                 <div className="dev-three ">
//                     <section className='share-section'>
//                         <div className="section-dev">
//                             <div className="share-img-div">
//                                 <BsShare />
//                             </div>
//                             <div className="share-text-div">Share</div>
//                         </div>
//                     </section>
//                 </div>

//             </section>


//             <div className="details-of-movie-div ">
//                 <div className="inner-details-of-movie-div">

//                     <section className='component-1 d-block ' >
//                         <section className='component-1-parent '>
//                             <span className='component-1-child w-75 '>
//                                 <h4 className='about-the-movie-text'>About the Movie</h4>
//                                 <div className="about-movie-description ">
//                                     <span>Thunderbolts* are the *New Avengers who mix grit with wit as they bring a new hope to the world.</span>
//                                 </div>

//                             </span>
//                         </section>
//                         <span className='line'>___________________________________________________________________________________________________</span>
//                     </section>

//                     <section className='component-2 d-block '>
//                             <section className='component-2-parent '>

//                                 <div className="cast-div w-25">
//                                     <div className="cast-child ">
//                                         <h4 className='cast-text'>Cast</h4>
//                                     </div>
//                                 </div>

//                                 <div className="cast-crew-div  ">
//                                     <div className="cast-crew-img-div">

//                                         <div className="d-flex ms-3 p-2">

//                                             <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={florence} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Florence Pugh</h5>
//                                             <h5 className='actor-profession'>Actor</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={sebastian} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Sebastian Stan</h5>
//                                             <h5 className='actor-profession'>Actor</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={david} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>David Harbour</h5>
//                                             <h5 className='actor-profession'>Actor</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={wyatt} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Wyatt Russell</h5>
//                                             <h5 className='actor-profession'>as Mulli</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={olga} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Olaga Kurylenko</h5>
//                                             <h5 className='actor-profession'>Actor</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={lewis} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Lewis Pullman</h5>
//                                             <h5 className='actor-profession'>Actor</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={geraldine} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Geraldine Viswanathan</h5>
//                                             <h5 className='actor-profession'>Actor</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={chris} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Chris Bauer</h5>
//                                             <h5 className='actor-profession'>Actor</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={rachel} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Rachel Weizs</h5>
//                                             <h5 className='actor-profession'>Actor</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={hannah} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Hannah John-Kamen</h5>
//                                             <h5 className='actor-profession'>Actor</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={julia} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Julia Louis-Dreyfus</h5>
//                                             <h5 className='actor-profession'>Actor</h5>
//                                         </a>


//                                         </div>

//                                     </div>
//                                 </div>
//                             </section>
//                     </section>

//                     <section className='component-3 d-block '>
//                             <section className='component-2-parent '>

//                                 <div className="cast-div w-25">
//                                     <div className="cast-child ">
//                                         <h4 className='cast-text'>Crew</h4>
//                                     </div>
//                                 </div>

//                                 <div className="cast-crew-div  ">
//                                     <div className="cast-crew-img-div">

//                                         <div className="d-flex  ms-3 p-2">
//                                             <a className='anchor-image  ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={jake} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Jake Scherier</h5>
//                                             <h5 className='actor-profession'>Director</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={kevin} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Kevin Feige</h5>
//                                             <h5 className='actor-profession'>Producer</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={eric} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Eric Pearson</h5>
//                                             <h5 className='actor-profession'>Writer, Screenplay</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={davidj} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>David j. Grant</h5>
//                                             <h5 className='actor-profession'>Co-Producer</h5>
//                                         </a>

                                
//                                         </div>

//                                     </div>
//                                 </div>
//                             </section>
//                     </section>

                    
//                     <section className='component-4 d-block' ></section>
//                     <section className='component-5 d-block' ></section>
//                 </div>
//             </div>

//         </div>
//         </div>
//         <Footer/>
//     </>
//   )
// }

// export default Thunderbolts
//================================

//responsive code

import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaCaretRight,
  FaStar,
} from 'react-icons/fa';
import { MdChevronRight } from 'react-icons/md';
import { BsShare } from 'react-icons/bs';

import Thunderboltsinnerimage from '/thunderboltsinnerimages/thunderboltsinnerimage.jpg';
import Thunderboltstrailerimg from '/thunderboltsinnerimages/thunderbolts-trailerimage.jpg';

import florence from '/thunderboltsinnerimages/florence.jpg';
import sebastian from '/thunderboltsinnerimages/sebastian.jpg';
import david from '/thunderboltsinnerimages/david.jpg';
import wyatt from '/thunderboltsinnerimages/wyatt.jpg';
import olga from '/thunderboltsinnerimages/olga.jpg';
import lewis from '/thunderboltsinnerimages/lewis.jpg';
import geraldine from '/thunderboltsinnerimages/geraldine.jpg';
import chris from '/thunderboltsinnerimages/chris.jpg';
import rachel from '/thunderboltsinnerimages/rachel.jpg';
import hannah from '/thunderboltsinnerimages/hannah.jpg';
import julia from '/thunderboltsinnerimages/julia.jpg';

import jake from '/thunderboltsinnerimages/jake.jpg';
import kevin from '/thunderboltsinnerimages/kevin.jpg';
import eric from '/thunderboltsinnerimages/eric.jpg';
import davidj from '/thunderboltsinnerimages/davidj.jpg';

import Navbar from '../topend/Navbar';
import Categories from '../cat/Categories';
import Footer from '../footer/Footer';

const Thunderbolts = () => {
  const navigate = useNavigate();

  const handleBookticket = () => {
    window.scrollTo(0, 0);
    navigate('/thunderbolts/buytickets');
  };

  const cast = [
    { img: florence, name: "Florence Pugh", role: "Actor" },
    { img: sebastian, name: "Sebastian Stan", role: "Actor" },
    { img: david, name: "David Harbour", role: "Actor" },
    { img: wyatt, name: "Wyatt Russell", role: "as Mulli" },
    { img: olga, name: "Olga Kurylenko", role: "Actor" },
    { img: lewis, name: "Lewis Pullman", role: "Actor" },
    { img: geraldine, name: "Geraldine Viswanathan", role: "Actor" },
    { img: chris, name: "Chris Bauer", role: "Actor" },
    { img: rachel, name: "Rachel Weisz", role: "Actor" },
    { img: hannah, name: "Hannah John-Kamen", role: "Actor" },
    { img: julia, name: "Julia Louis-Dreyfus", role: "Actor" },
  ];

  const crew = [
    { img: jake, name: "Jake Scherier", role: "Director" },
    { img: kevin, name: "Kevin Feige", role: "Producer" },
    { img: eric, name: "Eric Pearson", role: "Writer, Screenplay" },
    { img: davidj, name: "David J. Grant", role: "Co-Producer" },
  ];

  return (
    <div className="bg-dark text-white">
      <Navbar />
      <Categories />

      {/* Hero */}
      <section className="position-relative">
        <img src={Thunderboltsinnerimage} className="img-fluid w-100 mx-auto mt-3 px-5" alt="Thunderbolts Poster" />
        
        {/* <div className="position-absolute top-0 start-0 p-3 text-start">
          <img src={Thunderboltstrailerimg} alt="Trailer" className="img-fluid mb-2" style={{ maxWidth: "120px" }} />
          <div><FaCaretRight /> Trailer (5)</div>
          <span className="badge bg-danger mt-2">In Cinemas</span>
        </div> */}

        <div className="position-absolute top-0 end-0 p-3">
          <BsShare /> <span className="ms-2">Share</span>
        </div>
        <div className="container py-4 text-center">
          <h1 className="fw-bold">Thunderbolts*</h1>
          <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
            <FaStar className="text-warning" />
            <h5 className="mb-0">8.1/10</h5>
            <small>(27.7k votes)</small>
            <MdChevronRight />
            <button className="btn btn-outline-light btn-sm ms-2">Rate Now</button>
          </div>
          <div className="mb-2">
            {["2D", "IMAX 3D", "MX4D 3D", "IMAX 2D", "4DX 3D", "3D", "3D SCREEN X", "ICE", "ICE 3D"].map(format => (
              <span key={format} className="badge bg-secondary me-1">{format}</span>
            ))}
          </div>
          <div className="mb-2">
            {["English", "Hindi", "Telugu", "Tamil"].map(lang => (
              <span key={lang} className="badge bg-secondary me-1">{lang}</span>
            ))}
          </div>
          <div className="small mb-3">
            2hr 7m · Action, Superhero · UA13+ · 1 May, 2025
          </div>
          <button onClick={handleBookticket} className="btn btn-danger">Book Tickets</button>
        </div>
      </section>

      {/* About */}
      <section className="container py-4">
        <h4>About the Movie</h4>
        <p>Thunderbolts* are the *New Avengers who mix grit with wit as they bring a new hope to the world.</p>
        <hr />
      </section>

      {/* Cast */}
      <section className="container py-4">
        <h4>Cast</h4>
        <div className="row">
          {cast.map((actor, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-4">
              <img src={actor.img} className="img-fluid rounded-circle mb-2" alt={actor.name} style={{ width: "100px", height: "100px", objectFit: "cover" }} />
              <h6 className="mb-0">{actor.name}</h6>
              <small>{actor.role}</small>
            </div>
          ))}
        </div>
      </section>

      {/* Crew */}
      <section className="container py-4">
        <h4>Crew</h4>
        <div className="row">
          {crew.map((member, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-4">
              <img src={member.img} className="img-fluid rounded-circle mb-2" alt={member.name} style={{ width: "100px", height: "100px", objectFit: "cover" }} />
              <h6 className="mb-0">{member.name}</h6>
              <small>{member.role}</small>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Thunderbolts;
