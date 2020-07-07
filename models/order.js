const pool = require('../db-connection/pool');

const createOrder = ({ price, user_id }) => pool.query(
    'INSERT INTO orders (price, date, user_id) VALUES ($1, $2, $3) RETURNING *;',
    [ price, new Date(), user_id ]
);

const getAllOrders = () => pool.query(
    'SELECT * FROM orders;'
);

const getOrder = (id) => pool.query(
    'SELECT * FROM orders WHERE id=$1;',
    [ id ]
);

const updateTheOrder = ({ id, price, user_id }) => pool.query(
   `UPDATE orders
    SET price=$1, user_id=$2
    WHERE id=$3 RETURNING *;`,
    [ price, user_id, id]
);

const deleteOrder = (id) => pool.query(
    'DELETE FROM orders WHERE id=$1 RETURNING *;',
    [ id ]
);

module.exports = {
    createOrder,
    getAllOrders,
    getOrder,
    updateTheOrder,
    deleteOrder,
};