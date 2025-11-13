import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';

interface Props { producto: Product; }

export const TarjetaProducto: React.FC<Props> = ({ producto }) => {
    return (
        <div className="col-sm-4 mb-4">
            <div className="card h-100 shadow-sm">
                <img src={`/${producto.imagen}`} className="card-img-top" alt={producto.nombre} style={{height: '250px', objectFit: 'cover'}} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text text-muted">{producto.descripcion}</p>
                    <h4 className="mt-auto text-primary">${producto.precio.toLocaleString('es-CL')}</h4>
                    <Link to={`/productos/${producto.id}`} className="btn btn-primary mt-2">Ver más...</Link>
                </div>
            </div>
        </div>
    );
};