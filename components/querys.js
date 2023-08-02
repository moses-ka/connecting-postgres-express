


export const usersQuery = `SELECT * FROM users`;
export const userQuery = `SELECT * FROM users WHERE id = $1`;
export const createUserQuery = `INSERT INTO users (first_name,last_name,age,active ) VALUES ($1, $2, $3, $4)`;  
export const updateUserQuery = `UPDATE users SET first_name = $1, last_name = $2, age = $3, active = $4 WHERE id = $5`;
export const deleteUserQuery = `DELETE FROM users WHERE first_name = $1`;