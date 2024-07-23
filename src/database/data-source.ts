import "reflect-metadata"
import { DataSource } from "typeorm"
import { dbKey } from "../../key/dbKey.js"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: dbKey(),
    database: "financas",
    synchronize: true,
    logging: false,
    entities: [],
    migrations: ["./migration/*.ts"],
    subscribers: [],
})
