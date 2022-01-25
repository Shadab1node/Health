const mongoose=require("mongoose")
const Schema=mongoose.Schema

const bookingSchema=new Schema({
  bookingdate:String,
  bookigtime:String,
  patientname:String,
  patientnumber:Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    package:{
      type:Schema.Types.ObjectId,
      ref:"package"
    },
    member: {  
      type: 
        {
          name:String,
          relation:String,
          DOB:String,
          gender:{
            type:String,
            enum:["male","female"]
          },
          number:{
            type:Number,
          },
          email:String
          },
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
    

const Booking=mongoose.model("booking",bookingSchema)
module.exports=Booking 