import express from 'express';
import homeController from '../controller/home_controller.js';
const router=express.Router();

router.get('/',homeController.home);
router.get('/about',homeController.about);
router.get('/skill',homeController.skill);

export default router;