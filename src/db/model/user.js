const mongoose = require('mongoose');
const validator = require('validator');

const user = mongoose.model('user', {
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('provide valid email address')
            }
        }
    },
    mobile: {
        type: Number,
        require: true,
        unique: true,
        minlength: 11
    },
    age: {
        type: Number,
        deafult: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('age must be a positive number');
            }
        }
    },
    password: {
        type: String,
        require: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('password should not contain "password"')
            }
        }
    },
    created_dt: {
        type: Date,
        default: Date.now()
    },
    updated_dt: {
        type: Date,
        default: null
    }
})

module.exports = user;