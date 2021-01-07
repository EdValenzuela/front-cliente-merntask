import React, { useState, useContext } from 'react'
import ProyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    const proyectosContext = useContext(ProyectoContext);
    const { formulario, errorFormulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;

    const [proyecto, guardarProyecto] = useState({
        nombre: '',
    });

    const {nombre} = proyecto;

    const handleChangeProyecto = e =>{
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        //validar el proyecto
        if(!nombre) {
            mostrarError();
            return;
        };
        
        agregarProyecto(proyecto);

        //reiniciar form
        guardarProyecto({
            nombre: ''
        })
    }

    return (
        <>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick= { () => mostrarFormulario() }
            >
                Nuevo proyecto
            </button>

            {
                formulario 
                ? (
                    <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={handleSubmit}
                    >
                <input 
                    type="text"
                    className="input-text"
                    placeholder="Nombre proyecto"
                    name="nombre"
                    value={nombre}
                    onChange={handleChangeProyecto}
                />

                <input 
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Agregar proyecto"
                />

                    </form>
                )
                :
                null
            }
            {errorFormulario ? <p className="mensaje error">El nombre del proyecto es obligatorio</p> : null}
        </>
    )
}

export default NuevoProyecto
