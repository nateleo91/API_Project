import express from 'express'
import storyController from '../controllers/story.js'

const storyRouter = express.Router()

storyRouter.get('/', storyController.index)

storyRouter.get('/id/:id', storyController.showID)

storyRouter.post('/', storyController.create)

storyRouter.put('/id/:id', storyController.edit)

storyRouter.delete('/id/:id', storyController.delete)

export default storyRouter;