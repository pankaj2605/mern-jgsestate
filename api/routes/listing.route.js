import express from 'express';
import { createlisting,deleteListing,updateListing } from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';



const router=express.Router();


router.post('/create',verifyToken, createlisting);
router.delete('/delete/:id',verifyToken,deleteListing);
router.post('/update/:id',verifyToken,updateListing);


export default router;