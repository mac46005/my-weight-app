import IMySqlInfo from "./util/interfaces/i-mysql-info";
import dotenv from 'dotenv';

dotenv.config();

const mysqlInfo : IMySqlInfo = {
    user : process.env.DB_USER,
    password  : process.env.DB_PASSWORD,
    host : process.env.DB_HOST,
    database: process.env.DB_NAME
}

export default mysqlInfo;