import React from 'react';

export const ContenidoMetodos: React.FC = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4 display-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Guía de Métodos ☕
            </h1>
            <p className="lead text-center mb-5">
                Aprende a extraer el máximo sabor de tu café, sea cual sea tu equipo.
            </p>
            
            <div className="row">
                {/* --- Método 1: Prensa Francesa --- */}
                <div className="col-md-4 mb-4">
                    <div className="card shadow h-100 border-0">
                        <div className="card-body">
                            <h3 className="card-title text-primary">Prensa Francesa</h3>
                            <h6 className="card-subtitle mb-2 text-muted">Cuerpo robusto e intenso</h6>
                            <p className="card-text">Método de <strong>inmersión total</strong>. El café se empapa completamente en agua caliente.</p>
                            <div className="alert alert-light border">
                                <ul className="mb-0 ps-3">
                                    <li>Molienda: <strong>Gruesa</strong></li>
                                    <li>Tiempo: <strong>4 min</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Método 2: V60 --- */}
                <div className="col-md-4 mb-4">
                    <div className="card shadow h-100 border-0">
                        <div className="card-body">
                            <h3 className="card-title text-success">V60 / Filtro</h3>
                            <h6 className="card-subtitle mb-2 text-muted">Limpieza y claridad</h6>
                            <p className="card-text">Método de <strong>goteo</strong>. Resalta notas florales y cítricas.</p>
                            <div className="alert alert-light border">
                                <ul className="mb-0 ps-3">
                                    <li>Molienda: <strong>Media</strong></li>
                                    <li>Tiempo: <strong>3 min</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Método 3: Moka Italiana --- */}
                <div className="col-md-4 mb-4">
                    <div className="card shadow h-100 border-0">
                        <div className="card-body">
                            <h3 className="card-title" style={{ color: '#A6634B' }}>Moka Italiana</h3>
                            <h6 className="card-subtitle mb-2 text-muted">El espresso casero</h6>
                            <p className="card-text">Utiliza presión de vapor. Café concentrado y fuerte.</p>
                            <div className="alert alert-light border">
                                <ul className="mb-0 ps-3">
                                    <li>Molienda: <strong>Fina</strong></li>
                                    <li>Fuego: <strong>Bajo</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 🥚 --- AQUÍ ESTÁ TU EASTER EGG --- 🥚 */}
            <div className="text-center mt-5 pt-5 pb-5 opacity-75 hover-opacity-100">
                <p className="small text-muted fst-italic">
                    ¿Llegaste hasta aquí? Te mereces un descanso...
                </p>
                
                <img 
                    src="/img/paletas.gif"
                    alt="Easter Egg??" 
                    className="img-fluid rounded"
                    style={{ maxWidth: '300px', transition: 'transform 0.3s' }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2) rotate(10deg)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}
                />
            </div>

        </div>
    );
};