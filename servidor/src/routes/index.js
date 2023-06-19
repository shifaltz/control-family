import express from "express";
import debts from "./debtsRoutes.js";

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: "Control Family Node"})
  })

  app.use(
    express.json(),
    debts
  )


}

export default routes;