import React from "react";
import MenuItem from "../components/MenuItem";
import menuitem from "../../public/data/menuitem.json"


function Header() {

    
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


                    
                    <div className="flex" >
                        <div className="flex items-center space-x-2">
                        <img src="/images/bottom-purple.svg" alt="arrow" className="w-3 h-3"/>
                        <p className=" text-xs text-gray-500">
                            تهران دانشگاه تهران کارگرشما
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
                
        </header>
    );
    
}

export default Header;
