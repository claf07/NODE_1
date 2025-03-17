const stud_details=require('../models/details');

const getDetails=async(req,res)=>{
    try{
        const details=await stud_details.find({});
        res.status(200).json(details);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}

const getDetailsById=async(req,res)=>{
    try{
        const {id}=req.params;
        const details=await stud_details.findById(id);
        if(!details){
            res.status(404).json({message:"Id not found"});
        }
        else{
        res.status(200).json(details);
        }
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}

const createDetails=async(req,res)=>{
    try{
        const details=await stud_details.create(req.body);
        res.status(200).json(details);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}

const UpdateDetails=async(req,res)=>{
    try{
        const {id}=req.params;
        const details=await stud_details.findByIdAndUpdate(id,req.body);
        if(!details){
            res.status(404).json({message:"Id not found"});
        }
        else{
            const updatedetails =await stud_details.findById(id);
            res.status(200).json(updatedetails);
        }
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}

const DeleteDetails=async(req,res)=>{
    try{
        const {id}=req.params;
        const details=await stud_details.findByIdAndDelete(id);
        if(!details){
            res.status(404).json({message:"Details not found"});
        }
        else{
            
            res.status(200).json({message:"Details deleted successfully!"});
        }
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}
module.exports={
    getDetails,
    getDetailsById,
    UpdateDetails,
    createDetails,
    DeleteDetails
};
