require('dotenv').config();
let express = require("express");
require("./config/database")
const twilio = require('twilio');
const cors = require("cors");
let app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ALL ROUTES

let signupRoutes = require("./routes/signup-routes");
let adminRoutes=require("./routes/admin-routes")
let brandRoutes=require("./routes/brand-routes")
let categoryRoutes=require("./routes/category-routes")
let packageRoutes=require("./routes/package-routes")
let bookingRoutes=require("./routes/booking-routes")
let reportRoutes=require("./routes/report-routes")
let receiptRoutes=require("./routes/receipt-routes")
let priscriptionRoutes=require("./routes/priscription-routes")
let commentRoutes=require("./routes/comment-routes")
let ratingRoutes=require("./routes/rating.review-routes")
let bannerRoutes = require("./routes/banner-routes");


var port = process.env.PORT || 9999;
app.use("/api",
signupRoutes,
adminRoutes,
brandRoutes,
categoryRoutes,
packageRoutes,
bookingRoutes,
reportRoutes,
receiptRoutes,
priscriptionRoutes,
commentRoutes,
ratingRoutes,
bannerRoutes
 )

app.listen(port, function () {console.log("Running on port " + port)});
module.exports = app;
