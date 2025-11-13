import React, { useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import type { Product, ProductType } from '../../types';

export const AdminProductos: React.FC = () => {
    const { products, refreshProducts } = useProducts(); // Necesitamos refreshProducts en el hook!
    const [showForm, setShowForm] = useState(false);
    
    // Estado del formulario
    const [newProd, setNewProd] = useState({
        nombre: '',
        precio: 0,
        tipo: 'cafe' as ProductType,
        imagen: ''
    });

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        
        // 1. Generar ID nuevo
        const maxId = products.reduce((max, p) => Math.max(max, p.id), 0);
        const nuevoId = maxId + 1;

        // 2. Crear objeto
        const productoAGuardar: Product = {
            id: nuevoId,
            nombre: newProd.nombre,
            precio: newProd.precio,
            tipo: newProd.tipo,
            opciones: newProd.tipo === 'cafe' ? ["Grano entero", "Molido"] : [],
            imagen: newProd.imagen || 'img/default.png'
        };

        // 3. Guardar en localStorage (Simulando Base de Datos)
        const storedNewProducts = JSON.parse(localStorage.getItem("productosNuevos") || '[]');
        storedNewProducts.push(productoAGuardar);
        localStorage.setItem("productosNuevos", JSON.stringify(storedNewProducts));

        // 4. Actualizar vista y limpiar
        alert("Producto guardado!");
        setShowForm(false);
        setNewProd({ nombre: '', precio: 0, tipo: 'cafe', imagen: '' });
        
        // ✅ USA LA FUNCIÓN AQUÍ:
        refreshProducts(); 
        
        // (Si tenías window.location.reload(), bórralo, refreshProducts es más rápido)
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Gestión de Productos</h2>
                <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
                    {showForm ? 'Cancelar' : '+ Agregar Producto'}
                </button>
            </div>

            {/* Formulario de Agregar */}
            {showForm && (
                <div className="card p-4 mb-4 shadow-sm">
                    <h4>Nuevo Producto</h4>
                    <form onSubmit={handleSave}>
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <label>Nombre</label>
                                <input type="text" className="form-control" required 
                                    value={newProd.nombre}
                                    onChange={e => setNewProd({...newProd, nombre: e.target.value})} />
                            </div>
                            <div className="col-md-2 mb-3">
                                <label>Precio</label>
                                <input type="number" className="form-control" required 
                                    value={newProd.precio}
                                    onChange={e => setNewProd({...newProd, precio: parseInt(e.target.value)})} />
                            </div>
                            <div className="col-md-3 mb-3">
                                <label>Tipo</label>
                                <select className="form-select" 
                                    value={newProd.tipo}
                                    onChange={e => setNewProd({...newProd, tipo: e.target.value as ProductType})}>
                                    <option value="cafe">Café</option>
                                    <option value="cafetera">Cafetera</option>
                                    <option value="accesorio">Accesorio</option>
                                </select>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label>Ruta Imagen</label>
                                <input type="text" className="form-control" placeholder="img/ejemplo.png"
                                    value={newProd.imagen}
                                    onChange={e => setNewProd({...newProd, imagen: e.target.value})} />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success">Guardar</button>
                    </form>
                </div>
            )}

            {/* Tabla */}
            <div className="table-responsive bg-white shadow-sm rounded">
                <table className="table table-hover mb-0">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Tipo</th>
                            <th>Precio</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(p => (
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.nombre}</td>
                                <td><span className="badge bg-secondary">{p.tipo}</span></td>
                                <td>${p.precio.toLocaleString('es-CL')}</td>
                                <td>
                                    <button className="btn btn-sm btn-info text-white">Editar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};