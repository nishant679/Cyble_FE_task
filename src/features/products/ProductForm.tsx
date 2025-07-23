import { useForm, type SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Textarea } from '../../components/ui/textarea';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../../components/ui/select';
import type { ProductInterface } from '../../types/types';
import { useProductStore } from '../../store/useProductStore';
import { useProducts } from './useProducts';

const schema = z.object({
  title: z.string().min(1, 'Product name is required'),
  category: z.string().min(1, 'Category is required'),
  price: z.number().min(0, 'Price must be non-negative'),
  stock: z.number().min(0, 'Stock must be non-negative'),
  description: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function ProductForm() {
  const navigate = useNavigate();
  const addProduct = useProductStore((state) => state.addProduct);
  const { categories } = useProducts();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    addProduct({ ...data, id: Date.now() } as ProductInterface); // add unique ID
    navigate('/products');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input {...register('title')} placeholder="Product Name" />
      {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}

      <Controller
        control={control}
        name="category"
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}

      <Input type="number" {...register('price', { valueAsNumber: true })} placeholder="Price" />
      {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}

      <Input type="number" {...register('stock', { valueAsNumber: true })} placeholder="Stock" />
      {errors.stock && <p className="text-red-500 text-sm">{errors.stock.message}</p>}

      <Textarea {...register('description')} placeholder="Description (optional)" />

      <Button type="submit">Add Product</Button>
    </form>
  );
}
