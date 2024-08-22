import CategoriesList from "../elements/CategoriesList";
import furniture31 from "../../../public/assets/images/31.png"
import furniture32 from "../../../public/assets/images/32.png"
import furniture33 from "../../../public/assets/images/33.png"
import furniture34 from "../../../public/assets/images/34.png"
import furniture35 from "../../../public/assets/images/35.png"
import furniture27 from "../../../public/assets/images/27.png"

export default function Categories() {
    return (
        <>
            <CategoriesList>
                <CategoriesList.Image image={furniture31} />
                <CategoriesList.Desc type={'Chairs'} many={'73'} />
            </CategoriesList>
            <CategoriesList>
                <CategoriesList.Image image={furniture32} />
                <CategoriesList.Desc type={'Tables'} many={'93'} />
            </CategoriesList>
            <CategoriesList>
                <CategoriesList.Image image={furniture33} />
                <CategoriesList.Desc type={'Table Lamps'} many={'33'} />
            </CategoriesList>
            <CategoriesList>
                <CategoriesList.Image image={furniture34} />
                <CategoriesList.Desc type={'Sofas'} many={'46'} />
            </CategoriesList>
            <CategoriesList>
                <CategoriesList.Image image={furniture35} />
                <CategoriesList.Desc type={'Bed'} many={'68'} />
            </CategoriesList>
            <CategoriesList>
                <CategoriesList.Image image={furniture27} />
                <CategoriesList.Desc type={'Antiques'} many={'268'} />
            </CategoriesList>
            <CategoriesList>
                {/* <CategoriesList.Image image={furniture27}/> */}
                <CategoriesList.Desc type={'See All'} many={'4645'} />
            </CategoriesList>
        </>
    )
}