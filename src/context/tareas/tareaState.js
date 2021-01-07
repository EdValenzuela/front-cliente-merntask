import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import tareaContext from './tareaContext';
import tareaReducer from './tareaReducer';

import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types';

const TareaState = ({children}) => {
    const initialState = {
        tareas:[
            {id:1, nombre: 'elegir plataforma', estado: true, proyectoId: 1},
            {id:2, nombre: 'elegir colores', estado: false, proyectoId: 2},
            {id:3, nombre: 'elegir plataformas de pago', estado: true, proyectoId: 3},
            {id:4, nombre: 'elegir hosting', estado: true, proyectoId: 4},
            {id:5, nombre: 'elegir colores', estado: false, proyectoId: 4},
            {id:6, nombre: 'elegir plataformas de pago', estado: true, proyectoId: 1},
            {id:7, nombre: 'elegir hosting', estado: true, proyectoId: 4}
        ],
        tareasproyecto: null,
        errortarea: false,
        tareaseleccionada: null
    }

    //crear dispatch y state
    const [state, dispatch] = useReducer(tareaReducer, initialState)

    //crear las funciones

    //obtener las tareas de un proyecto en especifico
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    //agregar una tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        tarea.id = uuid();
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    //valida y muestra un error en caso de que sea necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    //eliminar tarea por id
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    //Cambia el estado de cada tarea
    const cambiarEstadoTarea = tarea =>{
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    //Extrae una tarea para edición
    const guardarTareaActual = tarea =>{
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    //edita o modifica una tarea
    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }

    //Elimina la tarea seleccionada
    const limpiarTarea = () =>{
        dispatch({
            type: LIMPIAR_TAREA
        })
    }

    return (
        <tareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto : state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {children}
        </tareaContext.Provider>
    )
}

export default TareaState;