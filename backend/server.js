import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routers/foodRouter.js"
import userRouter from "./routers/userRouter.js"
import 'dotenv/config'
import cartRouter from "./routers/cartRouter.js"
import orderRouter from "./routers/orderRouter.js"




// app config 
const app = express() 
const port = 4000 
// middleware 
app.use (express.json()) 
app.use(cors())

//connect db    
connectDB();
//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static("uploads"))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})


// mongodb+srv://ducok123aa:12345678@@Ab@cluster0.fhgocac.mongodb.net/?