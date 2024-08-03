import { Request, Response, NextFunction } from "express";
import { injectable } from "inversify";
import IController from "../interfaces/i-controller";

@injectable()
export default abstract class TableController implements IController {
    abstract get(req: Request, res: Response, next: NextFunction): Promise<void>
    abstract post(req: Request, res: Response, next: NextFunction): Promise<void>
    abstract put(req: Request, res: Response, next: NextFunction): Promise<void>
    abstract delete(req: Request, res: Response, next: NextFunction): Promise<void>

}