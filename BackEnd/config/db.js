import dotenv from 'dotenv';
dotenv.config();

// import mysql from "mysql2/promise";
import {Pool} from 'pg';

export const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

try {
    const connection = await pool.connect();

    console.log("Postgres connection successfully established");

    connection.release();

} catch (error) {
    console.error("Database connection error:", error.message);
}