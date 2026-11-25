import { pool } from "../config/db.js";

// to insert data into table
export const postEmployee = async (name,fname,email,phone,dob,gender,linkedin_url,address,aadhar) => {

    // for pg to insert data into table
    const result = await pool.query(`INSERT INTO employee
        (name,fname,email,phone,dob,gender,linkedin_url,address,aadhar)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        RETURNING *`,
        [name,fname,email,phone,dob,gender,linkedin_url,address,aadhar]
    );
    return result.rows[0];
}