/* eslint-disable quotes */
const { connect, disconnect } = require("mongoose");
const { dbUrl, options } = require("./options");

const connectToDB = () => connect(dbUrl, options);
const disconnectDB = () => disconnect();

module.exports = { connectToDB, disconnectDB };
