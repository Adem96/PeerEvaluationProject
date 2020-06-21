var mongoose = require('mongoose')
mongoose.connect('mongodb+srv://skan:skan@cluster0-pegxl.mongodb.net/skan?retryWrites=true&w=majority',{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
(err)=>{
console.log(err);
});

