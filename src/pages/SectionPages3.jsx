import furniture31 from "../../public/assets/images/31.png"
import furniture32 from "../../public/assets/images/32.png"
import furniture33 from "../../public/assets/images/33.png"
import furniture34 from "../../public/assets/images/34.png"
import furniture35 from "../../public/assets/images/35.png"
import furniture27 from "../../public/assets/images/27.png"
import furniture41 from "../../public/assets/images/41.png"
import furniture42 from "../../public/assets/images/42.png"
import furniture43 from "../../public/assets/images/43.png"
import furniture44 from "../../public/assets/images/44.png"
import { FaRegHeart, FaStar, FaStarHalfAlt } from "react-icons/fa"
import { FaAnglesDown, FaBasketShopping } from "react-icons/fa6"
export default function SectionPages3() {
    return (
        <div className="w-full">
            <div className="w-full mt-10 p-[35px] bg-[url('../../public/assets/images/bg3.png')] bg-cover flex flex-col justify-center items-center font-poppins">
                <h1 className="text-[2.7rem] font-semibold">Categories</h1>
                <p className="mt-5 text-[19px] w-1/2 text-center">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, non
                </p>
                <div className="mt-20 flex justify-center items-center gap-[5px]">
                    <div className="w-[13%] h-[12vh] p-[8px] flex border-[2px] border-[#598fa7] rounded-full bg-white">
                        <div className="w-2/5 flex justify-center items-center">
                            <img src={furniture31} className="w-[85%]" />
                        </div>
                        <div className="w-3/5 flex flex-col justify-center items-start">
                            <h4 className="text-base font-semibold">Chairs</h4>
                            <p className="mt-0 text-left text-sm w-full">73 Products</p>
                        </div>
                    </div>
                    <div className="w-[13%] h-[12vh] p-[8px] flex border-[2px] border-[#598fa7] rounded-full bg-white">
                        <div className="w-2/5 flex justify-center items-center">
                            <img src={furniture32} className="w-[85%]" />
                        </div>
                        <div className="w-3/5 flex flex-col justify-center items-start">
                            <h4 className="text-base font-semibold">Tables</h4>
                            <p className="mt-0 text-left text-sm w-full">50 Products</p>
                        </div>
                    </div>
                    <div className="w-[13%] h-[12vh] p-[8px] flex border-[2px] border-[#598fa7] rounded-full bg-white">
                        <div className="w-2/5 flex justify-center items-center">
                            <img src={furniture33} className="w-[85%]" />
                        </div>
                        <div className="w-3/5 flex flex-col justify-center items-start">
                            <h4 className="text-base font-semibold">Table Lamps</h4>
                            <p className="mt-0 text-left text-sm w-full">102 Products</p>
                        </div>
                    </div>
                    <div className="w-[13%] h-[12vh] p-[8px] flex border-[2px] border-[#598fa7] rounded-full bg-white">
                        <div className="w-2/5 flex justify-center items-center">
                            <img src={furniture34} className="w-[85%]" />
                        </div>
                        <div className="w-3/5 flex flex-col justify-center items-start">
                            <h4 className="text-base font-semibold">Sofas</h4>
                            <p className="mt-0 text-left text-sm w-full">46 Products</p>
                        </div>
                    </div>
                    <div className="w-[13%] h-[12vh] p-[8px] flex border-[2px] border-[#598fa7] rounded-full bg-white">
                        <div className="w-2/5 flex justify-center items-center">
                            <img src={furniture35} className="w-[85%]" />
                        </div>
                        <div className="w-3/5 flex flex-col justify-center items-start">
                            <h4 className="text-base font-semibold">Bed</h4>
                            <p className="mt-0 text-left text-sm w-full">68 Products</p>
                        </div>
                    </div>
                    <div className="w-[13%] h-[12vh] p-[8px] flex border-[2px] border-[#598fa7] rounded-full bg-white">
                        <div className="w-2/5 flex justify-center items-center">
                            <img src={furniture27} className="w-[85%]" />
                        </div>
                        <div className="w-3/5 flex flex-col justify-center items-start">
                            <h4 className="text-base font-semibold">Antiques</h4>
                            <p className="mt-0 text-left text-sm w-full">245 Products</p>
                        </div>
                    </div>
                    <div className="w-[13%] h-[12vh] p-[8px] flex justify-center items-center border-[2px] border-[#598fa7] rounded-full bg-white">
                        <div className="w-auto flex flex-col justify-center items-center">
                            <h4 className="text-base font-semibold">See All</h4>
                            <p className="mt-0 text-left text-sm w-full">4645 Products</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full p-[50px] flex flex-col justify-center items-center font-poppins">
                <h1 className="text-[2.7rem] font-semibold">Best Selling Products</h1>
                <p className="mt-5 text-[19px] w-1/2 text-center">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
                    officia voluptate quas
                </p>
                <div className="mt-[55px] flex justify-center items-center gap-5">
                    <div className="w-[18%] h-[52vh] p-2.5 rounded-[8px] border-[1.7px] border-[#dce3e4] group">
                        <div className="relative w-full h-[22vh] flex justify-center items-center">
                            <FaRegHeart className="absolute top-0 right-0 p-[5px] text-[35px] text-[#598fa7] border-[2px] border-[#598fa7] rounded-full group-hover:bg-[#598fa7] group-hover:text-[white]" />
                            <img src={furniture41} className="w-[55%]" />
                        </div>
                        <div>
                            <h1 className="text-[14px] text-center font-bold text-base">High Back Desk Chair</h1>
                        </div>
                        <div className="mt-[6px] text-gray-400">
                            <p className="w-full text-left text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, iure.
                            </p>
                        </div>
                        <div className="mt-[6px] flex items-center gap-1">
                            <FaStar className="text-yellow-400 text-base" />
                            <FaStar className="text-yellow-400 text-base" />
                            <FaStar className="text-yellow-400 text-base" />
                            <FaStarHalfAlt className="text-yellow-400 text-base" />
                        </div>
                        <p className="w-full mt-[7px] text-left text-[0.887rem] text-gray-400">
                            <span className="text-black">4.5</span> / 50 Reviews
                        </p>
                        <div className="mt-[10px] flex justify-between items-center">
                            <h5 className="text-[#598fa7] text-[1.1rem] font-bold"> $39.99 </h5>
                            <button className="p-[6px] bg-[#598fa7] border-[1.5px] border-[#598fa7] rounded-[5px] text-[0.95rem] text-white font-poppins flex items-center">
                                Add to cart
                                <FaBasketShopping className="ml-[5px]" />
                            </button>
                        </div>
                    </div>
                    <div className="w-[18%] h-[52vh] p-2.5 rounded-[8px] border-[1.7px] border-[#dce3e4] group">
                        <div className="relative w-full h-[22vh] flex justify-center items-center">
                            <FaRegHeart className="absolute top-0 right-0 p-[5px] text-[35px] text-[#598fa7] border-[2px] border-[#598fa7] rounded-full group-hover:bg-[#598fa7] group-hover:text-[white]" />
                            <img src={furniture42} className="w-[55%]" />
                        </div>
                        <div>
                            <h1 className="text-[14px] text-center font-bold text-base">Tall Dresser with 8 Drawers</h1>
                        </div>
                        <div className="mt-[6px] text-gray-400">
                            <p className="w-full text-left text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, iure.
                            </p>
                        </div>
                        <div className="mt-[6px] flex items-center gap-1">
                            <FaStar className="text-yellow-400 text-base" />
                            <FaStar className="text-yellow-400 text-base" />
                            <FaStar className="text-yellow-400 text-base" />
                            <FaStarHalfAlt className="text-yellow-400 text-base" />
                        </div>
                        <p className="w-full mt-[7px] text-left text-[0.887rem] text-gray-400">
                            <span className="text-black">4.5</span> / 50 Reviews
                        </p>
                        <div className="mt-[10px] flex justify-between items-center">
                            <h5 className="text-[#598fa7] text-[1.1rem] font-bold"> $39.99 </h5>
                            <button className="p-[6px] bg-[#598fa7] border-[1.5px] border-[#598fa7] rounded-[5px] text-[0.95rem] text-white font-poppins flex items-center">
                                Add to cart
                                <FaBasketShopping className="ml-[5px]" />
                            </button>
                        </div>
                    </div>
                    <div className="w-[18%] h-[52vh] p-2.5 rounded-[8px] border-[1.7px] border-[#dce3e4] group">
                        <div className="relative w-full h-[22vh] flex justify-center items-center">
                            <FaRegHeart className="absolute top-0 right-0 p-[5px] text-[35px] text-[#598fa7] border-[2px] border-[#598fa7] rounded-full group-hover:bg-[#598fa7] group-hover:text-[white]" />
                            <img src={furniture43} className="w-[55%]" />
                        </div>
                        <div>
                            <h1 className="text-[14px] text-center font-bold text-base">Couch Cover 3 Pieces</h1>
                        </div>
                        <div className="mt-[6px] text-gray-400">
                            <p className="w-full text-left text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, iure.
                            </p>
                        </div>
                        <div className="mt-[6px] flex items-center gap-1">
                            <FaStar className="text-yellow-400 text-base" />
                            <FaStar className="text-yellow-400 text-base" />
                            <FaStar className="text-yellow-400 text-base" />
                            <FaStarHalfAlt className="text-yellow-400 text-base" />
                        </div>
                        <p className="w-full mt-[7px] text-left text-[0.887rem] text-gray-400">
                            <span className="text-black">4.5</span> / 50 Reviews
                        </p>
                        <div className="mt-[10px] flex justify-between items-center">
                            <h5 className="text-[#598fa7] text-[1.1rem] font-bold"> $39.99 </h5>
                            <button className="p-[6px] bg-[#598fa7] border-[1.5px] border-[#598fa7] rounded-[5px] text-[0.95rem] text-white font-poppins flex items-center">
                                Add to cart
                                <FaBasketShopping className="ml-[5px]" />
                            </button>
                        </div>
                    </div>
                    <div className="w-[18%] h-[52vh] p-2.5 rounded-[8px] border-[1.7px] border-[#dce3e4] group">
                        <div className="relative w-full h-[22vh] flex justify-center items-center">
                            <FaRegHeart className="absolute top-0 right-0 p-[5px] text-[35px] text-[#598fa7] border-[2px] border-[#598fa7] rounded-full group-hover:bg-[#598fa7] group-hover:text-[white]" />
                            <img src={furniture44} className="w-[55%]" />
                        </div>
                        <div>
                            <h1 className="text-[14px] text-center font-bold text-base">Side Table & Drawer Storage</h1>
                        </div>
                        <div className="mt-[6px] text-gray-400">
                            <p className="w-full text-left text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, iure.
                            </p>
                        </div>
                        <div className="mt-[6px] flex items-center gap-1">
                            <FaStar className="text-yellow-400 text-base" />
                            <FaStar className="text-yellow-400 text-base" />
                            <FaStar className="text-yellow-400 text-base" />
                            <FaStarHalfAlt className="text-yellow-400 text-base" />
                        </div>
                        <p className="w-full mt-[7px] text-left text-[0.887rem] text-gray-400">
                            <span className="text-black">4.5</span> / 50 Reviews
                        </p>
                        <div className="mt-[10px] flex justify-between items-center">
                            <h5 className="text-[#598fa7] text-[1.1rem] font-bold"> $39.99 </h5>
                            <button className="p-[6px] bg-[#598fa7] border-[1.5px] border-[#598fa7] rounded-[5px] text-[0.95rem] text-white font-poppins flex items-center">
                                Add to cart
                                <FaBasketShopping className="ml-[5px]" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-[30px]">
                <button className="py-[5px] px-5 bg-transparent border-[2px] border-[#598fa7] rounded-[5px] text-sm text-[#598fa7] font-bold font-poppins flex items-center">
                    See More
                    <FaAnglesDown className="fa-solid fa-angles-down ml-1" />
                </button>
            </div>
            </div>
        </div>
    )
}