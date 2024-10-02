import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  actors: [{ type: String, required: true }],
  cinemaHalls: [{ type: String, required: true }],
  releaseDate: {
    type: Date,
    required: true,
  },
  poster: {
    data: Buffer,
    contentType: String,
  },

  //   bookings: [{ type: mongoose.Types.ObjectId, ref: "Booking" }],
});

export default mongoose.model("Movie", movieSchema);
