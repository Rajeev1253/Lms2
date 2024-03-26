import express from 'express';
import addbookController from '../controllers/addbook.controller.js';

const router = express.Router()

router.post("/addbook", addbookController.addbook)
export default router;