import React from 'react';
import SectionHeading from './../../../component/SectionHeading';
import featuredImg from '../../../assets/home/featured.jpg'
const Featured = () => {
    return (
        <section
            // bg parallax//
            style={{ backgroundImage: `url(${featuredImg})` }}
            className=' mb-20 mx-w-[1440px] mx-20 border bg-black bg-blend-multiply bg-opacity-15 bg-fixed '>
            {/* heading */}
            <SectionHeading
                subHeading={"Check it out"}
                heading={"from our menu"}
            />

            <div className='flex  items-center '>
                {/* image */}
                <div>
                    <img className='px-20 py-20' src={featuredImg} alt="" />
                </div>
                {/* Details */}
                <div className='space-y-3 text-white'>
                    <h3 className='text-lg font-semibold '> March 20, 2023</h3>
                    <h2 className='text-xl font-semibold '>
                        WHERE CAN I GET SOME?
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                    </p>
                    <button className='btn btn-outline border-0 border-b-4  text-white'>Order Now</button>
                </div>
            </div>

        </section>
    );
};

export default Featured;