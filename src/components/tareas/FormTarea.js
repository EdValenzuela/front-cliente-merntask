import React, {useContext, useEffect, useState} from 'react'
import ProyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

     //extraer si un proyecto esta activo
    const proyectosContext = useContext(ProyectoContext);
    const { proyecto } = proyectosContext;

    //obtener la funcion del context de tarea
    const tareasContext = useContext(TareaContext);
    const { tareaseleccionada, errortarea, agregarTarea, validarTarea, obtenerTareas, actualizarTarea, limpiarTarea } = tareasContext;

    useEffect(() => {
        if(tareaseleccionada !== null){
            guardarTarea(tareaseleccionada)
        }else{
            guardarTarea({
                nombre: ''
            })
        }
    }, [tareaseleccionada]);

    const [tarea, guardarTarea] = useState({
        nombre: ''
    });

    const {nombre} = tarea;

     //si no hay proyectos seleccionado
    if(!proyecto){
        return null;
    }

    //array destructuring para extrar el proyecto actual
    const [proyectoActual] = proyecto;

    //leer los valores del formulario

    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        //validar
        if(!nombre){
            validarTarea();
            return;
        }

        // si es edicion o si es nueva tarea
        if(tareaseleccionada === null){
            //agregar la nuyeva tarea al state de tareas
            tarea.proyectoId = proyectoActual.id;
            tarea.estadp = false;
            agregarTarea(tarea);
        }else{
            //actualizar tarea existente
            actualizarTarea(tarea);

            //elimina tarea selecciona del state
            limpiarTarea();
        }

        //obtener y filtrar las tareas del proyecto actual
        obtenerTareas(proyectoActual.id);

        //reiniciar form
        guardarTarea({
            nombre: ''
        })
    }

    return (
        <>
            <div className="formulario">
                <form
                    onSubmit={onSubmit}    
                >
                    <div className="contenedor-input">
                        <input 
                            type="text"
                            className="input-text"
                            placeholder="Nombre tarea..."
                            name="nombre"
                            value={nombre}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="contenedor-input">
                        <input 
                            type="submit"
                            className="btn btn-primario btn-submit btn-block"
                            value={tareaseleccionada ? 'Editar Tarea' : 'Agregar tarea'}
                        />
                    </div>
                </form>
                {errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null}
            </div>
        </>
    )
}

export default FormTarea
