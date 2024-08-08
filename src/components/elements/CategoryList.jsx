import furniture31 from "../../../public/assets/images/31.png"





const CategoryList = ({children}) => {
    return(
        <div className="w-[13%] h-[12vh] p-[8px] flex border-[2px] border-[#598fa7] rounded-full bg-white justify-center">
                        {children}
                    </div>
    )
}

const Image = ({image}) => {
    return(
        <div className="w-2/5 flex justify-center items-center">
                            <img src={image} className="w-[85%]" />
                        </div>
    )
}
const Desc = ({type, many}) => {
    return(
        <div className="w-3/5 flex flex-col justify-center items-start">
                            <h4 className="text-base font-semibold">{type}</h4>
                            <p className="mt-0 text-left text-sm w-full">{many} Products</p>
                        </div>
    )
}



CategoryList.Image = Image
CategoryList.Desc = Desc

export default CategoryList