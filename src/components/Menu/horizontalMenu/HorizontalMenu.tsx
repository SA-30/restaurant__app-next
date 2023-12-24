
import HorizontalItem from "./item/HorizontalItem"

const HorizontalMenu = () => {
    const items = [
        {
            imgUrl: '/assets/images/momov.jpg',
            title: 'Veg Momo',
            weight: '1 plate',
            price: 'Rs 100',
        },
        {
            imgUrl: '/assets/images/momoc.jpg',
            title: 'Buff Momo',
            weight: '1 plate',
            price: 'Rs 120',
        },
        {
            imgUrl: '/assets/images/chauminc.jpg',
            title: 'Buff Chaumin',
            weight: '1 plate',
            price: 'Rs 160',
        },
        {
            imgUrl: '/assets/images/chauminv.jpg',
            title: 'Veg Chaumin',
            weight: '1 plate',
            price: 'Rs 120',
        },
    ]

    return (
        <div className="mt-10">
            <div>
                <div className="md:flex md:justify-center">
                    <div className="flex justify-between md:justify-start md:gap-56 px-5 ">
                        <h3> MENU </h3>
                        <h3> SORT BY </h3>
                    </div>
                </div>

                <div className="md:flex md:justify-center">
                    <ul className="flex px-5 mt-5 gap-5 md:gap-14">
                        <li className="active">Veg</li>
                        <li className="hover:pb-2 hover:border-b-2 hover:border-b-red-500 cursor-pointer">Buff</li>
                        <li className="hover:pb-2 hover:border-b-2 hover:border-b-red-500 cursor-pointer">Chicken</li>
                        <li className="hover:pb-2 hover:border-b-2 hover:border-b-red-500 cursor-pointer">others</li>
                    </ul>
                </div>
            </div>

            <div className=" flex flex-row md:justify-center gap-5 ml-5 mt-10 overflow-x-auto hide-scroolbar">
                {/* Items are fetched from database */}
                {items.map((item, index) => (
                    <HorizontalItem key={index} imgUrl={item.imgUrl} title={item.title} weight={item.weight} price={item.price}/>
                ))}
            </div>
        </div>
    )
}

export default HorizontalMenu
