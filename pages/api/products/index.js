import { Food } from "../../../Foods";



export default function handler(req, res) {
    res.status(200).json(Food)
  }