
// import React from 'react'

// import ret from '/retroinnerimages/retro-innerimage.jpg'
// import retrotrailerimg from '/retroinnerimages/retro-trailerimg.jpg'
// import { FaCaretRight } from "react-icons/fa";
// import { FaStar } from "react-icons/fa6";
// import { MdChevronRight } from "react-icons/md";
// import { BsShare } from "react-icons/bs";
// import pooja from '/retroinnerimages/pooja-hegde.jpg'
// import suriya from '/retroinnerimages/suriya-sivakumar.jpg'
// import prakashraj from '/retroinnerimages/prakash-raj.jpg'
// import joju from '/retroinnerimages/joju.jpg'
// import nassar from '/retroinnerimages/nassar.jpg'

// import karthik from '/retroinnerimages/karthik-subbaraj.jpg'
// import jyothika from '/retroinnerimages/jyothika.jpg'
// import sana from '/retroinnerimages/sana.jpg'
// import shreyaas from '/retroinnerimages/shreyaas-krishna.jpg'
// import shafique from '/retroinnerimages/shafique-muhammed-ali.jpg'
// import Navbar from '../topend/Navbar';
// import Categories from '../cat/Categories';
// import { useNavigate } from 'react-router-dom';
// import Footer from '../footer/Footer';





// function Rms() {

//     const navigate = useNavigate();

//     const handleBookticket = () => {
//         window.scrollTo(0, 0);
//     navigate('/retro/buytickets');
//   };
    

//   return (
//     <>

//         <div className=" overflow-hidden">
//             <Navbar/>
//             <Categories/>
        

//         <div className="A bg-dark ">

//             <section className='B'> 
//                 <img className='B-img ' style={{width:"100%"}} src={ret} alt="" /> 
            
//                 <div className="dev-one ">

//                         <div className="L  "> 
//                             <img className='trailerimage' src={retrotrailerimg} alt="" />
//                         </div>

//                         <div className=" C ">
//                             <FaCaretRight /> <span>Trailers(7)</span>
//                         </div>
//                         <section className='D'>
//                             <div className=" D1 ">
//                                 in cinemas
//                             </div>
//                         </section>

//                 </div>

//                 <div className="dev-two w-50 ">
//                         <h1 className='text-white fw-bold'>Retro</h1>
                        
//                         <section>
//                             <div className="rating-dev">
//                                 <div className="rating-content">
//                                     <FaStar className='fastar' />
//                                     <h5 className='rate'>7.5/10</h5>
//                                     <h6 className='votes'>(48.1k votes)</h6>
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
//                                     <a className='di' href="">2D</a>
//                                 </div>
//                                 <div className="diment-lang">
//                                     <a className='di'  href="">Tamil</a>  <span className='comma' >,</span>
//                                     <a className='di' href="">Kannada</a> <span className='comma' >,</span>
//                                     <a className='di' href="">Hindi</a>   <span className='comma' >,</span>
//                                     <a className='di' href="">Telugu</a>
//                                 </div>
//                             </div>

//                             <div className="duration">
//                                 2hr 48m 
//                                 <span className='dot'>.</span>
//                                 <a className='journer' href="">Action</a>
//                                 <span className='journer-comma'>,</span>
//                                 <a className='journer' href="">Thriller</a>
//                                 <span className='dot'>.</span> 
//                                 UA16+
//                                 <span className='dot'>.</span>
//                                 1 May, 2025

//                             </div>
//                         </div>

//                         <div className="book-tickets-div ">
//                             <div className="book-tickets-button-div ">
//                                 <button onClick={handleBookticket}  className='book-tickets-button'>
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
//                                     <span>A gangster, caught between his love for his wife and the shadows of his violent past, attempts to turn over a new leaf. But walking away isn`t as easy as it seems. As buried secrets resurface and enemies close in, his journey toward peace spirals into chaos. Blending raw emotion with high-octane action, this is a story of love, redemption, and the haunting pull of a life once lived.</span>
//                                 </div>

//                             </span>
//                         </section>
//                         <span className='line'>___________________________________________________________________________________________________</span>
//                     </section>

//                     <section className='component-2 d-block'>
//                             <section className='component-2-parent '>

//                                 <div className="cast-div w-25">
//                                     <div className="cast-child ">
//                                         <h4 className='cast-text'>Cast</h4>
//                                     </div>
//                                 </div>

//                                 <div className="cast-crew-div  ">
//                                     <div className="cast-crew-img-div">

//                                         <div className="d-flex ms-3 p-2">
//                                             <a className='anchor-image  ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={pooja} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Pooja Hegde</h5>
//                                             <h5 className='actor-profession'>Actor</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={suriya} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Suriya</h5>
//                                             <h5 className='actor-profession'>Actor</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={prakashraj} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Prakash Raj</h5>
//                                             <h5 className='actor-profession'>Actor</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={joju} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Joju George</h5>
//                                             <h5 className='actor-profession'>Actor</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={nassar} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Naasar</h5>
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

//                                                     <img className='pooja' src={karthik} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Karthik Subbaraj</h5>
//                                             <h5 className='actor-profession'>Director</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={suriya} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Suriya</h5>
//                                             <h5 className='actor-profession'>producer</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={jyothika} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Jyothika Sadanah</h5>
//                                             <h5 className='actor-profession'>Producer</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={sana} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Santhosh Narayanan</h5>
//                                             <h5 className='actor-profession'>Musician</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={shreyaas} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Shreyaas krishnan</h5>
//                                             <h5 className='actor-profession'>Cinemotography</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={shafique} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Shafique-muhammed-ali</h5>
//                                             <h5 className='actor-profession'>Editor</h5>
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

