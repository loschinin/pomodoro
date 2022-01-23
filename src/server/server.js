import express from 'express'
import ReactDOM from 'react-dom/server'
import {indexTemplate} from './indexTemplate'
import {App} from "../client/components/App";

const app = express()

app.use('/static', express.static('./dist/client'))

app.get('/', (req, res) => {
    res.send(indexTemplate(ReactDOM.renderToString(App())))
})

app.listen(3001, () => {
    console.log('Server started on port 3001')
})