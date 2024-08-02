class SqlStatementProcessor {
    constructor(private tableName: string,private tableColumns: object) {
    }

    create(columns: (columns: object) => string, values: () => string, constraint?: (columns: object) => string) : string {
        let sqlStatement : string = `INSERT INTO ${this.tableName} (${columns(this.tableColumns)}) VALUES(${values()} ${(constraint)? constraint(this.tableColumns) : ""});`;

        return sqlStatement;
    }

    read(columns: (columns: object) => string, constraint?: (columns: object) => string) : string {
        let sqlStatement : string = `SELECT ${columns(this.tableColumns)} FROM ${this.tableName} ${(constraint)? constraint(this.tableColumns) : ""};`;

        return sqlStatement;
    }

    update(set: (columns: object) => string, constraint?: (columns: object) => string) :  string {
        let sqlStatement : string = `UPDATE ${this.tableName} SET ${set(this.tableColumns)} ${(constraint)? constraint(this.tableColumns) : ""}`;

        return sqlStatement;
    }

    delete(constraint: (columns: object) => string) : string {
        let sqlStatement : string = `DELETE ${this.tableName} ${(constraint)? constraint(this.tableColumns) : ""}`;

        return sqlStatement;
    }
}

