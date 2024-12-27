import { Router } from 'express';
import { getSkills, getInterests, getPersonality } from '../controllers';

const router = Router();

router.get('/skills', getSkills);
router.get('/interests', getInterests);
router.get('/personality', getPersonality);

export default router;