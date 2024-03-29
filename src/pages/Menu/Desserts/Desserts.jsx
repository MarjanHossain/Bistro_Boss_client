import Cover from "../../Shared/Cover/Cover";
import dessertBg from "../../../assets/menu/desserts.png"
import { useState } from "react";
const Desserts = () => {

    const [Desserts, setDesserts] = useState([]);

    return (
        <section>
            {/* ----------Desserts Banner--------- */}
            <Cover img={dessertBg} heading={"desserts"} />

            {/*------------- Desserts Items---------- */}

            <div>
                {

                }
            </div>
        </section>
    );
};

export default Desserts;