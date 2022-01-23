const { Schema, model } = require ('mongoose');

const EmailSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    deleted: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
});

module.exports = model('Email', EmailSchema);