import express, { json } from 'express';
import 'dotenv/config';
import {router} from './routes/index';
const server = express();
server.use(express.json());
server.use(router);
export {server};
