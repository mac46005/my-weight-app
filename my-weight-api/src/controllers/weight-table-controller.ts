import { Request, Response, NextFunction } from "express";
import IController from "src/types/interfaces/i-controller";


export default class WeightTableController implements IController {
    get(): void {
        throw new Error("Method not implemented.");
    }
    post(): void {
        throw new Error("Method not implemented.");
    }
    put(): void {
        throw new Error("Method not implemented.");
    }
    delete(): void {
        throw new Error("Method not implemented.");
    }

}