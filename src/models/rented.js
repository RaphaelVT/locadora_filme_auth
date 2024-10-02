import db from "../config/db.js";

const movieSchema = new db.Schema({
  rente_by: {
    type: String,
    required: true,
  },
  movie_rented: {
    type: String,
    required: true,
  },
  rent_date: {
    type: Number,
    required: true,
  },
  return_date: {
    type: Number,
    required: true,
  },

});

const Movie = db.model("Movie", movieSchema);

export default Movie;