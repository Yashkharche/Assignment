import express from 'express';
import { addAdmin, logout, signin, signup, test } from '../controller/authController.js';

const router=express.Router();

router.post('/signup',signup);
router.post('/signin',signin);
router.post('/admin',addAdmin)
router.get('/logout',logout)
router.get('/test',test)


export default router;