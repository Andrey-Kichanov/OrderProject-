const { Schema, model } = require("mongoose");

const partnerSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    logoLink: {
        type: String,
        required: true,
    },
});

module.exports = model("Partner", partnerSchema);