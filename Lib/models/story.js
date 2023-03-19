import mongoose from '../db/connection.js';

const loreSchema = new mongoose.Schema({

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

const Lore = mongoose.model('Lore', loreSchema);

export default Lore;