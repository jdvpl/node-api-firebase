import {Router} from 'express';
import userController from '../controllers/user'

const user=Router()

user.get('/',userController.getAll)

user.get('/:id',userController.getById)

user.post('/',userController.create)

user.put('/:id',userController.getByIdUpdate)

user.delete('/:id',userController.getByIdDelete)

export default user