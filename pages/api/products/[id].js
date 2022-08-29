import { Food } from "../../../Foods";


export default function handler(req, res) {
    let id = req.query.id;
    let pizza =Food.find(p=>p.id == id)
    if(pizza){
    res.status(200).json(pizza)
    }else {
        res.status(400).json({err:"there is no pizza"})
    }
  }