import mysql from 'promise-mysql';

import keys from './config/keys';

const pool = mysql.createPool(keys.database);

pool.getConnection()
.then(connection => {
    pool.releaseConnection(connection);
    console.log('DB is connected');
});

export default pool;