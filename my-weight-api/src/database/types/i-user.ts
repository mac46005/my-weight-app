import ICreated from "./utils/i-created";
import IId from "./utils/i-id";
import IUpdated from "./utils/i-updated";

export default interface IUser extends IId, ICreated, IUpdated{
    name: string,
    birthday: string,
    height: number,
    weight: number,
    bmi?: number
}