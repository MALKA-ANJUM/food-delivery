import express from "express";
import cors from "cors";
import { connectDb } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";



//app config
const app = express();
const port = 4000;


//middleware
app.use(express.json());
app.use(cors());

// db connection
connectDb();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log('Server is running at ', port);
    
})
// mongodb+srv://malkaunidrim:Sanabil@food-delivery-app.shafi.mongodb.net/?retryWrites=true&w=majority&appName=food-delivery-app
