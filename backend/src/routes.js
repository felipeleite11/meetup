import { Router } from 'express'
import multer from 'multer'

import authMiddleware from './app/middlewares/auth'
import multerConfig from './config/multer'

import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'
import FileController from './app/controllers/FileController'
import MeetupController from './app/controllers/MeetupController'
import SubscriptionController from './app/controllers/SubscriptionController'

const routes = new Router()
const upload = multer(multerConfig)

routes.post('/users', UserController.store)

routes.post('/sessions', SessionController.store)

//Rotas autenticadas
routes.use(authMiddleware)

routes.post('/files', upload.single('file'), FileController.store)

routes.put('/users', UserController.update)

routes.get('/meetups', MeetupController.index)
routes.post('/meetups', MeetupController.store)
routes.put('/meetups', MeetupController.update)
routes.delete('/meetups', MeetupController.delete)
routes.get('/meetups/:id', MeetupController.show)

routes.get('/meetups/subscriptions', SubscriptionController.index)
routes.post('/meetups/:id/subscribe', SubscriptionController.store)

export default routes
