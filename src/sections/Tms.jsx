// import Thodaruminnerimage from '/thodaruminnerimages/thodaruminnerimage.jpg'
// import Thodarumtrailerimg from  '/thodaruminnerimages/thodarumtrailerimage.jpg'
// import { FaCaretRight } from "react-icons/fa";
// import { FaStar } from "react-icons/fa6";
// import { MdChevronRight } from "react-icons/md";
// import { BsShare } from "react-icons/bs";
// import mohanlal from '/thodaruminnerimages/mohanlal.jpg'
// import shobana from    '/thodaruminnerimages/shobana.jpg'
// import maniyanpilla from    '/thodaruminnerimages/maniyanpilla.jpg'
// import irshad from  '/thodaruminnerimages/irshad.jpg'
// import binu from      '/thodaruminnerimages/binu.jpg'
// import farhaan from    '/thodaruminnerimages/farhaan.jpg'
// import shaijo from '/thodaruminnerimages/shaijo.jpg'
// import thomas from    '/thodaruminnerimages/thomas.jpg'

// import tharun from    '/thodaruminnerimages/tharun.jpg'
// import mrenjith from    '/thodaruminnerimages/mrenjith.jpg'
// import jakes from     '/thodaruminnerimages/jakes.jpg'
// import avantika from '/thodaruminnerimages/avantika.jpg'
// import krsunil from    '/thodaruminnerimages/krsunil.jpg'
// import shaji from     '/thodaruminnerimages/shaji.jpg'
// import nishadh from     '/thodaruminnerimages/nishadh.jpg'
// import shafeeque from     '/thodaruminnerimages/shafeeque.jpg'
// import sameera from     '/thodaruminnerimages/sameera.jpg'
// import pattanam from     '/thodaruminnerimages/pattanam.jpg'
// import vishnu from     '/thodaruminnerimages/vishnu.jpg'
// import dixon from     '/thodaruminnerimages/dixon.jpg'
// import Navbar from '../topend/Navbar';
// import Categories from '../cat/Categories';
// import { useNavigate } from 'react-router-dom';
// import Footer from '../footer/Footer';





// function Tms() {

//     const navigate = useNavigate();

//      const handleBookticket = () => {
//         window.scrollTo(0, 0);
//     navigate('/thodarum/buytickets');
//   };

//   return (
//     <>

//         <div className="overflow-hidden">

//             <Navbar/>
//             <Categories/>
            
//             <div className="A bg-dark">

//             <section className='B'> 
//                 <img className='B-img ' style={{width:"100%"}} src={Thodaruminnerimage} alt="" /> 
            
//                 <div className="dev-one ">

//                         <div className="L  "> 
//                             <img className='trailerimage' src={Thodarumtrailerimg} alt="" />
//                         </div>

//                         <div className=" Tfamilytrailerdiv ">
//                             <FaCaretRight /> <span>Trailer</span>
//                         </div>
//                         <section className='D'>
//                             <div className=" D1 ">
//                                 in cinemas
//                             </div>
//                         </section>

//                 </div>

//                 <div className="dev-two w-50 ">
//                         <h1 className='text-white fw-bold'>Thodarum</h1>
                        
//                         <section>
//                             <div className="rating-dev">
//                                 <div className="rating-content">
//                                     <FaStar className='fastar' />
//                                     <h5 className='rate'>8.2/10</h5>
//                                     <h6 className='votes'>(1k Votes)</h6>
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
//                                     <a className='di'  href="">Tamil</a>  <span className='comma' ></span>
//                                 </div>
//                             </div>

//                             <div className="duration">
//                                 2hr 46m 
//                                 <span className='dot'>.</span>
//                                 <a className='journer' href="">Drama</a>
//                                 <span className='journer-comma'>,</span>
//                                 <a className='journer' href="">Family</a>
//                                 <span className='journer-comma'>,</span>
//                                 <a className='journer' href="">Thriller</a>
//                                 <span className='dot'>.</span> 
//                                 UA16+
//                                 <span className='dot'>.</span>
//                                 9 May, 2025

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
//                                     <span>In the quiet hill town of Ranni, Pathanamthitta, Shanmughan navigates life as a humble taxi driver. His heart belongs to one thing - his old Ambassador car. To others, it may just be an ageing vehicle, but to Shanmughan, it is like a part of his family. His life, however, is a journey filled with challenges, proving just how far he is willing to go for something so dear to him.</span>
//                                 </div>

