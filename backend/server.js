import express from 'express';
import mongoose from 'mongoose';
import Data from './data.js';
import Videos from './dbModel.js'

// app config
const app = express();
const port = 9000;

// middlewares
app.use(express.json());

// app.use((req, res, next) => {
//     res.setHeaders("Access-Control-Allow-Origin", "*"),
//         res.setHeaders("Access-Control-Allow-Headers", "*"),
//         next()
// })

// DB config
const connection_url = 'mongodb+srv://sadman-tiktok:sadman@cluster0.a6pfgu0.mongodb.net/tiktok-app?retryWrites=true&w=majority'

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// api endpoints
app.get('/', (req, res) => res.status(200).send('Hello Sadman!'));

app.get('/v1/posts', (req, res) => res.status(200).send(Data));

app.get('/v2/posts', (req, res) => {
    Videos.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(500).send(data);
        }
    })
})

app.post('/v2/posts', (req, res) => {
    // POST request ADDS DATA to the database
    const dbVideos = req.body

    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

// listen
app.listen(port, () => console.log(`listening on localhost: ${port}`));