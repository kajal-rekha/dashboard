import React from "react";
import { FaPlus } from "react-icons/fa";

const Navbar = () => {
    return (
        <header className="">
            <nav className="h-20 w-full flex justify-between items-center">
                <div className="flex gap-5 items-center justify-start">
                    <form className="flex gap-2 items-center">
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-transparent border outline-none text-slate-200 border-slate-800 focus:border-slate-700 rounded-full py-2 px-5"
                        />
                    </form>
                </div>
                <div>
                    <button className="bg-[#192336] text-slate-200 rounded-lg border-none flex gap-2 items-center py-3 px-4">
                        <span>
                            <FaPlus />
                        </span>
                        New Server
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
