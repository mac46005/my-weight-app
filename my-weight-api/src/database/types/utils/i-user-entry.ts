import ICreated from "./i-created";
import IId from "./i-id";

export default interface IUserEntry extends IId, ICreated {
    user_id?: number | string,
}