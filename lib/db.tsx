import postgres from "postgres";

const sql = postgres({
    host: process.env.PGHOST,
    port: Number(process.env.PGPORT),
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    ssl: process.env.NODE_ENV === "production",
});

export default sql;