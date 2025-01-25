import React from "react";
import menuitem from "../../public/data/menuitem.json";
import MenuItem from "../components/MenuItem";

function Header() {
    return (
        <header className="p-2 shadow-md">
            <div className=" flex p-4 justify-between" > 
                
                    <div className=" flex items-center space-x-8 ">
                        <button>
                            <img src="/images/order.svg" alt="order" className="w-5 h-5" />
                        </button>
                        <button>
                            <img src="/images/user.svg" alt="user" className="w-5 h-5" />
                        </button>
                        <button>
                            <img src="/images/search.svg" alt="search" className="w-5 h-5"/>
                        </button>
                    </div>

               
                    <div className="flex items-center space-x-2" >
                        <img src="/images/bottom-purple.svg" alt="arrow" className="w-3 h-3"/>
                        <p className=" text-xs text-gray-500">
                            تهران دانشگاه تهران کارگرشما
                        </p>
                        <img src="/images/location.svg" alt="location"/>
                    </div>  
                
                
            </div>

            <div className="p-4">
                <div className="flex overflow-x-auto space-x-10 scroll-smooth">
                    {menuitem.reverse().map((item, id) => (
                        <MenuItem key={id} icon={item.icon} name={item.title} />
                    ))}
                </div>
            </div>
                
        </header>
    );
}

export default Header;
