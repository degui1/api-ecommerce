const Product = require('../models/Product')

class ProductController{
    static async post(req,res){
        function formatPriceWithDiscount(oldPrice,discount){
            let discountedValue = (oldPrice/100)*discount
            return oldPrice - discountedValue
        }
        const body = {
            name:req.body.name,
            imageUrl:req.body.imageUrl,
            oldPrice:req.body.oldPrice?req.body.oldPrice : null,
            thereIsDiscount:req.body.thereIsDiscount,
            discount:req.body.thereIsDiscount == true ? req.body.discount: null,
            linkToProductPage:req.body.linkToProductPage,
            newPrice:req.body.discount?formatPriceWithDiscount(req.body.oldPrice,req.body.discount):req.body.newPrice,
            exibitionType:req.body.exibitionType
        }



        try {
            const product = await Product.create(body)
            return res.status(201).json(product)
        } catch (error) {
            return res.status(500).send({message:`${error}`})

        }

    }
    static async getAll(req,res){
        try {
            Product.find()
            .exec((err,Product)=>{
                return res.status(200).json(Product)
            })
        } catch (error) {
            return res.status(400).send(error)
        }
    }
    static async get(req,res){
        const id = req.params.id
        try {
            const product = await Product.findById(id)
            return res.status(200).send(product)
        } catch (error) {
            return res.status(500).send({message:`${error}`})
        }
    }
    static async put(req,res){
        const id = req.params.id
        try {
            await Product.findByIdAndUpdate(id, {$set: req.body})
            const product = await Product.findById(id)
            return res.status(200).send(product)
        } catch (error) {
            return res.status(500).send({message:"Erro ao atualizar" + error.message})
        }
    }
    static async delete(req,res){
        const id = req.params.id
        try {
            await Product.findByIdAndDelete(id)
            return res.status(202).send({message:`Produto com o id ${id} foi deletado com sucesso`})
        } catch (error) {
            return res.status(500).send({message:"Erro ao atualizar" + error.message})
        }
    }
}
module.exports = ProductController