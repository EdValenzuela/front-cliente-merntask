import React, {useContext} from 'react'
import Tarea from './Tarea'

import ProyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListadoTareas = () => {

    //extraer proyectos de state inicial
    const proyectosContext = useContext(ProyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    //obtener las tareas del proyecto
    const tareasContext = useContext(TareaContext);
    const { tareasproyecto } = tareasContext;

    //si no hay proyectos seleccionado
    if(!proyecto){
        return <h2>Selecciona un proyecto</h2>;
    }

    //array destructuring para extrar el proyecto actual
    const [proyectoActual] = proyecto;

    return (
        <>
            <h2>Proyecto : {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {
                    tareasproyecto.length === 0 
                    ?(<li className="tarea"><p>No hay tareas</p></li>)
                    : <TransitionGroup>
                        {
                            tareasproyecto.map( tarea => (
                                <CSSTransition
                                    key={tarea.id}
                                    timeout={200}
                                    classNames="tarea"
                                >
                                    <Tarea
                                        tarea={tarea} 
                                    />
                                </CSSTransition>
                            ))
                        }
                    </TransitionGroup>
                }
            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
                onClick={ () =>  eliminarProyecto(proyectoActual.id)}
            >
                Eliminar proyecto &times;
            </button>
        </>
    )
}

export default ListadoTareas
