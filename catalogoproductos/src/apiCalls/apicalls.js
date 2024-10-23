import axios from 'axios';

class ApiService {
    async getProducts() {
        try {
            const response = await axios.get('https://dummyjson.com/products?limit=0');
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

    async getProductsByCategory(tag) {
        try {
            const response = await axios.get(`https://dummyjson.com/products/category/${tag}`);
            return response.data.products;
        } catch (error) {
            console.error('Error fetching categories:', error);
            return [];
        }
    }

    async searchProducts(query) {
        if(query === ''){
            return this.getProducts();
        }else{
            try {
                const response = await axios.get(`https://dummyjson.com/products/search?q=${query}`);
                return response.data.products;
            } catch (error) {
                console.error('Error fetching categories:', error);
                return [];
            }
        }
    }
}

export default new ApiService();
