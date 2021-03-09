const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://luckies:Shanu3742@cluster0.m0kic.mongodb.net/myData?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology: true ,
    useCreateIndex:true

}).then(() => {
    console.log("connection is don..");
}).catch((err) => {
    console.log(err);
})
