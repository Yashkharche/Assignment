import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    name:String,
    company_name:String,
    description:String,
    price:Number

})

const Product=mongoose.model("Product",productSchema);

export default Product;