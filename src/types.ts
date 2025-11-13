export type ProductType = 'cafe' | 'cafetera' | 'accesorio';

export interface Product {
    id: number;
    nombre: string;
    precio: number;
    tipo: ProductType;
    opciones: string[];
    imagen: string;
    descripcion?: string;
}

export interface CartItem {
    product: Product;
    opcionSeleccionada: string;
    cantidad: number;
}
// src/types.ts
export interface User {
    nombre: string;
    email: string;
    password: string;
    rut?: string; // Nuevo campo opcional
}
