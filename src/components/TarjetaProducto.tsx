import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';

interface Props { producto: Product; }

export const TarjetaProducto: React.FC<Props> = ({ producto }) => {
    const precioDisplay = producto.precio.toLocaleString('es-CL');

    return (
        <div className="col-sm-4 mb-4">
            <div className="card m-2 shadow h-100" style={{ borderRadius: '1rem', overflow: 'hidden', border: 'none' }}>

                {/* IMAGEN: Ajustada para ser idéntica a tu HTML original */}
                <img
                    src={`/${producto.imagen}`}
                    className="card-img-top"
                    alt={producto.nombre}
                    style={{
                        height: '250px',      // Altura original de tu CSS
                        objectFit: 'cover',   // 'cover' hace que llene todo el ancho sin deformarse
                        width: '100%'         // Asegura que ocupe el ancho de la tarjeta
                    }}
                />

                <div className="card-body d-flex flex-column text-center"> {/* text-center para centrar como antes */}
                    <h4 className="mt-auto fw-bold" style={{ color: '#A6634B' }}>
                        ${precioDisplay}
                    </h4>

                    

                    <p className="card-text flex-grow-1">
                        {producto.descripcion || 'Café de especialidad.'}
                    </p>

                    {/* Botón Ver más */}
                    <Link to={`/productos/${producto.id}`} className="btn btn-primary mt-auto">
                        Ver más...
                    </Link>
                </div>
            </div>
        </div>
    );
};