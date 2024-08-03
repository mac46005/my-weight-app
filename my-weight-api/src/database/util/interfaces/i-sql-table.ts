import ISqlResult from "./i-sql-result";

export default interface ISqlTable<T> {
    create(item : T) : Promise<ISqlResult<T>>,
    read(item? : T) : Promise<ISqlResult<T>>,
    update(item : T) : Promise<ISqlResult<T>>,
    delete(item : T) : Promise<ISqlResult<T>>
}