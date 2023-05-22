import { Router } from 'express';
import {CidadesController} from './../controllers/index';


const router = Router();

router.get('/', (req, res) => {
    res.send('Teste');
});

router.get('/cidades', CidadesController.getAllValidation, CidadesController.getAll);
router.post('/cidades', CidadesController.createValidation, CidadesController.create);
export { router };
