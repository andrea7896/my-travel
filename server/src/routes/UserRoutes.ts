import express,{Router} from 'express';
import login from '../constrollers/User/login';

const router: Router = express.Router();

//encontrar usuario
router.post('/login',login);


export default router;