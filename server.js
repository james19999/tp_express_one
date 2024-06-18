import express from 'express';
import path  from 'path';
import { fileURLToPath } from 'url';
import posts from './routes/posts.js'
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import nofFound from './middleware/notFound.js';
//ACCERDER AU VRIABLE D ENV
const port = process.env.PORT || 8000
//GET THE DIRECTORY NAME
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const app = express()

//BOdy parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//lOGGER MIDDLEWARE
app.use(logger)
//stup static folder
app.use(express.static(path.join(__dirname,'public')))

app.use('/api/posts',posts)

app.use(nofFound)

//ERROR HANDLER MIDDLEWARE
app.use(errorHandler)
app.listen(port,()=>console.log(`server run ${port}`))