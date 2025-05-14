import mongoose from "mongoose"

const conenctDB = async () => {
    mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("MongoDB connected sucessfull.")
    })
    .catch((error) => {
        console.error(`MongoDB connection failed: ${error}`)
    })
}
 
export default conenctDB;