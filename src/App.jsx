import React from 'react'
import './App.css';
import './cat/Categories.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './topend/Navbar.css';
import Navbar from './topend/Navbar';
import Innerinput from './insidenav/Innerinput';
import Categories from './cat/Categories';
import './banner/Slider.css';
import Slider from './banner/Slider';

import Cities from './insidenav/Cities';
import Login from './insidenav/Login';
import RecomendedMovies from './moviecat/RecomendedMovies';

import Rms from './sections/Rms';
import './moviesdetails/Retromoviedetails.css';
import Tfms from './sections/Tfms';
import './moviesdetails/Touristfamily.css';
import Hms from './sections/Hms';
import './moviesdetails/Hit.css';
import Tbms from './sections/Tbms';
import './moviesdetails/Thunderbolts.css';
import Tms from './sections/Tms';
import './moviesdetails/Thunderbolts.css';

import RetroBuytickets from './theaterselection/RetroBuytickets';
import TouristfamilyBuytickets from './theaterselection/TouristfamilyBuytickets';
import HitBuytickets from './theaterselection/HitBuytickets';
import ThunderboltsBuytickets from './theaterselection/ThunderboltsBuytickets';
import ThodarumBuytickets from './theaterselection/ThodarumBuytickets';

import Comedyshow from './events/Comedyshow';
import Comedyshowinner from './eventsinner/Comedyshowinner';

import Survivorcult from './eventsinner/eventdetails/Survivorcult';

import Sevenplusone from './eventsinner/eventdetails/Sevenplusone';
import Makkamishi from './eventsinner/eventdetails/Makkamishi';
// import Popup from './eventsinner/eventdetails/Popup';
import Extraordinary from './eventsinner/eventdetails/Extraordinary';
import Kisiko from './eventsinner/eventdetails/Kisiko';
import Letsdomakka from './eventsinner/eventdetails/Letsdomakka';
import Eightbypraveen from './eventsinner/eventdetails/Eightbypraveen';

import Movieseatselection from './loading/Movieseatselection';

// Retro seat selection
import RetroCosmoscinema from './Numberofseats/Retroseatlayout/RetroCosmoscinema';
import RetroKarpagamcinema from './Numberofseats/Retroseatlayout/RetroKarpagamcinema';
import RetroMurugancinema from './Numberofseats/Retroseatlayout/RetroMurugancinema';
import RetroKalpanacinema from './Numberofseats/Retroseatlayout/RetroKalpanacinema';

import Retrocosmos from './loading/Retro/Retrocosmos';
import Retrokarpagam from './loading/Retro/Retrokarpagam';
import Retromurugan from './loading/Retro/Retromurugan';
import Retrokalpana from './loading/Retro/Retrokalpana';
// Retro seat selection

// Touristfamily seat selection
import TouristCosmoscinema from './Numberofseats/Touristfamilyseatlayout/TouristCosmoscinema';
import TouristKarpagamcinema from './Numberofseats/Touristfamilyseatlayout/TouristKarpagamcinema';
import TouristMurugancinema from './Numberofseats/Touristfamilyseatlayout/TouristMurugancinema';
import TouristKalpanacinema from './Numberofseats/Touristfamilyseatlayout/TouristKalpanacinema';

import Touristcosmos from './loading/Tourist/Touristcosmos';
import Touristkarpagam from './loading/Tourist/Touristkarpagam';
import Touristmurugan from './loading/Tourist/Touristmurugan';
import Touristkalpana from './loading/Tourist/Touristkalpana';
// Touristfamily seat selection

// Hit seat selection
import HitCosmoscinema from './Numberofseats/Hitseatlayout/HitCosmoscinema';
import HitKarpagamcinema from './Numberofseats/Hitseatlayout/HitKarpagamcinema';
import HitMurugancinema from './Numberofseats/Hitseatlayout/HitMurugancinema';
import HitKalpanacinema from './Numberofseats/Hitseatlayout/HitKalpanacinema';

import Hitcosmos from './loading/Hit/Hitcosmos';
import Hitkarpagam from './loading/Hit/Hitkarpagam';
import Hitmurugan from './loading/Hit/Hitmurugan';
import Hitkalpana from './loading/Hit/Hitkalpana';
// Hit seat selection

// Thunderbolts seat selection
import ThunderboltsCosmoscinema from './Numberofseats/Thunderboltsseatlayout/ThunderboltsCosmoscinema';
import ThunderboltsKarpagamcinema from './Numberofseats/Thunderboltsseatlayout/ThunderboltsKarpagamcinema';
import ThunderboltsMurugancinema from './Numberofseats/Thunderboltsseatlayout/ThunderboltsMurugancinema';
import ThunderboltsKalpanacinema from './Numberofseats/Thunderboltsseatlayout/ThunderboltsKalpanacinema';

