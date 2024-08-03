import { injectable } from "inversify";
import IWeightEntry from "../types/i-weight-entry";
import SqlTable from "../util/classes/sql-table";
import IMySqlInfo from "../util/interfaces/i-mysql-info";

@injectable()
export default class WeightEntryTable extends SqlTable<IWeightEntry> {
    constructor(protected sqlInfo: IMySqlInfo) {
        super(
            sqlInfo,
            "WeightEntry", 
            {
                ID: 'id',
                USER_ID: 'user_id',
                WEIGHT: 'weight',
                TIMESTAMP: 'timestamp',
                NOTES: 'note'
            }
        );
    }



    async create(item: IWeightEntry): Promise<IWeightEntry> {
        const weightEntry = item;

        try {
            const sqlStatement = this.sqlStmtProcessor.create(
                columns => {
                   return `${columns.USER_ID},${columns.WEIGHT}, ${columns.NOTES}`;
                },
                () => `${item.userId}, ${item.weight}, ${item.notes}`
            );

            
        } catch (err) {
            throw err;
        }

        return weightEntry;
    }




    async read(item?: IWeightEntry | undefined): Promise<IWeightEntry | IWeightEntry[]> {
        
    }
    async update(item: IWeightEntry): Promise<boolean> {
        
    }
    async delete(item: IWeightEntry): Promise<boolean> {
        
    }
    
}