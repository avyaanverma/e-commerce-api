import { productModel } from "../models/product.schema.js";

export const getAllProducts = async (req,res)=>{
    try {
        const {id} = req.user;
        
        if(!id){
            return res.status(400).json({
                message: "Unauthorized Access"
            })
        }

        const products = await productModel.find({
            user: id
        });
    
        return res.status(200).json({
            message: "All Products fetched success",
            products: products
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

export const getProduct = async (req, res)=>{
    try {
        const userId = req.user.id;
        const {id} = req.params;
    
        const product = await productModel.findOne({
            _id: id,
            user: userId
        })
    
        if(!product){
            return res.status(400).json({
                message: "Products Not Found"
            })
        }
    
        return res.status(200).json({
                message: "Product fetched successfully",
                product: product
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}
export const createProduct = async (req, res)=>{
    try {
        const userId = req.user.id;
    
        const {name, description, price, category, images} = req.body;

        if(!name){
            return res.status(400).json({
                message: "Name is required"
            })
        }

        if(!price){
            return res.status(400).json({
                message: "Price is required"
            })
        }
        if(!description){
            return res.status(400).json({
                message: "Description is required"
            })
        }
        
        if(description.trim().length < 10){
            return res.status(400).json({
                message: "Description is required"
            })
        }
        
        if(!images){
            images = [];
        }

        const product = await productModel.create({
            name: name,
            description: description,
            category: category,
            price : price,
            images: images,
            user: userId
        })
    
        if(!product){
            return res.status(400).json({
                message: "Products Not Found"
            })
        }
    
        return res.status(200).json({
                message: "Product fetched successfully",
                product: product
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

export const updateProduct = async (req, res)=>{
    try {
        const userId = req.user.id;
        const {id} = req.params;

        const {name, description, price, category, images } = req.body;
        
        if(!mongoose.Schema.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                message: "Invalid id given"
            })
        }

        if(!name && !description && !price && !category && !images){
            return res.status(400).json({
                message: "Atleast one field is required"
            })
        }

        const updatedFields = {};

        if(name){
            updatedFields.name = name;
        }
        if(description){
            updatedFields.description = description;
        }
        if(price){
            updatedFields.price = price;
        }
        if(category){
            updatedFields.category = category;
        }
        if(images){
            updatedFields.images = images;
        }

        const product = await productModel.findOneAndUpdate(
            {
                _id: id,
                user: userId
            },

            updatedFields,

            {
                new: true
            }
        )
        
        if(!product){
            return res.status(400).json({
                message: "Product Not Found"
            })
        }
        
        return res.status(200).json({
                message: "Product fetched successfully",
                product: product
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}
export const deleteProduct = async (req, res)=>{
        try {
        const userId = req.user.id;
        const {id} = req.params;
    
        const product = await productModel.findOneAndDelete({
            _id: id,
            user: userId
        })
    
        if(!product){
            return res.status(400).json({
                message: "Product Not Found"
            })
        }
    
        return res.status(200).json({
                message: "Product fetched successfully",
                product: product
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