import Thunderboltscosmos from './loading/Thunderbolts/Thunderboltscosmos';
import Thunderboltskarpagam from './loading/Thunderbolts/Thunderboltskarpagam';
import Thunderboltskalpana from './loading/Thunderbolts/Thunderboltskalpana';
import Thunderboltsmurugan from './loading/Thunderbolts/Thunderboltsmurugan';
// Thunderbolts seat selection

// Thodarum seat selection
import ThodarumCosmoscinema from './Numberofseats/Thodarumseatlayout/ThodarumCosmoscinema';
import ThodarumKarpagamcinema from './Numberofseats/Thodarumseatlayout/ThodarumKarpagamcinema';
import ThodarumMurugancinema from './Numberofseats/Thodarumseatlayout/ThodarumMurugancinema';
import ThodarumKalpanacinema from './Numberofseats/Thodarumseatlayout/ThodarumKalpanacinema';

import Thodarumcosmos from './loading/Thodarum/Thodarumcosmos';
import Thodarumkarpagam from './loading/Thodarum/Thodarumkarpagam';
import Thodarumkalpana from './loading/Thodarum/Thodarumkalpana';
import Thodarummurugan from './loading/Thodarum/Thodarummurugan';
// Thodarum seat selection

// import Seatlayout from './Numberofseats/Seatlayout.jsx';
// import Bookingsummary from './Bookingsummary/Bookingsummary.jsx';



import Footer from './footer/Footer';
// import SeatSelection from './Seatselection.jsx';
// import Summary from './Summary.jsx';



// import Bookingsummary from './Bookingsummary/Bookingsummary.jsx';




function Home() {
  return (
   <>
   
      <Navbar/>
      <Categories/>
      <Slider/>
      <RecomendedMovies/>
      <Comedyshow/>
      <Footer/>

      
      {/* <Comedyshowinner/> */}
      {/* <Survivorcult/> */}
      {/* <Sevenplusone/> */}
      {/* <Makkamishi/> */}
      {/* <Extraordinary  /> */}
      {/* <Kisko  /> */}
      {/* <Letsdomakka/> */}
      {/* <Eightbypraveen/> */}
      {/* <Popup/> */}
      {/* <Movieseatselection/> */}
      {/* <Seatlayout/> */}
      {/*<Bookingsummary/> */}
      {/* <SeatSelection/> 
      <Summary/>  */}
      


      
      

      
      
      
      
      



  </>
  );
}

