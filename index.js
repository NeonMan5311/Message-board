import express from "express";
import path from "path"

const app=express();
const __dirname = import.meta.dirname;



app.use(express.urlencoded({ extended: true }));
import {indexRouter} from "./routes/indexRouter.js"

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "src")));

app.use("/",indexRouter)

export default app;
