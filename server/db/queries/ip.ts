import { Query } from '..';

const one = (ip: string) => Query('SELECT * FROM geoip2_network WHERE ? BETWEEN network_start AND network_end', [ip]);

export default {
    one
}