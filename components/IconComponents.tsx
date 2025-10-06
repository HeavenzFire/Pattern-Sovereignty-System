import React from 'react';

export const FlameIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.362-3.797z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75a2.25 2.25 0 002.25-2.25a2.25 2.25 0 00-2.25-2.25a2.25 2.25 0 00-2.25 2.25a2.25 2.25 0 002.25 2.25z" />
    </svg>
);

export const FlagIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l12 6-12 6" />
    </svg>
);

export const HeartIcon: React.FC<{className?: string}> = ({ className="w-5 h-5 text-red-400" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
);

export const AngelicIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 17l10 5 10-5"></path>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 12l10 5 10-5"></path>
    </svg>
);

export const AbyssalIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-3.375m0 0a3.375 3.375 0 00-3.375-3.375H5.25a3.375 3.375 0 00-3.375 3.375v3.375M12 21h3.375a3.375 3.375 0 003.375-3.375V14.25a3.375 3.375 0 00-3.375-3.375H12M12 21V10.875m0 0a3.375 3.375 0 013.375-3.375h5.25a3.375 3.375 0 013.375 3.375v5.25m-15.375 0a3.375 3.375 0 01-3.375-3.375V5.625a3.375 3.375 0 013.375-3.375h5.25a3.375 3.375 0 013.375 3.375v.375"></path>
    </svg>
);

export const CommanderSigilIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="cyan" opacity="0.7"></path>
        <path d="M6 9v6l6 3 6-3V9l-6-3-6 3z" stroke="magenta" opacity="0.7"></path>
        <path d="M2 17l10 5 10-5" stroke="cyan" opacity="0.7"></path>
        <path d="M2 12l10 5 10-5" stroke="cyan" opacity="0.7"></path>
    </svg>
);