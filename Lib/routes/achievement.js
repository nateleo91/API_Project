import express from 'express'
import achieveController from '../controllers/achievement.js'


const achieveRouter = express.Router()

achieveRouter.get('/', achieveController.index)

achieveRouter.get('/id/:id', achieveController.showID)

achieveRouter.post('/', achieveController.create)

achieveRouter.put('/id/:id', achieveController.edit)

achieveRouter.delete('/id/:id', achieveController.delete)

export default achieveRouter;

/**
 * @api {GET} /achieve Get all achieve
 * @apiName GetAchieve
 * @apiGroup achievements
 * 
 * @apiSuccess {String} _id Object id
 * 
 * @apiSuccessExample Successful Response:
 * {
 *   "Results": [
 *     {
 *        "Data": {
 *          "GamePatchID": 36,
 *          "ID": 1834,
 *          "Icon": "/i/002000/002517.png",
 *          "Name": "A Life of Adventure III",
 *          "Name_cn": null,
 *          "Name_de": "Tausendsassa III",
 *          "Name_en": "A Life of Adventure III",
 *          "Name_fr": "Prodige du corps et de l'esprit",
 *          "Name_ja": "十四の道に選ばれし者",
 *          "Name_kr": null,
 *          "Url": "/Achievement/1834"
 *        },
 *        "Text": "Obtain the achievements “Mastering War III” and “Mastering Magic III.”"
 *      },
 * ]
 * 
 */

/**
* @api {get} /achievement/:id Get achievement by ID
 * @apiName GetAchievementById
 * @apiGroup Achievement
 *
 * @apiParam {String} id Achievement's unique ID
 * 
 * @apiSuccess {String} _id Object id
 * 
 * @apiSuccessExample Successful Response:
 * {
 *   "Results": [
 *     {
 *        "Data": {
 *          "GamePatchID": 36,
 *          "ID": 1834,
 *          "Icon": "/i/002000/002517.png",
 *          "Name": "A Life of Adventure III",
 *          "Name_cn": null,
 *          "Name_de": "Tausendsassa III",
 *          "Name_en": "A Life of Adventure III",
 *          "Name_fr": "Prodige du corps et de l'esprit",
 *          "Name_ja": "十四の道に選ばれし者",
 *          "Name_kr": null,
 *          "Url": "/Achievement/1834"
 *        },
 *        "Text": "Obtain the achievements “Mastering War III” and “Mastering Magic III.”"
 *      },
 * ]
 * 
 */