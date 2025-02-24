"use client"
import React, { useEffect } from "react";
import MenuItem from "../components/MenuItem";
import menuitem from "../../public/data/menuitem.json"
import { useState } from "react";
import Modal from "./Modal";

type Address = {
    id: number;
    title: string;
    details: string;
};

function Header() {
    const [isModalOpen, setModalOpen] = useState<boolean>(false)
    const [addresses, setAddresses] = useState<Address[]>([])
    const [selectAddress, setSelectAddress] = useState<Address | null>(null)

    useEffect(() => {
        fetch("/data/addresses.json")
            .then((res) => res.json() as Promise<Address[]>)
            .then((data) => {
                setAddresses(data);
                if (data.length > 0) {
                    setSelectAddress(data[0]);
                }
            });
    }, []);
    
    const handleOnClick = () => {
        console.log('clicked')
        setModalOpen(true)
    }

   const handleSelectAddress = (address: Address) => {
    setSelectAddress(address);
    setModalOpen(false)
   }
    return (
        <header className="p-2 shadow-md">
            <div className=" flex p-4 justify-between" > 
                
                    <div className=" flex items-center space-x-8 ">
                        <button className="flex space-x-2">
                            <p className="hidden lg:block"> سفارش ها</p>
                            <img src="/images/order.svg" alt="order" className="w-5 h-5" />
                        </button>
                        <button>
                            <img src="/images/user.svg" alt="user" className="w-5 h-5" />
                        </button>
                        <button>
                            <img src="/images/search.svg" alt="search" className="w-5 h-5 block lg:hidden"/>
                        </button>
                    </div>

                    <div className="hidden lg:flex justify-center w-[40%] max-w-[500px] min-w-[250px]">
                        <div className="relative w-full">
                            <img
                            src="/images/search.svg"
                            alt="search icon"
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5"
                            />
                            <input
                            type="search"
                            placeholder="جست و جو در اسنپ فود"
                            className="bg-[#EBEDF0] text-right w-full border p-2 px-4 pr-10 rounded-lg placeholder:text-right"
                            />
                        </div>
                    </div>


                    
                    <div onClick={handleOnClick} className="flex " >
                        <div onClick={handleOnClick}className="flex items-center space-x-2 cursor-pointer">
                        <img src="/images/bottom-purple.svg" alt="arrow" className="w-3 h-3"/>
                        <p className="text-xs text-gray-500">
                        {selectAddress ? (selectAddress.details.length > 20 ? selectAddress.details.substring(0,20) + "..." : selectAddress.details) : "آدرس خود را انتخاب کنید"}
                        </p>

                        <img src="/images/location.svg" alt="location"/>
                        </div>
                    
                        <img className="h-10 ml-8 hidden md:block" src="/images/logo.png" alt="logo" />
                    </div> 
                
                
            </div>

            <div className="p-4">
                <div className="flex overflow-x-auto space-x-10 scroll-smooth md:w-full md:justify-between">
                    {[...menuitem].reverse().map((item, id) => (
                        <MenuItem key={id} icon={item.icon} name={item.title} />
                    ))}
                </div>
            </div>
                
            <Modal title="انتخاب آدرس" isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
    <div  className="space-y-4">
        {addresses.map((address) => (
            <div key={address.id} className="border p-3 rounded-lg flex justify-between items-center">
                
                <div className="flex space-x-2">
                    <button className="text-green-500"><img src="/images/edit.svg" alt="" /></button>
                    <button className="text-red-500"><img src="/images/delete.svg" alt="" /></button>
                </div>
                
                <div className="text-right"> 
                    <p>{address.title}</p>
                    <p className="text-sm text-gray-500">{address.details}</p>
                </div>
                <input 
                type="radio"
                name="address"
                checked={selectAddress?.id == address.id}
                onChange={() => handleSelectAddress(address)}
                className="w-5 h-5 border-2 border-gray-400 rounded-full checked:bg-transparent focus:right-0 relative" />

            </div>
        ))}
    </div>
    <div className="text-right">
    <button className="text-green-600 mt-4">+ ساخت آدرس جدید</button>
    </div>
    
</Modal>

        </header>
    );
    
}

export default Header;
