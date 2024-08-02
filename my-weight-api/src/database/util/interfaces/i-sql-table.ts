export default interface ISqlTable<T> {
    create(item : T) : Promise<T>,
    read(item? : T) : Promise<T | T[]>,
    update(item : T) : Promise<boolean>,
    delete(item : T) : Promise<boolean>
}