import express from 'express'
import achieveController from '../controllers/achievement.js'

const achieveRouter = express.Router()

achieveRouter.get('/', achieveController.index)

achieveRouter.get('/id/:id', achieveController.showID)

achieveRouter.post('/', achieveController.create)

achieveRouter.put('/id/:id', achieveController.edit)

achieveRouter.delete('/id/:id', achieveController.delete)

export default achieveRouter;