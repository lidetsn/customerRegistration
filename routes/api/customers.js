
const router = require("express").Router();
let customercontroller=require("../../controller/customercontroller")





router.route("/")
  .get(customercontroller.findAll)
  .post(customercontroller.create)
  

  router.route("/:id")
       .delete(customercontroller.remove)
       .get(customercontroller.findById)
       .put(customercontroller.update)
// module.exports=function(app){
    
// app.get("/all",customercontroller.findAll)
// app.get("/:id",customercontroller.findById
// app.post("/:id",customercontroller.create)
// app.put("/:id",customercontroller.update)
// app.delete("/:id",customercontroller.remove)

// }

module.exports=router