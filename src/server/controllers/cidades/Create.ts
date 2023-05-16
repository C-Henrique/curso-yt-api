import { Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import {Schema, object, string, ValidationError} from 'yup';

interface ICidade{
    nome: string,
    estado: string,
}
const bodyValidation: Schema<ICidade> =  object().shape({
    nome: string().required().min(3),
    estado: string().required()
});
export const create = async (req: Request<object,object,ICidade>, res: Response )=>{
    let validatedData: ICidade | undefined = undefined;
    try {
        validatedData = await bodyValidation.validate(req.body, {abortEarly: false});
        return res.status(StatusCodes.ACCEPTED).send(validatedData);
    } catch (err) {
        const yupError = err as ValidationError;
        const errors: Record<string, string> = { };

        yupError.inner.forEach(error => {
            if (!error.path) return;
            errors[error.path] = error.message;
        });
        return res.status(StatusCodes.BAD_REQUEST).json({
            errors
        });
    }
};