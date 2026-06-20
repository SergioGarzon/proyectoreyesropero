import Carrito from './Carrito.js'
import CarritoDetalle from './CarritoDetalle.js'
import Pago from './Pago.js'
import Pedido from './Pedido.js'
import PedidoDetalle from './PedidoDetalle.js'
import Producto from './Producto.js'
import Usuario from './Usuario.js'

Pedido.belongsTo(Usuario, { foreignKey: 'id_usuario' })
Usuario.hasMany(Pedido, { foreignKey: 'id_usuario' })

PedidoDetalle.belongsTo(Pedido, { foreignKey: 'id_pedido' })
Pedido.hasMany(PedidoDetalle, { foreignKey: 'id_pedido' })

PedidoDetalle.belongsTo(Producto, { foreignKey: 'id_producto' })
Producto.hasMany(PedidoDetalle, { foreignKey: 'id_producto' })

Pago.belongsTo(Pedido, { foreignKey: 'id_pedido' })
Pedido.hasOne(Pago, { foreignKey: 'id_pedido' })

Carrito.belongsTo(Usuario, { foreignKey: 'id_usuario' })
Usuario.hasMany(Carrito, { foreignKey: 'id_usuario' })

CarritoDetalle.belongsTo(Producto, { foreignKey: 'id_producto' })
Producto.hasMany(CarritoDetalle, { foreignKey: 'id_producto' })

CarritoDetalle.belongsTo(Carrito, { foreignKey: 'id_carrito' })
Carrito.hasMany(CarritoDetalle, { foreignKey: 'id_carrito' })

export {
    Carrito,
    CarritoDetalle,
    Pago,
    Pedido,
    PedidoDetalle,
    Producto,
    Usuario
}