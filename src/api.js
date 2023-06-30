import express, { Router } from 'express';
import serverless from 'serverless-http';

const api = express();

const router = Router();


router.get('/', (req, res) => res.send({ message: 'Source code at https://github.com/JongaMatos/express-serverless-netlify' }));

api.use('/', router);

export const handler = serverless(api);
