import express from "express";
import { routes } from "../routes/routes.js";

const app = express();

app.use(express.json());
app.use(routes);

app.get("/", (req: any, res: any) => {
    res.send('connected');
})


try {
    app.listen(8800, async () => {
            console.log('listen port 8800')
    })
} catch (err) {
    console.log('error to listen port 8800 ', err)
}