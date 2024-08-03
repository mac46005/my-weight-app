import express from 'express';
import dotenv from 'dotenv';
import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';
import container from './inversify.config';
dotenv.config();

let server = new InversifyExpressServer(container);

server.setConfig((app) => {
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

})

const app = server.build();
export default app;