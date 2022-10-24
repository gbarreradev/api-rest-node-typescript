import express from 'express';
import * as LogsServices from '../services/logsServices';
import toNewLogEntry from '../utils';

const router = express.Router();

router.get('/',(_req,res) => {
	res.send(LogsServices.getEntries());
})

router.get('/:id', (req,res) => {
    const log = LogsServices.findById(+req.params.id);
    if (log !== null){
        res.send(log);
    }
    return undefined;
})

router.post('/',(req,res) => {
    try {
        const newLogEntry = toNewLogEntry(req.body);
        const AddedLogEntry = LogsServices.addLog(newLogEntry)
        res.json(AddedLogEntry);
    } catch (e:any) {
        res.status(400).send(e.message);
    }
})

export default router;