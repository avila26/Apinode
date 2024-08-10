import  {getTypes, store, updateTypeUser, deleteTypeUser } from "../controller/TypesUserController.js";
import{verifyToken} from "../middleware/auth.js"
import {Router} from 'express';

const router = Router();
router.get('/',verifyToken,  getTypes);
router.post('/',verifyToken,  store);
router.put('/:id',verifyToken,  updateTypeUser);
router.delete('/:id',verifyToken, deleteTypeUser);


export const routerType =router;