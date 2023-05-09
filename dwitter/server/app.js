import express from 'express';
import 'express-async-errors';
import tweetsRouter from './router/tweetsRouter.js'

const app = express();

app.use('/tweets', tweetsRouter);

app.use((error, req, res, next) => {
    console.error(error);
    res.sendStatus(500);
});

app.listen(8080);
  