import express from 'express';
import ctrl from './controller'

const router = express.Router();

router.get('/', ctrl.getEvents)

export default router