//                             </span>
//                         </section>
//                         <span className='line'>___________________________________________________________________________________________________</span>
//                     </section>

//                     <section className='component-2 d-block '>
//                             <section className='component-2-parent '>

//                                 <div className="cast-div  w-25">
//                                     <div className="cast-child ">
//                                         <h4 className='cast-text'>Cast</h4>
//                                     </div>
//                                 </div>

//                                 <div className="cast-crew-div  ">
//                                     <div className="cast-crew-img-div ">

//                                         <div className="d-flex ms-3 p-2">

//                                             <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={mohanlal} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Mohanlal</h5>
//                                             <h5 className='actor-profession'>as Shanmugham</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={shobana} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Shobana</h5>
//                                             <h5 className='actor-profession'>as Lalitha Shanmugam</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={maniyanpilla} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Maniyan Pilla</h5>
//                                             <h5 className='actor-profession'>Actor</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={irshad} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Irshad Ali</h5>
//                                             <h5 className='actor-profession'>Actor</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={binu} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Binu Pappu</h5>
//                                             <h5 className='actor-profession'>as Prakash</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={farhaan} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Farhaan Fazil</h5>
//                                             <h5 className='actor-profession'>Actor</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={shaijo} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Shaijo Adimali</h5>
//                                             <h5 className='actor-profession'>Actor</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={thomas} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Thomas Mathew</h5>
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
//                                     <div className="cast-crew-img-div ">

//                                         <div className="d-flex  ms-3 p-2">
//                                             <a className='anchor-image  ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={tharun} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Tharun Moorthy</h5>
//                                             <h5 className='actor-profession'>Director, Screenplay</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={mrenjith} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>M.Renjith</h5>
//                                             <h5 className='actor-profession'>Producer</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={jakes} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Jakes Bejoy</h5>
//                                             <h5 className='actor-profession'>Musician</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={avantika} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Avanthika Renjith</h5>
//                                             <h5 className='actor-profession'>Executive Producer</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={krsunil} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>K.R.Sunil</h5>
//                                             <h5 className='actor-profession'>Screenplay</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={shaji} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Shaji kumar</h5>
//                                             <h5 className='actor-profession'>Cinematographer</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={nishadh} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Nishadh Yusuf</h5>
//                                             <h5 className='actor-profession'>Editor</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={shafeeque} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Shafeeque V.B.</h5>
//                                             <h5 className='actor-profession'>Editor</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={sameera} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Sameera Saneesh</h5>
//                                             <h5 className='actor-profession'>Costume Designer</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={pattanam} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Pattanam Rasheed</h5>
//                                             <h5 className='actor-profession'>Makeup Artist</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={vishnu} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Vishnu Govind</h5>
//                                             <h5 className='actor-profession'>Audiographer</h5>
//                                         </a>

//                                         <a className='anchor-image ' href="">
//                                             <div className="small-image-div">
//                                                 <div className="small-image-div-2">

//                                                     <img className='pooja' src={dixon} alt="" />

//                                                 </div>
//                                             </div>
//                                             <h5 className='actor-name'>Dixon Poduthas</h5>
//                                             <h5 className='actor-profession'>Production Controller</h5>
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
//         <Footer />
//     </>
//   )
// }

// export default Tms
//================================

//responsive code

import Thodaruminnerimage from '/thodaruminnerimages/thodaruminnerimage.jpg';
import Thodarumtrailerimg from '/thodaruminnerimages/thodarumtrailerimage.jpg';
import { FaCaretRight, FaStar } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";
import { BsShare } from "react-icons/bs";

import mohanlal from '/thodaruminnerimages/mohanlal.jpg';
import shobana from '/thodaruminnerimages/shobana.jpg';
import maniyanpilla from '/thodaruminnerimages/maniyanpilla.jpg';
import irshad from '/thodaruminnerimages/irshad.jpg';
import binu from '/thodaruminnerimages/binu.jpg';
import farhaan from '/thodaruminnerimages/farhaan.jpg';
import shaijo from '/thodaruminnerimages/shaijo.jpg';
import thomas from '/thodaruminnerimages/thomas.jpg';

