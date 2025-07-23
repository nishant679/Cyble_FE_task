import ProductForm from "../features/products/ProductForm";

const AddProductPage = () => {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
      <ProductForm />
    </div>
  );
};

export default AddProductPage;

