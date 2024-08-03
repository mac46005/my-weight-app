import { Pool } from "mysql2/promise";
import IMySqlInfo from "../interfaces/i-mysql-info";
import ISqlTable from "../interfaces/i-sql-table";
import mysql from 'mysql2/promise';
import ITableColumns from "src/database/types/i-table-columns";
import SqlStatementProcessor from "./sqlstatement-processor";

export default abstract class SqlTable<T> implements ISqlTable<T> {
    protected pool: Pool;
    protected sqlStmtProcessor : SqlStatementProcessor;
    constructor (sqlInfo: IMySqlInfo, tableName: string, tableColumns: ITableColumns) {
        this.pool = mysql.createPool(sqlInfo);
        this.sqlStmtProcessor = new SqlStatementProcessor(tableName, tableColumns);
    }
    abstract create(item: T): Promise<T>
    abstract read(item?: T | undefined): Promise<T | T[]>
    abstract update(item: T): Promise<boolean>
    abstract delete(item: T): Promise<boolean>

}