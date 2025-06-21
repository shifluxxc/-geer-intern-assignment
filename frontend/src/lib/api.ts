
export async function getProducts() {
  // Fetch product from backend API
  const res = await fetch(`http://localhost:5000/api/products`);
  if (!res.ok) throw new Error('Failed to fetch products');
  const products = await res.json();
  return products;
}

export async function getProduct(id: string) {
  // Fetch product from backend API
  const res = await fetch(`http://localhost:5000/api/products`);
  if (!res.ok) throw new Error('Failed to fetch products');
  const products = await res.json();
  return products.find((product: { id: string }) => product.id === id);
}