import express from 'express';
import morgan from 'morgan';
import * as path from 'path';
import routes from './server/routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.static('./client/build'));
app.use(express.json());
app.use(routes);
app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server listening on port: ${port}`));