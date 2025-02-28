const Product = require("../models/productSchema")


exports.addProducts = async(req,res) =>{
    try{
        const data = req.body;
        const product = new Product(data);
        await product.save();
        
        res.status(200).json(data);
    }
    catch(e){
        console.log(e);
    }
}
exports.fetchAllProducts = async(req,res) =>{

    try{
        const data = await Product.find();
        if(!data == null){
            res.status(400).json({msg:`Empty DB`})
        }
        else{
            res.status(200).json(data);
        }
    }
    catch(e){
            console.log(e);
    }
}

exports.fetchProductsById = async(req,res) =>{
    try{
        // console.log(req.params.id);
         const data = await Product.find({"_id":req.params.id});
        
         if(!data==null){
            // res.status(400).json({msg:`Product not found of id ${req.paramas.id}`});
            res.status(200).json(data);

         }
         else{
        //  res.status(200).json(data);
         res.status(400).json({msg:`Product not found  at ${req.params.id}`});

         }

    }
    catch(e){
        
        console.log(e);
    }
}

exports.fetchProductsByTitle = async(req,res) =>{
    try{
        // console.log(req.params.id);
         const data = await Product.find({"title":req.params.id});
         
         if(!data==null){
            console.log("OK")
            res.status(200).json(data);
         }
         else
         {
            res.status(400).json({msg:`Product not found of id ${req.params.id}`});
         }

    }
    catch(e){
        
        console.log(e);
    }
}
exports.fetchProductsByCategory = async(req,res) =>{

    try{
        // console.log(req.params.id);
         const data = await Product.find({"category":req.params.id});
         console.log(data);
         if(!data==null){
            res.status(200).json(data);
         }
         else
        {
            res.status(400).json({msg:`Product not found of Category ${req.params.id}`});

        }

    }
    catch(e){
        
        console.log(e);
    }
}

exports.deleteById = async(req,res) =>{

    try{
        
         const data = await Product.deleteOne({"_id":req.params.id});
         if((data.deletedCount==1)){
            res.status(200).json(data);
         }
         else
         {
            res.status(400).json({msg:`Product not found of id ${req.params.id}`});
         }
         
         
         
    }
    catch(e){
        
        console.log(e);
    }
}

exports.updateProducts = async(req,res) =>{

    try{
        let id = req.params.id;
        let body = req.body;
        const data = await Product.findByIdAndUpdate(id,body);
        if(!data){
            console.log("null data")
            res.status(400).json({msg:`no such id ${id}`});
        }
        else{
            console.log("YES");
            res.status(200).json(data);
        }
    }
    catch(e){
        console.log(e)
    }
}
