import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';

interface Props {
    producto: Product;
    alAgregar: (prod: Product, op: string, cant: number) => void;
}

export const ContenidoDetalleProducto: React.FC<Props> = ({ producto, alAgregar }) => {
    const [cantidad, setCantidad] = useState(1);
    // Si es café y tiene opciones, usa la primera, sino 'N/A'
    const [molienda, setMolienda] = useState(producto.opciones.length > 0 ? producto.opciones[0] : 'N/A');
    
    const esCafe = producto.tipo === 'cafe';

    return (
        <div className="card shadow p-4 border-0"> {/* Agregué border-0 y p-4 para mejor estilo */}
            <div className="row g-5"> {/* Aumenté el gap a g-5 para separar más la imagen */}
                
                {/* Imagen */}
                <div className="col-md-5">
                    <img 
                        src={`/${producto.imagen}`} 
                        className="img-fluid rounded shadow-sm" 
                        alt={producto.nombre} 
                    />
                </div>

                {/* Información */}
                <div className="col-md-7">
                    <h2 className="display-6 fw-bold mb-3">{producto.nombre}</h2>
                    
                    {/* LÓGICA DE DESCRIPCIÓN: Muestra la larga si existe, si no, la corta */}
                    <p className="lead fs-6">
                        {producto.descripcionLarga || producto.descripcion}
                    </p>

                    {/* LÓGICA DE NOTAS: Solo se muestra si existen notas */}
                    {producto.notas && (
                        <div className="alert alert-light border mb-3">
                            <strong>Notas:</strong> {producto.notas}
                        </div>
                    )}
                    
                    <hr className="my-4" />
                    
                    <h3 className="mb-4" style={{ color: '#A6634B', fontWeight: 'bold' }}>
                        ${producto.precio.toLocaleString('es-CL')}
                    </h3>
                    
                    {/* Selector de Molienda (Solo Cafés) */}
                    {esCafe && (
                        <div className="mb-3">
                            <label className="form-label fw-bold">Seleccione molienda:</label>
                            <select 
                                className="form-select" 
                                value={molienda} 
                                onChange={(e) => setMolienda(e.target.value)}
                            >
                                {producto.opciones.map(op => (
                                    <option key={op} value={op}>{op}</option>
                                ))}
                            </select>
                        </div>
                    )}

                    {/* Selector de Cantidad */}
                    <div className="mb-4">
                        <label className="form-label fw-bold">Cantidad:</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            min="1" 
                            value={cantidad} 
                            onChange={(e) => setCantidad(parseInt(e.target.value) || 1)} 
                            style={{ maxWidth: '100px' }}
                        />
                    </div>

                    {/* Botones de Acción */}
                    <div className="d-flex gap-2">
                        <button 
                            className="btn btn-primary btn-lg px-4" 
                            onClick={() => alAgregar(producto, esCafe ? molienda : 'N/A', cantidad)}
                        >
                            Añadir al carrito
                        </button>
                        
                        <Link to={`/${producto.tipo}s`} className="btn btn-outline-secondary btn-lg">
                            Volver
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};