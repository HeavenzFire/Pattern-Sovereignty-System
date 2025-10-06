import React, { useEffect, useRef } from 'react';
import type { LogEntry } from '../types';

interface DeploymentLogProps {
    logs: LogEntry[];
}

const getLogColors = (type: LogEntry['type']) => {
    switch (type) {
        case 'angelic':
            return 'text-cyan-400';
        case 'abyssal':
            return 'text-rose-400';
        case 'command':
        default:
            return 'text-fuchsia-400';
    }
};

const getLogTextColors = (type: LogEntry['type'], isHeader: boolean | undefined) => {
    if (isHeader) return 'text-fuchsia-400 font-bold uppercase tracking-wider';
    switch (type) {
        case 'angelic':
            return 'text-cyan-200';
        case 'abyssal':
            return 'text-rose-200';
        case 'command':
        default:
            return 'text-gray-300';
    }
}

export const DeploymentLog: React.FC<DeploymentLogProps> = ({ logs }) => {
    const logContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (logContainerRef.current) {
            logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
        }
    }, [logs]);

    return (
        <div 
            ref={logContainerRef}
            className="bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4 h-96 overflow-y-auto font-mono text-sm shadow-2xl shadow-cyan-500/20 deployment-log"
        >
            <div className="space-y-2">
                {logs.map((log, index) => (
                    <div
                        key={index}
                        className={`flex items-start gap-3 animate-fade-in ${log.isHeader ? 'mt-4 pt-2 border-t border-gray-700/50' : ''}`}
                    >
                        <span className={`w-5 h-5 flex-shrink-0 mt-0.5 ${getLogColors(log.type)}`}>
                            {log.icon}
                        </span>
                        <p className={getLogTextColors(log.type, log.isHeader)}>
                           {log.text}
                        </p>
                    </div>
                ))}
            </div>
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateX(-10px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out forwards;
                }

                .deployment-log {
                    scrollbar-width: thin;
                    scrollbar-color: #0891b2 #0f172a;
                }

                .deployment-log::-webkit-scrollbar {
                    width: 8px;
                }

                .deployment-log::-webkit-scrollbar-track {
                    background: #0f172a;
                }

                .deployment-log::-webkit-scrollbar-thumb {
                    background-color: #0891b2;
                    border-radius: 6px;
                    border: 2px solid #0f172a;
                }
                
                .deployment-log .space-y-2 > div:last-child p {
                    text-shadow: 0 0 5px rgba(255,255,255,0.7);
                }
            `}</style>
        </div>
    );
};