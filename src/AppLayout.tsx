import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from './components/ui/tabs';

export default function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const activeTab = location.pathname === '/products/new' ? 'add' : 'list';

  const handleTabChange = (value: string) => {
    navigate(value === 'list' ? '/products' : '/products/new');
  };

  return (
    <div className="container mx-14 py-6">
      <Tabs value={activeTab} onValueChange={handleTabChange}>
        <TabsList className="mb-6">
          <TabsTrigger value="list">Product List</TabsTrigger>
          <TabsTrigger value="add">Add Product</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* This renders either Products or AddProductPage */}
      <Outlet />
    </div>
  );
}
