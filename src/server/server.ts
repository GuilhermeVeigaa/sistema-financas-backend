import express, { Request, Response } from "express";
import { routes } from "../routes/routes.js";
import cors from "cors"

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(express.json());
app.use(routes);


app.get("/", (req: Request, res: Response) => {
    res.send('connected');
})


try {
    app.listen(8800, async () => {
            console.log('listen port 8800')
    })
} catch (err) {
    console.log('error to listen port 8800 ', err)
}