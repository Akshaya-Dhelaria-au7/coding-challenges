import express from 'express';
import routes from './routes';

const app = express();

app.use(express.urlencoded({extended: false}));

app.use('/', routes);


app.listen(8080, () => console.log(`Listening to ${port} port`));
