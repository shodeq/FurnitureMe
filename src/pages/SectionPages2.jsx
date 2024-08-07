import { FaRegHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import chair21 from "../../public/assets/images/21.png"
import chair22 from "../../public/assets/images/22.png"
import chair23 from "../../public/assets/images/23.png"
import chair24 from "../../public/assets/images/24.png"
import chair25 from "../../public/assets/images/25.png"
import chair26 from "../../public/assets/images/26.png"
import chair27 from "../../public/assets/images/27.png"
import chair28 from "../../public/assets/images/28.png"
import { FaAnglesDown, FaBasketShopping } from "react-icons/fa6";

export default function SectionPages2() {
    return (
        <div className="w-full px-[60px] pt-[10px] pb-[30px] flex flex-col items-center font-poppins">
            <h1 className="text-[2.7rem] font-semibold">Popular Products</h1>
            <p className="w-1/2 mt-[20px] text-[19px] text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Exercitationem quos maxime minima
            </p>
            <div className="mt-[55px] flex flex-col items-center gap-5">
                <div className="flex justify-center items-center gap-5">
                    <div className="w-[18%] h-[52vh] p-2.5 rounded-[8px] border-[1.7px] border-[#dce3e4] group">
                        <div className="relative w-full h-[22vh] flex justify-center items-center">
                            <FaRegHeart className="absolute top-0 right-0 p-[5px] text-[35px] text-[#598fa7] border-[2px] border-[#598fa7] rounded-full group-hover:bg-[#598fa7] group-hover:text-[white]" />
                            <img src={chair21} className="w-[55%]" />
                        </div>
                        <div>
                            <h1 className="text-[14px] text-center font-bold text-lg">Mod Queen armchair</h1>
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
                            <img src={chair22} className="w-[55%]" />
                        </div>
                        <div>
                            <h1 className="text-[14px] text-center font-bold text-lg">White Wood Table</h1>
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
                            <img src={chair23} className="w-[55%]" />
                        </div>
                        <div>
                            <h1 className="text-[14px] text-center font-bold text-lg">ESSEBODA 2-seat sofa</h1>
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
                            <img src={chair24} className="w-[55%]" />
                        </div>
                        <div>
                            <h1 className="text-[14px] text-center font-bold text-lg">Single Sofa</h1>
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
                <div className="flex justify-center items-center gap-5">
                    <div className="w-[18%] h-[52vh] p-2.5 rounded-[8px] border-[1.7px] border-[#dce3e4] group">
                        <div className="relative w-full h-[22vh] flex justify-center items-center">
                            <FaRegHeart className="absolute top-0 right-0 p-[5px] text-[35px] text-[#598fa7] border-[2px] border-[#598fa7] rounded-full group-hover:bg-[#598fa7] group-hover:text-[white]" />
                            <img src={chair25} className="w-[55%]" />
                        </div>
                        <div>
                            <h1 className="text-[14px] text-center font-bold text-lg">Single Table 18</h1>
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
                            <img src={chair26} className="w-[55%]" />
                        </div>
                        <div>
                            <h1 className="text-[14px] text-center font-bold text-lg">Soft Gray Chair</h1>
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
                            <img src={chair27} className="w-[55%]" />
                        </div>
                        <div>
                            <h1 className="text-[14px] text-center font-bold text-lg">Mad Queen armchair</h1>
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
                            <img src={chair28} className="w-[55%]" />
                        </div>
                        <div>
                            <h1 className="text-[14px] text-center font-bold text-lg">Table Lamps</h1>
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
            </div>
            <div className="mt-[30px]">
                <button className="py-[5px] px-5 bg-transparent border-[2px] border-[#598fa7] rounded-[5px] text-sm text-[#598fa7] font-bold font-poppins flex items-center">
                    See More
                    <FaAnglesDown className="fa-solid fa-angles-down ml-1" />
                </button>
            </div>
        </div>
    )
}