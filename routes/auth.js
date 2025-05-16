import { Router } from "express";

const r = Router();

r.get("/", (req, res) => {
  res.json({
    message: "This /auth/ route",
  });
});

r.post("/login", (req, res) => {
  res.json({
    message: "This /auth/login route",
  });
});

r.post("/register", (req, res) => {
  res.json({
    message: "This /auth/register route",
  });
});

export { r as authRouter };
