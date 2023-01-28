import mysql from "mysql2";

const db = mysql.createConnection({
    host: "sql7.freemysqlhosting.net",
    user: "sql7593839",
    password: "yrEbwMJX8m",
    database: "sql7593839",
});

export default db;