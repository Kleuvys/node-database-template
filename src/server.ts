import express from 'express';
import cors from 'cors';

import groceryRoutes from './routes/grocery';

const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/groceries', groceryRoutes);

app.listen(port, () => {
    console.log(`I\'m up and listening on port ${port}`);
})