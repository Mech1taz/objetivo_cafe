// src/utils/authUtils.ts
import type { User } from '../types';

const USERS_KEY = "users_db"; // Base de datos simulada
const SESSION_KEY = "current_user"; // Usuario activo

// --- Obtener todos los usuarios ---
export const getUsers = (): User[] => {
    const users = localStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : [];
};

// --- Registrar usuario ---
export const registerUser = (newUser: User): boolean => {
    const users = getUsers();
    // Validar si el email ya existe
    if (users.some(u => u.email === newUser.email)) {
        return false; 
    }
    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    return true;
};

// --- Login ---
export const loginUser = (email: string, pass: string): boolean => {
    const users = getUsers();
    const foundUser = users.find(u => u.email === email && u.password === pass);

    if (foundUser) {
        localStorage.setItem(SESSION_KEY, JSON.stringify(foundUser));
        // Dispara evento para actualizar la UI
        window.dispatchEvent(new Event("storage")); 
        return true;
    }
    return false;
};

// --- Logout ---
export const logoutUser = () => {
    localStorage.removeItem(SESSION_KEY);
    window.dispatchEvent(new Event("storage"));
};

// --- Obtener usuario actual ---
export const getCurrentUser = (): User | null => {
    const user = localStorage.getItem(SESSION_KEY);
    return user ? JSON.parse(user) : null;
};