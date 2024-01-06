import React from "react"
import { NavbarItem } from "./subcomponents"
import { faHome, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import '../index.css'

const Navbar = () => {
    return (
        <div className = "w-full h-[18%] flex flex-col gap-6 justify-center p-2.5 px-5 bg-secondaryBlack rounded-[10px]">
            <NavbarItem title="Accueil" icon={faHome}/>
            <NavbarItem title="Recherche" icon={faMagnifyingGlass}/>
        </div>
    )
}

export default Navbar