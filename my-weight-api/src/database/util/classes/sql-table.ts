import { FieldPacket, Pool, ResultSetHeader, RowDataPacket } from "mysql2/promise";
import IMySqlInfo from "../interfaces/i-mysql-info.js";
import ISqlTable from "../interfaces/i-sql-table.js";
import mysql from 'mysql2/promise';
import ITableColumns from "../interfaces/i-table-columns.js";
import SqlStatementProcessor from "./sqlstatement-processor.js";
import { injectable } from "inversify";
import ISqlResult from "../interfaces/i-sql-result.js";
import { SqlFunctions } from "../enums/i-sql-functions.js";

@injectable()
export default abstract class SqlTable<T> implements ISqlTable<T> {
    protected pool: Pool;
    protected sqlStmtProcessor: SqlStatementProcessor;
    constructor(protected sqlInfo: IMySqlInfo, private tableName: string, private tableColumns: ITableColumns) {
        this.pool = mysql.createPool(sqlInfo);
        this.sqlStmtProcessor = new SqlStatementProcessor(tableName, tableColumns);
    }
    abstract create(item: T): Promise<T>;
    abstract read(item?: T | undefined): Promise<T | T[]>;
    abstract update(item: T): Promise<boolean>;
    abstract delete(item: T): Promise<boolean>;

    protected processRowDataPackets<T>(rowDatapackets: RowDataPacket[]) : T[] {
        let tItems: T[] = [];
        rowDatapackets.forEach(item => {
            tItems.push(item as T);
        });

        return tItems;
    }




    
    protected async getResult(sqlFunctions: SqlFunctions, sqlStatement : string): Promise<ISqlResult<T>> {
        let sqlResult : ISqlResult<T> ={};


        let fieldPackets: FieldPacket[];
        let resultSetHeader: ResultSetHeader;
        let rowDataPackets: RowDataPacket[];


        try {
            switch(sqlFunctions) {
                case SqlFunctions.CREATE:
                    [resultSetHeader, fieldPackets] = await this.pool.execute(sqlStatement);

                    sqlResult['insertId'] = resultSetHeader.insertId;
                    sqlResult['warningStatus'] = resultSetHeader.warningStatus;
                    sqlResult['affectedRows'] = resultSetHeader.affectedRows;

                    return sqlResult;
                case SqlFunctions.READ:
                    [rowDataPackets, fieldPackets] = await this.pool.execute(sqlStatement);

                    sqlResult['items'] = this.processRowDataPackets(rowDataPackets);
                    sqlResult['length'] = rowDataPackets.length;

                    return sqlResult;
                case SqlFunctions.UPDATE:
                    [resultSetHeader, fieldPackets] = await this.pool.execute(sqlStatement);

                    sqlResult['warningStatus'] = resultSetHeader.warningStatus;
                    sqlResult['affectedRows'] = resultSetHeader.affectedRows;

                    return sqlResult;
                case SqlFunctions.DELETE:
                    [resultSetHeader, fieldPackets] = await this.pool.execute(sqlStatement);

                    sqlResult['warningStatus'] = resultSetHeader.warningStatus;
                    sqlResult['affectedRows'] = resultSetHeader.affectedRows;

                    return sqlResult;
                    
            }
        } catch (err) {
            throw err;
        }

        return sqlResult;
    }
}