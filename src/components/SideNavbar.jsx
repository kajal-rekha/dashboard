import { MdDashboard } from "react-icons/md";
import { IoServer } from "react-icons/io5";
import { GoFileDirectory } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { HiMiniUsers } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaChartSimple } from "react-icons/fa6";
import { CgSupport } from "react-icons/cg";
import { MdPayments } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { FiBox } from "react-icons/fi";
import { FaArrowLeftLong } from "react-icons/fa6";


const SideNavbar = ({ isExpanded, toggleSidebar }) => {
    return (
        <div className="sidebar">
            <div
                className={`sidebar bg-slate-900 transition-all duration-300 ${
                    isExpanded ? "w-[14rem]" : "w-[4rem]"
                }`}
            >
                <div className="font-semibold text-xl flex gap-2 items-center h-20 border-b border-dashed border-slate-700">
                    <span className="font-bold text-2xl text-slate-400 ">
                        <FiBox />
                    </span>
                    {isExpanded && (
                        <a
                            href="./"
                            className=" uppercase font-bold text-slate-200 text-[1.3rem]"
                        >
                            Servers
                        </a>
                    )}

                    <span
                        onClick={toggleSidebar}
                        className="cursor-pointer text-slate-300 ml-5"
                    >
                        <FaArrowLeftLong />
                    </span>
                </div>

                <ul className="flex flex-col gap-2">
                    <li className="bg-slate-800 p-3 rounded-md mt-6">
                        <a
                            href="./"
                            className="flex gap-2 items-center text-[15px]"
                        >
                            <span className=" text-slate-200 font-bold">
                                <MdDashboard />
                            </span>
                            {isExpanded && (
                                <span className=" text-slate-200">
                                    Dashboard
                                </span>
                            )}
                        </a>
                    </li>

                    <li className="flex justify-between items-center p-3 hover:bg-slate-800 duration-300 rounded-md">
                        <a
                            href="./server"
                            className="flex gap-3 items-center text-slate-200 text-[15px]"
                        >
                            <span className="font-bold">
                                <IoServer />
                            </span>
                            {isExpanded && <span>Servers</span>}
                        </a>
                        {isExpanded && (
                            <span className="text-lg text-slate-200">
                                <IoMdArrowDropdown />
                            </span>
                        )}
                    </li>

                    <li className="p-3 hover:bg-slate-800 duration-300 rounded-md">
                        <a
                            href="./"
                            className="flex gap-3 items-center text-slate-200 text-[15px]"
                        >
                            <span className=" font-bold">
                                <GoFileDirectory />
                            </span>
                            {isExpanded && <span>File Manager</span>}
                        </a>
                    </li>
                    <li className="p-3 hover:bg-slate-800 duration-300 rounded-md">
                        <a
                            href="./"
                            className="flex gap-3 items-center text-slate-200 text-[15px]"
                        >
                            <span className=" text-[13px]  font-bold">
                                <SlCalender />
                            </span>
                            {isExpanded && <span>Calender</span>}
                        </a>
                    </li>
                    <li className="flex justify-between items-center p-3 hover:bg-slate-800 duration-300 rounded-md">
                        <a
                            href="./"
                            className="flex gap-3 items-center text-slate-200 text-[15px]"
                        >
                            <span className="  font-bold">
                                <HiMiniUsers />
                            </span>
                            {isExpanded && <span>Auth Pages</span>}
                        </a>
                        {isExpanded && (
                            <span className="text-lg text-slate-200">
                                <IoMdArrowDropdown />
                            </span>
                        )}
                    </li>
                    <li className="p-3 hover:bg-slate-800 duration-300 rounded-md">
                        <a
                            href="./"
                            className="flex gap-3 items-center text-slate-200  text-[15px]"
                        >
                            <span className="  font-bold">
                                <FaChartSimple />
                            </span>
                            {isExpanded && <span>Chart</span>}
                        </a>
                    </li>

                    <li className="flex justify-between items-center p-3 hover:bg-slate-800 duration-300 rounded-md">
                        <a
                            href="./"
                            className="flex gap-3 items-center text-slate-200 text-[15px]"
                        >
                            <span className="  font-bold">
                                <CgSupport />
                            </span>
                            {isExpanded && <span>Support</span>}
                        </a>
                    </li>

                    <li className="flex justify-between items-center p-3 hover:bg-slate-800 duration-300 rounded-md">
                        <a
                            href="./"
                            className="flex gap-3 items-center text-slate-200 text-[15px]"
                        >
                            <span className=" font-bold">
                                <MdPayments />
                            </span>
                            {isExpanded && <span>Payments</span>}
                        </a>
                    </li>
                    <li className="flex justify-between items-center p-3 hover:bg-slate-800 duration-300 rounded-md">
                        <a
                            href="./"
                            className="flex gap-3 items-center text-slate-200 text-[15px]"
                        >
                            <span className="font-bold">
                                <IoSettingsSharp />
                            </span>
                            {isExpanded && <span>Settings</span>}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideNavbar;
