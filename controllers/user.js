
import conn from '../config'
import User from '../models/user';

const getAll=async(req,res)=>{
    const userData=await conn.firestore().collection("users").get()
    let arr=[]
    userData.forEach(element => {
        const user=new User({
            id:element.data().id,
            name: element.data().name,
            email: element.data().email,
            password: element.data().password,
        })
        arr.push(user)
    });
    res.json(arr)
}

const getById=async(req, res)=>{
    const userData=await conn.firestore().collection("users").doc(req.params.id).get()
    res.json(userData.data())
}
const create=async(req, res)=>{
    await conn.firestore().collection("users").doc().set(req.body)
    res.json({msg:"agregado"})
}
const getByIdUpdate=async(req, res)=>{
    await conn.firestore().collection("users").doc(req.params.id).update(req.body)
    res.json({msg:"actualizado"})
}
const getByIdDelete=async(req, res)=>{
    await conn.firestore().collection("users").doc(req.params.id).delete()
    res.json({msg:"borrado"})
}

module.exports={
    getAll,
    getById,
    create,
    getByIdUpdate,
    getByIdDelete
}