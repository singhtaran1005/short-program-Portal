import express from 'express';
const router = express.Router();

import { getPosts } from '../controller/posts.js'
router.get('/', getPosts);

export default router;