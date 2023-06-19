import express from 'express';
import DebtController from "../controllers/DebtsController.js";

const router = express.Router();

router
  .get("/debts", DebtController.listAllDebts)
  .post("/debts", DebtController.registerDebt)

export default router;