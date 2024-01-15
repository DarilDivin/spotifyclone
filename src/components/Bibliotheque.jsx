import React from "react"
import { NavbarItem, TagsLine, BiblioSearchLine, BiblioList } from "./subcomponents"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faListUl, faPlus, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Bibliotheque = () => {
    return (
        <div className = "w-full h-[80%] flex flex-col gap-0 justify-top p-[10px]  bg-secondaryBlack rounded-[10px]">
            <div className="flex w-full p-[2px]">
                <div className="w-[50%] flex justify-start gap-2 p-2.5 transition duration-[0.2s] text-textColorSecondary hover:text-textColorPrimary"> 
                    <NavbarItem title="Bibliothèque" icon={faListUl}/>
                </div>
                <div className="w-[50%] flex justify-end gap-5 p-2.5">
                    <span className="text-textColorSecondary hover:text-textColorPrimary cursor-pointer transition duration-[0.2s] flex gap-4 rounded-full w-[28px] h-[28px] justify-center items-center hover:bg-bgTransparentPrimary p-3">
                        <FontAwesomeIcon icon={faPlus} style={{ fontSize: '20px'}}/>
                    </span>
                    <span className="text-textColorSecondary hover:text-textColorPrimary cursor-pointer transition duration-[0.2s] flex gap-4 rounded-full w-[28px] h-[28px] justify-center items-center hover:bg-bgTransparentPrimary p-3">
                        <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '20px'}}/>
                    </span>
                </div>
            </div>
            <div>
                <TagsLine />
            </div>
            <div>
                <BiblioSearchLine />
            </div>
            <div>
                <BiblioList />
            </div>
        </div>
    )
}

export default Bibliotheque