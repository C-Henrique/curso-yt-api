import { Router } from 'express';
import {StatusCodes} from 'http-status-codes';
const router = Router();

router.get('/', (req, res) => {
    res.send('Teste');
});

router.post('/teste', (req, res) => {
    console.log(req.body);
    return res.status(StatusCodes.ACCEPTED).json(req.body);

});
export { router };
