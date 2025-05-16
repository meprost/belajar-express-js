import { Router } from "express";

const r = Router();

const generateUUID = () => crypto.randomUUID();

const movieList = [
  {
    id: generateUUID(),
    title: "Movie number 1",
    description: "Movie number 1 terbaik",
    rating: 10,
  },
  {
    id: generateUUID(),
    title: "Movie number 2",
    description: "Movie number 2 terbaik",
    rating: 10,
  },
  {
    id: generateUUID(),
    title: "Movie number 3",
    description: "Movie number 3 terbaik",
    rating: 10,
  },
  {
    id: generateUUID(),
    title: "Movie number 4",
    description: "Movie number 4 terbaik",
    rating: 10,
  },
];

r.get("/", (req, res) => {
  res.json({
    data: movieList,
  });
});

r.get("/:id", (req, res) => {
  const { id } = req.params;

  

  res.json({
    message: id,
  });
});

export { r as movieRouter };
