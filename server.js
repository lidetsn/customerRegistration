
let express=require("express")
let routes=require("./routes")
let mongoose=require("mongoose")

 let app=express()

 app.use(express.urlencoded({extended:true}))
 app.use(express.json())

const port=5000

app.use(routes)
//require("./routes/apiRoutes")(app)
 //mongoose.connect('mongodb://localhost/customers_database');


app.listen(port,()=>console.log(`app is listining port ${port}`))
