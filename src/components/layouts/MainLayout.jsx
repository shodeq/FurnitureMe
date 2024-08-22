/* eslint-disable react/prop-types */
import Footer from "../fragments/Footer";
import Navbar from "../fragments/Navbar";

export default function MainLayout({ children }) {
    return (
        <div className="w-full">
            <div className="w-full">
                <Navbar />
            </div>
            <div className="w-full">
                {children}
            </div>
            <div className="w-full">
                <Footer />
            </div>
        </div>
    )
}