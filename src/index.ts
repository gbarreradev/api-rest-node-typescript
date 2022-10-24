import express from 'express';
import logRoutes from './routes/logs'

const PORT = 3100;
const app = express();

app.use(express.json());

app.get('/ping', (_req, res) => {
    console.log("requested ping");
    res.send('pong');
}) 

app.use('/api/logs',logRoutes);

app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`);
})