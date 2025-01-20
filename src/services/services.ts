export const getProductsByCollection = async (collection: any) => {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${collection}`);
        if (!response.ok) {
            throw new Error('Error fetching products');
        }
        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error al obtener los productos:', error);
    }
};