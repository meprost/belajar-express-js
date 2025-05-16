import express from "express";
import { authRouter } from "./routes/auth.js";
import { movieRouter } from "./routes/movie.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/auth", authRouter);

app.use("/movie", movieRouter);

app.listen(port, () => {
  console.log(`Http server is up and running on port ${port}`);
});
