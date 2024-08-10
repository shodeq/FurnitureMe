const Footerlist = ({children,className}) => {
    return (
        <ul className={`mt-[10px] list-none ${className}`} >
                            {children}
                        </ul>
    )
}

const List = ({list}) => {
    return(
        <li className="text-[15px] mt-1 hover:text-[#598fa7]">{list}</li>
                           
    )
}

Footerlist.List = List


export default Footerlist