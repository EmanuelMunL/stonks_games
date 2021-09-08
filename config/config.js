//conexión a OracleDB
const oracledb = require('oracledb');
const host = process.env.HOST;
oracledb.autoCommit = true;

cred = {
    user: 'stonks', //cambiar el usuario por el user de su DB
    password: 'stonks',
    connectString: `192.168.1.56/xe` //cambiar el 192.168.1.56 por la conexión de su usuario
}

async function Open(sql, params, autoCommit) {
    console.log("Open in: " + sql);
    let conn = await oracledb.getConnection(cred);
    let result = await conn.execute(sql, params, { autoCommit })
    conn.release();
    return result;
}

exports.Open = Open;