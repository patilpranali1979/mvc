const mongoose = require('mongoose');

const empSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        min:1000,
        max:50000,
        required:true
    },
    dept:{
        type:String,
        enum:["IT","CS","sales"],
        required:true
    }
}, {timestamps:true} );

const empModel = mongoose.model("emp",empSchema);

module.exports = empModel;