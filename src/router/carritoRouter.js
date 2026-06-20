import { Router } from 'express'
import { Carrito } from '../models/index.js'

export const CarritoRouteo = Router()

CarritoRouteo.get('/', async (req, res) => {
    try {
        const carritos = await Carrito.findAll()   
        res.json(carritos)
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los carritos' })
    }
})


