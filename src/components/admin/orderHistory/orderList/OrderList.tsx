import { FaArrowRight } from "react-icons/fa6"
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/hook/redux-toolkit/store";
import { orderFood } from "@/hook/redux-toolkit/features/admin/order-slice";
import { useEffect, useState } from "react";
import { dbTimeForCustomer } from "@/lib/datetime-function";
import Sidebar from "./Sidebar";
import OrderDetailsTitles from "./OrderDetailsTitles";

interface orderItem {
    face: string;
    name: string;
    menu: string[];
    price: number;
    status: string;
}

interface Product {
    imgUrl: string;
    title: string;
    weight: string;
    price: string;
    size: number | null;
}

interface OrderItem {
    _id: string,
    email: string,
    phone: string,
    address: string,
    cartProducts: Product[],
    paid: boolean,
    createdAt: string,
}

function OrderList({onOrderSelection}: any) {
   const [selectedTable, setSelectedTable] = useState<number | null>(null);
   const [orderData, setOrderData] = useState<OrderItem[]>([]);
   const [arrayOrderData, setArrayOrderData] = useState<OrderItem[]>([]);
   const [activeFilter, setActiveFilter] = useState('all');
   const [activeDate, setActiveDate] = useState('day');
   const [page, setPage] = useState(0)

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        fetch('/api/order').then(response => {
            response.json().then(data => {
                setOrderData(data.reverse())
            })
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    }, [,selectedTable])

    // Filter the order based on paid - pending - all
    useEffect(() => {
        if (activeFilter === 'all') {
            setArrayOrderData(orderData);
        } else {
            const filteredOrders = orderData.filter(order => {
                if (activeFilter === 'paid') {
                    return order.paid === true;
                } else if (activeFilter === 'pending') {
                    return order.paid === false;
                }
            });
            setArrayOrderData(filteredOrders);
        }
    }, [activeFilter, orderData]);

    useEffect(() => {
        if (activeFilter === 'all') {
            setArrayOrderData(orderData);
        } else {
            const filteredOrders = orderData.filter(order => {
                if (activeFilter === 'paid') {
                    return order.paid === true;
                } else if (activeFilter === 'pending') {
                    return order.paid === false;
                }
            });
            setArrayOrderData(filteredOrders);
        }
    }, [activeDate]);

    const handleSelection = (item: OrderItem, index: number) => {
        setSelectedTable(index)
        dispatch(orderFood({face: item.email[0], id: item._id, status: item.paid, customerName: item.email, price: item?.cartProducts.reduce((acc, product) => acc + parseFloat(product.price), 0), dish: item.cartProducts}))
    }

    // add pagination, filtering
    const totalPages = Math.ceil(arrayOrderData.length / 5)

    const handlePageClick = (newPage: number) => {
        setPage(newPage)
    }

    const startIndex = page * 5;
    const endIndex = (page + 1) * 5;

    return (
        <div className="  text-white  min-h-[100vh] flex flex-col-reverse sm:flex-row font-semibold">
            
            {/* sidebar for filtering */}
            <div className="md:w-[15rem] bg-gray-900 pt-10">
                <Sidebar activeDate={activeDate} setActiveDate={setActiveDate}/>
            </div>

            <div className="w-full bg-gray-800 pt-5">
                {/* OrderDetailsTitles */}
                <OrderDetailsTitles activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>

                {/* Divider */}
                <div className="border-b-[1px] border-gray-600 my-4"></div>

                {/* Order Lists */}
                <div className="hide-scroolbar h-[50vh] overflow-scroll ">
                    {arrayOrderData.slice(startIndex, endIndex).map((data, index) => (
                        <div 
                        key={index} 
                        onClick={() => handleSelection(data as OrderItem, index)}
                        className="">
                            <div className={`transition-all order-list px-5 grid md:grid-cols-5 grid-cols-3 gap-10 items-center  py-3 ${selectedTable === index ? data?.paid == true ?  "bg-[#6dd491d5]" : "bg-[#eb5a5a9c]" : "" } ${data?.paid == true ? 'hover:bg-[#6dd48cd5]' : 'hover:bg-adminredColor' }`}>
                            <div className="flex gap-3 items-center">
                                <div className={`${data?.paid == true ? 'bg-[#3dcf3da2]': 'bg-[#d33e3ec4]'} text-[16px] h-[2rem] w-[2rem] justify-center rounded-[50%]  p-2  flex items-center uppercase text-white`} >
                                    {data?.email[0]}
                                </div>
                                <p className="!text-white !font-semibold">{data?.phone}</p>
                            </div>
                            <div className="md:mr-10 ml-5 md:ml-0 sm:block hidden">
                                {data?.cartProducts.map((product, index) => (
                                    <div key={index}>
                                        <p className="!text-white">{product?.title}</p>
                                    </div>
                                ))}
                                
                            </div>
                            <div className="sm:block hidden">
                                <div className="!text-white !font-bold"> 
                                    <p className="!text-white !font-semibold">{dbTimeForCustomer(data.createdAt)}</p>
                                </div>
                            </div>
                            <div className="sm:text-start text-center">
                                <div className="!text-white !font-bold"> 
                                    <p className=" !text-white !font-bold">
                                        <span className="font-semibold text-[10px]">Rs </span> 
                                        {data?.cartProducts.reduce((acc, product) => acc + parseFloat(product.price), 0)}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p className={`cursor-pointer text-[10px] md:text-[14px] p-2  rounded flex justify-center items-center  !text-white ${data.paid == true ? 'bg-[#50af50d7]': 'bg-[#e04949dc]'}`}>{data.paid == true ? 'paid' : 'Pending'}</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="py-5 gap-2 flex justify-center items-center">
                    {totalPages > 0 && [...Array(totalPages)].map((val, index) => (
                        <button
                            className={`py-1 px-2 bg-gray-500 text-white rounded ${page === index && 'bg-green-500'}`}
                            key={index}
                            onClick={() => handlePageClick(index)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OrderList