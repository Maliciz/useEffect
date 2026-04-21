import React, { useState, useEffect } from 'react';

const COLORS = ['blue', 'amber', 'red', 'pink', 'green'];

const COLOR_STYLES = {
    blue: 'bg-gradient-to-br from-blue-400 to-indigo-600 shadow-[0_0_40px_rgba(59,130,246,0.6)]',
    amber: 'bg-gradient-to-br from-amber-400 to-orange-600 shadow-[0_0_40px_rgba(245,158,11,0.6)]',
    red: 'bg-gradient-to-br from-red-400 to-rose-600 shadow-[0_0_40px_rgba(239,68,68,0.6)]',
    pink: 'bg-gradient-to-br from-pink-400 to-fuchsia-600 shadow-[0_0_40px_rgba(236,72,153,0.6)]',
    green: 'bg-gradient-to-br from-emerald-400 to-teal-600 shadow-[0_0_40px_rgba(16,185,129,0.6)]'
};

const ColorBlock = () => {
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const currentColor = COLORS[currentColorIndex];

    useEffect(() => {
        console.log(`CURRENT COLOR IS NOW: ${currentColor.toUpperCase()}`);
    }, [currentColor]);

    const handleToggle = () => {
        setCurrentColorIndex(prev => (prev + 1) % COLORS.length);
    };

    const blockStyle = COLOR_STYLES[currentColor];

    return (
        <div className="flex flex-col items-center justify-center p-8 mt-6">
            <div 
                className={`w-64 h-64 rounded-[2rem] flex items-center justify-center transition-all duration-700 ease-in-out ${blockStyle}`}
            >
                <h2 className="text-white text-2xl font-bold tracking-widest uppercase drop-shadow-md">
                    Color: {currentColor}
                </h2>
            </div>
            
            <button 
                onClick={handleToggle}
                className="mt-12 px-8 py-3 rounded-full text-white font-semibold tracking-wider glass-button hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 ease-out shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
                CHANGE COLOR
            </button>
        </div>
    );
};

export default ColorBlock;
