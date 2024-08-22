import AllTitle from "../../../components/elements/AllTitle"
import ButtonSeeMore from "../../../components/elements/ButtonSeeMore"
import CardProduct from "../../../components/fragments/CardProduct"

export default function SectionPages2() {
    return (
        <div className="w-full px-[60px] pt-[10px] pb-[30px] flex flex-col items-center font-poppins">
            <AllTitle text={'Popular Products'} />
            <p className="w-1/2 mt-[20px] text-[19px] text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Exercitationem quos maxime minima
            </p>
            <div className="mt-[55px] flex flex-col items-center gap-5">
                <CardProduct />

                {/* <div className="w-[18%] h-[52vh] p-2.5 rounded-[8px] border-[1.7px] border-[#dce3e4] group">
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
                    </div> */}
            </div>

            <ButtonSeeMore />
        </div>
    )
}