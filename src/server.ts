import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { taskRouter } from "./routes/tasks.js";
import { priceRouter } from "./routes/priceRoutes.js";

const app = express();
const port = Number(process.env.PORT) || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(process.cwd(), "public")));

app.use("/api", taskRouter);
app.use("/api", priceRouter);

app.listen(port, () => {
  console.log(`TaskFlow API running at http://localhost:${port}`);
});