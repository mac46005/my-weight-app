import { injectable } from "inversify";
import IWeightEntry from "../types/i-weight-entry";
import SqlTable from "../util/classes/sql-table";
import IMySqlInfo from "../util/interfaces/i-mysql-info";
import ISqlResult from "../util/interfaces/i-sql-result";
import IUserEntry from "../types/utils/i-user-entry";
import { SqlFunctions } from "../util/enums/i-sql-functions";

@injectable()
export default class WeightEntriesTable extends SqlTable<IWeightEntry> {
    constructor(protected sqlInfo: IMySqlInfo) {
        super(
            sqlInfo,
            "WeightEntry", 
            {
                ID: 'id',
                USER_ID: 'user_id',
                WEIGHT: 'weight',
                NOTE: 'note',
                CREATED_ON: 'created_on',
                UPDATED_ON: 'updated_on'
            }
        );
    }



    async create(item: IWeightEntry): Promise<ISqlResult<IWeightEntry>> {
        let sqlResult : ISqlResult<IWeightEntry>;
        try {
            const sqlStatement = this.sqlStmtProcessor.create(
                columns => `${columns.USER_ID}, ${columns.WEIGHT}, ${columns.NOTE}`,
                () => `${item.user_id}, ${item.weight}, "${item.note}"`
            );

            console.log(sqlStatement);

            sqlResult = await this.getSqlResult(SqlFunctions.CREATE, sqlStatement);

        } catch (err) {
            throw err;
        }

        return sqlResult;
    }


    async read(item?: IUserEntry | undefined): Promise<ISqlResult<IWeightEntry>> {
        let sqlResult : ISqlResult<IWeightEntry>;
        try {
            const sqlStatement = this.sqlStmtProcessor.read(
                columns => `${columns.ID}, ${columns.USER_ID}, ${columns.WEIGHT}, ${columns.NOTE}, ${columns.CREATED_ON}, ${columns.UPDATE_ON}`,
                columns => {
                    if(item) {
                        return `WHERE ${columns.ID} = ${item.id} AND ${columns.USER_ID} = ${item.user_id}`
                    } else {
                        return "";
                    }
                }
            );

            console.log(sqlStatement);

            sqlResult = await this.getSqlResult(SqlFunctions.READ, sqlStatement);

        } catch (err) {
            throw err;
        }

        return sqlResult;
    }



    async update(item: IWeightEntry): Promise<ISqlResult<IWeightEntry>> {
        let sqlResult : ISqlResult<IWeightEntry>;
        try {
            const sqlStatement = this.sqlStmtProcessor.update(
                columns => `${columns.WEIGHT} = ${item.weight}, ${columns.UPDATE_ON} = ${new Date()}`,
                columns => `WHERE ${columns.ID} = ${item.id} AND ${columns.USER_ID} = ${item.user_id}`
            );
            
            console.log(sqlStatement);

            sqlResult = await this.getSqlResult(SqlFunctions.UPDATE, sqlStatement);

        } catch (err) {
            throw err;
        }

        return sqlResult;
    }
    async delete(item: IUserEntry): Promise<ISqlResult<IWeightEntry>> {
        let sqlResult : ISqlResult<IWeightEntry>;
        try {

        } catch (err) {
            throw err;
        }

        return sqlResult;
    }
   
    
}