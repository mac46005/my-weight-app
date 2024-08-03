import IWeightEntry from "../types/i-weight-entry";
import SqlTable from "../util/classes/sql-table";
import IMySqlInfo from "../util/interfaces/i-mysql-info";

export default class WeightEntryTable extends SqlTable<IWeightEntry> {
    constructor(sqlInfo: IMySqlInfo) {
        super(
            sqlInfo,
            "WeightEntry", 
            {
                ID: 'id',
                USER_ID: 'user_id',
                WEIGHT: 'weight',
                TIMESTAMP: 'timestamp',
                NOTE: 'note'
            }
        );
    }
    async create(item: IWeightEntry): Promise<IWeightEntry> {
        const weightEntry = item;

        try {
            const sqlStatement = this.sqlStmtProcessor.create(
                columns => {
                   return `${columns.ID}`;
                },
                () => {
                    return ``
                }
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