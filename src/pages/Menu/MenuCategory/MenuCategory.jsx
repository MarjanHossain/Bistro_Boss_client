import Desserts from "../Desserts/Desserts";
import Offer from "../Offer/Offer";
import Pizza from "../Pizza/Pizza";
import Salads from "../Salads/Salads";
import Soups from "../Soups/Soups";

const MenuCategory = () => {
    return (
        <section>
            <Offer />
            <Desserts />
            <Pizza />
            <Salads />
            <Soups />
        </section>
    );
};

export default MenuCategory;