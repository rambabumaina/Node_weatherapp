const userModel = require('../db/model/userModel');

exports.createUsers = async (req, res) => {
    let user = new userModel(req.body)
    try {
       const token = await user.generateAuthToken();
        await user.save()
        res.status(201).send({user, token})
    } catch (e) {
        res.status(400).send(e);
    }
}

exports.login = async (req, res) => {
    try {
        const user = await userModel.findByCredencials(req.body.email, req.body.password)
        const token = await user.generateAuthToken();
        res.status(200).send({user,token})
    } catch (e) {
        res.status(400).send(e);
    }
}

exports.logout = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) =>{
            return token.token !== req.token
        })
        await req.user.save()
        res.status(200).send()
    } catch (e) {
        res.status(500).send(e);
    }
}


exports.getMyprofile = async (req, res) => {
    res.status(200).send(req.user)
}


exports.getUsers = async (req, res) => {
    try {
        const users = await userModel.find({})
        res.status(200).send(users)
    } catch (e) {
        res.status(500).send(e)
    }
}

exports.getUserById = async (req, res) => {
    const _id = req.params.id;
    try {
        let user = await userModel.findById(_id)
        if (!user) {
            return res.status(404).send('User id not found in database ' + _id);
        }
        res.status(200).send(user);
    } catch (e) {
        res.status(400).send(e);
    }
}

exports.updateUser = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowUpdates = ['name', 'email', 'phone', 'age'];
    const isvalidOperation = updates.every((update) => allowUpdates.includes(update))

    if (!isvalidOperation) {
        return res.status(400).send({ error: 'Invalid body params' });
    }

    try {
        const user = await userModel.findById(req.params.id)
        updates.forEach((update) => user[update] = req.body[update])
        await user.save()

        // const user = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!user) {
            return res.status(404).send()
        }
        res.status(200).send(user)
    } catch (e) {
        res.status(400).send(e);
    }
}

exports.deleteUser = async (req, res) => {
    try {
        let user = await userModel.findByIdAndDelete(req.params.id)
        if (!user) {
            return res.status(404).send({ error: 'User id not found in database' });
        }
        res.status(200).send(user);
    } catch (e) {
        res.status(500).send(e);
    }
}