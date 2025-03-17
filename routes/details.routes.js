const express=require("express");
const { getDetails, getDetailsById, createDetails, UpdateDetails, DeleteDetails } = require("../controllers/details.controllers");
const router=express.Router();

router.get('/',getDetails);
router.get('/:id',getDetailsById);
router.post('/',createDetails);
router.put('/:id',UpdateDetails);
router.delete('/:id',DeleteDetails);

module.exports=router;

