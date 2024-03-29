import { Helmet } from 'react-helmet-async';
import MenuBanner from '../MenuBanner/MenuBanner';
import MenuCategory from '../MenuCategory/MenuCategory';
const Menu = () => {
    return (
        <section className=' pb-20'>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet >

            {/*//? ----------Menu Content ------- */}

            <MenuBanner />
            <MenuCategory />

        </section>
    );
};

export default Menu;