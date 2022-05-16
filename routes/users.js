import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.status(400).json({
    message: err?.message ?? 'Something went wrong, please try again',
  });
});

export default router;
