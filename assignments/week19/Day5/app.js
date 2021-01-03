import express from 'express';
import routes from './routes';
import session from 'express-session';

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(session({
    secret:"todo",
    resave:false,
    saveUninitialized: true,
    cookie:{
        secure:true,
        httpOnly: false,
        maxAge: 60000
    }
}))

app.use('/', routes);


app.listen(8080, () => console.log(`Listening to ${port} port`));
