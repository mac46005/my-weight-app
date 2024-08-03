import { Request, Response, NextFunction } from "express";
import TableController from "./table-controller";
import { controller, httpGet } from "inversify-express-utils";

@controller('/weight-entry')
export default class WeightEntryController extends TableController {

    constructor() {
        super();
    }

    @httpGet('/get')
    async get(req: Request, res: Response, next: NextFunction): Promise<void> {
        res.json({message: "weight-entry/get"});
    }
    async post(req: Request, res: Response, next: NextFunction): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async put(req: Request, res: Response, next: NextFunction): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
        throw new Error("Method not implemented.");
    }    
   
}