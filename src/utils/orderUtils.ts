import type { CartItem, Order, OrderStatus } from '../types';
import { productsBase } from '../data/productsBase';

const ORDERS_KEY = 'ordenes-compras';
const STOCK_KEY = 'stock-actualizado';

// --- GESTIÓN DE STOCK ---

// Obtener el stock actual (mezcla la base con los cambios guardados)
export const getStock = (productId: number): number => {
    const storedStock = JSON.parse(localStorage.getItem(STOCK_KEY) || '{}');
    // Si hay un stock guardado, úsalo. Si no, usa el base.
    if (storedStock[productId] !== undefined) {
        return storedStock[productId];
    }
    const productoBase = productsBase.find(p => p.id === productId);
    return productoBase ? productoBase.stock : 0;
};

// Restar stock al comprar
export const updateStockAfterPurchase = (cart: CartItem[]) => {
    const storedStock = JSON.parse(localStorage.getItem(STOCK_KEY) || '{}');

    cart.forEach(item => {
        const currentStock = getStock(item.product.id);
        const newStock = Math.max(0, currentStock - item.cantidad);
        storedStock[item.product.id] = newStock;
    });

    localStorage.setItem(STOCK_KEY, JSON.stringify(storedStock));
};

// --- GESTIÓN DE ÓRDENES (SEGUIMIENTO) ---

export const getOrders = (): Order[] => {
    return JSON.parse(localStorage.getItem(ORDERS_KEY) || '[]');
};

export const createOrder = (cart: CartItem[], userEmail: string, total: number) => {
    const orders = getOrders();
    
    const newOrder: Order = {
        id: `ORD-${Date.now().toString().slice(-6)}`, // Genera ID tipo "ORD-837492"
        fecha: new Date().toLocaleDateString('es-CL'),
        items: cart,
        total: total,
        usuarioEmail: userEmail,
        estado: 'Pagado' // Estado inicial
    };

    orders.push(newOrder);
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
    
    // También actualizamos el stock
    updateStockAfterPurchase(cart);
    
    return newOrder.id;
};

// Admin cambia el estado (ej: de 'Pagado' a 'Enviado')
export const updateOrderStatus = (orderId: string, newStatus: OrderStatus) => {
    const orders = getOrders();
    const index = orders.findIndex(o => o.id === orderId);
    if (index >= 0) {
        orders[index].estado = newStatus;
        localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
    }
};