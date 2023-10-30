import HorizontalItem from "./item/VerticalItem"

const VerticalMenu = () => {
    const items = [
        {
            imgUrl: '/assets/images/pooritarkari.jpg',
            title: 'Poori Masala - tarkari',
            weight: '200 gm',
            price: 'Rs 220',
        },
        {
            imgUrl: '/assets/images/samosatarkari.jpg',
            title: 'Samosa - tarkari',
            weight: '160 gm',
            price: 'Rs 120',
        },
        {
            imgUrl: '/assets/images/chanaegg.jpg',
            title: 'Chana - egg',
            weight: '150 gm',
            price: 'Rs 160',
        },
        {
            imgUrl: '/assets/images/friedriceomlet.jpg',
            title: 'Fired rice - omlet',
            weight: '250 gm',
            price: 'Rs 150',
        },
    ]

    return (
        <div className="mt-10 pb-10 md:mt-20 flex flex-col">
            <h1 className="text-lg mx-5 md:text-center">Combination Breakfast</h1>
            <div className=" flex flex-col md:items-center gap-5 mx-5 mt-10 ">
                {/* Items are fetched from database */}
                {items.map((item, index) => (
                    <HorizontalItem imgUrl={item.imgUrl} key={index} title={item.title} weight={item.weight} price={item.price}/>
                ))}
            </div>
        </div>
    )
}

export default VerticalMenu
