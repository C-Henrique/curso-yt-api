import { Response, Request } from 'express';

interface ICidade{
    nome: string,
}
export const create = (req: Request<object,object,ICidade>, res: Response )=>{
    const data : ICidade = req.body;

    console.dir(data);
    return res.send('Criado !');
};