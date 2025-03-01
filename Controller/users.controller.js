import bcrypt from "bcrypt";
import userModel from "../Model/users.model.js";
import jwt from "jsonwebtoken";

export async function register(req,res) {
    try {
       const {fullName,email,password} = req.body;

       const userExists = await userModel.findOne({email});

       if(userExists){
        return res.status(403).json({message: "User with this email already exists."})
       }

       const newUser = new userModel({
        fullName,
        email,
        password: bcrypt.hashSync(password,10)
       });

       newUser.save().then((data)=>{
        console.log(data)})

       res.status(201).json({message:newUser});
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).send({ error: "Error fetching products" });
    }
    
}

export async function login(req,res) {
    try {
        const {email,password} = req.body;
        
       const userExists = await userModel.findOne({email});

       if(!userExists){
        return res.status(403).json({message: "User with this email dosen't exist."})
       }

       let validatePassword = bcrypt.compareSync(password,userExists.password);

       if(!validatePassword){
        return res.status(403).json({message: "Password is incorrect."})
       }

       let token = jwt.sign({id: userExists._id},"32bitpersonalscretkeys",{expiresIn:"10m"});

       res.status(200).send({message: "Login successful!", accessToken:token})
        
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).send({ error: "Error fetching products" });
    }
    
}