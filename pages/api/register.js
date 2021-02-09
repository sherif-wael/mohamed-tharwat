import nextConnect from "next-connect";
import middleware from "../../middleware/index";
import validateData from "../../utils/validateData"
import { ObjectId } from "mongodb";
import nodemailer from "nodemailer";


let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "userapplication236@gmail.com",
        pass: "Mohamed12"
    },
    port: 587,
    secure: false,
    requireTLS: true,
    tls: {
        rejectUnauthorized: false
    }
})

const mailOptions = {
    from: "userapplication236@gmail.com",
    to: "trackwebsite75@gmail.com",
    subject: "New User Application",
}

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
                   let html = `
                    <h3>Name: ${req.body.name}</h3>
                    <p>Tel: ${req.body.tel}</p>
                    <a href="https://mohamedtharwat.com/admin/mohamed12">view applications</a>
                   `
                   transporter.sendMail({...mailOptions, html}, err => console.log(err));
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