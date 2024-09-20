import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo.jsx";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Gallery",
    "Contact me",
  
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="z-[50] bg-white   border-[#ffafcc] border-1"

    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

 

      <NavbarContent justify="center" className=" flex    justify-between items-center   sm:flex  " >
     
      <div className=' text-1xl italic sm:text-2xl'>
          <h1 className='font-[dancing-script]   text-red-400'>Nathalie Rose Russi Maldonado</h1>
        </div>
      
 
      </NavbarContent>

      <NavbarContent justify="end" className=" hidden  justify-between items-center sm:flex  " >
      <div className='flex  mr-16 font-[dancing-script] italic gap-10 '>
          <Link href="#Gallery" className='text-lg cursor-pointer  text-red-400' color='#000000 ' underline="hover">Galery</Link>
     
          <Link href='#Footer' className='text-lg cursor-pointer  text-red-400' underline="hover">contact me</Link>


        </div>
      </NavbarContent>
      


      

      <NavbarMenu>
        
          <NavbarMenuItem className="flex flex-col gap-10">
          <Link href="#Gallery" className='text-2xl cursor-pointer  text-red-400' color='#000000 ' underline="hover">Galery</Link>
     
     <Link href='#Footer' className='text-2xl cursor-pointer  text-red-400' underline="hover">contact me</Link>
          </NavbarMenuItem>
      
      </NavbarMenu>
    </Navbar>
  );
}
