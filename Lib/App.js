import express from 'express'
import router from './routes/router.js'

let app = express()

app.use(express.json())

app.use('/', router)

app.listen(3000, () => console.log('Eorzia is listening on 3000'))