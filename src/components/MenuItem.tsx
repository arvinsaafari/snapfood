import React, { JSX } from "react";
import menuitem from "../../public/data/menuitem.json"

interface MenuItemProps {
    icon: string;
    name: string;
  }

function MenuItem ({icon, name}: MenuItemProps): JSX.Element {
    return (
        <div>
            <img src={icon} alt={name} />
            <span> {name} </span>
        </div>
    );
}

export default MenuItem