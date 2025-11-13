// src/pages/Admin/AdminResumen.tsx
import React from 'react';
import { useProducts } from '../../hooks/useProducts';
import { getSalesHistory } from '../../utils/cartUtils';
import { getUsers } from '../../utils/authUtils';
import type { CartItem } from '../../types'; // Importamos el tipo

export const AdminResumen: React.FC = () => {
    const { products } = useProducts();
    const users = getUsers();
    const sales = getSalesHistory();

    // Corrección de tipos en el reduce:
    const totalVentas = sales.reduce((total: number, cart: CartItem[]) => {
        return total + cart.reduce((sub: number, item: CartItem) => sub + (item.product.precio * item.cantidad), 0);
    }, 0);

    return (
        <div>
            <h2 className="mb-4">Resumen General</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="card text-white bg-primary mb-3">
                        <div className="card-header">Usuarios Registrados</div>
                        <div className="card-body">
                            <h1 className="card-title text-center">{users.length}</h1>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-white bg-warning mb-3">
                        <div className="card-header">Total Productos</div>
                        <div className="card-body">
                            <h1 className="card-title text-center">{products.length}</h1>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-white bg-success mb-3">
                        <div className="card-header">Ventas Totales</div>
                        <div className="card-body">
                            <h1 className="card-title text-center">${totalVentas.toLocaleString('es-CL')}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};