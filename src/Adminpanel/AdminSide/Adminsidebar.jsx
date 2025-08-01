import React from 'react'
import '../AdminSide/Adminsidebar.css'
import {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { SiBookmyshow } from "react-icons/si";
 import { useNavigate } from 'react-router-dom';
 

function Adminsidebar({openSidebarToggle, OpenSidebar}) {
    const navigate = useNavigate();
  return (
    <aside id='sidebar' className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className="sidebar-title">
                <div className="sidebar-brand">
                   
                    <SiBookmyshow className='icon_header'/> BookMyShow
                    
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>
    
            <ul className='sidebar-list'>
                <li className='sidebar-list-item'onClick={() => navigate('/')} >
                    <a href="">
                      <BsGrid1X2Fill className='icon'/> Dashboard
                    </a>
                </li>
                <li className='sidebar-list-item' onClick={() => navigate('/register')}>
                    <a href="">
                      <BsFillArchiveFill className='icon'/> Usermodule
                    </a>
                </li>
                <li className='sidebar-list-item theaterdetails'>
                    <a href="">
                      <BsFillGrid3X3GapFill className='icon'/> Theater Details
                    </a>
                        <li className=' theaterdetailssublist' onClick={() => navigate('/categories')}>
                          <a href="" className='anc'>
                            <BsFillGrid3X3GapFill className='icon'/> Categories
                          </a>
                        </li>
                        <li className=' theaterdetailssublist'>
                          <a href="" className='anc' >
                            <BsFillGrid3X3GapFill className='icon'/> Theater Details
                          </a>
                        </li>
                        <li className=' theaterdetailssublist'>
                          <a href="" className='anc'>
                              <BsFillGrid3X3GapFill className='icon'/> Manage Panel
                          </a>
                        </li>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                      <BsPeopleFill className='icon'/> Booking Details
                    </a>
                </li>
                
            </ul>
        </aside>
  )
}

export default Adminsidebar