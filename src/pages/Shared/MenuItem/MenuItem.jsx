
const MenuItem = ({ item }) => {
    const { id, name, recipe, image, category, price } = item;
    return (
        <div className="flex gap-3 lg:pb-5">
            <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[100px]" src={image} alt="" />
            <div>
                <h3 className="uppercase text-xl font-sans font-semibold">{name}------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500 text-xl font-bold">${price}</p>

        </div>
    );
};

export default MenuItem;