import Product from "../model/productModel.js"

export const getProducts=async(req,res,next)=>{
    try {
        const data=await Product.find();
        return res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

export const getSingleProduct=async(req,res,next)=>{
    try {
        const response=await Product.findOne({_id:req.params.id});
        return res.status(200).json(response); 
    } catch (error) {
        next(error);
    }
}
export const saveProducts=async(req,res,next)=>{
    try {
        const data=await Product.create(req.body);
        return res.status(201).json({"message":"created","data":data});
    } catch (error) {
        next(error);
    }

}

export const updateProduct=async(req,res,next)=>{
        try {
            const data=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});
            return res.status(200).json(data);
        } catch (error) {
            next(error);
        }
}

export const deleteProduct=async(req,res,next)=>{
    const {id}=req.body;
    try {
        await Product.findByIdAndDelete(req.params.id);
        return res.status(200).json("Data Deleted");
    } catch (error) {
        next(error);
    }
}