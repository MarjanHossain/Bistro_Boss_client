import Cover from "../../Shared/Cover/Cover";
import saladBg from "../../../assets/menu/itemBg.png"
import { useEffect, useState } from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import MenuButton from "../../../component/MenuButton";
const Salads = () => {
    const [salads, setSalads] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const saladsItem = data.filter(item => item.category === "salad");
                setSalads(saladsItem);
            })
    }, [])
    return (
        <section className="lg:mb-20">
            {/*-----------Banner------ */}
            <div>
                <Cover img={saladBg} heading={"salads"} />
            </div>

            {/*---------Items------- */}
            <div className="itemsCard">
                {
                    salads.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    />)
                }
            </div>
            {/*-----------Button--------- */}
            <MenuButton />
        </section>
    );
};

export default Salads;