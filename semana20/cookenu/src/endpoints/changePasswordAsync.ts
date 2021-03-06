import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { Authenticator } from "../services/Autenticator";
import { HashManager } from '../services/HashManager'

const changePasswordAsync = async(
    req: Request,
    res: Response
): Promise<void> => {
    try{
        const token = req.headers.authorization
        const {password} = req.body

        if(!token){
            throw new Error("Deve estar logado")
        }

        if(!password){
            throw new Error("O campo 'password' é obrigatorio")
        }

        if(typeof password !== "string" ){
            throw new Error("Todos os campos devem ser do tipo string")
        }

        if(password.length < 6){
            throw new Error("Senha deve ter no mínimo 6 caracteres")
        }

        const authenticator = new Authenticator()
        const user = await authenticator.getTokenData(token)

        if(!user){
            throw new Error("Token inválido")
        }

        const generateHash = new HashManager()
        const hashPassword = await generateHash.hash(password)

        const userDataBase = new UserDataBase()
        await userDataBase.changePassword(user.id, hashPassword)

        res.status(200).send("Senha alterada com sucesso")

    }catch(error: any){
        res.status(error.statusCode || 400).send(error.sqlMessage || error.message)
    }

}

export default changePasswordAsync