import express from 'express';
import connect from '../schemas/index.js'
import { router } from '../routes/products.router.js'
import { SERVER_PORT } from '../constants/env.constant.js';

connect()

const app = express();
const PORT = process.env.SERVER_PORT;



app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', router);

app.listen(SERVER_PORT, () => {
  console.log(`서버가 ${SERVER_PORT}로 열렸어요`)
})
