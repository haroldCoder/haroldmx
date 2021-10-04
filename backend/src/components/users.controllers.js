const Users = require('../models/createusers.js');
const usersctrl = {};

usersctrl.getUsers = async(req,res) =>{
	const users = await Users.find();
	res.json(users)
}
usersctrl.pushUsers = async(req,res) =>{
    const {name,email,password} = req.body;
	const newuser = new Users({
		name: name,
		email: email,
		password: password
	})
	await newuser.save();
}
module.exports = usersctrl;