import express,{Router} from 'express';
import findByCategory from '../constrollers/Hotel/findByCategory';
import listDestacados from '../constrollers/Hotel/listDestacados';
import findBySearch from '../constrollers/Hotel/findBySearch';

const router: Router = express.Router();

//listar hoteles por categoria
router.get('/find/:id',findByCategory);
router.get('/getDestacados',listDestacados);
router.get('/findSearch',findBySearch);

export default router;