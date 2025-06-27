import React from "react";

export function Extensions({ icon, title, description, onToggle, isActive, onRemove, id }) {
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
            <button className="text-sm rounded-full px-4 py-1 border border-gray-300" onClick={() => onRemove(id)}>Remove</button>
            <button onClick={onToggle} className={`items-center w-10 h-5 flex rounded-full p-1 transition-colors duration-300 ${
            isActive
                ? 'bg-red-500'
                : 'bg-gray-600'
            }`}>
                <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300
                    ${isActive ? 'translate-x-5' : '-translate-x-1'}`}>
                </div>
            </button>
            </div>
        </div>
    )
}