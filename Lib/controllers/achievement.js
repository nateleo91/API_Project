import achieve from '../models/achievement.js'

// module.exports = {
  const achieveController ={

  index: (req, res) => {
    achieve.find({})
      .then(achieve => {
        res.json(achieve)
      })
  },
  showID:(req, res) => {
    achieve.find({id: req.params.id})
      .then(achieve => {
        res.json(achieve)
      })
  },
  create: (req, res) => {
    let newAchieve = req.body
    achieve.create(req.body)
      .then(achieve => {
        res.json(newAchieve)
      })
  },
  edit: (req, res) => {
    achieve.findOneAndUpdate({id: req.params.id}, req.body)
      .then(achieve => {
        res.json(achieve)
      })
  },
  delete: (req, res) => {
    achieve.findOneAndRemove({id: req.params.id})
      .then(achieve => {
        res.json(achieve)
      })
  }
}

export default achieveController;