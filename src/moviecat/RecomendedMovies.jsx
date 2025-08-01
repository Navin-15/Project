// --------------------------------------------------------------------------------------------------------------------------
// using bootstrap carousel

// import { useEffect } from 'react';

// import Retro from '/images/retro.jpg'
// import Family from '/images/family.jpg'
// import Hit from '/images/hit.jpg'
// import Thunderbolds from '/images/Thunderbolds.jpg'
// import Thodarum from '/images/thodarum.jpg'
// import { useNavigate } from 'react-router-dom';
// import '../moviecat/RecomendedMovies.css'

// function RecomendedMovies() {

//  const navigate = useNavigate();

//   const handleRetroMovieClick = () => {
//     window.scrollTo(0, 0);
//     navigate('/retro');
//   };
//   const handleTfamilyMovieClick = () => {
//     window.scrollTo(0, 0);
//     navigate('/touristfamily');
//   };
//   const handleHitMovieClick = () => {
//     window.scrollTo(0, 0);
//     navigate('/hit');
//   };
//   const handleThunderboltsMovieClick = () => {
//     window.scrollTo(0, 0);
//     navigate('/thunderbolts');
//   };
//   const handleThodarumMovieClick = () => {
//     window.scrollTo(0, 0);
//     navigate('/thodarum');
//   };

//   return (
//     <>

//     <div className="common">

//       <div className=" recomendedmovies carousel slide mt-5 mb-5">
//         <div className='fs-4 fw-semibold media-recommended ps-3  ms-5 w-25'>Recommended Movies </div>
//       {/* <div className=""></div> */}
//         <div className=" catdiv carousel-inner px-5 d-flex justify-content-evenly">

//         <div className=' moviediv' style={{cursor:"pointer"}} >
//             <div className="carousel-item active " >
//                 <div className='imgdiv' style={{width:'13rem'}}>
//                   <img src={Retro} className="movieimg d-block w-100 rounded-2" alt="..." onClick={handleRetroMovieClick}/>
//                   <div className=' fw-bold mt-3 text-black'>Retro</div>
//                   <div className='moviedetail  mt-2 text-black'>Action/Thriller</div>
//                 </div>
//             </div>
//         </div>


//         <div className=' moviediv' style={{cursor:"pointer"}} >
//             <div className="carousel-item active ">
//                 <div className='imgdiv' style={{width:'13rem'}}>
//                   <img src={Family} className="movieimg d-block w-100 rounded-2" alt="..." onClick={handleTfamilyMovieClick}/>
//                   <div className=' fw-bold mt-3 text-black'>Tourist Family</div>
//                   <div className='moviedetail  mt-2 text-black'>Comedy/Drama/Family</div>
//               </div>
//             </div>
//         </div>

//         <div className='moviediv' style={{cursor:"pointer"}}>
//             <div className="carousel-item active ">
//                 <div className='imgdiv' style={{width:'13rem'}}>
//                   <img src={Hit} className="movieimg d-block w-100 rounded-2" alt="..." onClick={handleHitMovieClick}/>
//                   <div className=' fw-bold mt-3 text-black'>HIT: The Third Case</div>
//                   <div className='moviedetail  mt-2 text-black'>Crime/Mystery/Thriller</div>
//                 </div>
//             </div>
//         </div>

//         <div className=' moviediv' style={{cursor:"pointer"}}>
//             <div className="carousel-item active ">
//                 <div className='imgdiv' style={{width:'13rem'}}>
//                   <img src={Thunderbolds} className="movieimg d-block w-100 rounded-2" alt="..." onClick={handleThunderboltsMovieClick}/>
//                   <div className=' fw-bold mt-3 text-black'>Thunderbolts*</div>
//                   <div className='moviedetail  mt-2 text-black'>Action/Adventure/Sci-Fic/SuperHero</div>
//                 </div>
//             </div>
//         </div>

//         <div className=' moviediv fourthmoviediv' style={{cursor:"pointer"}}>
//             <div className="carousel-item active ">
//                 <div className='imgdiv' style={{width:'13rem'}}>
//                   <img src={Thodarum} className="movieimg d-block w-100 rounded-2" alt="..." onClick={handleThodarumMovieClick}/>
//                   <div className=' fw-bold mt-3 text-black'>Thodarum</div>
//                   <div className='moviedetail  mt-2 text-black'>Drama/Family/Thriller</div>
//                 </div>
//             </div>
//           </div>

//   </div>
//   <button className="carousel-control-prev carcontrol" style={{width:"68px"}} type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" style={{marginLeft:"0px"}} aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next carcontrol" style={{width:"68px"}} type="button" data-bs-target="#carouselExample" data-bs-slide="next">
//     <span className="carousel-control-next-icon" style={{marginLeft:"-20px"}} aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
//     </div>    
//   </div>

//     </>
//   )
// }

// export default RecomendedMovies
// -----------------------------------------------------------------------------------------------------------

//responsive code

import Retro from '/images/retro.jpg';
import Family from '/images/family.jpg';
import Hit from '/images/hit.jpg';
import Thunderbolds from '/images/Thunderbolds.jpg';
import Thodarum from '/images/thodarum.jpg';
import { useNavigate } from 'react-router-dom';
import '../moviecat/RecomendedMovies.css';

function RecomendedMovies() {
  const navigate = useNavigate();

  const movieRoutes = {
    retro: () => navigate('/retro'),
    family: () => navigate('/touristfamily'),
    hit: () => navigate('/hit'),
    thunderbolts: () => navigate('/thunderbolts'),
    thodarum: () => navigate('/thodarum'),
  };

  return (
    <div className="recommended-wrapper container-fluid py-4 imageholdingwrapdiv">
      <h4 className="text-start ps-3 ps-md-5 mb-4 fw-semibold">Recommended Movies</h4>
      <div className="row justify-content-center gx-4 gy-4 imageholdingdiv">
        {[{
          img: Retro, title: "Retro", genres: "Action/Thriller", onClick: movieRoutes.retro
        }, {
          img: Family, title: "Tourist Family", genres: "Comedy/Drama/Family", onClick: movieRoutes.family
        }, {
          img: Hit, title: "HIT: The Third Case", genres: "Crime/Mystery/Thriller", onClick: movieRoutes.hit
        }, {
          img: Thunderbolds, title: "Thunderbolts*", genres: "Action/Adventure/Sci-Fi/Superhero", onClick: movieRoutes.thunderbolts
        }, {
          img: Thodarum, title: "Thodarum", genres: "Drama/Family/Thriller", onClick: movieRoutes.thodarum
        }].map((movie, idx) => (
          <div key={idx} className="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <div className="movie-card" onClick={() => { window.scrollTo(0, 0); movie.onClick(); }}>
              <img src={movie.img} alt={movie.title} className="img-fluid rounded-3 movie-img" />
              <h6 className="fw-bold mt-2">{movie.title}</h6>
              <p className="text-muted movie-genres">{movie.genres}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecomendedMovies;

