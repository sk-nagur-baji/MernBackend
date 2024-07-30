import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    const URI = `mongodb+srv://21501a05g1:shaiknagurbaji@file-share.ugaeke8.mongodb.net/?retryWrites=true&w=majority&appName=file-share`;
    if (!URI) {
        console.error('MongoDB URI is not defined in .env file');
        return;
    }

    try {
        await mongoose.connect(URI);
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error while connecting with the database:', error.message);
    }
};

export default DBConnection;
