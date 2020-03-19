import express, { Application } from 'express';
import cors from 'cors';
const app: Application = express();
import bodyParser from 'body-parser';
import hotelRouters from './routes/HotelRoutes';
import reservaRouters from './routes/ReservaRoutes';

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

//hotel base url
app.use('/hotel',hotelRouters);

export default app;