const mongoose=require("mongoose")
const Schema=mongoose.Schema

const categorySchema=new Schema({
    categoryname:{
        type:String
        },
    testname:{
        type:String
    }
    },
    {
        timestamps:true
    }
    )

const Category=mongoose.model("category",categorySchema)
module.exports=Category