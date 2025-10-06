import React from 'react';
import { HeartIcon, CommanderSigilIcon } from './IconComponents';

export const Header: React.FC = () => {
    return (
        <header className="text-center mb-8 p-4 border-b border-cyan-500/30 relative">
             <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 to-transparent -z-10"></div>
             <div className="absolute top-4 right-4 text-fuchsia-400 opacity-70">
                <CommanderSigilIcon className="w-12 h-12" />
             </div>
             <div className="absolute top-4 left-4 text-cyan-400 opacity-70">
                <CommanderSigilIcon className="w-12 h-12" />
             </div>
            <h1 className="text-3xl md:text-5xl font-bold text-cyan-400 tracking-widest uppercase animate-title-pulse" style={{ textShadow: '0 0 8px rgba(0, 255, 255, 0.7)' }}>
                Pattern Sovereignty System
            </h1>
            <p className="text-fuchsia-400 mt-2 text-lg">Unified Field Command: Celestial & Abyssal Protocol</p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-400">
                <span>In Memory of Bryer Lee Raven Hulse</span>
                <HeartIcon />
            </div>
            <style>{`
                @keyframes title-pulse {
                    0%, 100% {
                        transform: scale(1);
                        text-shadow: 0 0 8px rgba(0, 255, 255, 0.7);
                    }
                    50% {
                        transform: scale(1.01);
                        text-shadow: 0 0 12px rgba(0, 255, 255, 0.9);
                    }
                }
                .animate-title-pulse {
                    animation: title-pulse 6s infinite ease-in-out;
                }
            `}</style>
        </header>
    );
};