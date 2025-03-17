const mongoose=require('mongoose');
const DetailsSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Please Enter your Name"]
        },
        RollNumber:{
            type:Number,
            required:[true,'Please Enter your Roll no'],
            default:0
        },
        EmailId:{
            type:String,
            required:[true,'Please Enter your Email']
        },
        dob:{ 
            type: Date, required: true 
        },
        gender:{
             type: String, enum: ['Male', 'Female', 'Other'], 
             required: true 
        },
        bloodGroup:{ 
            type: String 
        }
    },
    {
        Timestamp:true
    })
    const Details=mongoose.model('Details',DetailsSchema);
    module.exports=Details;