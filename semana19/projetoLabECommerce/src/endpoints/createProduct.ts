import { Request, Response } from "express";
import { ProductDataBase } from "../dataBase/ProductDataBase";
import { Product } from "../entities/Product";

export const createProduct = async(
    req: Request,
    res: Response
): Promise<void> => {

    try{
        const {name, description, price} = req.body

        if(!name || !description || !price){
            throw new Error("preencha os itens")
        }

        if(typeof name !== "string" || typeof description !== "string"){
            throw new Error("As variáveis 'name' e 'description' devem ser do tipo string")
        }

        if(typeof price !== "number"){
            throw new Error("A variável 'price' deve ser do tipo 'number'")
        }

        const id: string = (Date.now() + Math.random().toString())

        const product= new Product(id, name, description, price)

        const createProductDataBase = new ProductDataBase()
        createProductDataBase.create(product)

        res.status(200).send("Produto criado com sucesso")

    }catch (error: any){
        res.status(error.statusCode || 400)
        .send(error.message || "Erro")
    }
    
}

export default createProduct