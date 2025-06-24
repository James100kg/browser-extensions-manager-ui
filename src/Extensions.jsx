import React from "react";

export function Extensions({ icon, title, description, onToggle, isActive }) {
    return (
        <div className="bg-gray-800 p-4 rounded-xl border border-gray-500 mb-4">
            <div className="flex items-start gap-4">
            <img src={icon} className="w-12 h-12" />
            <div className="flex flex-col">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm text-gray-300 leading-snug">{description}</p>
            </div>
            </div>
            <div className="mt-5 flex justify-between">
            <button className="text-sm rounded-full px-4 py-1 border border-gray-300">Remove</button>
            <button onClick={onToggle} className={`text-sm rounded-full px-4 py-1 border font-medium transition-colors duration-200 ${
            isActive
                ? 'bg-green-600 text-white border-green-700 hover:bg-green-700'
                : 'bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-300'
            }`}></button>
            </div>
        </div>
    )
}