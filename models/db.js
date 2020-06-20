var mongoose = require('mongoose')
mongoose.connect('mongodb+srv://test:test@cluster0-fbaku.mongodb.net/prv?retryWrites=true&w=majority',{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },()=>{
console.log('db connect')
});
