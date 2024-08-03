import { Pool } from "mysql2/promise";
import IMySqlInfo from "../interfaces/i-mysql-info.js";
import ISqlTable from "../interfaces/i-sql-table.js";
import mysql from 'mysql2/promise';
import ITableColumns from "../interfaces/i-table-columns.js";
import SqlStatementProcessor from "./sqlstatement-processor.js";
import { injectable } from "inversify";

@injectable()
export default abstract class SqlTable<T> implements ISqlTable<T> {
    protected pool: Pool;
    protected sqlStmtProcessor : SqlStatementProcessor;
    constructor (protected sqlInfo: IMySqlInfo,private  tableName: string, private tableColumns: ITableColumns) {
        this.pool = mysql.createPool(sqlInfo);
        this.sqlStmtProcessor = new SqlStatementProcessor(tableName, tableColumns);
    }
    abstract create(item: T): Promise<T>
    abstract read(item?: T | undefined): Promise<T | T[]>
    abstract update(item: T): Promise<boolean>
    abstract delete(item: T): Promise<boolean>

}