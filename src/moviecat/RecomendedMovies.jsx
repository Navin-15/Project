// // using bootstrap carousel without using 

// import React from 'react'
// import Retro from '../images/retro.jpg'
// import Family from '../images/family.jpg'
// import Hit from '../images/hit.jpg'
// import Thunderbolds from '../images/Thunderbolds.jpg'
// import Thodarum from '../images/thodarum.jpg'
// import Sinchan from '../images/sinchan.jpg'
// import { GrNext } from "react-icons/gr";


// function RecomendedMovies() {
//   return (
//     <>
//     <div className=" carousel slide px-5 border border-black mt-5">
//             <h3 className="card-text mx-0 fs-4 fw-bold">Recommended Movies</h3>
//     <div className=" carousel-inner d-flex justify-content-between border border-black">

//       <div className=''>
//           <div className="" style={{width:'13rem'}}>
//                 <img src={Retro} className="card-img-top rounded-2" alt="retro"/>
//             <div className="card-body  p-3">
//                 <div className='cardr-text fs-5 fw-semibold mb-2'>Retro</div>
//                 <div className="card-text ">Action/Thriller</div>
//             </div>
//           </div>
//       </div>

//       <div className="">
//           <div className=" " style={{width:'13rem'}}>
//                 <img src={Family} className="card-img-top rounded-2" alt="..."/>
//             <div className="card-body  p-3">
//                 <div className='card-text fs-5 fw-semibold  mb-2'>Tourist Family</div>
//                 <div className="card-text  ">Comedy/Drama/Family</div>
//             </div>
//           </div>
//       </div>

//       <div className="">
//           <div className=" " style={{width:'13rem'}}>
//                 <img src={Hit} className="card-img-top rounded-2" alt="..."/>
//             <div className="card-body  p-3" style={{height:"5rem"}}>
//                 <div  className='card-text fs-5 fw-semibold  mb-2'>HIT:TheThirdCase</div>
//                 <div  className="card-text  ">Crime/Mystery/Thriller</div>
//             </div>
//           </div>
//       </div>

//       <div className="">
//           <div className=" " style={{width:'13rem'}}>
//                 <img src={Thunderbolds} className="card-img-top rounded-2" alt="..."/>
//             <div className="card-body  p-3">
//                 <div className='card-text fs-5 fw-semibold  mb-2'>Thunderbolts*</div>
//                 <div className="card-text  ">Action/Adventure/Sci-Fic/SuperHero</div>
//             </div>
//           </div>
//       </div> 

//       <div className="">
//           <div className=" " style={{width:'13rem'}}>
//                 <img src={Thodarum} className="card-img-top rounded-2" alt="..."/>
//             <div className="card-body p-3">
//                 <div className='card-text fs-5 fw-semibold mb-2'>Thodarum</div>
//                 <div className="card-text ">Drama/Family/Thriller</div>
//             </div>
//           </div>
//       </div>
//   </div>

  
//   {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button> */}
// </div>
//     </>
//   )
// }

// export default RecomendedMovies

// --------------------------------------------------------------------------------------------------------------------------
// using bootstrap carousel

// import { useEffect } from 'react';
import Retro from '/images/retro.jpg'
import Family from '/images/family.jpg'
import Hit from '/images/hit.jpg'
import Thunderbolds from '/images/Thunderbolds.jpg'
import Thodarum from '/images/thodarum.jpg'
import { useNavigate } from 'react-router-dom';
import '../moviecat/RecomendedMovies.css'

function RecomendedMovies() {

 const navigate = useNavigate();

  const handleRetroMovieClick = () => {
    window.scrollTo(0, 0);
    navigate('/retro');
  };
  const handleTfamilyMovieClick = () => {
    window.scrollTo(0, 0);
    navigate('/touristfamily');
  };
  const handleHitMovieClick = () => {
    window.scrollTo(0, 0);
    navigate('/hit');
  };
  const handleThunderboltsMovieClick = () => {
    window.scrollTo(0, 0);
    navigate('/thunderbolts');
  };
  const handleThodarumMovieClick = () => {
    window.scrollTo(0, 0);
    navigate('/thodarum');
  };

  return (
    <>

    <div className="common">

      <div className=" recomendedmovies carousel slide mt-5 mb-5">
        <div className='fs-4 fw-semibold media-recommended ps-3  ms-5 w-25'>Recommended Movies </div>
      {/* <div className=""></div> */}
        <div className=" catdiv carousel-inner px-5 d-flex justify-content-evenly">

        <div className=' moviediv' style={{cursor:"pointer"}} >
            <div className="carousel-item active " >
                <div className='imgdiv' style={{width:'13rem'}}>
                  <img src={Retro} className="movieimg d-block w-100 rounded-2" alt="..." onClick={handleRetroMovieClick}/>
                  <div className=' fw-bold mt-3 text-black'>Retro</div>
                  <div className='moviedetail  mt-2 text-black'>Action/Thriller</div>
                </div>
            </div>
        </div>


        <div className=' moviediv' style={{cursor:"pointer"}} >
            <div className="carousel-item active ">
                <div className='imgdiv' style={{width:'13rem'}}>
                  <img src={Family} className="movieimg d-block w-100 rounded-2" alt="..." onClick={handleTfamilyMovieClick}/>
                  <div className=' fw-bold mt-3 text-black'>Tourist Family</div>
                  <div className='moviedetail  mt-2 text-black'>Comedy/Drama/Family</div>
              </div>
            </div>
        </div>

        <div className='moviediv' style={{cursor:"pointer"}}>
            <div className="carousel-item active ">
                <div className='imgdiv' style={{width:'13rem'}}>
                  <img src={Hit} className="movieimg d-block w-100 rounded-2" alt="..." onClick={handleHitMovieClick}/>
                  <div className=' fw-bold mt-3 text-black'>HIT: The Third Case</div>
                  <div className='moviedetail  mt-2 text-black'>Crime/Mystery/Thriller</div>
                </div>
            </div>
        </div>

        <div className=' moviediv' style={{cursor:"pointer"}}>
            <div className="carousel-item active ">
                <div className='imgdiv' style={{width:'13rem'}}>
                  <img src={Thunderbolds} className="movieimg d-block w-100 rounded-2" alt="..." onClick={handleThunderboltsMovieClick}/>
                  <div className=' fw-bold mt-3 text-black'>Thunderbolts*</div>
                  <div className='moviedetail  mt-2 text-black'>Action/Adventure/Sci-Fic/SuperHero</div>
                </div>
            </div>
        </div>

        <div className=' moviediv fourthmoviediv' style={{cursor:"pointer"}}>
            <div className="carousel-item active ">
                <div className='imgdiv' style={{width:'13rem'}}>
                  <img src={Thodarum} className="movieimg d-block w-100 rounded-2" alt="..." onClick={handleThodarumMovieClick}/>
                  <div className=' fw-bold mt-3 text-black'>Thodarum</div>
                  <div className='moviedetail  mt-2 text-black'>Drama/Family/Thriller</div>
                </div>
            </div>
          </div>

  </div>
  <button className="carousel-control-prev carcontrol" style={{width:"68px"}} type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" style={{marginLeft:"0px"}} aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next carcontrol" style={{width:"68px"}} type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" style={{marginLeft:"-20px"}} aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
    </div>    
  </div>

    </>
  )
}

export default RecomendedMovies
// -----------------------------------------------------------------------------------------------------------
