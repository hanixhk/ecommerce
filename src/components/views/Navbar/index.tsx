"use client"
import { BiSearch } from "react-icons/bi"
import {HiOutlineChevronDown}  from "react-icons/hi"
import { useState } from "react"
import {GiHamburgerMenu}  from "react-icons/gi"
import {IoMdClose}  from "react-icons/io"
import { BsCart2 } from "react-icons/bs"
import { NavbarArray,NavbarItemType } from "@/components/utils/NavbarArrayandTypes"
import Image from "next/image"
import Link from "next/link"
import DropDown from "./subcomponents/DropDown"
import Expand from "./subcomponents/Expand"
const Navbar = () => {
    const [isNavbaropen,setNavbarOpen]=useState<boolean>(false);
    const [cartItemNumber , setcartItemNumber] = useState<number>(0);
  return (
    <div className=" top-0 backdrop-blur-lg bg-gradient-to-tr from-white via-[#ffffffde] to-opacityDownColor z-20">
    <div className="py-5 flex justify-between items-center gap-8">
        <div className=" w-36 flex-shrink-0">
        <Image width={500} height={500} src={"/Logo.Webp"} alt="Logo" />
        </div>
        <div className="hidden lg:flex justify-between items-center w-full">
            <ul className="flex space-x-4 font-medium text-lg text-purple-950">  
            {NavbarArray.map((item:NavbarItemType,index:number)=>(
             <li key={index} className="flex items-center relative border rounded-sm px-3 py-1 hover:bg-slate-500 cursor-pointer group">
                <Link  href= {item.href} >{item.label}</Link>
                {item.isDropDown? <HiOutlineChevronDown  size={16} />:""}
                {item.isDropDown &&<div className={"invisible group-hover:visible absolute top-8 left-0 py-2 px-6 bg-gray-100 font-light min-w-[7.8rem]"}>
            <DropDown item={item}/>
            </div>}
            </li>
            ))}
            </ul>
            <div className="border flex items-center text-gray-600 px-3 rounded-md">
                <BiSearch />
                <input
                 type="text"
                 className="focus:outline-none pl-1 pr-5 py-1 w-80 "
                 placeholder="Search in our store" />
            </div>
            <div className="flex-shrink-0 relative w-11 h-11 bg-gray-300 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 absolute top-1 right-2 bg-red-400 text-xs font-light rounded-full flex justify-center items-center">
                {cartItemNumber}</div>
                <BsCart2 size={24}/>
            </div>
        </div>
        <div onClick={() => setNavbarOpen(!isNavbaropen)}>
        {isNavbaropen ?
       <div className="flex lg:hidden">
       <IoMdClose size={25} />
   </div>
        :
         <div className="flex lg:hiddem">
         <GiHamburgerMenu size={29}/>
 </div>
}
</div>
</div>
{
    isNavbaropen && <MobileNavbar />
    }
    </div>
  )
}

export default Navbar

const MobileNavbar = () => {
    return (
        <div className="w-full px-6 py-4 bg-gray-100">
            {
                NavbarArray.map((item: NavbarItemType, index: number) => {
                    return (
                        <Expand key={index} item={item} />
                    )
                })
            }
        </div>
    )
}
