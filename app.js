import express from 'express';
import home from './routes/homepage.js';
import { join } from 'path';

const app=express();
const port=process.env.port||3000;

// middleware for dynamic public folder excess//
app.use(express.static(join(process.cwd(),'public')));
app.use(express.urlencoded({extended:false}));



// code for view engine//
app.set('views','./views');
app.set('view engine', 'ejs');

// routing start here//
app.use('/', home);




app.listen(port, ()=>{
    console.log(`the server is running at http://localhost:3000`);
    
})