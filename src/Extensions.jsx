import React from "react";

export function Extensions({ icon, title, description }) {
    return (
        <div className="bg-gray-800 p-4 rounded-xl">
            <div className="flex items-start gap-4">
            <img src={icon} className="w-12 h-12" />
            <div className="flex flex-col">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm text-gray-300 leading-snug">{description}</p>
            </div>
            </div>
            <div>
            <button className="text-sm rounded-full px-4 py-1">Remove</button>
            </div>
        </div>
    )
}