import { Router } from 'express'
import { CarritoRouteo } from './carritoRouter.js'

const ruteo = Router()

ruteo.use('/carrito', CarritoRouteo)


export default ruteo

