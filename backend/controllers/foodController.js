import foodModel from "../models/foodModel.js";
import fs from 'fs';

// addd food item
const addFood = async (req, res) => {

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: image_filename,
        category: req.body.category,
    })

    try {
        await food.save();
        res.json({succcess: true, message: "Food Added Sucessfully!"});
    } catch (error) {
        console.log(error);
        res.json({succcess: false, message: "Error"});
        
    }
}

 // all food list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({})
        res.json({succcess: true, data: foods})
    } catch (error) {
        console.log(error);
        res.json({succcess: false, message: "Error"});
        
    }
}
// remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, () => {});

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success: true, message: "Image Deleted Successfully!"});
    } catch (error) {
        console.log(error);
        res.json({success: true, message: "Error"});
    }
}

export {addFood, listFood, removeFood};