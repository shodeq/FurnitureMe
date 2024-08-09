import { FaStar, FaStarHalfAlt } from "react-icons/fa";


export default function ProductStars() {
    return (
        <div>
            <ul className="mt-[6px] flex items-center gap-1">
                <li>
                    <FaStar className="text-yellow-400 text-base" />
                </li>
                <li>
                    <FaStar className="text-yellow-400 text-base" />
                </li>
                <li>
                    <FaStar className="text-yellow-400 text-base" />
                </li>
                <li>
                    <FaStarHalfAlt className="text-yellow-400 text-base" />
                </li>
            </ul>
        </div>
    )
}