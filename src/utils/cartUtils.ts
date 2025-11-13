// src/utils/cartUtils.ts
import type { CartItem } from '../types';

const CART_KEY = 'carrito-objetivo';
const HISTORY_KEY = 'historial-ventas'; // Esta clave debe coincidir con la que usas para guardar

// ... (getCart y saveCart siguen igual) ...
export const getCart = (): CartItem[] => {
    const stored = localStorage.getItem(CART_KEY);
    return stored ? JSON.parse(stored) : [];
};

export const saveCart = (cart: CartItem[]) => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

// AÑADIR ESTA FUNCIÓN QUE FALTABA:
export const getSalesHistory = (): CartItem[][] => {
    const stored = localStorage.getItem(HISTORY_KEY);
    return stored ? JSON.parse(stored) : [];
};

export const calculateTotal = (cart: CartItem[]): number => {
    return cart.reduce((total, item) => total + (item.product.precio * item.cantidad), 0);
};

export const finalizePurchase = (cart: CartItem[]) => {
    const history = getSalesHistory(); // Ahora usa la función de arriba
    history.push(cart);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    localStorage.removeItem(CART_KEY);
};