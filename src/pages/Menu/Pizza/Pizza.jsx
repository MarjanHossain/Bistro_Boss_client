import { useEffect, useState } from 'react';
import pizzaBg from '../../../assets/menu/itemBg.png'
import Cover from './../../Shared/Cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';
const Pizza = () => {
    const [pizza, setPizza] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const pizzaItem = data.filter(item => item.category === "pizza");
                setPizza(pizzaItem);
            })
    }, [])
    return (
        <section className='pb-20'>
            {/* ---------Banner------- */}
            <div>
                <Cover img={pizzaBg} heading={"pizza"} ></Cover>
            </div>

            {/* ----------Item--------- */}
            <div className='px-20 grid grid-cols-2 gap-8 gap-x-12 pt-20 '>
                {
                    pizza.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    />)
                }
            </div>
        </section>
    );
};

export default Pizza;