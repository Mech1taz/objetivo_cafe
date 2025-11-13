// src/types.ts
export type ProductType = 'cafe' | 'cafetera' | 'accesorio';

export interface Product {
    id: number;
    nombre: string;
    precio: number;
    tipo: ProductType;
    opciones: string[];
    imagen: string;
    descripcion?: string;      // Descripción corta (para el catálogo)
    
    // NUEVOS CAMPOS:
    descripcionLarga?: string; // Párrafo detallado (para la página de detalle)
    notas?: string;            // Ej: "Cacao, naranja, nueces"
}

export interface CartItem {
    product: Product;
    opcionSeleccionada: string;
    cantidad: number;
}
export interface User {
    nombre: string;
    email: string;
    password: string;
    rut?: string; // Opcional
}