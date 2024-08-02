import IWeightEntry from "../types/i-weight-entry";
import SqlTable from "../util/classes/sql-table";

export default class WeightEntryTable extends SqlTable<IWeightEntry> {
    create(item: IWeightEntry): Promise<IWeightEntry> {
        throw new Error("Method not implemented.");
    }
    read(item?: IWeightEntry | undefined): Promise<IWeightEntry | IWeightEntry[]> {
        throw new Error("Method not implemented.");
    }
    update(item: IWeightEntry): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(item: IWeightEntry): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
}