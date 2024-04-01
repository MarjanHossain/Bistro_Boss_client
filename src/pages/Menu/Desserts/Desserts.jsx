import Cover from "../../Shared/Cover/Cover";
import dessertBg from "../../../assets/menu/itemBg.png"
import { useEffect, useState } from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import MenuButton from "../../../component/MenuButton";
const Desserts = () => {

    const [desserts, setDesserts] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const dessertsItem = data.filter(item => item.category === "dessert");
                setDesserts(dessertsItem)
            })
    }, [])
    return (
        <section className="lg:mb-10" >
            {/* ----------Desserts Banner--------- */}
            <Cover img={dessertBg} heading={"desserts"} />

            {/*------------- Desserts Items---------- */}

            <div className="grid grid-cols-2 gap-8 gap-x-12 px-20 pt-10">
                {
                    desserts.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            {/* ----------Button---------- */}
            <div>
                <MenuButton />
            </div>
        </section>
    );
};

export default Desserts;