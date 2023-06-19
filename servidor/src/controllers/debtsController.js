import debts from "../models/Debt.js";

export default class DebtController{

  static listAllDebts = (req, res) => {
    debts.find((error, debts) => {
      res.status(200).json(debts)
    })
  }
  
  static registerDebt = (req, res) => {
    let debt = new debts(req.body);
    
    debt.save((error) => {
      if(error){
        res.status(500).send({message: `${error.message} - Falha ao cadastrar divida.`})
      }else{
        res.status(201).send(debt.toJSON());
      }
    })
  }

  static updateStatusDebt = (req, res) => {
    const id = req.params.id;

    debts.findByIdAndUpdate(id, {$set: req.body}, (error) => {
      if(!error){
        res.status(200).send({message: 'divida atualizado com sucesso'})
      }else{
        res.status(500).send({message: `${error.message} - Falha ao atualizar divida.`})
      }
    })
  }

}