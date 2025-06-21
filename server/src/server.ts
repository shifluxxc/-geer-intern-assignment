// backend/src/server.ts
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import productRoutes from './routes/products';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/products', productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
