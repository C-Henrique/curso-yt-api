import { Response, Request} from 'express';
import { number, object} from 'yup';
import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';

interface IParamProps{
    id?:number
}

export const getByIdValidation = validation((getSchema) => ({
    params: getSchema<IParamProps>(object().shape({
        id: number().integer().required().moreThan(0)
    }))
}));

export const getById = async (req: Request<IParamProps>, res: Response )=>{
    console.log(req.params);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado!');
};