import IUpdated from "./utils/i-updated";
import IUserEntry from "./utils/i-user-entry";
import INote from "./utils/i-note";

export default interface IWeightEntry extends IUserEntry, IUpdated, INote {
    weight: number
}