import { Response, Request} from 'express';
import { object, string} from 'yup';
import { validation } from '../../shared/middleware';


interface ICidade{
    nome: string,
    estado: string,
}
interface IFilter {
    filter?: string
}

export const createValidation = validation((getSchema) => ({
    body: getSchema<ICidade>(object().shape({
        nome: string().required().min(3),
        estado: string().required().min(3)
    })),
    query: getSchema<IFilter>(object().shape({
        filter : string().required().min(3)
    })) 
}));

export const create = async (req: Request<object,object,ICidade>, res: Response )=>{
    return res.send('Creado!');
};