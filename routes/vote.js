import express from 'express';
import Item from '../models/Item.js';

const router = express.Router();

//increment the count on specific id
router.post('/', async (req, res) => {
  try {
    const addVoteCount = await Item.updateOne(
      { _id: req.body.item },
      {
        $inc: { count: 1 },
      }
    );
    res.status(201).json(addVoteCount);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

export default router;
