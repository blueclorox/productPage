import express from 'express';
import Product from '../schemas/product.schema.js';

const router = express.Router();

router.post('/product', async(req, res, next) => {
    
    const {productName, productDescription, productCount, productManager, productPassword} = req.body;

    const productAdded = await date.now().exec()

    const productStatus = 'FOR_SALE'
    if(productCount == 0){
        productStatus = 'SOLD_OUT'
    }

    if(productName == Product.find(productName)){
        return res.status(400).json({errorMessage: '이미 등록된 상품입니다'})
    }

    const createProduct = await Product.create({
        productName: productName,
        productDescription: productDescription,
        productManager: productManager,
        productStatus: productStatus,
        productCount: productCount,
        productPassword: productPassword,
        productAdded: productAdded,
        productUpdate: 'Nothing done'
        })


    return res.status(201).json({Product: createProduct})
})

export default router;