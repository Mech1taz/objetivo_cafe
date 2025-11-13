// src/pages/PaginaUsuario.tsx
import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';

export const PaginaUsuario: React.FC = () => {
    const { user, logout } = useAuth();

    if (!user) {
        return (
            <div className="container mt-5 text-center">
                <h2>Debes iniciar sesión primero.</h2>
                <Link to="/login" className="btn btn-primary mt-3">Ir al Login</Link>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Perfil de Usuario</h1>
            <div className="card shadow p-4">
                <p><strong>Nombre:</strong> {user.nombre}</p>
                <p><strong>Rut:</strong> {user.rut || 'N/A'}</p> {/* Asegúrate de agregar 'rut' a tu interfaz User en types.ts */}
                <p><strong>Correo:</strong> {user.email}</p>
                
                <hr/>
                <button className="btn btn-danger" onClick={logout}>Cerrar Sesión</button>
            </div>
        </div>
    );
};