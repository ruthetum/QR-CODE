var mongoose = require('mongoose');    
    
var userSchema = new mongoose.Schema({    
    name:{    
        type:String    
    },    
    tel:{    
        type:String    
    }    
});    
    
module.exports = mongoose.model('user',userSchema);