import { Response, Request} from 'express';
import { object, string} from 'yup';
import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';


interface ICidade{
    nome: string,
}

export const createValidation = validation((getSchema) => ({
    body: getSchema<ICidade>(object().shape({
        nome: string().required().min(3),
    }))
}));

export const create = async (req: Request<object,object,ICidade>, res: Response )=>{
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado!');
};