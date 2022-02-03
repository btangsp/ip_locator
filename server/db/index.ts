import * as mysql from 'mysql2';

require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DBNAME
});

export const Query = (query: string, values?: any) => {
    return new Promise((resolve, reject) => {
        pool.query(query, values, (err, results) => {
            if (err) {
                console.log("process.env.MYSQL_HOST:", process.env.MYSQL_HOST);
                reject(err);
            } else {
                resolve(results);
            }
        })
    })
}

import ip from './queries/ip';

export default {
    ip
}