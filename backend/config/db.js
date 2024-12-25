import mongoose from "mongoose";

export const connectDb = async() => {
    await mongoose.connect('mongodb+srv://malkaunidrim:Sanabil@food-delivery-app.shafi.mongodb.net/?retryWrites=true&w=majority&appName=food-delivery-app')
    .then(() => console.log('db connect')
    )
}