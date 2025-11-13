import { useCart } from '../hooks/useCart';
import { Link } from 'react-router-dom';

export const PaginaCarrito = () => {
    const { cart, total, removeProduct, buy } = useCart();

    return (
        <div>
            <h1>Tu Carrito</h1>
            {cart.length === 0 ? <p>Vacío. <Link to="/cafes">Comprar</Link></p> : (
                <>
                    <table className="table table-bordered">
                        <thead><tr><th>Producto</th><th>Opción</th><th>Cant</th><th>Subtotal</th><th>Acción</th></tr></thead>
                        <tbody>
                            {cart.map((item, i) => (
                                <tr key={i}>
                                    <td>{item.product.nombre}</td>
                                    <td>{item.opcionSeleccionada}</td>
                                    <td>{item.cantidad}</td>
                                    <td>${(item.product.precio * item.cantidad).toLocaleString('es-CL')}</td>
                                    <td><button className="btn btn-danger btn-sm" onClick={() => removeProduct(item.product.id, item.opcionSeleccionada)}>X</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h3>Total: ${total.toLocaleString('es-CL')}</h3>
                    <button className="btn btn-success" onClick={buy}>Pagar</button>
                </>
            )}
        </div>
    );
};