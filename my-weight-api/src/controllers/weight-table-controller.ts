import { Request, Response, NextFunction } from "express";
import IController from "src/types/interfaces/i-controller";
import TableController from "./table-controller";
import IMySqlInfo from "src/database/i-mysql-info";


export default class WeightTableController extends TableController {
    cols = {
        
    }
    constructor(mysqlInfo: IMySqlInfo) {
        super(mysqlInfo);
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