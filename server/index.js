import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js'


// initialize
const app = express();

// defining routes
app.use('/posts',postRoutes);

// to send request
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

// connect to real db mongodb atlasF
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useunifiedTopology: true,}).
    then(() => app.listen(PORT, () => console.log(`Server running on port = ${PORT}`))).
    catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);

