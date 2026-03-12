    import exp from 'express'
    import {config} from 'dotenv'
    import {connect} from 'mongoose'
    import {userApp} from "./APIs/UserAPI.js"
    import {authorApp} from "./APIs/AuthorAPI.js"
    import { adminApp } from "./APIs/AdminAPI.js"
    import {commonApp} from "./APIs/commonAPI.js"

    config();
    const app=exp();
    //body parser middleware
    app.use(exp.json())
    //path level middlewares
    app.use("/user-api",userApp);
    app.use("/author-api", authorApp);
    app.use("/admin-api", adminApp)
    app.use ("/common-api",commonApp)
    // assign port number
    const port =process.env.PORT || 5000

    // Create Database
    const ConnectDB=async()=>{
        try{
            await connect(process.env.DB_URL)
            console.log("DataBase connected")
            // assign port
            const port =process.env.PORT || 5000;
            app.listen(port,()=> console.log(`server listening on ${port}...`))
        } catch(err){
            console.log("Error in data base connection",err)
        }
    };
ConnectDB();





// to handle invalid path 
app.use((req,res,next)=>{
    console.log(req.url)
    res.status(404).json({message:`path ${req.url} is invalid `})
})





// to handle error we use a  middleware
app.use((err,req,res,next)=>{//error handling middleware parameters have 4 parameters
    //res.status().json({message:"error ocuured",error:err.message})

    //validator error
    console.log(err.name)
    if(err.name==='ValidatorError'){
        return res.status(400).json({message:"error occured ",error:err.message})
    }
    //cast error
    if(err.name==='CastError'){
        return res.status(400).json({message:"error occured ",error:err.message})
    }

    //send server error
    res.status(500).json({message:"error occured ",error:err.message})
})