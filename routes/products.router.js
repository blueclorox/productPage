import express from 'express';
import {Product} from '../schemas/product.schema.js';

const router = express.Router();

router.post('/products', async (req, res) => {
    const {productName, productDescription, productManager, productPassword} = req.body

    const product = new Product({ productName, productDescription, productManager, productPassword })
    let data = await product.save();

    data = {...data.toJSON(),productPassword: undefined};

    return res.status(201).json({status:201, message: '상품 생성 성공', data})
})

router.get('/products', (req, res) => {

})

router.get('/products/:id', (req,res) => {

})

router.put('/products/:id', (req,res) => {

})

router.delete('/products/:id', (req,res) => {

})

export {router} ;