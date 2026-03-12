import exp from 'express'
import {UserModel} from '../Models/UserModel.js'
import {hash} from "bcryptjs"
export const commonApp=exp.Router()

// Route for registration 
commonApp.post("/users",async(req,res)=>{
    // get user from req
    const newUser=req.body
    // hash pass and repl plain with hashed one 
    newUser.password=await hash(newUser.password,12)
    //create New user document
    const newUserDoc=new UserModel(newUser)
    // save document 
    await newUserDoc.save();
    // send resposne
    res.status(201).json({message:"User Created"})

})

