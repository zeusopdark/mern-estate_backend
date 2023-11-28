import express from "express";
import { createListing, deleteListing, getListing, getListings, updateListing } from "../controllers/listing.contoller.js";
import verifyUser from "../utils/verifyUser.js"

const router = express.Router();

router.post('/create', verifyUser, createListing);
router.delete('/delete/:id', verifyUser, deleteListing);
router.post('/update/:id', verifyUser, updateListing);
router.get('/getListing/:id', getListing);
router.get('/get', getListings);
export default router;