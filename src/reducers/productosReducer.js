import { AGREGAR_PRODUCTO, EDITAR_PRODUCTO, ELIMINAR_PRODUCTO, MOSTRAR_PRODUCTO, MOSTRAR_PRODUCTOS } from "../actions/type";


const initialState = {
    productos: []
}


export default function (state = initialState, action) {
    switch (action.type) {
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                productos: [...state.productos, action.payload]
            }

        case EDITAR_PRODUCTO:
            return {
                ...state,
                productos: state.productos.map(p => {
                    return (
                        p.id === action.payload.id
                            ? (p = action.payload) : p
                    )
                })
            }

        case ELIMINAR_PRODUCTO:
            return {
                ...state,
                productos: state.productos.filter(p => p.id !== action.payload)
            }

        case MOSTRAR_PRODUCTO:
            return {
                ...state,
                productos: state.productos(p => p.id === action.payload)
            }

        case MOSTRAR_PRODUCTOS:

            return { ...state }

        default:
            return { ...state }
    }
}