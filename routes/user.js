import {Router} from 'express';
import userController from '../controllers/user'

const user=Router()

user.get('/usuarios',userController.getAll)

user.get('/usuario/:id',userController.getById)

user.post('/crear',userController.create)

user.put('/actualizar/:id',userController.getByIdUpdate)

user.delete('/borrar/:id',userController.getByIdDelete)

export default user