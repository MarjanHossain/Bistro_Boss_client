
const useMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItem = data.filter(item => item.category === "popular");
                setMenu(popularItem)
            })
    }, [])
};

export default useMenu;