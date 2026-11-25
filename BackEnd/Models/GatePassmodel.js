import { pool } from "../config/db.js";

// to insert data into table
export const postGatePass = async (type, product,pass_number, quantity, est_price, serial_number, organization, person_name, email, contact, expt_return, address, additional_note) => {

    // for pg to insert data into table
    const result = await pool.query(`INSERT INTO gate_pass_system
        (type,product,pass_number,quantity,est_price,serial_number,organization,
        person_name,email,contact,expt_return,address,additional_note)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12,$13)
        RETURNING *`,
        [type, product,pass_number, quantity, est_price, serial_number, organization,
            person_name, email, contact, expt_return || null, address, additional_note]
    );
    return result.rows[0];
}


// get data
export const getGatePass = async () => {
    const result = await pool.query(
        `SELECT *, TO_CHAR(gatepass_date, 'YYYY-MM-DD') AS gatepass_date
    FROM gate_pass_system WHERE is_deleted = 1`
    );
    return result.rows;
};


// to delete table row 
export const deleteGatePass = async (id) => {
    const result = await pool.query(`UPDATE gate_pass_system SET is_deleted=0
         WHERE id=$1 RETURNING * `, [id]);
    return result.rows;
}

// to get data by id 
export const getGatePassbyId = async (id) => {
    const result = await pool.query(`SELECT *,TO_CHAR(expt_return, 'YYYY-MM-DD')
         AS expt_return from gate_pass_system WHERE id=$1`, [id])
    return result.rows[0];
}

// to update data 
export const updateGatePass = async (id, data) => {
    const result = await pool.query(`UPDATE gate_pass_system SET type=$1, product=$2, quantity=$3, 
        est_price=$4, serial_number=$5 ,organization=$6, person_name=$7 ,email=$8 ,contact=$9 ,
        expt_return=$10 ,address=$11 ,additional_note=$12 WHERE id=$13 RETURNING *`,
        [data.type, data.product, data.quantity, data.est_price, data.serial_number, data.organization,
        data.person_name, data.email, data.contact, data.expt_return || null, data.address, data.additional_note, id])

    return result.rows[0];
}


// to update sataus
export const UpdateStatus = async(id,data)=>
{
    const result = await pool.query(`UPDATE gate_pass_system SET status=$1 WHERE id=$2 RETURNING *`,
        [data.status,id])

    return result.rows[0];
}
