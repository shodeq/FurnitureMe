import { FaBorderAll, FaRegHeart, FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Navlink from "../elements/Navlink";
import NavCategoriesFilter from "../elements/NavCategoriesFilter";
import ButtonPrimary from "../elements/ButtonPrimary";

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
                    <NavCategoriesFilter className="px-[2px] bg-transparent outline-none font-poppins border-none font-bold border-b-[1.8px] border-white" />
                    
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
                    <ButtonPrimary text={'Get Started'} />
                </div>
            </div>
        </nav>
    )
}