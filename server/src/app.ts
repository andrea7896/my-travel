import express, { Application } from 'express';
import cors from 'cors';
const app: Application = express();
import bodyParser from 'body-parser';
import hotelRouters from './routes/HotelRoutes';
import reservaRouters from './routes/ReservaRoutes';
import userRouters from './routes/UserRoutes';

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

//hotel base url
app.use('/hotel',hotelRouters);

app.use('/reservas',reservaRouters);
//User base url
app.use('/user',userRouters);

export default app;