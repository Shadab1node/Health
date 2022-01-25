let router = require("express").Router();
const Controller=require("../controllers/packageController")
const auth=require("../middleware/auth")

// CATEGORY ROUTE

router.route("/addpackage").post(auth.userloggedIn,Controller.addpackage)
router.route("/getpackage").get(auth.userloggedIn,Controller.getpackage)
// router.route("/getallcategory").get(Controller.getallcategory)
// router.route("/updatecategory/:id").put(Controller.updatecategory)
// router.route("/deletecategory/:id").delete(Controller.deletecategory)


module.exports = router;
