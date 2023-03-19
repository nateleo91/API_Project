import Lore from '../models/story.js';

const storyController = {

  index: (req, res) => {
    Lore.find({})
      .then(xiv => {
        res.json(xiv)
    })
  },
  showID:(req, res) => {
    Lore.find({id: req.params.id})
      .then(xiv => {
        res.json(xiv)
      })
  },
  create: (req, res) => {
    let newAchieve = req.body
    Lore.create(req.body)
      .then(xiv => {
        res.json(xiv)
      })
  },
  edit: (req, res) => {
    Lore.findOneAndUpdate({id: req.params.id}, req.body)
      .then(xiv => {
        res.json(xiv)
      })
  },
  delete: (req, res) => {
    Lore.findOneAndRemove({id: req.params.id})
      .then(xiv => {
        res.json(xiv)
      })
  }
}

export default storyController;