import express from "express";
import "dotenv/config";
import movie_router from "./routers/user-router.js";
import rented_router from "./routers/rented-router.js";
import user_router from "./routers/user-router.js";

const app = express();

app.use(express.json());

app.use("/movie", movie_router);
app.use("/rented", rented_router);
app.use("/user", user_router);

app.listen(process.env.API_PORT, () => console.log("Servidor pet auth executando na porta " + process.env.API_PORT));