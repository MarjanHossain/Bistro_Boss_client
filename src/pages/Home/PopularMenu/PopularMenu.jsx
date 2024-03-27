import { useEffect, useState } from 'react';
import SectionHeading from '../../../component/SectionHeading';
import MenuItem from '../../Shared/MenuItem/MenuItem';


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItem = data.filter(item => item.category === "popular");
                setMenu(popularItem)
            })
    }, [])
    return (
        <section className='mb-12 px-20'>
            {/* heading */}
            <div className='my-10'>
                <SectionHeading
                    subHeading={"Check it out"}
                    heading={"From Our Menu"}
                />
            </div>
            <div className='grid grid-cols-2 gap-8 gap-x-12'>
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>

        </section>
    );
};

export default PopularMenu;