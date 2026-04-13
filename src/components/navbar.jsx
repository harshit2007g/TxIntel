import React,{useState} from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';
gsap.registerPlugin(useGSAP);
const Navbar = () => {

    useGSAP(() => {
        gsap.from("#title", { x: -40 }, { ease: 'expo.in' });
    })


    return (
        <nav className="flex items-center justify-between px-6 h-16 bg-white border-b border-gray-200">


            <div className="px-6 text-4xl font-semibold tracking-tight text-gray-900" id='title'>
                Tx<span className="text-blue-500">Intel</span>
            </div>
            <div className="text-2xl flex items-center gap-8">
                <Link to='/'  className=" text-gray-500 hover:text-gray-900 transition-colors">Overview</Link>
                <Link to='/transaction' className=" text-gray-500 hover:text-gray-900 transition-colors">Transaction</Link>
                <Link to='/analyze' className=" text-gray-500 hover:text-gray-900 transition-colors">Analyze</Link>
            </div>

        </nav>
    );
};

export default Navbar;