function App (){
  return (
    <>
    
   <BrowserRouter>
    
      {/* <Router> */}
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='innerinput' element={<Innerinput />} />
            <Route path='cities' element={<Cities />} />
            <Route path='login' element={<Login />} />    

            {/* sections */}  

            <Route path='retro' element={<Rms />} />
            <Route path='touristfamily' element={<Tfms />} />
            <Route path='hit' element={<Hms />} />
            <Route path='thunderbolts' element={<Tbms />} />
            <Route path='thodarum' element={<Tms />} />

            {/* theaterselection */}

            <Route path='retro/buytickets' element={<RetroBuytickets />} />
            <Route path='touristfamily/buytickets' element={<TouristfamilyBuytickets />} />
            <Route path='hit/buytickets' element={<HitBuytickets />} />
            <Route path='thunderbolts/buytickets' element={<ThunderboltsBuytickets />} />
            <Route path='thodarum/buytickets' element={<ThodarumBuytickets />} />

            {/* seatselection */}

            <Route path='retro/buytickets/cosmosseatselection' element={<Retrocosmos/>} />
            <Route path='retro/buytickets/karpagamseatselection' element={<Retrokarpagam/>} />
            <Route path='retro/buytickets/muruganseatselection' element={<Retromurugan/>} />
            <Route path='retro/buytickets/kalpanaseatselection' element={<Retrokalpana/>} />

            <Route path='touristfamily/buytickets/cosmosseatselection' element={<Touristcosmos/>} />
            <Route path='touristfamily/buytickets/karpagamseatselection' element={<Touristkarpagam/>} />
            <Route path='touristfamily/buytickets/muruganseatselection' element={<Touristmurugan/>} />
            <Route path='touristfamily/buytickets/kalpanaseatselection' element={<Touristkalpana/>} />

            <Route path='hit/buytickets/cosmosseatselection' element={<Hitcosmos/>} />
            <Route path='hit/buytickets/karpagamseatselection' element={<Hitkarpagam/>} />
            <Route path='hit/buytickets/muruganseatselection' element={<Hitmurugan/>} />
            <Route path='hit/buytickets/kalpanaseatselection' element={<Hitkalpana/>} />

            <Route path='thunderbolts/buytickets/cosmosseatselection' element={<Thunderboltscosmos/>} />
            <Route path='thunderbolts/buytickets/karpagamseatselection' element={<Thunderboltskarpagam/>} />
            <Route path='thunderbolts/buytickets/kalpanaseatselection' element={<Thunderboltskalpana/>} />
            <Route path='thunderbolts/buytickets/muruganseatselection' element={<Thunderboltsmurugan/>} />

            <Route path='thodarum/buytickets/cosmosseatselection' element={<Thodarumcosmos/>} />
            <Route path='thodarum/buytickets/karpagamseatselection' element={<Thodarumkarpagam/>} />
            <Route path='thodarum/buytickets/kalpanaseatselection' element={<Thodarumkalpana/>} />
            <Route path='thodarum/buytickets/muruganseatselection' element={<Thodarummurugan/>} />


            {/* <Route path='touristfamily/buytickets/seatselection' element={<Movieseatselection/>} />
            <Route path='hit/buytickets/seatselection' element={<Movieseatselection/>} />
            <Route path='thunderbolts/buytickets/seatselection' element={<Movieseatselection/>} />
            <Route path='thodarum/buytickets/seatselection' element={<Movieseatselection/>} /> */}

            {/* seatlayout */}
            
            <Route path='retro/buytickets/cosmosseatselection/Cosmoscinemaseatlayout' element={<RetroCosmoscinema/>} />
            <Route path='retro/buytickets/karpagamseatselection/Karpagamcinemaseatlayout' element={<RetroKarpagamcinema/>} />
            <Route path='retro/buytickets/muruganseatselection/Murugancinemaseatlayout' element={<RetroMurugancinema/>} />
            <Route path='retro/buytickets/kalpanaseatselection/Kalpanacinemaseatlayout' element={<RetroKalpanacinema/>} />

            <Route path='touristfamily/buytickets/cosmosseatselection/Cosmoscinemaseatlayout' element={<TouristCosmoscinema/>} />
            <Route path='touristfamily/buytickets/karpagamseatselection/Karpagamcinemaseatlayout' element={<TouristKarpagamcinema/>} />
            <Route path='touristfamily/buytickets/muruganseatselection/Murugancinemaseatlayout' element={<TouristMurugancinema/>} />
            <Route path='touristfamily/buytickets/kalpanaseatselection/Kalpanacinemaseatlayout' element={<TouristKalpanacinema/>} />

            <Route path='hit/buytickets/cosmosseatselection/Cosmoscinemaseatlayout' element={<HitCosmoscinema/>} />
            <Route path='hit/buytickets/karpagamseatselection/Karpagamcinemaseatlayout' element={<HitKarpagamcinema/>} />
            <Route path='hit/buytickets/muruganseatselection/Murugancinemaseatlayout' element={<HitMurugancinema/>} />
            <Route path='hit/buytickets/kalpanaseatselection/Kalpanacinemaseatlayout' element={<HitKalpanacinema/>} />

            <Route path='thunderbolts/buytickets/cosmosseatselection/Cosmoscinemaseatlayout' element={<ThunderboltsCosmoscinema/>} />
            <Route path='thunderbolts/buytickets/karpagamseatselection/Karpagamcinemaseatlayout' element={<ThunderboltsKarpagamcinema/>} />
            <Route path='thunderbolts/buytickets/muruganseatselection/Murugancinemaseatlayout' element={<ThunderboltsMurugancinema/>} />
            <Route path='thunderbolts/buytickets/kalpanaseatselection/Kalpanacinemaseatlayout' element={<ThunderboltsKalpanacinema/>} />

            <Route path='thodarum/buytickets/cosmosseatselection/Cosmoscinemaseatlayout' element={<ThodarumCosmoscinema/>} />
            <Route path='thodarum/buytickets/karpagamseatselection/Karpagamcinemaseatlayout' element={<ThodarumKarpagamcinema/>} />
            <Route path='thodarum/buytickets/muruganseatselection/Murugancinemaseatlayout' element={<ThodarumMurugancinema/>} />
            <Route path='thodarum/buytickets/kalpanaseatselection/Kalpanacinemaseatlayout' element={<ThodarumKalpanacinema/>} />

            {/* events */}

            <Route path='events/comedyshow' element={<Comedyshowinner />} />

            {/* events */}
            
            <Route path='events/comedyshow/survivorcult' element={<Survivorcult />} />
            <Route path='events/comedyshow/sevenplusone' element={<Sevenplusone />} />
            <Route path='events/comedyshow/makkamishi' element={<Makkamishi />} />
            <Route path='events/comedyshow/extraordinary' element={<Extraordinary />} />
            <Route path='events/comedyshow/kisiko' element={<Kisiko/>} />
            <Route path='events/comedyshow/letsdomakka' element={<Letsdomakka/>} />
            <Route path='events/comedyshow/eightbypraveen' element={<Eightbypraveen/>} />



        </Routes>
    {/* </Router> */}
    </BrowserRouter>



  </>
)

}
  export default App;