// export default Rms
//===============================

//responsive code


import React from 'react';
import ret from '/retroinnerimages/retro-innerimage.jpg';
import retrotrailerimg from '/retroinnerimages/retro-trailerimg.jpg';
import { FaCaretRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { MdChevronRight } from "react-icons/md";
import { BsShare } from "react-icons/bs";
import pooja from '/retroinnerimages/pooja-hegde.jpg';
import suriya from '/retroinnerimages/suriya-sivakumar.jpg';
import prakashraj from '/retroinnerimages/prakash-raj.jpg';
import joju from '/retroinnerimages/joju.jpg';
import nassar from '/retroinnerimages/nassar.jpg';
import karthik from '/retroinnerimages/karthik-subbaraj.jpg';
import jyothika from '/retroinnerimages/jyothika.jpg';
import sana from '/retroinnerimages/sana.jpg';
import shreyaas from '/retroinnerimages/shreyaas-krishna.jpg';
import shafique from '/retroinnerimages/shafique-muhammed-ali.jpg';

import Navbar from '../topend/Navbar';
import Categories from '../cat/Categories';
import Footer from '../footer/Footer';
import { useNavigate } from 'react-router-dom';

function Rms() {
  const navigate = useNavigate();
  const handleBookticket = () => {
    window.scrollTo(0, 0);
    navigate('/retro/buytickets');
  };

  const cast = [
    { img: pooja, name: "Pooja Hegde" },
    { img: suriya, name: "Suriya" },
    { img: prakashraj, name: "Prakash Raj" },
    { img: joju, name: "Joju George" },
    { img: nassar, name: "Naasar" }
  ];

  const crew = [
    { img: karthik, name: "Karthik Subbaraj", role: "Director" },
    { img: suriya, name: "Suriya", role: "Producer" },
    { img: jyothika, name: "Jyothika", role: "Producer" },
    { img: sana, name: "Santhosh Narayanan", role: "Musician" },
    { img: shreyaas, name: "Shreyaas Krishna", role: "Cinematographer" },
    { img: shafique, name: "Shafique Muhammed Ali", role: "Editor" }
  ];

  return (
    <>
      <div className="overflow-hidden bg-dark text-white">
        <Navbar />
        <Categories />

        <div className="position-relative">
          <img src={ret} alt="poster" className="img-fluid w-100 mx-auto mt-3 px-5" style={{ }} />

          {/* Trailer and Badge */}
          {/* <div className="position-absolute top-0 start-0 m-3">
            <img src={retrotrailerimg} className="img-fluid mb-2" style={{ maxWidth: '150px' }} alt="trailer" />
            <div className="mb-2">
              <FaCaretRight /> <span>Trailers (7)</span>
            </div>
            <span className="badge bg-danger">In Cinemas</span>
          </div> */}

          {/* Share Button */}
          <div className="position-absolute top-0 end-0 m-3 d-flex align-items-center">
            <BsShare />
            <span className="ms-1">Share</span>
          </div>

          {/* Title, Rating, Details */}
          <div className="container text-center py-4">
            <h1 className="fw-bold">Retro</h1>
            <div className="d-flex justify-content-center align-items-center gap-2">
              <FaStar className="text-warning" />
              <h5 className="mb-0">7.5/10</h5>
              <small>(48.1k votes)</small>
              <MdChevronRight />
              <button className="btn btn-outline-light btn-sm ms-2">Rate Now</button>
            </div>
            <div className="mt-3">
              <span className="badge bg-secondary me-1">2D</span>
              <span className="badge bg-secondary me-1">Tamil</span>
              <span className="badge bg-secondary me-1">Kannada</span>
              <span className="badge bg-secondary me-1">Hindi</span>
              <span className="badge bg-secondary">Telugu</span>
            </div>
            <div className="mt-2 small">
              2hr 48m · <a href="#" className="text-light text-decoration-none">Action</a>, <a href="#" className="text-light text-decoration-none">Thriller</a> · UA16+ · 1 May, 2025
            </div>
            <button className="btn btn-danger mt-3" onClick={handleBookticket}>Book Tickets</button>
          </div>
        </div>

        {/* About Movie */}
        <div className="container py-4">
          <h4>About the Movie</h4>
          <p>
            A gangster, caught between his love for his wife and the shadows of his violent past, attempts to turn over a new leaf. But walking away isn`t as easy as it seems. As buried secrets resurface and enemies close in, his journey toward peace spirals into chaos. Blending raw emotion with high-octane action, this is a story of love, redemption, and the haunting pull of a life once lived.
          </p>
          <hr />
        </div>

        {/* Cast Section */}
        <div className="container py-4">
          <h4>Cast</h4>
          <div className="row">
            {cast.map((actor, i) => (
              <div key={i} className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-4 ">
                <img src={actor.img} className="img-fluid rounded-circle mb-2 " alt={actor.name} style={{ height: '100px'}} />
                <h6 className="mb-0">{actor.name}</h6>
                <small>Actor</small>
              </div>
            ))}
          </div>
        </div>

        {/* Crew Section */}
        <div className="container py-4">
          <h4>Crew</h4>
          <div className="row">
            {crew.map((member, i) => (
              <div key={i} className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-4">
                <img src={member.img} className="img-fluid rounded-circle mb-2" alt={member.name} style={{ height: '100px'}} />
                <h6 className="mb-0">{member.name}</h6>
                <small>{member.role}</small>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Rms;
