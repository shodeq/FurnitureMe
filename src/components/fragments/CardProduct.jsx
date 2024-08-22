import ProductStars from "../elements/ProducStars";
import ProductCard from "../elements/ProductCard";
import chair21 from "../../../public/assets/images/21.png"
import chair22 from "../../../public/assets/images/22.png"
import chair23 from "../../../public/assets/images/23.png"
import chair24 from "../../../public/assets/images/24.png"
import chair25 from "../../../public/assets/images/25.png"
import chair26 from "../../../public/assets/images/26.png"
import chair27 from "../../../public/assets/images/27.png"
import chair28 from "../../../public/assets/images/28.png"

export default function CardProduct() {
    return (
        <>
            <div className="flex justify-center items-center gap-5">
                <ProductCard>
                    <ProductCard.Image image={chair21} />
                    <ProductCard.Title title={'Mod Queen armchair'} />
                    <ProductCard.Desc description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, iure."} />
                    <ProductStars />
                    <ProductCard.Rate eye={'4.5'} view={'50 Reviews'} />
                    <ProductCard.Price price={'$39.99'} />
                </ProductCard>
                <ProductCard>
                    <ProductCard.Image image={chair22} />
                    <ProductCard.Title title={'White Wood Table'} />
                    <ProductCard.Desc description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, iure."} />
                    <ProductStars />
                    <ProductCard.Rate eye={'4.5'} view={'55 Reviews'} />
                    <ProductCard.Price price={'$39.99'} />
                </ProductCard>
                <ProductCard>
                    <ProductCard.Image image={chair23} />
                    <ProductCard.Title title={'ESSEBODA 2-seat sofa'} />
                    <ProductCard.Desc description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, iure."} />
                    <ProductStars />
                    <ProductCard.Rate eye={'4.7'} view={'55 Reviews'} />
                    <ProductCard.Price price={'$39.99'} />
                </ProductCard>
                <ProductCard>
                    <ProductCard.Image image={chair24} />
                    <ProductCard.Title title={'Single Sofa'} />
                    <ProductCard.Desc description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, iure."} />
                    <ProductStars />
                    <ProductCard.Rate eye={'4.7'} view={'55 Reviews'} />
                    <ProductCard.Price price={'$50.99'} />
                </ProductCard>
            </div>
            <div className="flex justify-center items-center gap-5">
                <ProductCard>
                    <ProductCard.Image image={chair25} />
                    <ProductCard.Title title={'Single Table 18'} />
                    <ProductCard.Desc description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, iure."} />
                    <ProductStars />
                    <ProductCard.Rate eye={'4.7'} view={'70 Reviews'} />
                    <ProductCard.Price price={'$50.99'} />
                </ProductCard>
                <ProductCard>
                    <ProductCard.Image image={chair26} />
                    <ProductCard.Title title={'Soft Gray Chair'} />
                    <ProductCard.Desc description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, iure."} />
                    <ProductStars />
                    <ProductCard.Rate eye={'4.7'} view={'70 Reviews'} />
                    <ProductCard.Price price={'$30.99'} />
                </ProductCard>
                <ProductCard>
                    <ProductCard.Image image={chair27} />
                    <ProductCard.Title title={'Mad Queen armchair'} />
                    <ProductCard.Desc description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, iure."} />
                    <ProductStars />
                    <ProductCard.Rate eye={'4.2'} view={'70 Reviews'} />
                    <ProductCard.Price price={'$30.99'} />
                </ProductCard>
                <ProductCard>
                    <ProductCard.Image image={chair28} />
                    <ProductCard.Title title={'Table Lamps'} />
                    <ProductCard.Desc description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, iure."} />
                    <ProductStars />
                    <ProductCard.Rate eye={'4.2'} view={'40 Reviews'} />
                    <ProductCard.Price price={'$100.99'} />
                </ProductCard>
            </div>
            </>
            )
}