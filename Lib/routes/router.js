import express from 'express';
import storyRouter from './story.js';
import achieveRouter from './achievement.js';

const router = express.Router();

router.use(express.json())

router.use('/story', storyRouter);
router.use('/achievement', achieveRouter);

export default router;