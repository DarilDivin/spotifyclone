import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { Tags } from "../subcomponents"

const TagsLine = () => {

    const scrollableDiv = useRef()
    let isScrolledToRight = 0
    const [isScrolledLeft, setIsScrolledLeft] = useState(0)

    const handleScroll = () => {
        //1. Copie du state
        const div = scrollableDiv.current
        let isScrolledLeftCopy = isScrolledLeft

        //2. Manipulation du state
        isScrolledLeftCopy = div.scrollLeft

        //3. Modification du state
        setIsScrolledLeft(isScrolledLeftCopy)
    }

    const handleLeftClick = () => {
        const div = scrollableDiv.current

        if (div.scrollLeft < 50) {
            div.scrollLeft = 0 
        } else {
            div.scrollLeft -= 50
        }
        
    }

    const handleRightClick = () => {
        const div = scrollableDiv.current

        if (div.scrollLeft > div.scrollWidth - 50 ) {
            div.scrollLeft = div.scrollWidth 
        } else {
            div.scrollLeft += 50
        }
    }

    useEffect(() => {
        const div = scrollableDiv.current
            isScrolledToRight = div.scrollWidth - div.clientWidth

            console.log(isScrolledLeft, isScrolledToRight);
    }, [isScrolledLeft])
    

    return (
        <div className=" relative flex flex-row gap-2 overflow-x-scroll h-[40px] items-center">
            <div className=" absolute w-[100%] h-[70px] flex justify-center items-center" > 
                <span className="bg-dark text-white flex justify-between items-center w-[100%] absolute px-[5px]">
                    <FontAwesomeIcon 
                    icon={faChevronLeft} 
                    style={{ fontSize: '20px'}}  
                    className={ 
                        `p-[8px] 
                         w-[20px] 
                         rounded-full 
                         bg-quatuaryBlack 
                         z-[3] 
                         hover:bg-hoverBgColor 
                         ${isScrolledLeft == 0 ? 'invisible' : 'visible'}` 
                    }
                    onClick={handleLeftClick}/>

                    <FontAwesomeIcon 
                    icon={faChevronRight} 
                    style={{ fontSize: '20px'}} 
                    className={ 
                        `p-[8px] 
                         w-[20px] 
                         rounded-full 
                         bg-quatuaryBlack 
                         z-[3] 
                         hover:bg-hoverBgColor 
                         ${isScrolledLeft == isScrolledToRight ? 'visible' : 'invisible'}` 
                    }
                    onClick={handleRightClick}/>
                </span>
            </div>
            <div 
            className={
                `relative 
                 flex 
                 flex-row 
                 gap-2 
                 overflow-x-scroll 
                 bg-mask 
                 px-[10px] 
                 ${isScrolledLeft == 0 ? 'bg-mask-right' : ''} 
                 ${isScrolledLeft == isScrolledToRight ? '' : 'bg-mask-left'}`
            } 
            ref={scrollableDiv} 
            onScroll={handleScroll}>
                <Tags content="Playlist"/>
                <Tags content="Artiste"/>
                <Tags content="Albums"/>
                <Tags content="Podcasts & émissions"/>
            </div>
        </div>
    )
}

export default TagsLine