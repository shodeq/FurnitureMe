/* eslint-disable react/prop-types */
const Navlink = ({ row }) => {
    return (
        <>
            <a href="#" className="px-[2px] text-black font-bold border-b-[1.8px] border-white hover:border-[#598fa7] hover:text-[#598fa7]">
                {row}
            </a>

        </>
    )
}

export default Navlink