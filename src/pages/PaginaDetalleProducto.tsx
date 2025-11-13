import { useParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import { useCart } from '../hooks/useCart';
import { ContenidoDetalleProducto } from '../components/ContenidoDetalleProducto';

export const PaginaDetalleProducto = () => {
    const { id } = useParams();
    const { getProductById } = useProducts();
    const { addProduct } = useCart();
    
    const producto = getProductById(Number(id));

    if (!producto) return <h2>Producto no encontrado</h2>;

    return <ContenidoDetalleProducto producto={producto} alAgregar={addProduct} />;
};