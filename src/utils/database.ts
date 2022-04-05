import mysql from 'mysql2';

import mysql_config from '../config/mysql_config.json';

const pool = mysql.createPool(
    {
        host: mysql_config.host,
        user: mysql_config.user,
        database: mysql_config.database,
        password: mysql_config.password
    }
)

export default pool.promise();