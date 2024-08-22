import one from "../../../../public/assets/images/one.png"
import ButtonPrimary from "../../../components/elements/ButtonPrimary"
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
                    <ButtonPrimary text={'Get Started'} className={'w-[15%]'} />
                    <ButtonPrimary text={'Login'} className={'w-[15%]'} />
                </div>
            </div>
            <div className="w-1/2">
                <img src={one} className="w-full" />
            </div>
        </div>
    )
}