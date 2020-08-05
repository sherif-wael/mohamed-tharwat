import nextConnect from "next-connect";
import middleware from "../../middleware/index";
import validateData from "../../utils/validateData"
import { ObjectId } from "mongodb";


const handler = nextConnect();

handler
    .use(middleware)
    .post((req, res) => {
        let validation = validateData(req.body);
        if(!validation.isValid){
            return res.status(400).json({message: validation.error})
        }
        req.db.collection("register").insertOne({name: req.body.name, tel: req.body.tel, date: new Date()})
               .then(user => {
                   return res.json({success: true})
               })
               .catch(err => res.status(400).json({messgae: "internal server error"}))
    })
    .get((req, res) => {
        req.db.collection("register").find({}).toArray()
               .then(users => res.json({users}))
               .catch(err => res.status(400).json({messgae: "internal server error"}))
    })
    .delete((req, res) => {
        req.db.collection("register").deleteOne({_id: ObjectId(req.body.id)})
               .then(()=> res.json({succes: true}))
               .catch(err => res.status(400).json({message: "internal server error"}))
    })
export default handler;