import SectionPages2 from "../../pages/SectionPages2";
import SectionPages1 from "../../pages/SectionPages1";
import SectionPages3 from "../../pages/SectionPages3";
import SectionPages4 from "../../pages/SectionPages4";

export default function Content() {
    return (
        <div>
            <div className="w-full">
                <SectionPages1 />
            </div>
            <div className="w-full">
                <SectionPages2 />
            </div>
            <div className="w-full">
                <SectionPages3 />
            </div>
            <div className="w-full">
                <SectionPages4 />
            </div>
        </div>
    )
}