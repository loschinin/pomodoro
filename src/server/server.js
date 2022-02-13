import express from 'express'
import ReactDOM from 'react-dom/server'
import {indexTemplate} from './indexTemplate'
import {App} from "../components/App";
import axios from "axios";

const app = express()

app.use('/static', express.static('./dist/client'))

app.get('/', (req, res) => {
    res.send(indexTemplate(ReactDOM.renderToString(App())))
})

app.get('/auth', (req, res) => {
    axios.post(
        'https://www.reddit.com/api/v1/access_token',
        `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3001/auth`,
        {
            auth: {username: process.env.CLIENT_ID, password: 'YhDHnCJD9O7OJqGupkHW9NfM6WDbKw'},
            headers: {'Content-type': 'application/x-www-form-urlencoded'}
        }
    )
        .then(({data}) => res.send(
            indexTemplate(ReactDOM.renderToString(App()), data['access_token'])
    ))
        .catch(err => console.log(err))

})

app.get('/best', (req, res) => {
    axios.get(
        'https://www.reddit.com/best.json',
        `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3001/best`,
        {
            auth: {username: process.env.CLIENT_ID, password: 'YhDHnCJD9O7OJqGupkHW9NfM6WDbKw'},
            headers: {'Content-type': 'application/x-www-form-urlencoded'}
        }
    )
        .then(({data}) => {

            res.send(
                indexTemplate(ReactDOM.renderToString(App()), data['access_token'])
            )
        })
        .catch(err => console.log(err))

})



app.listen(3001, () => {
    console.log('Server started on port 3001')
})