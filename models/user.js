const pool = require('../db-connection/pool');

const createUser = ({ first_name, last_name, age }) => pool.query(
    'INSERT INTO users (first_name, last_name, age) VALUES ($1, $2, $3) RETURNING *;',
    [ first_name, last_name, age ]
);

const getAllUsers = () => pool.query(
    'SELECT * FROM users;'
);

const getUser = (id) => pool.query(
    'SELECT * FROM users WHERE id=$1;',
    [ id ]
);

const updateTheUser = ({ id, first_name, last_name, age }) => pool.query(
   `UPDATE users
    SET first_name=$1, last_name=$2, age=$3
    WHERE id=$4 RETURNING *;`,
    [ first_name, last_name, age, id]
);

const deleteUser = (id) => pool.query(
    'DELETE FROM users WHERE id=$1 RETURNING *;',
    [ id ]
);

module.exports = {
    createUser,
    getAllUsers,
    getUser,
    updateTheUser,
    deleteUser,
};