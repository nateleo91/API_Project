import axios from 'axios';
import ff14Model from "../models/story.js";
import achievement from "../models/achievement.js"
import achieveData from "./achievements.json" assert {type: 'json'}

//fetching xivapi 
async function seed() {
  try {
    const response = await axios.get('https://xivapi.com/lore?string=story&columns=Text,Data');
    const data = response.data;
    await ff14Model.deleteMany({});
    await ff14Model.insertMany(data);
    console.log("Data successfully seeded.");
  } catch (error) {
    console.error(error);
  }

// seeding achievement  
  achievement.remove({})
achievement.collection.insert(achieveData)
  .then(achievements => {
    console.log(achieveData)
  })
  .catch(err => {
    console.log(err)
  })
}

seed();