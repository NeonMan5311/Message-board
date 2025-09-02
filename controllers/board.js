import { messages } from "../db.js"
export const board=(req,res)=>{
    res.render('mBoard',{
        messages
    })
} 