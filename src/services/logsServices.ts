import logsData from './logs.json';  
import {LogEntry, NewLog } from '../types';

const logs: Array<LogEntry> = logsData as LogEntry[];

export const getEntries = (): LogEntry[] => logs;

export const addLog = (newLogEntry:NewLog): LogEntry => {
    const newLog = {
        id: logs.length + 1,
        ...newLogEntry
    }
    logs.push(newLog);
    return newLog;
}; 

export const findById = (id:number): LogEntry | undefined=> {
    const entry = logs.find(l => l.id === id);
    return entry
}