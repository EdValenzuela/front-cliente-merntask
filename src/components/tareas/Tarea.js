import React, {useContext} from 'react'

import ProyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

const Tarea = ({tarea}) => {

    //obtener el state de proyectos
    const proyectosContext = useContext(ProyectoContext);
    const { proyecto } = proyectosContext;

    //obtener la funcion del context de tarea
    const tareasContext = useContext(TareaContext);
    const { eliminarTarea, obtenerTareas, cambiarEstadoTarea, guardarTareaActual } = tareasContext;

    const [proyectoActual] = proyecto;

    //funcion que se ejecuta cuando el usuario presiona el btn de eliminar tarea
    const tareaEliminar = id => {
        eliminarTarea(id);
        obtenerTareas(proyectoActual.id);
    }

    //funcion que modifica el estado de las tareas
    const cambiarEstado = tarea => {
        if(tarea.estado){
            tarea.estado = false;
        }else{
            tarea.estado = true;
        }
        cambiarEstadoTarea(tarea);
    }

    //agrega una tarea acual cuando el usuario desea editarla
    const seleccionarTarea = tarea =>{
        guardarTareaActual(tarea);
    }

    return (
        <>
            <li className="tarea sombra">
                <p>{tarea.nombre}</p>

                <div className="estado">
                    {
                        tarea.estado
                        ?
                            (<button
                                type="button"
                                className="completo"
                                onClick={() => cambiarEstado(tarea)}    
                            >
                                Completo
                            </button>)
                        :
                            (<button
                                type="button"
                                className="incompleto"
                                onClick={() => cambiarEstado(tarea)}    
                            >
                                incompleto
                            </button>)
                    }
                </div>

                <div className="acciones">
                    <button
                        type="button"
                        className="btn btn-primario"
                        onClick={() => seleccionarTarea(tarea)}
                    >Editar</button>

                    <button
                        type="button"
                        className="btn btn-secundario"
                        onClick={ ()=> tareaEliminar(tarea.id) }    
                    >Eliminar</button>
                </div>
            </li>
        </>
    )
}

export default Tarea
