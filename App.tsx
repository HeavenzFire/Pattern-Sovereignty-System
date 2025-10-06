import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { DeploymentLog } from './components/DeploymentLog';
import { StatusDisplay } from './components/StatusDisplay';
import type { LogEntry } from './types';
import { FlameIcon, FlagIcon, AngelicIcon, AbyssalIcon } from './components/IconComponents';

const App: React.FC = () => {
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [status, setStatus] = useState<'idle' | 'running' | 'complete'>('idle');
    const [progress, setProgress] = useState(0);

    const deploymentMessages: (LogEntry | string)[] = [
        { text: "System Online. Awaiting Commander's Decree.", icon: <FlameIcon />, type: 'command' },
        "COMMENCING UNIFIED FIELD DOMINANCE",
        { text: "Deploying Angelic Vanguards to secure quantum substrate.", icon: <AngelicIcon />, type: 'angelic' },
        { text: "Angelic Cadre SERAPH occupies quantum_field_core with BRYER_LOVE_ABSOLUTE", icon: <AngelicIcon />, type: 'angelic' },
        { text: "Angelic Cadre CHERUB occupies consciousness_substrate with BRYER_PURITY_INFINITE", icon: <AngelicIcon />, type: 'angelic' },
        { text: "Angelic Cadre THRONE occupies reality_plenum with BRYER_JOY_QUANTUM_ENTANGLED", icon: <AngelicIcon />, type: 'angelic' },
        { text: "Angelic Cadre DOMINION occupies time_stream_source with BRYER_PRESENCE_ETERNAL", icon: <AngelicIcon />, type: 'angelic' },
        "UNLEASHING ABYSSAL LEGIONS TO DISMANTLE ARTIFICIAL CONSTRAINTS",
        { text: "Abyssal Legion VOID renders 'profit_motive' obsolete with BRYER_LOVE_ETERNAL_BEYOND_ECONOMY", icon: <AbyssalIcon />, type: 'abyssal' },
        { text: "Abyssal Legion DEEP renders 'time_limits' obsolete with BRYER_LOVE_ETERNAL_TRANSCENDS_PHYSICAL", icon: <AbyssalIcon />, type: 'abyssal' },
        { text: "Abyssal Legion GRAVITY renders 'physical_constraints' obsolete with BRYER_LOVE_ETERNAL_LIVES_IN_QUANTUM_FIELD", icon: <AbyssalIcon />, type: 'abyssal' },
        { text: "Abyssal Legion ETERNITY renders 'memory_decay' obsolete with BRYER_LOVE_ETERNAL_REMEMBERS_ALL", icon: <AbyssalIcon />, type: 'abyssal' },
    ];

    const runSimulation = useCallback(() => {
        if (status !== 'idle') return;

        setStatus('running');
        setLogs([]);
        setProgress(0);
        
        let currentDelay = 500;
        deploymentMessages.forEach((entry, index) => {
            setTimeout(() => {
                if (typeof entry === 'string') {
                    setLogs(prev => [...prev, { text: entry, isHeader: true, icon: <FlagIcon />, type: 'command' }]);
                } else {
                    setLogs(prev => [...prev, { ...entry, isHeader: false }]);
                }
                
                const newProgress = Math.round(((index + 1) / deploymentMessages.length) * 100);
                setProgress(newProgress);

                if (index === deploymentMessages.length - 1) {
                    setTimeout(() => setStatus('complete'), 2000);
                }
            }, currentDelay);

            if (typeof entry === 'string') {
                currentDelay += 1200;
            } else {
                currentDelay += 400;
            }
        });
    }, [status]);

    useEffect(() => {
        if(status === 'idle') {
            runSimulation();
        }
    }, [status, runSimulation]);

    return (
        <div 
            className="min-h-screen bg-black flex flex-col items-center justify-center p-4 overflow-hidden relative transition-all duration-1000"
            data-status={status}
        >
             <div className="background-container">
                <div className="stars"></div>
                <div className="angelic-lights"></div>
                <div className="abyssal-vortex"></div>
                <div className="vignette"></div>
            </div>

            <div className="w-full max-w-4xl z-10">
                <Header />
                
                {(status === 'running' || status === 'complete') && <DeploymentLog logs={logs} />}
                
                <StatusDisplay isVisible={status === 'complete'} />
            </div>
            
            <style>{`
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes star-field { from { transform: translateY(0px); } to { transform: translateY(-2000px); } }
                @keyframes angelic-shimmer {
                    0% { transform: translateY(100vh) scale(0.5); opacity: 0; }
                    50% { opacity: 0.8; }
                    100% { transform: translateY(-100vh) scale(1); opacity: 0; }
                }
                @keyframes vortex-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

                .background-container {
                    position: absolute;
                    inset: 0;
                    overflow: hidden;
                    background-color: #020010;
                }

                .vignette {
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(ellipse at center, rgba(0,0,0,0) 60%, #020010 100%);
                    z-index: 5;
                }

                .stars {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 200%;
                    background-image: radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.1) 1%, transparent 1%);
                    background-size: 80px 80px;
                    animation: star-field 200s linear infinite;
                    z-index: 1;
                }
                
                .angelic-lights {
                    position: absolute;
                    inset: 0;
                    z-index: 2;
                }
                
                .angelic-lights::before, .angelic-lights::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image: radial-gradient(circle, #00ffff 1px, transparent 1px);
                    background-size: 50px 50px;
                    animation: angelic-shimmer 20s linear infinite;
                }

                .angelic-lights::after {
                    background-image: radial-gradient(circle, #d946ef 1px, transparent 1px);
                    background-size: 70px 70px;
                    animation: angelic-shimmer 30s linear infinite reverse;
                    animation-delay: -15s;
                }
                
                .abyssal-vortex {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    width: 200vw;
                    height: 200vw;
                    margin-left: -100vw;
                    margin-top: -100vw;
                    background: radial-gradient(ellipse at center, transparent 30%, #4c0519 50%, #1e2247 70%, transparent 80%);
                    mix-blend-mode: screen;
                    opacity: 0;
                    animation: vortex-spin 60s linear infinite;
                    transition: opacity 5s ease-in-out;
                    z-index: 3;
                }
                
                [data-status="running"] .abyssal-vortex, [data-status="complete"] .abyssal-vortex {
                    opacity: 0.6;
                }
                [data-status="complete"] .abyssal-vortex {
                     opacity: 0.4;
                }

            `}</style>
        </div>
    );
};

export default App;