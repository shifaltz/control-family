import express from "express";
import db from "./config/dbConnect.js";
import debts from "./models/Debt.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('conexão com o banco feita com sucesso');
})

const app = express();

app.use(express.json())

routes(app);

// const debts = [
//   {id: 1,ownerId: 1,cardId: 1,nameStore: 'Vieras',value: '500',day: 28,status: false},
//   {id: 2,ownerId: 2,cardId: 2,nameStore: 'Pizzaria',value: '200',day: 28,status: false}
// ]

app.get('/debts/:ownerId', (req, res) => {
  let index = searchDebtPerOwner(req.params.ownerId);
  res.json(debts[index]);
})

app.post('/debts', (req, res) => {
  debts.push(req.body);
  res.status(201).send('Compra cadastrada na fatura!')
})

app.put('/debts/:id', (req, res) => {
  let index = searchDebt(req.params.id);
  debts[index].status = req.body.status;
  res.json(debts);
})

function searchDebt(id){
  return debts.findIndex(debt => debt.id == id)
}

function searchDebtPerOwner(ownerId){
  return debts.findIndex(debt => debt.ownerId == ownerId)
}

export default app;