import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from 'hamburger-react'


const Navbar=()=>{
    const [isOpen, setOpen] = useState(false);
    return (
      <>
        <div className="flex items-center justify-center bg-[#12151b] text-[#f7f8f9] w-full text-md p-2 lg:flex hidden ">
          <div className="flex items-center justify-center w-[20%] text-3xl">
            <h1>TEST</h1>
          </div>
          <div className="flex items-center justify-center gap-x-20 w-[60%]">
            <Link to="/">Home</Link>
            <Link to="/">Find Clients</Link>
            <Link to="/">Hire Providers</Link>
            <Link to="/">About</Link>
          </div>
          <div className="flex items-center justify-center w-[20%] gap-x-20">
            <Link to="/">Login</Link>
            <Link to="/">Sign up</Link>
            
          </div>
        </div>
        <div className="flex items-center justify-center bg-[#12151b] text-[#f7f8f9] w-full text-md p-2 lg:hidden flex ">
          <div className="flex items-center justify-center w-[20%] text-3xl">
            <Hamburger toggled={isOpen} toggle={setOpen}/>
          </div>
          <div className="flex items-center justify-center w-[60%]">
            <h1>TEST2</h1>
          </div>
          <div className="flex items-center justify-center w-[20%] gap-x-6 md:gap-x-20">
            <Link to="/">Login</Link>
            <Link to="/">Sign up</Link>
            
          </div>
        </div>
        <div className={`absolute w-60 gap-y-2 flex items-center justify-center flex-col bg-[#12151b] text-[#f7f8f9] text-md p-2 lg:hidden flex top-[62px] ${isOpen ? 'flex' : 'hidden'}`}>
            <Link to="/">Home</Link>
            <hr />
            <Link to="/">Find Clients</Link>
            <hr />
            <Link to="/">Hire Providers</Link>
            <hr />
            <Link to="/">About</Link>
            <hr />
          
        </div>
      </>
    );
};
export default Navbar;