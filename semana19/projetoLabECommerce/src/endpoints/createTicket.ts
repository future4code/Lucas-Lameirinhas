import { Request, Response } from "express";
import { ProductDataBase } from "../dataBase/ProductDataBase";
import { Ticket } from "../entities/Ticket";
import { ProductDB } from "../types";

const createTiket = async(
    req: Request,
    res: Response
): Promise<void> => {
    try{
        const {name, description, price, travelOrigin, travelDestination} = req.body

        if(!name || !description || !price  || !travelOrigin || !travelDestination){
            throw new Error("preencha todos os itens")
        }

        if(typeof name !== "string" || typeof description !== "string"
        || typeof travelOrigin !== "string" || typeof travelDestination !== "string"){
            throw new Error("As variáveis 'name', 'description', 'travelOrigin' e 'travelDestination' devem ser do tipo string")
        }

        if(typeof price !== "number"){
            throw new Error("A variável 'price' deve ser do tipo 'number'")
        }

        const id: string = (Date.now() + Math.random().toString())

        const product = new Ticket(travelOrigin, travelDestination, id, name, description, price)

        const createProductDataBase = new ProductDataBase()
        createProductDataBase.create(product)

        res.status(200).send("Produto criado com sucesso")

    }catch(error: any){
        res.status(error.statusCode || 400)
        .send(error.message || "Erro")
    }
}

export default createTicket