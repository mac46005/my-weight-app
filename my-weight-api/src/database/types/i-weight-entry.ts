import IUpdated from "./utils/i-updated";
import IUserEntry from "./i-user-entry";

export default interface IWeightEntry extends IUserEntry, IUpdated {
    weight: number
}