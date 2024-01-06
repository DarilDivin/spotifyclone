import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faListUl } from "@fortawesome/free-solid-svg-icons"

const BiblioSearchLine = () => {

    const [showSearchBar, setShowSearchBar] = useState(false);

    const handleClick = () => {
        let showSearchBarValue = !showSearchBar

        setShowSearchBar(showSearchBarValue);
        console.log(showSearchBar);
    }

    return (
        <div className="flex flex-row items-center justify-between gap-2 p-2 h-[50px]">
            <div className="w-full h-full relative flex items-center">
                <input type="text" name="biblioSearch" placeholder="Rechercher..." 
                className={` bg-bgTransparentSecondary rounded h-4/5 outline-none text-white transition-all ${ showSearchBar ? 'pl-8 transition-all w-[200px]' : 'w-[0px]' }`} />
                <FontAwesomeIcon 
                icon={faMagnifyingGlass}  
                style={{ fontSize: '20px'}} 
                className="absolute left-0 origin-center mx-1 text-textColorSecondary hover:text-textColorPrimary"
                onClick={handleClick}/>
            </div>

            <div>
                <h3 className="flex flex-row items-center justify-evenly gap-3 text-textColorSecondary cursor-pointer hover:text-textColorPrimary">
                    <span className="font-semibold w-[100px]">Récents</span>
                    <FontAwesomeIcon icon={faListUl} />
                </h3>
            </div>
        </div>
    )
}

export default BiblioSearchLine