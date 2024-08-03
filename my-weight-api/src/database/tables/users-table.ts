import { injectable } from "inversify";
import IUser from "../types/i-user";
import SqlTable from "../util/classes/sql-table";
import IMySqlInfo from "../util/interfaces/i-mysql-info";
import {FieldPacket, RowDataPacket, QueryResult} from 'mysql2/promise';
import { SqlFunctions } from "../util/enums/i-sql-functions";
import ISqlResult from "../util/interfaces/i-sql-result";





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
                BMI: 'bmi',
                CREATED_ON: "created_on",
                UPDATED_ON: "updated_on"
            }
        );
    }



    async create(item: IUser): Promise<ISqlResult<IUser>> {
        let user = item;
        let sqlResult : ISqlResult<IUser> = {};

        try {
            const sqlStatement = this.sqlStmtProcessor.create(
                columns => `${columns.NAME}, ${columns.BIRTHDAY}, ${columns.HEIGHT}, ${columns.WEIGHT}`,
                () => `"${user.name}", "${user.birthday}", ${user.height}, ${user.weight}`
            );

            console.log(sqlStatement);

            sqlResult = await this.getResult(SqlFunctions.CREATE, sqlStatement);
        } catch (err) {
            throw err;
        }
        return sqlResult;
    }



    async read(item?: IUser | undefined): Promise<ISqlResult<IUser>> {
        let sqlResult : ISqlResult<IUser> = {};
        try {
            let sqlStatement = this.sqlStmtProcessor.read(
                columns => `${columns.ID}, ${columns.NAME}, ${columns.BIRTHDAY}, ${columns.HEIGHT}, ${columns.WEIGHT}, ${columns.BMI}`,
                columns => {
                    if(item) {
                        return `WHERE ${columns.ID} = ${item.id}`} else {
                        return ``;
                    }
                }
            );

            console.log(sqlStatement);

            sqlResult = await this.getResult(SqlFunctions.READ , sqlStatement);

        } catch (err) {
            throw err;
        } 
        return sqlResult;
    }




    async update(item: IUser): Promise<ISqlResult<IUser>> {
        let sqlResult : ISqlResult<IUser> = {};

        try {
            const sqlStatement = this.sqlStmtProcessor.update(
                columns => `${columns.NAME} = ${item.name}, ${columns.BIRTHDAY} = ${item.birthday}, ${columns.HEIGHT} = ${item.height}, ${columns} = ${item.weight}, ${columns.BMI} = ${item.BMI}, ${columns.UPDATE_ON} = ${item.updated_on}`,
                columns => `WHERE ${columns.ID} = ${item.id}`
            );

            sqlResult = await this.getResult(SqlFunctions.UPDATE, sqlStatement);



        } catch (err) {
            throw err;
        }

        return sqlResult;
    }





    async delete(item: IUser): Promise<ISqlResult<IUser>> {
        let sqlResult : ISqlResult<IUser> = {};

        try {
            let sqlStatement = this.sqlStmtProcessor.delete(
                columns => `WHERE ${columns.ID} = ${item.id}`
            );

            console.log(sqlStatement);

            sqlResult = await this.getResult(SqlFunctions.DELETE, sqlStatement);
        } catch (err) {
            throw err;
        }

        return sqlResult;
    }
    

}