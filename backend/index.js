import express from "express";
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/SchtroumpfRoutes';
import cors from 'cors';
import jsonwebtoken from 'jsonwebtoken';
import User from './src/models/userModel';


const app=express();
const PORT=8000;

//connection mongoose
mongoose.promise=global.promise;
mongoose.connect('mongodb://localhost/CRMdb',{
    useNewUrlParser:true

})

//body-parser
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(cors());

//JWT setup
app.use((req, res, next) => {
    if(req.headers && req.headers.authorization && req.headers.authorization .split(' ')[0]==='JWT') {
        jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs',
            (err, decode) => {
            if(err) req.user = undefined;
            req.user = decode;
            next();
            });
    } else {
        req.user = undefined;
        next();
    }
})

routes(app);

app.get("/",(req,res)=>
    res.send(`serveur node et express sur port ${PORT}`)
)

app.listen(PORT,()=>
    console.log(`Votre serveur est sur le port ${PORT}`)
)
