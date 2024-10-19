import express, {Request, Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => console.log("Connected to Database!"))

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test, async", (req, res) => { 
    res.json({message: "Hello World"});

});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
