import { useEffect, useState } from "react";
import SectionHeading from "../../../component/SectionHeading";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const Offer = () => {
    const [offer, setOffer] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItem = data.filter(item => item.category === "offered")
                setOffer(popularItem);
            })
    }, [])
    return (
        <section className="mb-12 px-20">
            {/* heading */}
            <div className='my-10'>
                <SectionHeading
                    subHeading={"Check it out"}
                    heading={"From Our Menu"}
                />
            </div>
            <div className='grid grid-cols-2 gap-8 gap-x-12'>
                {
                    offer.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center lg:pt-10 ">
                <button className="btn btn-outline border-0 border-b-4 text-center border-cyan-400 text-lg font-semibold text-white hover:bg-purple-500 bg-slate-500 hover:border-green-500 hover:text-white uppercase">Order your favorite food</button>

            </div>

        </section>
    );
};

export default Offer;