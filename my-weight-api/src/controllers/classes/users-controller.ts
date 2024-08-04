import { Request, Response, NextFunction } from "express";
import TableController from "./table-controller";
import { inject, injectable } from "inversify";
import { servicesNames } from "../../services-names";
import UsersTable from "../../database/tables/users-table";
import { controller, httpDelete, httpGet, httpPost, httpPut } from "inversify-express-utils";
import ISqlResult from "../../database/util/interfaces/i-sql-result";
import IUser from "../../database/types/i-user";
import IUserEntry from "../../database/types/utils/i-user-entry";

@controller('/users')
export default class UsersController extends TableController {

    constructor(@inject(servicesNames.UsersTable) private usersTable: UsersTable) {
        super()
    }

    @httpGet('/get/:id?')
    async get(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const idParam = req.params.id;
            let sqlResult: ISqlResult<IUser>;
            if (idParam) {
                const id = parseInt(idParam);
                sqlResult = await this.usersTable.read({id: id})
            } else {
                sqlResult =  await this.usersTable.read();
            }

            res.json(sqlResult);
        } catch (err) {
            next(err)
        }
    }

    @httpPost('/post/:name/:birthday/:height/:weight/:bmi?')
    async post(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const {name, birthday, height, weight, bmi} = req.params;
            const newUser : IUser = {
                name: name,
                birthday: birthday,
                height: parseInt(height),
                weight: parseInt(weight),
                bmi: (bmi)? parseInt(bmi) : undefined
            }

            const sqlResult = await this.usersTable.create(newUser);

            res.json(sqlResult);
        } catch (err) {
            next(err)
        }
    }
    @httpPut('/put/:id/:name/:birthday/:height/:weight/:bmi?')
    async put(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const {id, name, birthday, height, weight, bmi} = req.params;

            const updatedUser : IUser = {
                id: parseInt(id),
                name: name,
                birthday: birthday,
                height: parseInt(height),
                weight: parseInt(weight),
                bmi: (bmi)? parseInt(bmi) : undefined
            }
            
            const sqlResult = await this.usersTable.update(updatedUser);

            res.json(sqlResult);

        } catch (err) {
            next(err)
        }
    }

    @httpDelete('/delete/:id')
    async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            let id = req.params.id;

            let userEntry : IUserEntry = {id: parseInt(id)};

            const sqlResult = await this.usersTable.delete(userEntry);

            res.json(sqlResult);
        } catch (err) {
            next(err)
        }
    }
    
}