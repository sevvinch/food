import React from 'react'
import { NavLink } from 'react-router-dom';

import Logo from "./../assets/logo.svg"
// import Home from "./../assets/home.svg"
// import Cake from "./../assets/cake.svg"
// import Part from "./../assets/part.svg"
// import Buy from "./../assets/buy.svg"
// import Notif from "./../assets/notification.svg"
// import Settings from "./../assets/settings.svg"
// import Out from "./../assets/out.svg"

import { GoHome } from "react-icons/go";
// import { RiDiscountPercentLine } from "react-icons/ri";
import { VscPieChart } from "react-icons/vsc";
import { MdOutlineMail } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuBadgePercent, LuSettings } from "react-icons/lu";
import { TbLogout } from "react-icons/tb";

const Sidebar = () => {
  return (
        <div className="sidebar w-[120px]  bg-[#1F1D2B]">
            <ul className=" container mx-auto my-0 px-4">
                <li className="my-[15px] pb-[10px]">
                    <NavLink className="">
                        <img src={Logo} alt="" className=' py-[10px] w-[96px] h-[96px] ' />
                    </NavLink>
                </li>
                <li className="my-[15px] pl-[30px] p-6">
                    <NavLink className="">
                        <GoHome className=' w-[30px] h-[30px] p-[px]'/>
                    </NavLink>
                </li>  
                <li className="my-[15px] pl-[30px] p-6">
                    <NavLink className="">
                        {/* <img src={Cake} alt="" className='w-[20px] h-[20px]'/> */}
                        {/* <RiDiscountPercentLine /> */}
                        <LuBadgePercent className='w-[30px] h-[30px]' />

                        
                    </NavLink>
                </li>
                <li className="my-[15px] pl-[30px] p-6">
                    <NavLink className="">
                        {/* <img src={Part} alt="" className='w-[20px] h-[20px]'/> */}
                        <VscPieChart className='w-[30px] h-[30px]'/>
                    </NavLink>
                </li>  
                <li className="my-[15px] pl-[30px] p-6">
                    <NavLink className="">
                        {/* <img src={Buy} alt="" className='py-[20px] w-[35%]'/> */}
                        <MdOutlineMail className='w-[30px] h-[30px]'/>

                    </NavLink>
                </li>
                <li className="my-[15px] pl-[30px] p-6">
                    <NavLink className="">
                        {/* <img src={Notif} alt="" className='py-[20px] w-[35%]'/> */}
                        <IoIosNotificationsOutline className='w-[30px] h-[30px]'/>
                    </NavLink>
                </li>  
                <li className="my-[15px] pl-[30px] p-6">
                    <NavLink className="">
                        {/* <img src={Settings} alt="" className='py-[20px] w-[35%]'/> */}
                        <LuSettings className='w-[30px] h-[30px]'/>
                    </NavLink>
                </li>
                <li className="my-[15px] pl-[30px]  hover:bg-[#EA7C69]  rounded-[8px] pt-9">
                    <NavLink className="">
                        {/* <img src={Out} alt="" className='py-[20px] w-[35%]'/> */}
                        <TbLogout className='w-[30px] h-[30px]'/>
                    </NavLink>
                </li>  
            </ul>
        </div>
    

  )
}

export default Sidebar