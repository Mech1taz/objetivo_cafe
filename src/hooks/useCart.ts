import { useState, useEffect } from 'react';
import type { CartItem, Product } from '../types';
import { getCart, saveCart, calculateTotal, finalizePurchase } from '../utils/cartUtils';

export const useCart = () => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const savedCart = getCart();
        setCart(savedCart);
        setTotal(calculateTotal(savedCart));
    }, []);

    const addProduct = (product: Product, opcion: string, cantidad: number) => {
        const updatedCart = [...cart];
        const existingIndex = updatedCart.findIndex(
            item => item.product.id === product.id && item.opcionSeleccionada === opcion
        );

        if (existingIndex >= 0) {
            updatedCart[existingIndex].cantidad += cantidad;
        } else {
            updatedCart.push({ product, opcionSeleccionada: opcion, cantidad });
        }

        setCart(updatedCart);
        setTotal(calculateTotal(updatedCart));
        saveCart(updatedCart);
        alert("¡Producto agregado!");
    };

    const removeProduct = (productId: number, opcion: string) => {
        const updatedCart = cart.filter(
            item => !(item.product.id === productId && item.opcionSeleccionada === opcion)
        );
        setCart(updatedCart);
        setTotal(calculateTotal(updatedCart));
        saveCart(updatedCart);
    };

    const buy = () => {
        if(cart.length === 0) return;
        finalizePurchase(cart);
        setCart([]);
        setTotal(0);
        alert("¡Compra realizada con éxito!");
    };

    return { cart, total, addProduct, removeProduct, buy };
};