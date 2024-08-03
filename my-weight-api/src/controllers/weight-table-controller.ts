import { Request, Response, NextFunction } from "express";
import IController from "src/types/interfaces/i-controller";
import TableController from "./table-controller";


export default class WeightTableController extends TableController {
    cols = {

    }
    constructor() {
        super();
    }

    async get(): Promise<void> {
    }
    async post(): Promise<void> {
    }
    async put(): Promise<void> {
    }
    async delete(): Promise<void> {
    }
}