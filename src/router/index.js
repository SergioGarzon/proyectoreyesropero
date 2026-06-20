import { Router } from 'express'
import { CarritoRouteo } from './carritoRouter.js'
import { CarritoDetalleRouteo } from './carritoDetalleRouter.js'

const ruteo = Router()

ruteo.use('/carrito', CarritoRouteo)
ruteo.use('/carrito-detalle', CarritoDetalleRouteo)

export default ruteo

