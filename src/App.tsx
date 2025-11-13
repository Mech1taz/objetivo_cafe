import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// --- Layouts ---
import { LayoutPrincipal } from './components/layout/LayoutPrincipal';
import { AdminLayout } from './components/layout/AdminLayout';

// --- Páginas Públicas (Tienda) ---
import { PaginaCatalogo } from './pages/PaginaCatalogo';
import { PaginaDetalleProducto } from './pages/PaginaDetalleProducto';
import { PaginaCarrito } from './pages/PaginaCarrito';
import { PaginaMetodos } from './pages/PaginaMetodos';

// --- Páginas de Usuario ---
import { PaginaLogin } from './pages/PaginaLogin';
import { PaginaRegistro } from './pages/PaginaRegistro';
import { PaginaUsuario } from './pages/PaginaUsuario';
import { HomePage } from './pages/HomePage';

// --- Páginas de Administración ---
import { AdminResumen } from './pages/Admin/AdminResumen';
import { AdminProductos } from './pages/Admin/AdminProductos';
import { AdminUsuarios } from './pages/Admin/AdminUsuarios';
import { AdminVentas } from './pages/Admin/AdminVentas';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* 🏠 RUTAS PÚBLICAS (Usan MainLayout con Navbar superior) */}
        <Route path="/" element={<LayoutPrincipal />}>
          <Route index element={<HomePage />} />
          <Route path="cafes" element={<PaginaCatalogo tipo="cafe" />} />
          {/* Portada: Muestra el catálogo de cafés por defecto */}
          <Route index element={<PaginaCatalogo tipo="cafe" />} />
          
          {/* Catálogos */}
          <Route path="cafes" element={<PaginaCatalogo tipo="cafe" />} />
          <Route path="cafeteras" element={<PaginaCatalogo tipo="cafetera" />} />
          <Route path="accesorios" element={<PaginaCatalogo tipo="accesorio" />} />
          
          {/* Detalle de Producto */}
          <Route path="productos/:id" element={<PaginaDetalleProducto />} />
          
          {/* Utilidades */}
          <Route path="carrito" element={<PaginaCarrito />} />
          <Route path="metodos" element={<PaginaMetodos />} />

          {/* Autenticación y Usuario */}
          <Route path="login" element={<PaginaLogin />} />
          <Route path="registro" element={<PaginaRegistro />} />
          <Route path="usuario" element={<PaginaUsuario />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminResumen />} /> 
          <Route path="resumen" element={<AdminResumen />} />
          <Route path="productos" element={<AdminProductos />} />
          <Route path="usuarios" element={<AdminUsuarios />} />
          <Route path="ventas" element={<AdminVentas />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;