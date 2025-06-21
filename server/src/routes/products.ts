import { Router, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();
const productsFilePath = path.join(__dirname, '../data/products.json');

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
}

const readProducts = (): Product[] => {
  const data = fs.readFileSync(productsFilePath, 'utf8');
  return JSON.parse(data);
};

const writeProducts = (products: Product[]): void => {
  fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
}

// GET /api/products
router.get('/', (_req: Request, res: Response) => {
  const products = readProducts();
  res.json(products);
});

// POST /api/products
router.post('/', (req: Request, res: Response) => {
  const {
    name,
    price,
    originalPrice,
    image,
    category,
    rating,
    reviews,
    inStock,
  } = req.body;

  const newProduct: Product = {
    id: Date.now().toString(),
    name,
    price,
    originalPrice,
    image,
    category,
    rating,
    reviews,
    inStock,
  };

  const products = readProducts();
  products.push(newProduct);
  writeProducts(products);
  res.status(201).json(newProduct);
});

// DELETE /api/products/:id
router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  let products = readProducts();
  const initialLength = products.length;
  products = products.filter((product) => product.id !== id);
  if (products.length === initialLength) {
    return res.status(404).json({ error: 'Product not found' });
  }
  writeProducts(products);
  res.json({ message: 'Product deleted successfully' });
});

export default router;
