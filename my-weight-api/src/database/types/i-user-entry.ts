import ICreated from "./utils/i-created";
import INote from "./utils/i-note";

export default interface IUserEntry extends INote, ICreated {
    id: number,
    user_id: number,
}