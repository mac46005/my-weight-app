import { Request, Response, NextFunction } from "express";
import TableController from "./table-controller";
import { inject, injectable } from "inversify";
import { servicesNames } from "../../services-names";
import UsersTable from "../../database/tables/users-table";


@injectable()
export default class UsersController extends TableController {

    constructor(@inject(servicesNames.UsersTable) private usersTable: UsersTable) {
        super()
    }

    async get(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {

        } catch (err) {
            next(err)
        }
    }
    async post(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {

        } catch (err) {
            next(err)
        }
    }
    async put(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {

        } catch (err) {
            next(err)
        }
    }
    async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {

        } catch (err) {
            next(err)
        }
    }
    
}