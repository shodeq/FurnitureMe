import SectionPages2 from "../../pages/SectionPage2";
import SectionPages1 from "../../pages/SectionPages1";
import SectionPages3 from "../../pages/SectionPages3";
import SectionPages4 from "../../pages/SectionPages4";

export default function Content () {
    return(
        <div>
            <div className="w-full h-[100vh] border-2 border-blue-500 flex items-center justify-center ">
                <SectionPages1/>
            </div>
            <div className="w-full h-[100vh] border-2 border-blue-500 flex items-center justify-center ">
                <SectionPages2/>
            </div>
            <div className="w-full h-[100vh] border-2 border-blue-500 flex items-center justify-center ">
                <SectionPages3/>
            </div>
            <div className="w-full h-[100vh] border-2 border-blue-500 flex items-center justify-center ">
                <SectionPages4/>
            </div>
        </div>
    )
}