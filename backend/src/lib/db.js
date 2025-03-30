import mongoose from 'mongoose';

export const connectDB = async()=>{
    try {

     const conn  =  await mongoose.connect(process.env.DB_URL)
     console.log(`DB connected: ${conn.connection.host}`);
    }catch(err){
        console.log("err=====>",err);
    }
}