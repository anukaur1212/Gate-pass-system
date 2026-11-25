import { pool } from "../config/db.js";

// to insert data into the table
export const postVisitors = async (name, phone, visitPurpose, inTime, outTime, meetingTo) => {


    // for pg to insert data into table
    const result = await pool.query(
        `INSERT INTO visitor_entry
        (full_name, phone, visit_purpose, in_time, out_time, meeting_to)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *`,
        [name, phone, visitPurpose, inTime, outTime, meetingTo]
    );

    return result.rows[0];

}


// to get data from the table
export const getVisitors = async () => {
    const result = await pool.query(
        "SELECT * FROM visitor_entry WHERE is_deleted = 1"
    );

    return result.rows;
};


// to get data using id
export const getVisitorById = async (id) => {
    const result = await pool.query(
        `SELECT full_name AS name, phone, visit_purpose AS "visitPurpose",
         in_time AS "inTime", out_time AS "outTime", meeting_to AS "meetingTo"
         FROM visitor_entry WHERE id = $1`,[id]);

    return result.rows[0];
};


// to update data in table
export const updateVisitor = async (id, data) => {
    const result = await pool.query(
        `UPDATE visitor_entry SET full_name = $1, phone = $2, visit_purpose = $3, in_time = $4,
             out_time = $5, meeting_to = $6 WHERE id = $7 RETURNING *`,
       
        [data.name,data.phone,data.visitPurpose,data.inTime,data.outTime,data.meetingTo,id]
    );

    return result.rows[0];
};


// to delete data in table
export const deleteVisitor = async (id) => {
    const result = await pool.query(`UPDATE visitor_entry SET is_deleted=0 WHERE id=$1 RETURNING *`, [id])

    return result.rows;
}
