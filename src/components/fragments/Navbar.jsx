import { FaBorderAll, FaRegHeart, FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Navlink from "../elements/Navlink";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center pt-[22px] pb-[5px] px-[60px] font-poppins">
            <div className="text-[22px] font-bold">
                <h1>
                    <i>FURNITURE<span className="text-[#598fa7]">.ME</span></i>
                </h1>
            </div>
            <div className="flex items-center gap-5 text-[15px]">
                <div className="flex items-center">
                    <FaBorderAll />
                    <select
                        className="px-[2px] bg-transparent outline-none font-poppins border-none font-bold border-b-[1.8px] border-white"
                        name=""
                        id=""
                    >
                        <option value="">All Categories</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
                    <Navlink row={'Home'}/>                
                    <Navlink row={'Services'}/>                
                    <Navlink row={'Blog'}/>                
                    <Navlink row={'Contact'}/>                
                    <Navlink row={'About us'}/>                
            </div>
            <div className="flex items-center gap-[45px]">
                <div className="flex items-center gap-[15px] text-[18px]">
                    <FaRegHeart />
                    <FaCartShopping />
                    <FaSearch />
                </div>
                <div>
                    <button className="p-[5px] bg-[#598fa7] border border-[#598fa7] rounded-tr-[5px] rounded-bl-[5px] hover:bg-transparent">
                        <a href="#" className="text-white no-underline font-poppins text-[15px] hover:text-[#598fa7]">
                            Get Started
                        </a>
                    </button>
                </div>
            </div>
        </nav>
    )
}