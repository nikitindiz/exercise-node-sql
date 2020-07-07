const orderModel = require('../models/order');

const getOrders = async (_, res) => {
    try {
        const orders = await orderModel.getAllOrders();

        res.send({ err: null, orders: orders.rows });
    } catch (error) {
        res.send({ err: error.message });
    }
};

const getOrder = async (req, res) => {
    let { id } = req.params;

    if (!id) {
        return res.send({ err: 'There is no order ID' });
    }

    try {
        const order = await orderModel.getOrder(id);

        if (order.rows.length === 0) {
            return res.send({ err: 'Order not found' });
        }

        res.send({ err: null, order: order.rows[0] });
    } catch (error) {
        res.send({ err: error.message });
    }
};

const createOrder = async (req, res) => {
    const { price, user_id } = req.body;

    try {
        const order = await orderModel.createOrder({ price, user_id });

        res.send({ err: null, order: order.rows[0] });
    } catch (error) {
        res.send({ err: error.message });
    }
};

const updateOrder = async (req, res) => {
    const { price, user_id } = req.body;
    let { id } = req.params;

    if (!id) {
        return res.send({ err: 'There is no order ID' });
    }

    try {
        const order = await orderModel.updateTheOrder({ id, price, user_id });

        res.send({ err: null, order: order.rows });
    } catch (error) {
        res.send({ err: error.message });
    }
};

const deleteOrder = async (req, res) => {
    let { id } = req.params;

    if (!id) {
        return res.send({ err: 'There is no order ID' });
    }

    try {
        const order = await orderModel.deleteOrder(id);

        res.send({ err: null, order: order.rows });
    } catch (error) {
        res.send({ err: error.message });
    }
};

module.exports = {
    getOrders,
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder,
};
