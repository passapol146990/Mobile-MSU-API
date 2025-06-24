import express from "express";
import { conn } from "../dbconnect";

export const router = express.Router();

router.get("/", (req, res)=>{
    const sql = "select * from use";
    conn.query(sql,(err, result, fields)=>{
        const response = {
            success:true,
            result,
            fields
        }
        res.json(response);
    });
});

router.get("/:id", (req, res)=>{
    const sql = "select * from use";
    conn.query(sql,(err, result, fields)=>{
        const response = {
            success:true,
            result,
            fields
        }
        res.json(response);
    });
});


router.post("/create",(req,res,next) => {
    const {authorization} = req.headers;
    if(authorization!=="test"){
        const response = {
            success:false,
            authorization:"faild"
        }
        res.json(response)
        return
    }
    next()
},(req,res)=>{
    const response = {
        success:true
    };
    res.json(response);
});






