import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import api from './api'

const app = express()

app.set('port', process.env.PORT || 8888)

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser({limit: '50mb'}))
app.use(bodyParser.urlencoded({
  urlencoded: true,
  limit: '50mb',
  parameterLimit: 1000000
}))
app.use('/', api)

app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`)
})
