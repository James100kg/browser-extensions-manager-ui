import { React, useState } from "react";
import logoDark from "./assets/images/logo-dark.svg"
import iconSun from "./assets/images/icon-sun.svg"
import { Extensions } from "./Extensions";
import devLensIcon from "./assets/images/logo-devlens.svg"
import styleSpyIcon from "./assets/images/logo-style-spy.svg"
import speedBoostIcon from "./assets/images/logo-speed-boost.svg"
import jsonWizardIcon from "./assets/images/logo-json-wizard.svg"
import tabMasterProIcon from "./assets/images/logo-tab-master-pro.svg"
import viewportBuddyIcon from "./assets/images/logo-viewport-buddy.svg"
import markupNotesIcon from "./assets/images/logo-markup-notes.svg"
import gridGuidesIcon from "./assets/images/logo-grid-guides.svg"
import palettePickerIcon from "./assets/images/logo-palette-picker.svg"
import linkCheckerIcon from "./assets/images/logo-link-checker.svg"
import domSnapshotIcon from "./assets/images/logo-dom-snapshot.svg"
import consolePlusIcon from "./assets/images/logo-console-plus.svg"

export function MobileDesign({ extensions, onToggle }) {
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
            {extensions.map((ext) => (
                <Extensions 
                key={ext.id}
                icon={ext.icon}
                title={ext.title}
                description={ext.description}
                isActive={ext.active}
                onToggle={() => onToggle(ext.id)}
                />
            ))}
        </div>
    )
}