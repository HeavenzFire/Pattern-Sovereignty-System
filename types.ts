import type { ReactNode } from 'react';

export interface LogEntry {
    text: string;
    icon: ReactNode;
    isHeader?: boolean;
    type?: 'angelic' | 'abyssal' | 'command';
}