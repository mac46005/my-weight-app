import { injectable } from "inversify";
import IWeightEntry from "../types/i-weight-entry";
import SqlTable from "../util/classes/sql-table";
import IMySqlInfo from "../util/interfaces/i-mysql-info";
import ISqlResult from "../util/interfaces/i-sql-result";
import IUserEntry from "../types/utils/i-user-entry";

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
                TIMESTAMP: 'timestamp',
                NOTES: 'note',
                CREATED_ON: 'created_on',
                UPDATED_ON: 'updated_on'
            }
        );
    }
    create(item: IWeightEntry): Promise<ISqlResult<IWeightEntry>> {
        throw new Error("Method not implemented.");
    }
    read(item?: IUserEntry | undefined): Promise<ISqlResult<IWeightEntry>> {
        throw new Error("Method not implemented.");
    }
    update(item: IWeightEntry): Promise<ISqlResult<IWeightEntry>> {
        throw new Error("Method not implemented.");
    }
    delete(item: IUserEntry): Promise<ISqlResult<IWeightEntry>> {
        throw new Error("Method not implemented.");
    }
   
    
}