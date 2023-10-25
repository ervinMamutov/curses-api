import express from 'express';
import courseControllers from '../controllers/courseControllers.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/', courseControllers.home);
router.get('/add-course', verifyToken, courseControllers.addCourseForm);
router.post('/add-course', verifyToken, courseControllers.addCourse);

export default router;
