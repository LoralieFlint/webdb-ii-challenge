const express = require("express");
const db = require("../db");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const cars = await db("cars").select();
    res.json(cars);
  } catch (err) {
    next(err);
  }
});

router.get("/:VIN", async (req, res, next) => {
  try {
    const cars = await db("cars")
      .where({ VIN: req.params.VIN })
      .first();
    res.json(cars);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const vin = await db("cars").insert(req.body);
    const newCar = await db("cars")
      .where({ VIN: vin[0] })
      .first();
    res.status(201).json(newCar);
  } catch (err) {
    next(err);
  }
});

router.put("/:VIN", async (req, res, next) => {
  try {
    const cars = await db("cars").update(req.body)
      .where({ VIN: req.params.VIN })
    res.json(cars);
  } catch (err) {
    next(err);
  }
});

router.delete("/:VIN", async (req, res, next) => {
  try {
    const cars = await db("cars").delete(req.params)
      .where({ VIN: req.params.VIN })
    res.json({ removed: deleted }, cars);
  } catch (err) {
    next(err);
  }
});



module.exports = router;
