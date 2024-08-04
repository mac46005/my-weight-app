import IUserEntry from "../../types/utils/i-user-entry";
import ISqlResult from "./i-sql-result";

export default interface ISqlTable<T> {
    create(item : T) : Promise<ISqlResult<T>>,
    read(item? : IUserEntry) : Promise<ISqlResult<T>>,
    update(item : T) : Promise<ISqlResult<T>>,
    delete(item : IUserEntry) : Promise<ISqlResult<T>>
}