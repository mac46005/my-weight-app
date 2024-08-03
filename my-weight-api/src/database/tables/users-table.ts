import { injectable } from "inversify";
import IUser from "../types/i-user";
import SqlTable from "../util/classes/sql-table";
import IMySqlInfo from "../util/interfaces/i-mysql-info";
import {FieldPacket, RowDataPacket, QueryResult} from 'mysql2/promise';
@injectable()
export default class UsersTable extends SqlTable<IUser> {
    constructor(mysqlInfo: IMySqlInfo) {
        super(
            mysqlInfo, 
            "Users", 
            {
                ID: "id",
                NAME: 'name',
                BIRTHDAY: 'birthday',
                HEIGHT: 'height',
                WEIGHT: 'weight',
                BMI: 'bmi'
            }
        );
    }



    async create(item: IUser): Promise<IUser> {
        let user = item;
        try {
            const sqlStatement = this.sqlStmtProcessor.create(
                columns => `${columns.NAME}, ${columns.BIRTHDAY}, ${columns.HEIGHT}, ${columns.WEIGHT}`,
                () => `"${user.name}", "${user.birthday}", ${user.height}, ${user.weight}`
            );

            console.log(sqlStatement);

            let rowDataPackets : RowDataPacket[];
            let fieldPackets : FieldPacket[]

            [rowDataPackets, fieldPackets]  = await this.pool.execute(sqlStatement);
            
        } catch (err) {
            throw err;
        }
        return user;
    }



    async read(item?: IUser | undefined): Promise<IUser | IUser[]> {
        throw new Error("Method not implemented.");
    }
    async update(item: IUser): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(item: IUser): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    

}