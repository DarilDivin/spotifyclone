import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Makila, Cullinan } from "../../assets/image";
import { faVolumeHigh, faPlay } from "@fortawesome/free-solid-svg-icons";


const BiblioListItem = (props) => {

    return (
        // <div className=" flex flex-row w-full h-[55px]  rounded-md items-center justify-evenly gap-1 cursor-pointer hover:bg-quatuaryBlack">
        //     <div className="flex w-[50px] h-[50px]  rounded-md">
        //         <img src={props.image} alt="Album Pic - Makila" className=" object-cover " />
        //     </div>
        //     <div className="w-[75%] h-14  flex flex-col justify-evenly items-start">
        //         <h4 className=" font-semibold text-green-500 font text-base">{props.title}</h4>
        //         <p className=" font-medium text-textColorSecondary text-xs"> Playlist . 73 titres</p>
        //     </div>
        //     <div className="w-[20px] h-full flex items-center justify-center text-green-500 p-1">
        //         <FontAwesomeIcon icon={faVolumeHigh} />
        //     </div>
        // </div>
        <div className="relative flex flex-col w-full h-[155px]  rounded-md items-center justify-evenly gap-1 p-2 cursor-pointer hover:bg-quatuaryBlack biblioListItem overflow-hidden">
            <div className="flex w-[100px] h-[100px] rounded-md justify-center items-center overflow-hidden">
                <img src={props.image} alt="Album Pic - Makila" className=" object-cover" />
            </div>
            <div className="w-full h-10  flex flex-col justify-evenly items-start pl-3">
                <h4 className=" font-semibold text-white font text-base">{props.title.length > 9 ? props.title.substring(0, 9) + "..." : props.title}</h4> {/*text-green-500*/}
                <p className=" font-medium text-textColorSecondary text-xs"> Playlist . 73 titres</p>
            </div>
            <div className="absolute bottom-15 right-6 w-[40px] h-[40px] flex items-center justify-center text-black-500 p-1 text-lg rounded-full bg-green-500 biblioListItemPlayBtn">
            <FontAwesomeIcon icon={faPlay} />
            </div>
        </div>
    )
}

export default BiblioListItem;