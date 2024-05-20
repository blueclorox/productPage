import express from 'express';
import connect from '../schemas/index.js'
import router from '../routes/products.router.js'
import { SERVER_PORT } from '../constants/env.constant.js';

const app = express();
const PORT = process.env.SERVER_PORT;

connect();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = express.Router();

router.get('/', (req, res) => {
  return res.json({ message: 'Hi!' });
});

app.use('/api', [router, productRoutes]);


app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});

