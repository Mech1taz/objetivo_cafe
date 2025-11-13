import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';

interface Props {
    producto: Product;
    alAgregar: (prod: Product, op: string, cant: number) => void;
}

export const ContenidoDetalleProducto: React.FC<Props> = ({ producto, alAgregar }) => {
    const [cantidad, setCantidad] = useState(1);
    const [molienda, setMolienda] = useState(producto.opciones[0] || 'N/A');
    const esCafe = producto.tipo === 'cafe';

    return (
        <div className="card shadow p-3">
            <div className="row g-4">
                <div className="col-md-5">
                    <img src={`/${producto.imagen}`} className="img-fluid rounded" alt={producto.nombre} />
                </div>
                <div className="col-md-7">
                    <h2>{producto.nombre}</h2>
                    <p>{producto.descripcion}</p>
                    <hr />
                    <h3>${producto.precio.toLocaleString('es-CL')}</h3>
                    
                    {esCafe && (
                        <div className="mb-3">
                            <label className="form-label">Molienda:</label>
                            <select className="form-control" value={molienda} onChange={(e) => setMolienda(e.target.value)}>
                                {producto.opciones.map(op => <option key={op} value={op}>{op}</option>)}
                            </select>
                        </div>
                    )}

                    <div className="mb-3">
                        <label className="form-label">Cantidad:</label>
                        <input type="number" className="form-control" min="1" value={cantidad} onChange={(e) => setCantidad(parseInt(e.target.value) || 1)} />
                    </div>

                    <button className="btn btn-primary btn-lg" onClick={() => alAgregar(producto, esCafe ? molienda : 'N/A', cantidad)}>
                        Añadir al carrito
                    </button>
                    <br/><br/>
                    <Link to={`/${producto.tipo}s`} className="btn btn-outline-secondary">Volver</Link>
                </div>
            </div>
        </div>
    );
};