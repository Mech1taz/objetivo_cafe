// src/pages/PaginaLogin.tsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../utils/authUtils';

export const PaginaLogin: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (loginUser(email, password)) {
            // Redirigir al perfil o al inicio
            navigate('/usuario'); 
        } else {
            setError("Correo o contraseña incorrectos.");
        }
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
                    <div className="shadow rounded p-4 bg-white">
                        <h1 className="text-center mb-4">Iniciar Sesión</h1>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">E-mail:</label>
                                <input type="email" className="form-control" required 
                                    onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Contraseña:</label>
                                <input type="password" className="form-control" required 
                                    onChange={e => setPassword(e.target.value)} />
                            </div>
                            
                            {error && <div className="alert alert-danger">{error}</div>}

                            <div className="text-center mt-3">
                                <button type="submit" className="btn btn-primary px-4">Ingresar</button>
                                <br/><br/>
                                <Link to="/registro" className="btn btn-link">¿No tienes cuenta? Regístrate</Link>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-sm-3"></div>
            </div>
        </div>
    );
};