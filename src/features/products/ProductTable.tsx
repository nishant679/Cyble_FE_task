import { useProducts } from './useProducts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Skeleton } from '../../components/ui/skeleton';
import Pagination from './Pagination';
import type { ProductInterface } from '../../types/types';



export default function ProductTable() {
const { data, isLoading, page, setPage, totalPages, error } = useProducts();


  if (isLoading) {
    return (
      <div className="space-y-2">
        {[...Array(10)].map((_, i) => (
          <Skeleton key={i} className="h-10 w-full" />
        ))}
      </div>
    );
  }

  

  if (error) return <p className="text-red-500">Failed to load products.</p>;

  return (
    <>
    <Table className='border-2 border-solid'>
      <TableHeader>
        <TableRow>
          <TableHead className='bg-black text-white'>Product Name</TableHead>
          <TableHead className='bg-black text-white'>Category</TableHead>
          <TableHead className='bg-black text-white'>Price</TableHead>
          <TableHead className='bg-black text-white'>Stock</TableHead>
          <TableHead className='bg-black text-white'>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((product : ProductInterface) => (
          <TableRow key={product.id}>
            <TableCell>{product.title}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>${product.price}</TableCell>
            <TableCell>{product.stock}</TableCell>
            <TableCell>{product.availabilityStatus}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </>
  );
}