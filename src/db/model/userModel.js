const mongoose = require('mongoose');
const userSchema = require('../schema/userSchema');
const bycrpt = require('bcryptjs');
const jwt = require('jsonwebtoken');


//Generate Access token
userSchema.methods.generateAuthToken = async function(){
    const user = this;

    //Here : ram is token signature and user id is a value
    const token = await jwt.sign({_id : user._id.toString()}, 'ram')
    user.tokens = user.tokens.concat({token})
    await user.save();
    return token
}

//Login verify password for user
userSchema.statics.findByCredencials = async (email, password) => {
    const user = await userModel.findOne({ email })
    if (!user) {
        throw new Error('unable to login , Wrong email');
    }
    const ismatch = await bycrpt.compare(password, user.password)
    if (!ismatch) {
        throw new Error('Unable to login , incorrect Password');
    }
    return user;
}

//Pre function runs and Hashed password before saving data in DB
userSchema.pre('save', async function (next) {
    const user = this
    if (user.isModified('password')) {
        user.password = await bycrpt.hash(user.password, 8)
    }
    next()
})

const userModel = mongoose.model('user', userSchema)
module.exports = userModel;