import AllTitle from "../../../components/elements/AllTitle"
import ButtonSeeMore from "../../../components/elements/ButtonSeeMore"
import ProductStars from "../../../components/elements/ProducStars"
import ProductCard from "../../../components/elements/ProductCard"
import Categories from "../../../components/fragments/Categories"
import furniture41 from "../../../../public/assets/images/41.png"
import furniture42 from "../../../../public/assets/images/42.png"
import furniture43 from "../../../../public/assets/images/43.png"
import furniture44 from "../../../../public/assets/images/44.png"

export default function SectionPages3() {
    return (
        <div className="w-full">
            <div className="w-full mt-10 p-[35px] bg-[url('../../public/assets/images/bg3.png')] bg-cover flex flex-col justify-center items-center font-poppins">
                <AllTitle text={'Categories'} />
                <p className="mt-5 text-[19px] w-1/2 text-center">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, non
                </p>
                <div className="mt-20 flex justify-center items-center gap-[5px]">
                    <Categories />
                    {/* <div className="w-[13%] h-[12vh] p-[8px] flex justify-center items-center border-[2px] border-[#598fa7] rounded-full bg-white">
                        <div className="w-auto flex flex-col justify-center items-center">
                            <h4 className="text-base font-semibold">See All</h4>
                            <p className="mt-0 text-left text-sm w-full">4645 Products</p>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="w-full p-[50px] flex flex-col justify-center items-center font-poppins">
                <AllTitle text={'Best Selling Products'} />
                <p className="mt-5 text-[19px] w-1/2 text-center">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
                    officia voluptate quas
                </p>
                <div className="mt-[55px] flex justify-center items-center gap-5">
                    <ProductCard>
                        <ProductCard.Image image={furniture41} />
                        <ProductCard.Title title={'High Back Desk Chair'} />
                        <ProductCard.Desc description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, iure."} />
                        <ProductStars />
                        <ProductCard.Rate eye={'4.5'} view={'50 Reviews'} />
                        <ProductCard.Price price={'$39.99'} />
                    </ProductCard>
                    <ProductCard>
                        <ProductCard.Image image={furniture42} />
                        <ProductCard.Title title={'all Dresser with 8 Drawers'} />
                        <ProductCard.Desc description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, iure."} />
                        <ProductStars />
                        <ProductCard.Rate eye={'4.5'} view={'50 Reviews'} />
                        <ProductCard.Price price={'$39.99'} />
                    </ProductCard>
                    <ProductCard>
                        <ProductCard.Image image={furniture43} />
                        <ProductCard.Title title={'Couch Cover 3 Pieces'} />
                        <ProductCard.Desc description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, iure."} />
                        <ProductStars />
                        <ProductCard.Rate eye={'4.5'} view={'50 Reviews'} />
                        <ProductCard.Price price={'$39.99'} />
                    </ProductCard>
                    <ProductCard>
                        <ProductCard.Image image={furniture44} />
                        <ProductCard.Title title={'Side Table & Drawer'} />
                        <ProductCard.Desc description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, iure."} />
                        <ProductStars />
                        <ProductCard.Rate eye={'4.5'} view={'50 Reviews'} />
                        <ProductCard.Price price={'$39.99'} />
                    </ProductCard>

                </div>
                <ButtonSeeMore />
            </div>
        </div>
    )
}