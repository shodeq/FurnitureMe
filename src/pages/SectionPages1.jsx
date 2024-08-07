import one from "../../public/assets/images/one.png"
export default function SectionPages1() {
    return (
        <div className="w-full flex px-[60px] font-poppins">
            <div className="w-1/2 flex flex-col justify-center">
                <h1 className="text-[2.7rem] w-[65%] font-semibold">
                    Discover <span className="text-[#598fa7]">Furniture</span> With Ease of Comfort
                </h1>
                <p className="mt-[20px] w-[70%] text-[19px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                    ducimus eligendi enim laudantium ea
                </p>
                <div className="mt-[50px] flex items-center gap-[15px]">
                    <button className="w-[15%] p-[5px] bg-[#598fa7] border-[1.5px] border-[#598fa7] rounded-tr-[5px] rounded-bl-[5px] hover:bg-transparent">
                        <a href="#" className="text-white text-[15px] font-poppins hover:text-[#598fa7]">
                            Get Started
                        </a>
                    </button>
                    <button className="w-[15%] p-[5px] bg-[#598fa7] border-[1.5px] border-[#598fa7] rounded-tr-[5px] rounded-bl-[5px] hover:bg-transparent">
                        <a href="#" className="text-white text-[15px] font-poppins hover:text-[#598fa7]">
                            Login
                        </a>
                    </button>
                </div>
            </div>
            <div className="w-1/2">
                <img src={one} className="w-full" />
            </div>
        </div>
    )
}