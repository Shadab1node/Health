const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const packageSchema=new Schema({
    categoryId:{
        type:Schema.Types.ObjectId,
        ref:"category"
    },
    field1:{
        type:String,
        required:true
    },
    field2:{
        type:String,
    },
    field3:{
        type:String,
    },
    field4:{
        type:String,
    },
    field5:{
        type:String,
    },
    field6:{
        type:String,
    },
    field7:{
        type:String,
    }
},{
    timestamps:true
}

)

const Package=mongoose.model("package",packageSchema)
module.exports=Package