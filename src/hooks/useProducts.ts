// src/hooks/useProducts.ts
import { useState, useEffect } from 'react';
import { productsBase } from '../data/productsBase';
import type { Product } from '../types';

const UPDATES_KEY = "productosActualizados";
const NEW_PRODUCTS_KEY = "productosNuevos";

export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);

    // Esta función carga y combina los datos
    const loadProducts = (): Product[] => {
        const actualizados = JSON.parse(localStorage.getItem(UPDATES_KEY) || '{}');
        const nuevos = JSON.parse(localStorage.getItem(NEW_PRODUCTS_KEY) || '[]');
        
        let todos: Product[] = [...productsBase, ...nuevos];

        return todos.map(prod => {
            const updatedPrice = actualizados[prod.id]?.precio;
            return updatedPrice ? { ...prod, precio: updatedPrice } : prod;
        });
    };

    useEffect(() => {
        setProducts(loadProducts());
    }, []);

    const getProductById = (id: number): Product | undefined => {
        return products.find(p => p.id === id);
    };
    
    return { 
        products, 
        getProductById,
        // ¡AQUÍ ESTABA EL ERROR! Ahora devolvemos la función
        refreshProducts: () => setProducts(loadProducts()) 
    };
};