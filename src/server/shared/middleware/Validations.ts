import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Schema, ValidationError } from 'yup';

type TValidation = (shema: Schema<object>) => RequestHandler;


export const validation: TValidation = (shema) =>async (req, res, next) => {
    console.log('er');
    try {
        await shema.validate(req.body, {abortEarly: false});
        return next();
    } catch (err) {
        const yupError = err as ValidationError;
        const errors: Record<string, string> = { };

        yupError.inner.forEach(error => {
            if (!error.path) return;
            errors[error.path] = error.message;
        });
        return res.status(StatusCodes.BAD_REQUEST).json({errors});
    }
};