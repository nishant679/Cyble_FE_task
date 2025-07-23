export interface ProductFormData {
    title: string;
    category: string;
    price: number;
    stock: number;
    availabilityStatus: 'In Stock' | 'Low Stock' | 'Out of Stock';
    description?: string;
}

export interface ProductInterface extends ProductFormData {
    id: number;
}
