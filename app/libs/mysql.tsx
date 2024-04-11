import mysql from 'mysql2/promise';
import { Pool } from 'mysql2/promise';

let pool: Pool;

if (process.env.DB_SOURCE === 'local') {
    pool = mysql.createPool({
        host: process.env.LOCAL_DB_HOST,
        user: process.env.LOCAL_DB_USER,
        password: process.env.LOCAL_DB_PASS,
        database: process.env.LOCAL_DB_SCHEMA,
        waitForConnections: true
    });
} else {
    pool = mysql.createPool({
        host: process.env.ONLINE_DB_HOST,
        user: process.env.ONLINE_DB_USER,
        password: process.env.ONLINE_DB_PASS,
        database: process.env.ONLINE_DB_SCHEMA,
        waitForConnections: true
    });
}

export default pool;
