const userModel = require('../models/user');

const getUsers = async (_, res) => {
    try {
        const users = await userModel.getAllUsers();

        res.send({ err: null, users: users.rows });
    } catch (error) {
        res.send({ err: error.message });
    }
};

const getUser = async (req, res) => {
    let { id } = req.params;

    if (!id) {
        return res.send({ err: 'There is no user ID' });
    }

    try {
        const user = await userModel.getUser(id);

        if (user.rows.length === 0) {
            return res.send({ err: 'User not found' });
        }

        res.send({ err: null, user: user.rows[0] });
    } catch (error) {
        res.send({ err: error.message });
    }
};

const createUser = async (req, res) => {
    const { first_name, last_name, age } = req.body;

    try {
        const user = await userModel.createUser({ first_name, last_name, age });

        res.send({ err: null, user: user.rows[0] });
    } catch (error) {
        res.send({ err: error.message });
    }
};

const updateUser = async (req, res) => {
    const { first_name, last_name, age } = req.body;
    let { id } = req.params;

    if (!id) {
        return res.send({ err: 'There is no user ID' });
    }

    try {
        const user = await userModel.updateTheUser({ id, first_name, last_name, age });

        res.send({ err: null, user: user.rows });
    } catch (error) {
        res.send({ err: error.message });
    }
};

const deleteUser = async (req, res) => {
    let { id } = req.params;

    if (!id) {
        return res.send({ err: 'There is no user ID' });
    }

    try {
        const user = await userModel.deleteUser(id);

        res.send({ err: null, user: user.rows });
    } catch (error) {
        res.send({ err: error.message });
    }
};

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};
