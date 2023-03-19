import mongoose from '../db/connection.js';

const achieveSchema = new mongoose.Schema({

  "Results": [
    {
      "Data": {
        "ID": Number,
        "Icon": String,
        "Name": String,
        "Name_cn": String,
        "Name_en": String,
        "Name_fr": String,
        "Name_ja": String,
        "Name_kr": String,
      },
      "Text": String
      }
  ]
})

const Achieve = mongoose.model('Achieve', achieveSchema);

export default Achieve;