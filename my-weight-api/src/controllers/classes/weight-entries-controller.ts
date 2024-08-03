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

    constructor(@inject(servicesNames.WeightEntriesTable) private weightEntryTable : ISqlTable<IWeightEntry>) {
        super();
    }

    @httpGet('/get')
    async get(req: Request, res: Response, next: NextFunction): Promise<void> {
        let item = await this.weightEntryTable.create({id: 2, userId: 3, weight: 150, notes: "Congrats it works!"});
        res.json(item);
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