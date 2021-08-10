/* eslint-disable quotes */
const { connect } = require("mongoose");
const { dbUrl, options } = require("./options");

const connectToDB = () => connect(dbUrl, options);

module.exports = connectToDB;
