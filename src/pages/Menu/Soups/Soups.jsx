import { useEffect, useState } from "react";
import soupsBg from "../../../assets/menu/itemBg.png"
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import MenuButton from "../../../component/MenuButton";
const Soups = () => {
    const [soups, setSoups] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const soupsItem = data.filter(item => item.category === "soup")
                setSoups(soupsItem)
            })
    }, [])
    return (
        <section>
            {/* --------Banner------- */}
            <Cover img={soupsBg} heading={"soups"} />

            {/* -------Items--------- */}
            <div className="itemsCard">
                {
                    soups.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    />)
                }
            </div>
            {/*-------Button----- */}
            <MenuButton />
        </section>
    );
};

export default Soups;