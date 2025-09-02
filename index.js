import express from "express";
import path from "path"
import livereload from "livereload";
import connectLiveReload from "connect-livereload";
const app=express();
const __dirname = import.meta.dirname;
const PORT=3000;
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
	setTimeout(() => {
		liveReloadServer.refresh("/");
	}, 3000);
});
app.use(connectLiveReload());

app.use(express.urlencoded({ extended: true }));
import {indexRouter} from "./routes/indexRouter.js"

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "src")));

app.use("/",indexRouter)

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})

