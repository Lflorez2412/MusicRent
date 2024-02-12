import React, { useState } from 'react';

function FormLogin() {
    const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: 'cliente' // Valor por defecto
    });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a un servidor para autenticar al usuario
    console.log('Datos del formulario:', formData);
    // Luego puedes restablecer el estado del formulario si lo deseas
    setFormData({
        email: '',
        password: '',
        userType: 'cliente'
    });
    };

    return (
    <div>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
        <div>
            <label>Correo Electrónico:</label>
            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            />
        </div>
        <div>
            <label>Contraseña:</label>
            <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            />
        </div>
        <div>
            <label>Tipo de Usuario:</label>
            <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            >
            <option value="cliente">Cliente</option>
            <option value="administrador">Administrador</option>
            </select>
        </div>
        <button type="submit">Iniciar Sesión</button>
        </form>
    </div>
    );
}

export default FormLogin;