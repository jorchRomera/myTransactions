import express from 'express';
import { HttpProvider } from './HttpProvider';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const router = HttpProvider.SystemRouter().getRouter();
app.use('/', router);

export default app;
