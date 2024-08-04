import { Request, Response, NextFunction } from "express";
import TableController from "./table-controller";
import { controller, httpGet } from "inversify-express-utils";
import { servicesNames } from "../../services-names";
import { inject, injectable } from "inversify";
import ISqlTable from "../../database/util/interfaces/i-sql-table";
import IWeightEntry from "../../database/types/i-weight-entry";

@controller('/weight-entry')
// @injectable()
export default class WeightEntriesController extends TableController {

    constructor(@inject(servicesNames.WeightEntriesTable) private weightEntriesTable : ISqlTable<IWeightEntry>) {
        super();
    }

    @httpGet('/get/:id?')
    async get(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            
        } catch (err) {
            next(err);
        }
    }
    async post(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {

            res.json({});
        } catch (err) {
            next(err);
        }
    }
    async put(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {

            res.json({});
        } catch (err) {
            next(err);
        }
    }
    async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {

            res.json({});
        } catch (err) {
            next(err);
        }
    }    
   
}