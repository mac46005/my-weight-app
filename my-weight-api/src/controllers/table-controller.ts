import IMySqlInfo from "src/database/i-mysql-info";
import mysql, { Pool } from 'mysql2/promise';

abstract class TableController {
    private pool : Pool;
    constructor(mysqlInfo: IMySqlInfo) {
        this.pool = mysql.createPool(mysqlInfo);
    }
}