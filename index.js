import dotenv from "dotenv"
import cors from "cors"
import express from "express"
import mongoose from "mongoose";
import userRouter from "./routes/user.routes.js"
import authRouter from "./routes/auth.route.js";
import listingRouter from "./routes/listing.route.js"
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
const corsOptions = {
    origin: "https://mern-estate-rd6j.onrender.com",
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());






app.use("/api/user", userRouter)
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error'
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    })
})







mongoose.connect(process.env.MONGO);
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`))
});
mongoose.connection.on('error', err => {
    console.log(err);
});