const { Client } = require("pg");
const { username_password , host_ip_port } = require("../BizTime-Unit_35-1/secret");

let db = new Client({
    connectionString: `postgresql://${username_password}@${host_ip_port}/lunchly`
});

db.connect();

module.exports = db;