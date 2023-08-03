


export const usersQuery = `SELECT * FROM users`;
export const userQuery = `SELECT * FROM users WHERE id = $1`;
export const createUserQuery = `INSERT INTO users (first_name,last_name,age,active ) VALUES ($1, $2, $3, $4)`;  
export const updateUserQuery = `UPDATE users SET first_name = $1, last_name = $2, age = $3, active = $4 WHERE id = $5`;
export const deleteUserQuery = `DELETE FROM users WHERE first_name = $1`;


export const ordersQuery = `SELECT * FROM orders`;
export const orderQuery = `SELECT * FROM orders WHERE id = $1`;
export const createOrderQuery = `INSERT INTO orders (price,date,user_id ) VALUES ($1, $2, $3)`;  
export const updateOrderQuery = `UPDATE orders SET price = $1, date = $2, user_id = $3 WHERE id = $4`;
export const deleteOrderQuery = `DELETE FROM orders WHERE id = $1`;