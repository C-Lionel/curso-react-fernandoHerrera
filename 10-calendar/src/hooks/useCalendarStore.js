import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store";


export const useCalendarStore = () => {

    const dispatch = useDispatch()

    const { events, activeEvent } = useSelector(state => state.calendar);

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent))
    }

    const startSavingEvent = async (calendarEvent) => {
        // Llegar al backend
        // Todo sale bien
        if (calendarEvent._id) {
            // Actualizando
            dispatch(onUpdateEvent({ ...calendarEvent }))
        } else {
            // Creando
            dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() })) // Lo desestructura porque es el payload de mi reducer
        }
    }

    const startDeletingEvent = () => {
        // Llegar al backend
        dispatch( onDeleteEvent() )
    }



    return {
        //* Propiedades

        events,
        activeEvent,
        hasEventSelected: !!activeEvent?._id, // La doble negación (!!) hace que si activeEvent es null va a regresar false y si tiene un objeto va a regresar true

        //* Métodos
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent

    }

}
