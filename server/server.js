import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import dbConnect from "./config/mongoose.config.js"
import taskRouter from "./routes/task.routes.js"

dbConnect();

const app = express();
app.use(cors(), express.json())
app.use("/api", taskRouter)


dotenv.config()
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})