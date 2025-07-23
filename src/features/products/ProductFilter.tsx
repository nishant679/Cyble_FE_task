import { Input } from '../../components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '../../components/ui/select';
import { useProductFilterStore } from '../../store/useProductFilterStore';
import { useProducts } from './useProducts';

export default function ProductFilter() {
  const { search, setSearch, category, setCategory } = useProductFilterStore();
  const { categories } = useProducts();

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-4">
      <Input
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full sm:w-1/2"
      />

      <Select value={category} onValueChange={(val) => setCategory(val === 'all' ? '' : val)}>
        <SelectTrigger className="w-full sm:w-1/2">
          <SelectValue placeholder="Filter by category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          {categories?.map((cat) => (
            <SelectItem key={cat} value={cat}>
              {cat}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}