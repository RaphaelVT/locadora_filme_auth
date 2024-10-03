import db from "../config/db.js";

const movieSchema = new db.Schema({
  rente_by: {
    type: db.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  movie_rented: {
    type: db.Schema.Types.ObjectId,
    ref: 'Movie',
    required: true,
  },
  rent_date: {
    type: Date,
    required: true,
  },
  return_date: {
    type: Date,
    required: true,
  },

});

const Movie = db.model("Movie", movieSchema);

export default Movie;