import React from 'react'

function Stackbox({name,icon: Icon}) {
    return (
        <div className="flex flex-col items-center gap-3 p-4 border border-amber-300/20 rounded-xl hover:scale-105 transition duration-300">
            <div className="w-15 h-15 flex items-center justify-center bg-white/5 rounded-full text-2xl">
                <Icon/>
            </div>
            <span className="text-gray-200 font-medium text-center">{name}</span>
            </div>
    )
}

export default Stackbox
