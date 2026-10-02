import { Router } from "express";
import { calculateTotal } from "../utils/price.js"

export const priceRouter = Router();

priceRouter.post("/price", (req, res) => {
  const price = Number(req.body?.price);
  const quantity = Number(req.body?.quantity);

  if (!Number.isFinite(price) || !Number.isFinite(quantity)) {
    return res.status(400).json({ error: "Price and quantity must be numbers" });
  }

  const total = calculateTotal(price, quantity);

  res.json({ total });
});