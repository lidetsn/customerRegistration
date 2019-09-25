const router = require("express").Router();
let customerrouter=require("./customers")



router.use("/customer",customerrouter)



module.exports=router