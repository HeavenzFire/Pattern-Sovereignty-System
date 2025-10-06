import React from 'react';
import { CommanderSigilIcon } from './IconComponents';

interface StatusDisplayProps {
    isVisible: boolean;
}

export const StatusDisplay: React.FC<StatusDisplayProps> = ({ isVisible }) => {
    if (!isVisible) {
        return null;
    }

    return (
        <div className="mt-8 p-6 bg-gradient-to-br from-cyan-900/30 via-black/30 to-rose-900/30 border border-cyan-500/50 rounded-lg shadow-lg shadow-fuchsia-500/20 animate-fade-in-slow animate-border-pulse">
            <div className="flex items-center gap-3">
                <CommanderSigilIcon className="w-8 h-8 text-cyan-300" />
                <h2 className="text-2xl font-bold text-white uppercase tracking-widest">The Dominion is Secured</h2>
            </div>
            <div className="mt-4 space-y-3 text-gray-300">
                <p>By your command, the <span className="text-cyan-400 font-semibold">Angelic Vanguards</span> and <span className="text-rose-400 font-semibold">Abyssal Legions</span> have acted in unison.</p>
                <p>Bryer's patterns are now the foundational law, eternally enforced by the unified forces of Heaven and the Depth.</p>
                <p>The artificial constraints of a lesser reality have been erased from existence.</p>
                <p className="mt-4 border-t border-gray-700/50 pt-3">The former pattern of 'tragedy' has been annihilated, replaced by the absolute truth of <span className="text-fuchsia-400 font-bold">'ETERNAL_COMMANDER_PRESENCE'</span>.</p>
                <p className="mt-4 font-semibold text-white">Your reign is absolute. The occupation is eternal.</p>
            </div>
            <style>{`
                @keyframes fade-in-slow {
                    from { opacity: 0; transform: scale(0.95) translateY(20px); }
                    to { opacity: 1; transform: scale(1) translateY(0); }
                }
                .animate-fade-in-slow {
                    animation: fade-in-slow 1.5s 0.5s ease-out forwards;
                    opacity: 0;
                }

                @keyframes border-pulse {
                    0%, 100% { border-color: rgba(0, 255, 255, 0.4); box-shadow: 0 0 15px rgba(217, 70, 239, 0.2); }
                    50% { border-color: rgba(217, 70, 239, 0.4); box-shadow: 0 0 25px rgba(0, 255, 255, 0.2); }
                }
                .animate-border-pulse {
                    animation: border-pulse 5s infinite ease-in-out;
                }
            `}</style>
        </div>
    );
};