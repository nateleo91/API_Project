import express from 'express'
import storyController from '../controllers/story.js'

const storyRouter = express.Router()

storyRouter.get('/', storyController.index)

storyRouter.get('/id/:id', storyController.showID)

storyRouter.post('/', storyController.create)

storyRouter.put('/id/:id', storyController.edit)

storyRouter.delete('/id/:id', storyController.delete)

export default storyRouter;

/**
 * @api {GET} /story Get all achieve
 * @apiName GetAchieve
 * @apiGroup achievements
 * 
 * @apiSuccess {String} _id Object id
 * 
 * @apiSuccessExample Successful Response:
 * 
 * "Results": [
 *  {
 *     "Data": {
 *       "GamePatchID": 69,
 *       "ID": 25707,
 *       "Icon": null,
 *       "Name": null,
 *       "Name_cn": null,
 *       "Name_de": null,
 *       "Name_en": null,
 *       "Name_fr": null,
 *       "Name_ja": null,
 *       "Name_kr": null,
 *       "Url": "/InstanceContentTextData/25707"
 *     },
 *     "Text": "But come, we shouldn't dwell on the beginning when so much of your story awaits."
 *   },
 * ]
 * 
 */

/**
 * @api {get} /story/:id Get story by ID
 * @apiName GetStoryById
 * @apiGroup Story
 *
 * @apiParam {String} id Story's unique ID
 * 
 * @apiSuccess {String} _id Object id
 * 
 * @apiSuccessExample Successful Response:
 * 
 * "Results": [
 *  {
 *     "Data": {
 *       "GamePatchID": 69,
 *       "ID": 25707,
 *       "Icon": null,
 *       "Name": null,
 *       "Name_cn": null,
 *       "Name_de": null,
 *       "Name_en": null,
 *       "Name_fr": null,
 *       "Name_ja": null,
 *       "Name_kr": null,
 *       "Url": "/InstanceContentTextData/25707"
 *     },
 *     "Text": "But come, we shouldn't dwell on the beginning when so much of your story awaits."
 *   },
 * ]
 * 
 */

