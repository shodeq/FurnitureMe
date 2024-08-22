import MainLayout from "../components/layouts/MainLayout";
import SectionPages1 from "./section/home/SectionPages1";
import SectionPages2 from "./section/home/SectionPages2";
import SectionPages3 from "./section/home/SectionPages3";
import SectionPages4 from "./section/home/SectionPages4";

export default function Home() {
    return (
        <MainLayout>
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
        </MainLayout>
    )
}