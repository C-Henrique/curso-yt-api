import { Router } from 'express';
//import {StatusCodes} from 'http-status-codes';
import {CidadesController} from './../controllers/index';


const router = Router();

router.get('/', (req, res) => {
    res.send('Teste');
});

router.post('/cidades',CidadesController.create);
export { router };
