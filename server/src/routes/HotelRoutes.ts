import express,{Router} from 'express';
import findByCategory from '../constrollers/Hotel/findByCategory';
import listDestacados from '../constrollers/Hotel/listDestacados';
import findBySearch from '../constrollers/Hotel/findBySearch';
import listAll from '../constrollers/Hotel/listAll';
import findCategory from '../constrollers/Hotel/findCategory';
import findServices from '../constrollers/Hotel/findServices';

const router: Router = express.Router();

//listar hoteles por categoria
router.get('/find/:id',findByCategory);
router.get('/getDestacados',listDestacados);
router.get('/findSearch',findBySearch);
router.get('/listAll',listAll);
router.get('/findCategory/:id',findCategory);
router.get('/findServices/:id',findServices);


export default router;