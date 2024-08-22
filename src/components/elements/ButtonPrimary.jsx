/* eslint-disable react/prop-types */
const ButtonPrimary = ({ text, className }) => {
    return (
        <button className={`p-[5px] bg-[#598fa7] border-[2px] border-[#598fa7] rounded-tr-[5px] rounded-bl-[5px] hover:bg-transparent group ${className}`}>
            <a href="#" className="text-white no-underline font-poppins text-[15px] group-hover:text-[#598fa7]">
                {text}
            </a>
        </button>
    )
}

export default ButtonPrimary