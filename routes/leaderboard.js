import express from 'express';
import Item from '../models/Item.js';

const router = express.Router();

// Get all the item to Items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find().sort({ count: -1 });
    res.status(200).json(items);
  } catch (error) {
    res.status(400).json({
      message: err?.message ?? 'Something went wrong, please try again',
    });
  }
});

// Get all the item from Items (sort ascending)
router.get('/top', async (req, res) => {
  try {
    const items = await Item.find().sort({ count: -1 }).limit(3);
    res.status(200).json(items);
  } catch (error) {
    res.status(400).json({
      message: err?.message ?? 'Something went wrong, please try again',
    });
  }
});

export default router;
