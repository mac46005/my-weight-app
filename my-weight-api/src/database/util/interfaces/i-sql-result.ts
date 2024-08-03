export default interface ISqlResult<T> {
    [key : string] : string | number | boolean | T | T[] 
}