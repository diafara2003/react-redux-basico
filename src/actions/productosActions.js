import { AGREGAR_PRODUCTO, EDITAR_PRODUCTO, ELIMINAR_PRODUCTO, MOSTRAR_PRODUCTO, MOSTRAR_PRODUCTOS } from "./type";


export const mostrar_productos = () => {
    return {
        type: MOSTRAR_PRODUCTOS
    }
}

export const mostrar_producto = (id) => {
    return {
        type: MOSTRAR_PRODUCTO,
        payload: id
    }
}

export const agregar_producto = (producto) => {
    return {
        type: AGREGAR_PRODUCTO,
        payload: producto
    }
}
export const eliminar_producto = (id) => {
    return {
        type: ELIMINAR_PRODUCTO,
        payload: id
    }
}

export const editar_producto = (producto) => {
    return {
        type: EDITAR_PRODUCTO,
        payload: producto
    }
}