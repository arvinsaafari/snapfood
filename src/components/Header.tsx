import React from "react";
import menuitem from "../../public/data/menuitem.json";
import MenuItem from "../components/MenuItem";

function Header() {
    return (
        <header>
            <div>
                <div>
                    <button>
                        <img src="/images/location.svg" alt="location" />
                        <p>
                            تهران دانشگاه تهران کارگرشما...
                        </p>
                        <img src="/images/bottom-purple.svg" alt="arrow" />
                    </button>

                    <div>
                        <button>
                            <img src="/images/order.svg" alt="order" />
                        </button>
                        <button>
                            <img src="/images/user.svg" alt="user" />
                        </button>
                        <button>
                            <img src="/images/search.svg" alt="search" />
                        </button>
                    </div>
                </div>

                <div>
                    {menuitem.map((item, id) => (
                        <MenuItem key={id} icon={item.icon} name={item.title} />
                    ))}
                </div>
            </div>
        </header>
    );
}

export default Header;
