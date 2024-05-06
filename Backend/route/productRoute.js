import express from 'express';
import { deleteProduct, getProducts, getSingleProduct, saveProducts, updateProduct } from '../controller/productController.js';
import { verifyAdmin } from '../utils/verifyAdmin.js';

const router=express.Router();

router.get('/products',getProducts);
router.post('/product',verifyAdmin,saveProducts);
router.get('/product/:id',verifyAdmin,getSingleProduct)
router.post('/product/:id',verifyAdmin,updateProduct);
router.delete('/delete/:id',verifyAdmin,deleteProduct);


export default router;