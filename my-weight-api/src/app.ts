import 'reflect-metadata';
import express from 'express';
import dotenv from 'dotenv';
import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';
import container from './inversify.config.js';
import { ErrorHandlerMiddleware } from './middleware/error-handler-middleware.js';
dotenv.config();

let server = new InversifyExpressServer(container);

server.setConfig((app) => {
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    const errorHandler = container.get<ErrorHandlerMiddleware>(ErrorHandlerMiddleware);

    app.use(errorHandler.handleError.bind(errorHandler));
})

const app = server.build();
export default app;