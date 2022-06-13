const express = require('express')
const app = express()
const mongoose = require('mongoose')
const config = require('./config/config')
const postRoutes = require('./routes/postRoute')
const userRoutes = require('./routes/userRoute')


const cors = require('cors')

const session = require("express-session")
let RedisStore = require("connect-redis")(session)
const redis = require("redis")
app.use(cors());


app.use(express.json());

(async () => {
    let redisClient = await redis.createClient({
        host: config.REDIS_URL,
        port: config.REDIS_PORT,
        legacyMode: true
    })

    app.use(session({
        store: new RedisStore({
            client: redisClient,
        }),
        secret: config.SESSION_SCRETE,
        cookie: {
            secure: false,
            // resave: false,
            // saveUninitialized: true,
            httpOnly: true,
            maxAge: 30000
        }
    }))
})();
const connectWithRetry = () => {

    const dbURI = `mongodb://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_IP}:${config.MONGO_PORT}/`
    console.log(dbURI, "dbURI")
    mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('DB ---- Successfuly connected')
    }).catch((e) => {
        console.log("DB connection error ---", e)
        setTimeout(() => {
            connectWithRetry()
        }, 5000);
    })
}
connectWithRetry()

app.enable('trust proxy')


app.get('/api/v1', (req, res) => {
<<<<<<< HEAD
    res.send('Hey !!!')
=======
    res.send('Working  !!!')
>>>>>>> 52e72bfeb08c31ba675625ace7b074bbc602337e
})

app.use('/api/v1/post', postRoutes)
app.use('/api/v1/user', userRoutes)
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})