import React from "react";


const Tags = (props) => {
    return (
        <div className="flex justify-center items-center w-fit min-w-fit py-[6px] px-3 rounded-[20px] bg-quatuaryBlack text-white cursor-pointer hover:bg-hoverBgColor">
            <span className=" text-[14px] font-medium">{props.content}</span>
        </div>
    )
}

export default Tags