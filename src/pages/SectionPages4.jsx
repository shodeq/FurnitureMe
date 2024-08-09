import { FaUser } from "react-icons/fa6"
import chairs4 from "../../public/assets/images/23C.png"
import bg6 from "../../public/assets/images/bg6.jpeg"
import { FaArrowLeft, FaArrowRight, FaStar, FaStarHalfAlt } from "react-icons/fa"
import AllTitle from "../components/elements/AllTitle"
export default function SectionPages4() {
    return (
        <div className="w-full">
            <div className="w-full mt-[30px] mb-[30px] flex flex-col justify-center items-center font-poppins">
                <AllTitle text={'Customers say about us'} />
                <p className="mt-5 text-[19px] w-1/2 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                    pariatur recusandae alias
                </p>
                <div className="w-full mt-5 py-[30px] px-[50px] bg-[url('../../public/assets/images/bg3.png')] bg-cover flex justify-center items-center gap-[40px]">
                    <div className="w-[35%]">
                        <img src={chairs4} className="w-full" />
                    </div>
                    <div className="w-[35%] p-[18px] border-none rounded-tr-[5px] rounded-tl-[15px] rounded-br-[15px] rounded-bl-[5px] bg-white">
                        <div className="flex justify-between items-center">
                            <div className="flex justify-center items-center p-[14px] bg-black text-white border-none rounded-[10px]">
                                <FaUser className="text-[25px]" />
                            </div>
                            <div className="ml-[-130px]">
                                <h5 className="text-base font-semibold">Ki-hong Jensen</h5>
                                <p className="w-full mt-0 text-[15px]">Architect - abc.com</p>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center gap-1">
                                    <FaStar className="text-yellow-400 text-base" />
                                    <FaStar className="text-yellow-400 text-base" />
                                    <FaStar className="text-yellow-400 text-base" />
                                    <FaStarHalfAlt className="text-yellow-400 text-base" />
                                </div>
                                <p className="w-full mt-[7px] text-left text-[0.887rem] text-gray-400">
                                    <span className="text-black">4.5</span> / 50 Reviews
                                </p>
                            </div>
                        </div>
                        <div className="mt-[20px]">
                            <p className="w-full text-[#bababa] text-[16.5px] text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
                                excepturi. Laudantium nemo tempore eaque provident veniam, quo
                                ratione placeat natus perspiciatis consequatur earum.
                            </p>
                        </div>
                    </div>
                    <div className="w-[10%] flex flex-col justify-center items-end gap-2.5">
                        <button className="p-[12px] bg-[#598fa7] border-[2px] border-[#598fa7] rounded-[10px] text-sm text-white font-poppins hover:bg-white hover:text-[#598fa7]">
                            <FaArrowRight className="fa-solid fa-arrow-right ml-1 text-[18px]" />
                        </button>
                        <button className="p-[12px] bg-[#598fa7] border-[2px] border-[#598fa7] rounded-[10px] text-sm text-white font-poppins hover:bg-white hover:text-[#598fa7]">
                            <FaArrowLeft className="fa-solid fa-arrow-left ml-1 text-[18px]" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full py-[30px] px-[50px] flex flex-col justify-center items-center font-poppins">
                <AllTitle text={'Keep in touch'} />
                <p className="mt-5 text-[19px] w-1/2 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tenetur accusantium veniam
                </p>
                <div className="w-full py-[20px] px-[50px] mt-5">
                    <div className="w-full relative rounded-[20px]">
                        <img
                            src={bg6}
                            className="w-full h-[245px] rounded-[20px]"
                        />
                        <div className="w-full h-[245px] p-5 absolute top-0 flex flex-col justify-between items-center bg-black bg-opacity-70 rounded-[20px]">
                            <h1 className="w-[70%] text-[50px] text-center text-white shadow-md font-bold">
                                Get Our Promo Code By Subscribing To Our Newsletter
                            </h1>
                            <div className="w-[70%] py-[7px] px-[15px] flex justify-between items-center bg-white border-none rounded-lg">
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    className="w-[67%] p-1 outline-none border-none font-poppins"
                                />
                                <button className="py-1 px-[25px] bg-[#fdc32f] border-[2px] border-[#fdc32f] rounded-md text-[15px] font-bold font-poppins">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}