class SqlStatementProcessor {
    constructor(private tableName: string,private tableColumns: Object) {
    }

    create(columns: (columns: Object) => string, values: () => string, constraint?: (columns: Object) => string) : string {
        let sqlStatement : string = `INSERT INTO ${this.tableName} (${columns(this.tableColumns)}) VALUES(${values()} ${(constraint)? constraint(this.tableColumns) : ""});`;

        return sqlStatement;
    }

    read(columns: (columns: Object) => string, constraint?: (columns: Object) => string) : string {
        let sqlStatement : string = `SELECT ${columns(this.tableColumns)} FROM ${this.tableName} ${(constraint)? constraint(this.tableColumns) : ""};`;

        return sqlStatement;
    }

    update(set: (columns: Object) => string, constraint?: (columns: Object) => string) :  string {
        let sqlStatement : string = `UPDATE ${this.tableName} SET ${set(this.tableColumns)} ${(constraint)? constraint(this.tableColumns) : ""}`;

        return sqlStatement;
    }

    delete(constraint: (columns: Object) => string) : string {
        let sqlStatement : string = `DELETE ${this.tableName} ${(constraint)? constraint(this.tableName) : ""}`;

        return sqlStatement;
    }
}

