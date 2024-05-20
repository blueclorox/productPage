import { required } from 'joi';
import mongoose from 'mongoose';
import { PRODUCT_STATUS } from '../constants/product.constants'

const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true, 
    unique: true,
  },
  productDescription: {
    type: String,
    required: true, 
  },
  productManager: {
    type: String, 
    required: true, 
  },
  productPassword: {
    type: String,
    required: true,
    select: false,
  },
  productStatus: {
    type: String,
    required: true,
    enum: Object.values(PRODUCT_STATUS),
    default: PRODUCT_STATUS.FOR_SALE,
  },
},
{ timestamps: true, toJSON:{ virtuals: true }},
);

export const Product = mongoose.model('Product', ProductSchema);