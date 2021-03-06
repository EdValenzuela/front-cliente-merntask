import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    })

    const { email, password } = usuario;

    const handleChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();


    }

    return (
        <>
            <div className="form-usuario">
                <div className="contenedor-form sombra-dark">
                    <h1>Iniciar sesión</h1>

                    <form
                        onSubmit={handleSubmit}
                    >
                        <div className="campo-form">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Tu email"
                                value={email}
                                onChange={handleChange} 
                            />
                        </div>
                        <div className="campo-form">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Tu password"
                                value={password}
                                onChange={handleChange} 
                            />
                        </div>

                        <div className="campo-form">
                            <input 
                                type="submit" 
                                className="btn btn-primario btn-block"
                                value="Iniciar sesión"
                             />
                        </div>
                    </form>
                    <Link to={"/nueva-cuenta"} className="enlace-cuenta">Obtener cuenta</Link>
                </div>
            </div>
        </>
    )
}

export default Login
