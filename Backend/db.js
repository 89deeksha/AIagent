const mongoose=require('mongoose')
const env=require('dotenv').config()
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
console.log("mongodb connected...")
}).catch((err)=>{
console.log(err)
})