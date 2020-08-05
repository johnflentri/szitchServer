const express = require("express")
const cors = require("cors")
const userRouter = require("./user/router")
const eventRouter = require("./event/router")
const authRouter = require('./auth/router')
const seedFunction = require('./seeds/usersAndStatistics')

const app = express()
const corsMiddleware = cors();
const jsonParser = express.json();

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// seedFunction()

app.use(corsMiddleware)
app.use(jsonParser)
app.use(userRouter)
app.use(eventRouter)
app.use(authRouter)
