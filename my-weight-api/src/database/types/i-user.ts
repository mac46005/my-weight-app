import ICreated from "./utils/i-created";
import IUpdated from "./utils/i-updated";

export default interface IUser extends ICreated, IUpdated{
    id: number,
    name: string,
    birthday: string,
    height: number,
    weight: number,
    BMI?: number
}