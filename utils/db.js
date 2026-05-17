import mongoose from 'mongoose';

const databaseConnection = async () => {
    try {
        const data = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Database connected successfully at host ${data.connection.host}`);
    } catch (err) {
        console.error("Database connection failed:", err);
        process.exit(1);
    }
};

export default databaseConnection;
