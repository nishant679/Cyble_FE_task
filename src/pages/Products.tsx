import ProductTable from '../features/products/ProductTable';
import ProductFilters from '../features/products/ProductFilter';

const Products = ()=> {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ProductFilters />
      <ProductTable />
    </div>
  );
};

export default Products;