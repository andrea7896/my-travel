import ListReservas from '../constrollers/Reservas/ListReservas';
import reservar from '../constrollers/Reservas/reservar';
import eliminar from '../constrollers/Reservas/eliminar';
import express,{Router} from 'express';

const router: Router = express.Router();

//listar hoteles por categoria
router.get('/list',ListReservas);
router.post('/reservar',reservar);
router.put('/eliminar',eliminar);

export default router;