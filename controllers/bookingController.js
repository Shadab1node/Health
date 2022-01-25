const Booking=require("../models/bookingModel")

// BOOKING ADD

exports.addbooking=async (req,res)=>{
    const bookingdate = req.body.bookingdate;
        const checkUser = await Booking.findOne({ bookingdate: bookingdate });
    if (checkUser) {
         return res
        .status(400)
        .json({ errors: [{ msg: "This date is already booked" }] });
    }
    try {
        const booking=new Booking(req.body)
        booking.user=req.user._id
        booking.member = {
            name: req.body.name,
            relation:req.body.relation,
            DOB:req.body.DOB,
            gender:req.body.gender,
            number:req.body.number,
            email:req.body.email      
          };
        booking.save()
        return res.status(200).json({msg:"booking successfully",booking})
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg:"something went wrong"})        
    }
}


// GET BOOKING DETAIL

exports.getbooking=async (req,res)=>{
try {
    const getbooking=await Booking.find({user:req.user._id}).populate("package")
    .populate("user")
    return res.status(200).json({msg:"booking get successfully",getbooking})
} catch (error) {
    console.log(error)
    return res.status(400).json({msg:"something went wrong"})       
 }
}

// UPDATE BOOKING

exports.updatebooking=async (req,res)=>{
    try {
        const {bookingdate,bookingtime,patientname,patientnumber}=req.body
        const updatebooking=await Booking.findOneAndUpdate(req.user.id,{
            bookingdate,
            bookingtime,
            patientname,
            patientnumber
        })
        return res.status(200).json({msg:"booking update successfully",updatebooking})
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg:"something went wrong"})       
     } 
}

// DELETE BOOKING

exports.deletebooking=async (req,res)=>{
    try {
        const deletebooking=await Booking.findOneAndDelete({user:req.user._id})
        return res.status(200).json({msg:"booking delete successfully",deletebooking})
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg:"something went wrong"})       
     } 
}


// GET ALL BOOKING
exports.allbooking=async (req,res)=>{
    try {
        const allboking=await Booking.find({})
        return res.status(200).json({msg:"all booking get successfully",allboking})
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg:"something went wrong"})       
        
    }
}
