import { Response, Request} from 'express';
import { number, object, string} from 'yup';
import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';

interface IParamProps{
    id?:number
}
interface IBodyProps {
    nome: string
}

export const updateByIdValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(object().shape({
        nome: string().required().min(3)
    })),
    params: getSchema<IParamProps>(object().shape({
        id: number().integer().required().moreThan(0)
    }))
}));

export const updateById = async (req: Request<IParamProps, object, IBodyProps>, res: Response )=>{
    console.log(req.params);
    console.log(req.body);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado!');
};