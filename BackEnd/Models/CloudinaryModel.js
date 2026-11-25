import { pool } from "../config/db.js";

export const uploadData = async (fileUrl, publicId) => {
    const result = await pool.query(
        `INSERT INTO cloudinary_testing (pdf_url, public_id)
         VALUES ($1, $2)
         RETURNING *`,
        [fileUrl, publicId]
    );
    return result.rows[0];
};


//  get data
export const getDatabyId = async (id) => {
    const result = await pool.query(
        "SELECT public_id FROM cloudinary_testing WHERE id = $1",
        [id]
    );;

    return result.rows[0];
}

export const updateData = async (id, fileUrl) => {
    const result = await pool.query(`UPDATE cloudinary_testing
             SET pdf_url = $1 WHERE id = $2 RETURNING *`, [fileUrl, id]);

    return result.rows[0];
}

//  get data
export const getData = async () => {
    const result = await pool.query(
        "SELECT * FROM cloudinary_testing ORDER BY id DESC",
    );

    return result.rows;
}