import { FaAnglesDown } from "react-icons/fa6";

export default function ButtonSeeMore() {
    return (
        <div className="mt-[30px]">
                <button className="py-[5px] px-5 bg-transparent border-[2px] border-[#598fa7] rounded-[5px] text-sm text-[#598fa7] font-bold font-poppins flex items-center">
                    See More
                    <FaAnglesDown className="fa-solid fa-angles-down ml-1" />
                </button>
            </div>
    )
}