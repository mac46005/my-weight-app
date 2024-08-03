import { injectable } from "inversify";
import IWeightEntries from "../types/i-weight-entry";
import SqlTable from "../util/classes/sql-table";
import IMySqlInfo from "../util/interfaces/i-mysql-info";

@injectable()
export default class WeightEntriesTable extends SqlTable<IWeightEntries> {
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



    async create(item: IWeightEntries): Promise<IWeightEntries> {
        const weightEntry = item;

        try {
            const sqlStatement = this.sqlStmtProcessor.create(
                columns => {
                   return `${columns.USER_ID},${columns.WEIGHT}, ${columns.NOTES}`;
                },
                () => `${item.userId}, ${item.weight}, "${item.notes}"`
            );

            console.log(sqlStatement);
            
        } catch (err) {
            throw err;
        }

        return weightEntry;
    }




    async read(item?: IWeightEntries | undefined): Promise<IWeightEntries | IWeightEntries[]> {
        throw new Error("Method not impemented");
    }
    async update(item: IWeightEntries): Promise<boolean> {
        throw new Error("Method not impemented");
    }
    async delete(item: IWeightEntries): Promise<boolean> {
        throw new Error("Method not impemented");
    }
    
}