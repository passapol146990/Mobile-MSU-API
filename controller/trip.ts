import express from "express";
import { conn } from "../dbconnect";

export const router = express.Router();

router.get("/", (req, res) => {
  conn.query('select * from user', (err, result, fields) => {
    res.json({ message: "successfully", success: true, data: result ?? [] });
  });
});

router.get("/:id", (req, res) => {
  let id = +req.params.id;
  conn.query("select * from trip where idx = ?", [id], (err, result, fields) => {
    if (err) throw err;
    res.json(result);
  });
});

router.get("/search/fields", (req, res) => {
  conn.query(
    "select * from trip where (idx IS NULL OR idx = ?) OR (name IS NULL OR name like ?)",
    [req.query.id, "%" + req.query.name + "%"],
    (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    }
  );
});
