import express from 'express';
import Product from '../schemas/product.schema.js';

const router = express.Router();

router.post('/product', async(req, res, next) => {
    
    const {productName, productDescription, productCount, productManager, productPassword} = req.body;

    const productAdded = await date.now().exec()

    const productId = 1
    if(Product.find(productId)){
        productId += 1
    }

    const productStatus = 'FOR_SALE'
    if(productCount == 0){
        productStatus = 'SOLD_OUT'
    }

    if(productName == Product.find(productName)){
        return res.status(400).json({errorMessage: '이미 등록된 상품입니다'})
    }

    const createProduct = await Product.create({
        productId: productId,
        productName: productName,
        productDescription: productDescription,
        productManager: productManager,
        productStatus: productStatus,
        productCount: productCount,
        productPassword: process.env.productPassword,
        productAdded: productAdded,
        productUpdate: 'Nothing done'
        })

    

    const Product = new Product({createProduct})
    await Product.save();

    return res.status(201).json({Product: createProduct})
})


router.get('/Product', async(req, res, next) =>{
    const viewProduct = await Product.find().sort('-producAdded').exec()
    return res.status(200).json({viewProduct})
})

router.delete('Product/:productId', async(req,res,next) =>{
    const inputPassword = req.body;
    const {productId} = req.params;

    const Product = await Product.findById(productId).exec();
    if(inputPassword != process.env.productPassword){
        return res.status(400).json({errorMessage: '비밀번호가 틀렸습니다'})
    }
    
    await Product.deleteOne({_id: productId})
    
    return res.status(200).json({})
})

router.patch('/Product/:productId', async(res, req, next) =>{
    const {productId} = req.params
    const {patchName, patchDescription, patchManager, patchCount, productPassword} = req.body

    if(productPassword !== process.env.productPassword){
        return res.status(400).json({errorMessage: '비밀번호가 틀렸습니다'})
    }
    
    const targetProduct = await Product.findById(productId).exec()
    const patchProduct = await Product.findOne({patch}).exec()

    if(patchName !== undefined){
        productName = patchName
    }
    if(patchDescription !== undefined){
        productDescription = patchDescription
    }
    if(patchManager !== undefined){
        productManager = patchDescription
    }
    if(patchCount !== undefined){
        productCount = patchCount
    }
    targetProduct.order = patchProduct.order

    await targetProduct.save()
    return res.status(200).json({})
})

export default router;