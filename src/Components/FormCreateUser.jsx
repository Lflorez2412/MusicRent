import React, { useState } from 'react';

function FormCreateUser() {
    const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    userType: 'cliente' // Valor predeterminado
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
    // Aquí puedes enviar los datos del formulario a un servidor para crear el usuario
    console.log('Datos del formulario:', formData);
    // Luego puedes restablecer el estado del formulario si lo deseas
    setFormData({
        username: '',
        email: '',
        password: '',
        userType: 'cliente' // Restablecer al valor predeterminado
    });
    };

    return (
    <div>
        <h2>Bienvenido a MusicRent</h2>
        <form onSubmit={handleSubmit}>
        <div>
            <label>Nombre de Usuario:</label>
            <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            />
        </div>
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
        <button type="submit">Crear Usuario</button>
        </form>
    </div>
    );
}

export default FormCreateUser;