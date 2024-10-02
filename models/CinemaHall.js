import mongoose from "mongoose";

const hallSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  total: {
    type: String,
    required: true,
  },
  ticketsAvailable: [{ type: String, required: true }],
  price: {
    type: String,
    required: true,
  },
});

export default mongoose.model("cinemaHalls", hallSchema);
