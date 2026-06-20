import { Router } from 'express'
import { CarritoDetalle } from '../models/index.js'

export const CarritoDetalleRouteo = Router()

CarritoDetalleRouteo.get('/', async (req, res) => {
    try {
        const carritos = await CarritoDetalle.findAll()   
        res.json(carritos)
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los carritos' })
    }
})

CarritoDetalleRouteo.get('/:id', async (req, res) => {
    try {
        const carrito = await CarritoDetalle.findByPk(req.params.id)   
        if (carrito) {
            res.json(carrito)
        }
        else {
            res.status(404).json({ error: 'Carrito no encontrado' })
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el carrito' })
    }
})

CarritoDetalleRouteo.post('/', async (req, res) => {
    try {
        const nuevoCarrito = await CarritoDetalle.create(req.body)
        res.status(201).json(nuevoCarrito)
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el carrito' })
    }
})

CarritoDetalleRouteo.put('/:id', async (req, res) => {
    try {
        const carrito = await CarritoDetalle.findByPk(req.params.id)
        if (carrito) {
            await carrito.update(req.body)
            res.json(carrito)
        }
        else {
            res.status(404).json({ error: 'Carrito no encontrado' })
        }

    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el carrito' })
    }

})


CarritoDetalleRouteo.delete('/:id', async (req, res) => {
    try {
        const carrito = await CarritoDetalle.findByPk(req.params.id)
        if (carrito) {
            await carrito.destroy()
            res.json({ message: 'Carrito eliminado' })
        }
        else {
            res.status(404).json({ error: 'Carrito no encontrado' })
        }
    }
    catch(error) {
        res.status(500).json({ error: 'Error al eliminar el carrito' })
    }
})