import tharun from '/thodaruminnerimages/tharun.jpg';
import mrenjith from '/thodaruminnerimages/mrenjith.jpg';
import jakes from '/thodaruminnerimages/jakes.jpg';
import avantika from '/thodaruminnerimages/avantika.jpg';
import krsunil from '/thodaruminnerimages/krsunil.jpg';
import shaji from '/thodaruminnerimages/shaji.jpg';
import nishadh from '/thodaruminnerimages/nishadh.jpg';
import shafeeque from '/thodaruminnerimages/shafeeque.jpg';
import sameera from '/thodaruminnerimages/sameera.jpg';
import pattanam from '/thodaruminnerimages/pattanam.jpg';
import vishnu from '/thodaruminnerimages/vishnu.jpg';
import dixon from '/thodaruminnerimages/dixon.jpg';

import Navbar from '../topend/Navbar';
import Categories from '../cat/Categories';
import Footer from '../footer/Footer';
import { useNavigate } from 'react-router-dom';

const Tms = () => {
  const navigate = useNavigate();
  const handleBookticket = () => {
    window.scrollTo(0, 0);
    navigate('/thodarum/buytickets');
  };

  const cast = [
    { img: mohanlal, name: "Mohanlal", role: "as Shanmugham" },
    { img: shobana, name: "Shobana", role: "as Lalitha Shanmugam" },
    { img: maniyanpilla, name: "Maniyan Pilla", role: "Actor" },
    { img: irshad, name: "Irshad Ali", role: "Actor" },
    { img: binu, name: "Binu Pappu", role: "as Prakash" },
    { img: farhaan, name: "Farhaan Fazil", role: "Actor" },
    { img: shaijo, name: "Shaijo Adimali", role: "Actor" },
    { img: thomas, name: "Thomas Mathew", role: "Actor" }
  ];

  const crew = [
    { img: tharun, name: "Tharun Moorthy", role: "Director, Screenplay" },
    { img: mrenjith, name: "M.Renjith", role: "Producer" },
    { img: jakes, name: "Jakes Bejoy", role: "Musician" },
    { img: avantika, name: "Avanthika Renjith", role: "Executive Producer" },
    { img: krsunil, name: "K.R.Sunil", role: "Screenplay" },
    { img: shaji, name: "Shaji Kumar", role: "Cinematographer" },
    { img: nishadh, name: "Nishadh Yusuf", role: "Editor" },
    { img: shafeeque, name: "Shafeeque V.B.", role: "Editor" },
    { img: sameera, name: "Sameera Saneesh", role: "Costume Designer" },
    { img: pattanam, name: "Pattanam Rasheed", role: "Makeup Artist" },
    { img: vishnu, name: "Vishnu Govind", role: "Audiographer" },
    { img: dixon, name: "Dixon Poduthas", role: "Production Controller" }
  ];

  return (
    <div className="bg-dark text-white">
      <Navbar />
      <Categories />

      <section className="position-relative">
        <img src={Thodaruminnerimage} className="img-fluid w-100 mx-auto mt-3 px-5" alt="Thodarum Poster" />

        {/* <div className="position-absolute top-0 start-0 p-3 text-start">
          <img src={Thodarumtrailerimg} alt="Trailer" className="img-fluid mb-2" style={{ maxWidth: "120px" }} />
          <div><FaCaretRight /> Trailer</div>
          <span className="badge bg-danger mt-2">In Cinemas</span>
        </div> */}

        <div className="position-absolute top-0 end-0 p-3">
          <BsShare /> <span className="ms-2">Share</span>
        </div>

        <div className="container py-4 text-center">
          <h1 className="fw-bold">Thodarum</h1>
          <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
            <FaStar className="text-warning" />
            <h5 className="mb-0">8.2/10</h5>
            <small>(1k Votes)</small>
            <MdChevronRight />
            <button className="btn btn-outline-light btn-sm ms-2">Rate Now</button>
          </div>
          <div className="mb-2">
            <span className="badge bg-secondary me-2">2D</span>
            <span className="badge bg-secondary">Tamil</span>
          </div>
          <div className="small mb-3">
            2hr 46m · Drama, Family, Thriller · UA16+ · 9 May, 2025
          </div>
          <button onClick={handleBookticket} className="btn btn-danger">Book Tickets</button>
        </div>
      </section>

      <section className="container py-5">
        <h4>About the Movie</h4>
        <p>
          In the quiet hill town of Ranni, Pathanamthitta, Shanmughan navigates life as a humble taxi driver. His heart belongs to one thing - his old Ambassador car. To others, it may just be an ageing vehicle, but to Shanmughan, it is like a part of his family. His life, however, is a journey filled with challenges, proving just how far he is willing to go for something so dear to him.
        </p>
        <hr />
      </section>

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

export default Tms;
