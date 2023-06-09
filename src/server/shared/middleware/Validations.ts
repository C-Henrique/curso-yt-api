import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ObjectSchema , ValidationError, Maybe, AnyObject } from 'yup';

type TGetSchema = <T extends Maybe<AnyObject>>(schema: ObjectSchema<T>) => ObjectSchema<T>
type TProperty = 'body'| 'header'| 'params'|'query';
type TallSchemas = Record<TProperty, ObjectSchema<object>>;
type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TallSchemas>;
type TValidation = (getAllSchemas: TGetAllSchemas) => RequestHandler;


export const validation: TValidation = (getAllSchemas) => async (req, res, next) => {
    const schemas = getAllSchemas(schema => schema);
    const errorsResults : Record<string , Record<string,string>>={};
    Object.entries(schemas).forEach(
        ([key, schema]) => {

            try {
                schema.validateSync(req[key as TProperty], {abortEarly: false});
            } catch (err) {
                const yupError = err as ValidationError;
                const errors: Record<string, string> = { };
                
                yupError.inner.forEach(error => {
                    if (!error.path) return;
                    errors[error.path] = error.message;
                });
                errorsResults[key] = errors;   
            }
            
        });
    if(Object.entries(errorsResults).length === 0){
        return next();
    }else{
        return res.status(StatusCodes.BAD_REQUEST).json({errors : errorsResults});
    }
};