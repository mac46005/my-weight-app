import ITableColumns from "../interfaces/i-table-columns.js";

export default class SqlStatementProcessor {
    constructor(private tableName: string,private tableColumns: ITableColumns) {
    }

    create(columns: (columns: ITableColumns) => string, values: () => string, constraint: (columns: ITableColumns) => string = () => "") : string {
        let sqlStatement : string = `INSERT INTO ${this.tableName} (${columns(this.tableColumns)}) VALUES(${values()} ${(constraint)? constraint(this.tableColumns) : ""});`;

        return sqlStatement;
    }

    read(columns: (columns: ITableColumns) => string, constraint: (columns: ITableColumns) => string = () => "") : string {
        let sqlStatement : string = `SELECT ${columns(this.tableColumns)} FROM ${this.tableName} ${(constraint)? constraint(this.tableColumns) : ""};`;

        return sqlStatement;
    }

    update(set: (columns: ITableColumns) => string, constraint: (columns: ITableColumns) => string = () => "") :  string {
        let sqlStatement : string = `UPDATE ${this.tableName} SET ${set(this.tableColumns)} ${(constraint)? constraint(this.tableColumns) : ""}`;

        return sqlStatement;
    }

    delete(constraint: (columns: ITableColumns) => string = () => "") : string {
        let sqlStatement : string = `DELETE ${this.tableName} ${(constraint)? constraint(this.tableColumns) : ""}`;

        return sqlStatement;
    }
}

