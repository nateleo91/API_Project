import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/FFXIV', {useNewUrlParser: true,
useUnifiedTopology: true})


export default mongoose