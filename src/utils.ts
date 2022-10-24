import { logType, NewLog } from './types';

const parseLog = (logFromRequest:any):string => {
    if (!isString(logFromRequest)){
        throw new Error('Incorrect or missing Log')
    }
    return logFromRequest
}

const parseAppName = (appNameFromRequest:any):string => {
    if (!isString(appNameFromRequest)){
        throw new Error('Incorrect or missing app Name')
    }
    return appNameFromRequest
}

const parseDate = (dateFromRequest:any):string => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)){
        throw new Error('Incorrect or missing date')
    }
    return dateFromRequest;
}

const isString = (string:string):boolean => {
    return typeof string === 'string';
}
const isDate = (date:string):boolean => {
    return Boolean(Date.parse(date));
}
const isLogType = (param:any):boolean => {
    return  Object.values(logType).includes(param);
}

const parseLogType = (logTypeFromRequest:any):logType => {
    if (!isString(logTypeFromRequest) || !isLogType(logTypeFromRequest) ){
        throw new Error("Incorrect or missing log type"); 
    }
    return logTypeFromRequest;
}


const toNewLogEntry = (object:any):NewLog => {
    const newLog: NewLog = {
        log: parseLog(object.log),
        date: parseDate(object.date),
        logType: parseLogType(object.logType),
        appName: parseAppName(object.appName)
    }
    return newLog;
}

export default toNewLogEntry;