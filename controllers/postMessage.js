import { messages } from "../db.js";
export const postMessage = (req, res) => {
    const {author,message}=req.body;
    const index=messages.length
    messages.push({
		id: toString(index + 1),
		message: message,
		username: author,
		added: new Date(),
	});
    res.redirect("/");
    console.log(messages)
};
