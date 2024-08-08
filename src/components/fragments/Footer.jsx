import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import maps from "../../../public/assets/images/map.jpg"

export default function Footer() {
    return (
        <div className="w-full py-[35px] px-[60px] flex items-start font-poppins">
            <div className="w-1/2">
                <div className="text-[22px] font-bold">
                    <h1>
                        <i>FURNITURE<span className="text-[#598fa7]">.ME</span></i>
                    </h1>
                </div>
                <div className="w-1/2 mt-[10px] text-base text-[#bababa]">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At itaque
                        sed aperiam dolorum soluta debitis mollitia eum perspiciatis
                        fugit, suscipit cum <a href="#" className="text-[#bababa] underline decoration-solid">learn more</a>
                    </p>
                </div>
                <div className="mt-5">
                    <h3 className="text-[17.5px] font-semibold">WORKING HOURS</h3>
                    <div className="mt-2.5 flex items-center gap-[50px] text-[15px] text-[#bababa]">
                        <div>
                            <p>Saturday - Thursday</p>
                            <p>8:00 am to 11:00 pm</p>
                        </div>
                        <div>
                            <p>Friday</p>
                            <p>Closed</p>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <h3 className="text-[17.5px] font-semibold">OUR LOCATION</h3>
                    <p className="mt-2.5 text-[#bababa] text-[15px]">Jordan- Amman - 7th circle - St.3 - 67</p>
                </div>
            </div>
            <div className="w-1/2">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-[17.5px] font-semibold">NAVIGATION</h3>
                        <ul className="mt-[10px] list-none">
                            <li className="text-[15px] mt-1 hover:text-[#598fa7]">Home</li>
                            <li className="text-[15px] mt-1 hover:text-[#598fa7]">Events</li>
                            <li className="text-[15px] mt-1 hover:text-[#598fa7]">Services</li>
                            <li className="text-[15px] mt-1 hover:text-[#598fa7]">Contact us</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-[17.5px] font-semibold">GET TO KNOW US</h3>
                        <ul className="mt-[10px] list-none">
                            <li className="text-[15px] mt-1 hover:text-[#598fa7]">Careers</li>
                            <li className="text-[15px] mt-1 hover:text-[#598fa7]">Blog</li>
                            <li className="text-[15px] mt-1 hover:text-[#598fa7]">About Furniture.ME</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-[17.5px] font-semibold">FOLLOW US</h3>
                        <ul className="mt-[10px] list-none flex items-center gap-[24px]">
                            <li><FaFacebookF className="text-[#598fa7]" /></li>
                            <li><FaTwitter className="text-[#598fa7]" /></li>
                            <li><FaInstagram className="text-[#598fa7]" /></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-5 w-full">
                    <img src={maps} className="w-full h-auto rounded-[10px]" />
                </div>
            </div>
        </div>
    )
}