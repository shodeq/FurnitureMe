/* eslint-disable react/prop-types */
import { FaRegHeart } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";





const ProductCard = ({children}) => {
    return(
        <div className="w-[18%] h-[52vh] p-2.5 rounded-[8px] border-[1.7px] border-[#dce3e4] group">
                        {children}                        
                    </div>
    )
}

const Image = ({image}) =>{
    return(
        <div className="relative w-full h-[22vh] flex justify-center items-center">
                            <FaRegHeart className="absolute top-0 right-0 p-[5px] text-[35px] text-[#598fa7] border-[2px] border-[#598fa7] rounded-full group-hover:bg-[#598fa7] group-hover:text-[white]" />
                            <img src={image} className="w-[55%]" />
                        </div>
    )
}

const Title = ({title}) =>{
    return(
        <div>
                            <h1 className="text-[14px] text-center font-bold text-lg">{title}</h1>
                        </div>
    )
}

const Desc = ({description}) =>{
    return(
        <div className="mt-[6px] text-gray-400">
                            <p className="w-full text-left text-sm">
                               {description}
                            </p>
                        </div>
    )
}

const Rate = ({eye,view}) => {
    return(
        <p className="w-full mt-[7px] text-left text-[0.887rem] text-gray-400">
                            <span className="text-black">{eye}</span> / {view}
                        </p>
    )
}

const Price = ({price}) =>{
    return(
        <div className="mt-[10px] flex justify-between items-center">
                            <h5 className="text-[#598fa7] text-[1.1rem] font-bold"> {price}</h5>
                            <button className="p-[6px] bg-[#598fa7] border-[1.5px] border-[#598fa7] rounded-[5px] text-[0.95rem] text-white font-poppins flex items-center">
                                Add to cart
                                <FaBasketShopping className="ml-[5px]" />
                            </button>
                        </div>
    )
}

ProductCard.Image = Image
ProductCard.Title = Title
ProductCard.Desc = Desc
ProductCard.Rate = Rate
ProductCard.Price = Price

export default ProductCard