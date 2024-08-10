import { register, login } from "../controller/UserController.js";
import {Router} from 'express';

const router = Router();
router.post('/', register);
router.post('/', login);

export const routerUser = router;