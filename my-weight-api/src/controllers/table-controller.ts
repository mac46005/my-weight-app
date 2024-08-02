import IMySqlInfo from "src/database/i-mysql-info";
import mysql, { Pool } from 'mysql2/promise';
import IController from "src/types/interfaces/i-controller";

export default abstract class TableController implements IController {
    private pool : Pool;
    private sqlStatementProcessor: SqlStatementProcessor;
    constructor(mysqlInfo: IMySqlInfo, tableName: string, tableColumns: Object) {
        this.pool = mysql.createPool(mysqlInfo);
        this.sqlStatementProcessor = new SqlStatementProcessor(tableName, tableColumns);
    }
    async get(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async post(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async put(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async delete(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
    
}