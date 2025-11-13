// src/pages/Admin/AdminVentas.tsx
import React from 'react';
import { getSalesHistory } from '../../utils/cartUtils';
import type { CartItem } from '../../types'; // Importamos el tipo

export const AdminVentas: React.FC = () => {
    const salesHistory = getSalesHistory();

    return (
        <div>
            <h2 className="mb-4">Historial de Ventas</h2>
            <div className="table-responsive bg-white shadow-sm rounded">
                <table className="table table-bordered mb-0">
                    <thead className="table-dark">
                        <tr>
                            <th>ID Venta</th>
                            <th>Cant. Productos</th>
                            <th>Total</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {salesHistory.length === 0 ? (
                            <tr><td colSpan={4} className="text-center p-3">No hay ventas registradas.</td></tr>
                        ) : (
                            // Corrección de tipos aquí:
                            salesHistory.map((cart: CartItem[], index: number) => {
                                const total = cart.reduce((sum: number, item: CartItem) => sum + (item.product.precio * item.cantidad), 0);
                                return (
                                    <tr key={index}>
                                        <td>#{1000 + index}</td>
                                        <td>{cart.length} ítems</td>
                                        <td className="fw-bold text-success">${total.toLocaleString('es-CL')}</td>
                                        <td><span className="badge bg-success">Completada</span></td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};