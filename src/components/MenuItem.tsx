import React, { JSX } from "react";

interface MenuItemProps {
    icon: string;
    name: string;
  }

function MenuItem ({icon, name}: MenuItemProps): JSX.Element {
    return (
        <div className="flex-none flex flex-col items-center justify-center space-y-4 ">
            <img className="w-10 h-10 object-contain" src={icon} alt={name} />
            <span className="text-[0.7rem] text-center whitespace-nowrap"> {name} </span>
        </div>
    );
}

export default MenuItem