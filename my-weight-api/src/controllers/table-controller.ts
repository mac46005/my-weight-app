import { Request, Response, NextFunction } from "express";
import IController from "../types/interfaces/i-controller";
import { injectable } from "inversify";

@injectable()
export default abstract class TableController implements IController {
    abstract get(req: Request, res: Response, next: NextFunction): Promise<void>
    abstract post(req: Request, res: Response, next: NextFunction): Promise<void>
    abstract put(req: Request, res: Response, next: NextFunction): Promise<void>
    abstract delete(req: Request, res: Response, next: NextFunction): Promise<void>

}