const mongoose=require("mongoose")
const Schema=mongoose.Schema

const RatingSchema=new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    review:{
        type:String
    },
    rating:{
        type:String
    },
    active: {
        type: Boolean,
        default: true,
      },
      modifiedOn: {
        type: Date,
        default: Date.now,
      },
    });
    

const Rating=mongoose.model("rating",RatingSchema)
module.exports=Rating 