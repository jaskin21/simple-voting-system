import express from 'express';
import Item from '../models/Item.js';

const router = express.Router();

// Get all the item from Items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find({}, { _id: -1, name: -1 });
    res.status(200).json(items);
  } catch (error) {
    res.status(400).json({
      message: err?.message ?? 'Something went wrong, please try again',
    });
  }
});

//add item to Items
router.post('/', async (req, res) => {
  const item = new Item({
    name: req.body.name,
    count: 0,
  });
  try {
    const saveItem = await item.save();
    res.status(200).json(saveItem);
  } catch (error) {
    res.status(400).json({
      message: err?.message ?? 'Something went wrong, please try again',
    });
  }
});

//delete item from Items
router.delete('/:itemId', async (req, res) => {
  try {
    const deleteItem = await Item.remove({ _id: req.params.itemId });
    res.status(200).json(deleteItem);
  } catch (error) {
    res.status(400).json({
      message: err?.message ?? 'Something went wrong, please try again',
    });
  }
});

export default router;
