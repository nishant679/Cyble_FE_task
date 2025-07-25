import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Textarea } from '../../components/ui/textarea';
import type { ProductInterface } from '../../types/types';
import { useProductStore } from '../../store/useProductStore';

const schema = z
  .object({
    title: z.string().min(1, 'Product name is required'),
    category: z.string().min(1, 'Category is required'),
    price: z.number().min(0, 'Price must be non-negative'),
    stock: z.number().min(0, 'Stock must be non-negative'),
    availabilityStatus: z.enum(['In Stock', 'Low Stock', 'Out of Stock'], {
      required_error: 'Availability status is required',
    }),
    description: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.stock === 0) return data.availabilityStatus === 'Out of Stock';
      if (data.stock < 10) return data.availabilityStatus === 'Low Stock';
      return data.availabilityStatus === 'In Stock';
    },
    {
      message:
        'Availability status must match stock value: 0 → Out of Stock, <10 → Low Stock, ≥10 → In Stock',
      path: ['availabilityStatus'],
    }
  );

type FormData = z.infer<typeof schema>;

export default function ProductForm() {
  const navigate = useNavigate();
  const addProduct = useProductStore((state) => state.addProduct);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    addProduct({ ...data, id: Date.now() } as ProductInterface);
    navigate('/products');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input {...register('title')} placeholder="Product Name" />
      {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}

      <Input {...register('category')} placeholder="Category" />
      {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}

      <Input type="number" {...register('price', { valueAsNumber: true })} placeholder="Price" />
      {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}

      <Input type="number" {...register('stock', { valueAsNumber: true })} placeholder="Stock" />
      {errors.stock && <p className="text-red-500 text-sm">{errors.stock.message}</p>}

      <select {...register('availabilityStatus')} className="w-full border p-2 rounded">
        <option value="">Select availability</option>
        <option value="In Stock">In Stock</option>
        <option value="Low Stock">Low Stock</option>
        <option value="Out of Stock">Out of Stock</option>
      </select>
      {errors.availabilityStatus && (
        <p className="text-red-500 text-sm">{errors.availabilityStatus.message}</p>
      )}

      <Textarea {...register('description')} placeholder="Description (optional)" />

      <Button type="submit">Add Product</Button>
    </form>
  );
}
