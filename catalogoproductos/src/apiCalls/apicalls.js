import axios from 'axios';

class ApiService {
    async getProducts() {
        try {
            const response = await axios.get('https://dummyjson.com/products');
            return response.data.products;
        } catch (error) {
            console.error('Error fetching products:', error);
            return [];
        }
    }

    async getCategories() {
        try {
            const response = await axios.get('https://dummyjson.com/products/categories');
            return response.data;     
        } catch (error) {
            console.error('Error fetching categories:', error);
            return [];
        }
    }
}

export default new ApiService();
