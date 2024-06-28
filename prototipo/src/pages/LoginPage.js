import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para redirigir después del inicio de sesión
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import usersData from '../assets/data/users.json'; // Importa los datos de usuarios
import companiesData from '../assets/data/companies.json'; // Importa los datos de empresas

const LoginForm = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Aquí puedes implementar la lógica de validación del inicio de sesión
        // Por ejemplo, validación básica aquí
        const user = usersData.find(user => user.correo === email && user.contraseña === password);

        if (user) {
            const empresa = companiesData.find(company => company.id === parseInt(user.empresa));

            onLogin(user, empresa);
        } else {
            setError('Correo o contraseña incorrectos');
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Ingresa tu correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </Form.Group>

            {error && <Form.Text className="text-danger">{error}</Form.Text>}

            <Button variant="primary" type="submit">
                Iniciar Sesión
            </Button>
        </Form>
    );
};

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = (user, empresa) => {
        // Aquí puedes manejar el inicio de sesión exitoso
        console.log('Inicio de sesión exitoso', user, empresa);
        // Redirige a la página principal u otra página después del inicio de sesión
        navigate('/start'); // Cambia '/start' por la ruta a la que quieras redirigir después del inicio de sesión
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Bienvenido a ArgaPro</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <LoginForm onLogin={handleLogin} />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
