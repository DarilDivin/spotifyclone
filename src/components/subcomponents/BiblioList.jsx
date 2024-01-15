import React from "react";
import BiblioListItem from "./BiblioListItem";
import { Makila, Cullinan, GeleeRoyale1, GeleeRoyale2, MielBook, Poison, PoisonAntidote } from "../../assets/image";

const BiblioList = () => {


    return (
        // <div className="relative flex flex-col items-start justify-start h-[320px] w-full rounded-[5px] gap-[.5px] overflow-y-scroll">
        //     <BiblioListItem />
        //     <BiblioListItem />
        //     <BiblioListItem />
        //     <BiblioListItem />
        //     <BiblioListItem />
        //     <BiblioListItem />
        //     <BiblioListItem />
        //     <BiblioListItem />
        //     <BiblioListItem />
        // </div>
        <div className="relative grid grid-cols-3 h-[320px] w-full rounded-[5px] gap-[.5px] overflow-y-scroll">
            <BiblioListItem image={Makila} title="Makila"/>
            <BiblioListItem image={Cullinan} title="Cullinan"/>
            <BiblioListItem image={GeleeRoyale1} title="Gelée Royale Part 1"/>
            <BiblioListItem image={GeleeRoyale2} title="Gélée Royale Part 2"/>
            <BiblioListItem image={MielBook} title="Miel Book"/>
            <BiblioListItem image={Poison} title="Poison"/>
            <BiblioListItem image={PoisonAntidote} title="Poison & Antidote"/>
            <BiblioListItem image={Makila} title="I Love You"/>
        </div>
    )
}

export default BiblioList