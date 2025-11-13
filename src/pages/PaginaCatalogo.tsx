import React from 'react';
import { TarjetaProducto } from '../components/TarjetaProducto';
import { useProducts } from '../hooks/useProducts';
import type { ProductType } from '../types';

export const PaginaCatalogo: React.FC<{ tipo: ProductType }> = ({ tipo }) => {
    const { products } = useProducts();
    const filtrados = products.filter(p => p.tipo === tipo);

    return (
        <div>
            <h1 className="mb-4">Catálogo de {tipo.toUpperCase()}</h1>
            <div className="row">
                {filtrados.map(p => <TarjetaProducto key={p.id} producto={p} />)}
            </div>
        </div>
    );
};