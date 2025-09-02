import { messages } from "../db.js";
export const message = (req, res) => {
	const searchId= req.params.id;
    const resMessage=messages.find(mess=>mess.id===searchId)
    res.render('viewMessage',{resMessage})
};
