import React from 'react'

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-6 h-16 bg-white border-b border-gray-200">


            <div className="text-4xl font-semibold tracking-tight text-gray-900">
                Tx<span className="text-blue-500">Intel</span>
            </div>
            <div className="text-2xl flex items-center gap-8">
                <a href="#" className=" text-gray-500 hover:text-gray-900 transition-colors">Overview</a>
                <a href="#" className=" text-gray-500 hover:text-gray-900 transition-colors">Transactions</a>
                <a href="#" className=" text-gray-500 hover:text-gray-900 transition-colors">Predict</a>
            </div>

            <div className="flex items-center gap-3">
                <button className=" font-medium px-4 py-1.5 rounded-md border border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors">
                    Connect Wallet
                </button>
                <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-medium cursor-pointer">
                    A
                </div>
            </div>

        </nav>
    );
};

export default Navbar;


