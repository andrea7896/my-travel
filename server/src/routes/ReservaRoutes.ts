import ListReservas from '../constrollers/Reservas/ListReservas';
import express,{Router} from 'express';

const router: Router = express.Router();

//listar hoteles por categoria
router.get('/find/:idCategory',ListReservas);

export default router;