import mongoose from "mongoose";

const addbookSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    author:{
        type:String,
        require:true,
    },
    category:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    coverimage:{
       type:String,
       require:true
    }
})

export const addbookModel = mongoose.model("Books", addbookSchema);