import express from 'express';
import ctrl from './controller'

const router = express.Router();

router.get('/', ctrl.getArticles)

export default router
