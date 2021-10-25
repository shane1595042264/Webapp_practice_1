
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();
app.use(cors());
app.use('/posts', postRoutes);

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))





const CONNECTION_URL = 'mongodb+srv://douvleplus:Mark321654.@cluster0.fz0al.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }) //a promise
//   .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
//   .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', true ); // make sure don't get any warning in the console

mongoose.connect(CONNECTION_URL).then(()=>{console.log(`Server Running on Port: http://localhost:${PORT}`)}).catch((error) => console.log(`${error} did not connect`));