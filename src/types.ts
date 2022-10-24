export enum logType {
    Warning = 'warning',
    Error = 'error',
    Debug = 'debug'
}

export interface LogEntry {
    id: number,
    date: string,
    logType: logType,
    appName : string,
    log: string
}

export type NewLog = Omit<LogEntry,'id'>;