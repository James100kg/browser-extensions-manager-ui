import { React, useState } from "react";
import logoDark from "./assets/images/logo-dark.svg"
import iconSun from "./assets/images/icon-sun.svg"
import { Extensions } from "./Extensions";
import devLensIcon from "./assets/images/logo-devlens.svg"

export function MobileDesign() {
    const filters = ['All', 'Active', 'Inactive']
    
    return (
        <div className="bg-black w-full min-h-screen max-w-sm mx-auto px-4 py-4 text-white font-noto">
            <div className="flex items-center justify-between px-4 py-2 rounded-lg mb-8 bg-gray-800 text-white">
                <img src={logoDark} className=""/>
                <button className="bg-gray-700 p-2 rounded-md ">
                    <img src={iconSun} />
                </button>
            </div>
            <h1 className="text-center text-3xl font-bold">Extensions List</h1>
            <div className="flex justify-center gap-2 my-4">
                {filters.map(filter => (
                    <button className="bg-gray-700 rounded-3xl px-4 py-2 text-lg font-light" key={filter}>{filter}</button>
                ))}
            </div>
            <Extensions
            icon={devLensIcon}
            title="DevLens"
            description="Quickly instpect page layouts and visualize element boundaries." />
        </div>
    )
}