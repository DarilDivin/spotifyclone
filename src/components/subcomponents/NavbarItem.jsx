import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const NavbarItem = ({title, icon}) => {
    return (
        <h3 className="gap-5 flex justify-start items-bottom cursor-pointer text-textColorSecondary hover:text-textColorPrimary w-full transition duration-[0.2s]">
            <FontAwesomeIcon icon={icon}  style={{ fontSize: '20px'}}/>
            <span className="font-semibold text-[15px] tracking-[0.5px]">{title}</span>
        </h3>
    )
}

export default NavbarItem
