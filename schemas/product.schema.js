import { required } from 'joi';
import mongoose from 'mongoose';

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
  }

});

const schema = joi.Object({
    productName: Joi.string().required()
})

export default mongoose.model('Product', ProductSchema);