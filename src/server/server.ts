import express, { Request, Response } from "express";
import { routes } from "../routes/routes.js";
import cors from "cors"

const app = express();

app.use(cors())
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