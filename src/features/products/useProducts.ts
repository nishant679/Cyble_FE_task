import type { ProductInterface } from '../../types/types';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useProductStore } from '../../store/useProductStore';
import { useProductFilterStore } from '../../store/useProductFilterStore';
// import { Product } from '../../types/product';

const fetchProducts = async (): Promise<ProductInterface[]> => {
  const res = await fetch('https://dummyjson.com/products');
  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.statusText}`);
  }
  const data: { products: ProductInterface[] } = await res.json();
  return data.products;
};

export const useProducts = () => {
  const { search, category } = useProductFilterStore();
  const {  products, setProducts } = useProductStore();

  const {
    data: apiProducts = [],
    isLoading,
    error,
  } = useQuery<ProductInterface[], Error>({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 5 * 60 * 1000,
  });

    useEffect(() => {
        if (products.length === 0 && apiProducts.length > 0) {
        setProducts(apiProducts);
        }
    }, [apiProducts, products.length, setProducts]);
  

  const filteredProducts = products
    .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
    .filter((p) =>
      category ? p.category.toLowerCase() === category.toLowerCase() : true
    );

  return {
    data: filteredProducts,
    isLoading,
    error,
    categories: [...new Set(products.map((p) => p.category))],
  };
};
