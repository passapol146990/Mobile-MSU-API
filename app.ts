import express from "express";
import { router as user } from "./controller/user";

import bodyParser from "body-parser";

export const app = express();

app.use(bodyParser.text());
app.use(bodyParser.json());

app.use("/api/v1", user);

