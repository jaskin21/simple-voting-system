import mongoose from 'mongoose';

const ItemSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  count: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model('Items', ItemSchema);
