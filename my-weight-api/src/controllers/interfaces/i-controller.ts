import { NextFunction, Request, Response } from "express";

export default interface IController{
    get(req: Request, res: Response, next: NextFunction) : Promise<void>,
    post(req: Request, res: Response, next: NextFunction) : Promise<void>,
    put(req: Request, res: Response, next: NextFunction) : Promise<void>,
    delete(req: Request, res: Response, next: NextFunction) : Promise<void>,
}