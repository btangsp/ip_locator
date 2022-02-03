import { Query } from '..';

const one = (ip: string) => Query(`SELECT * FROM geoip2_network WHERE ${ip} BETWEEN network_start AND network_end`);

export default {
    one
}