import express from "express"
export const indexRouter=express.Router();

import {board} from "../controllers/board.js"
import {message} from "../controllers/message.js"
import { addMessage } from "../controllers/addMessage.js";
import {postMessage} from "../controllers/postMessage.js"

indexRouter.get('/',board);
indexRouter.get('/message/:id',message)
indexRouter.get('/new',addMessage)
indexRouter.post('/new',postMessage)