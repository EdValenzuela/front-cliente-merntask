import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {

    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    })

    const {nombre, email, password, confirmar } = usuario;

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
                    <h1>Obtener una cuenta</h1>

                    <form
                        onSubmit={handleSubmit}
                    >
                        <div className="campo-form">
                            <label htmlFor="nombre">Nombre</label>
                            <input 
                                type="text"
                                id="nombre"
                                name="nombre"
                                placeholder="Tu nombre"
                                value={nombre}
                                onChange={handleChange} 
                            />
                        </div>
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
                            <label htmlFor="confirmar">Confirmar Password</label>
                            <input 
                                type="password"
                                id="confirmar"
                                name="confirmar"
                                placeholder="Tu confirmar"
                                value={confirmar}
                                onChange={handleChange} 
                            />
                        </div>

                        <div className="campo-form">
                            <input 
                                type="submit" 
                                className="btn btn-primario btn-block"
                                value="Registrarme"
                            />
                        </div>
                    </form>
                    <Link to={"/"} className="enlace-cuenta">Volver a iniciar sesión</Link>
                </div>
            </div>
        </>
    )
}

export default NuevaCuenta
