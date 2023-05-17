import { Response, Request, RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import {Schema, object, string, ValidationError} from 'yup';
import { validation } from '../../shared/middleware';

interface ICidade{
    nome: string,
    estado: string,
}
const bodyValidation: Schema<ICidade> =  object().shape({
    nome: string().required().min(3),
    estado: string().required()
});
export const createValidation = validation(bodyValidation);
//Validação
// export const createBodyValidation: RequestHandler = async (req, res, next) =>{
//     try {
//         await bodyValidation.validate(req.body, {abortEarly: false});
//         return next();
//     } catch (err) {
//         const yupError = err as ValidationError;
//         const errors: Record<string, string> = { };

//         yupError.inner.forEach(error => {
//             if (!error.path) return;
//             errors[error.path] = error.message;
//         });
//         return res.status(StatusCodes.BAD_REQUEST).json({errors});
//     }
// };


export const create = async (req: Request<object,object,ICidade>, res: Response )=>{
    return res.send('Creado!');
};