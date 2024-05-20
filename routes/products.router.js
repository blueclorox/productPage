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

router.get('/products', async (req, res) => {
    const data = await Product.find().sort({createdAt: 'desc'})
    return res.status(200).json({status:200, message: '상품 목록 조회 성공', data})
})

router.get('/products/:id', async (req,res) => {
    const { id } = req.params
    const data = await Product.findById(id).exec();
    return res.status(200).json({status:200, message: '상품 상세 조회 성공', data})
})

router.put('/products/:id', (req,res) => {

})

router.delete('/products/:id', (req,res) => {

})

export {router} ;