import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useProductStore } from '../../store/useProductStore';
import { useProductFilterStore } from '../../store/useProductFilterStore';

const fetchProducts = async ({ page, limit }: { page: number; limit: number }) => {
  const skip = (page - 1) * limit;
  const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
  if (!res.ok) throw new Error(`Failed to fetch: ${res.statusText}`);
  return res.json();
};

export const useProducts = () => {
  const [page, setPage] = useState(1);
  const limit = 10;

  const { search, category } = useProductFilterStore();
  const { apiProducts, localProducts, setApiProducts } = useProductStore();

  const {
    data,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['products', page],
    queryFn: () => fetchProducts({ page, limit }),
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (data?.products) {
      setApiProducts(data.products);
    }
  }, [data?.products]);

  const allProducts = [...localProducts, ...apiProducts];

  const filteredProducts = allProducts
    .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => (category ? p.category.toLowerCase() === category.toLowerCase() : true));

  return {
    data: filteredProducts,
    isLoading,
    error,
    page,
    setPage,
    totalPages: Math.ceil((data?.total || 0) / limit),
    categories: [...new Set(allProducts.map((p) => p.category))],
  };
};
