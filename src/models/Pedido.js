import { DataTypes } from 'sequelize'
import { sequelize } from '../config/database.js'

const Pedido = sequelize.define('Pedido', {
  id_pedido: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_usuario: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
  },
  fecha: { 
    type: DataTypes.DATE,
    allowNull: false 
  },
  total: { 
    type: DataTypes.DECIMAL(10, 2),
    validate: { min: 0 },
    defaultValue: 0,
    allowNull: false 
  },
  estado: { 
    type: DataTypes.ENUM('pendiente', 'enviado', 'entregado', 'pagado'),
    defaultValue: 'pendiente',
    allowNull: false 
  },
  direccion_envio: { 
    type: DataTypes.STRING(40),
    allowNull: false  
  }
})

export default Pedido