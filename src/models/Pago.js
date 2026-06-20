import { DataTypes } from 'sequelize'
import { sequelize } from '../config/database.js'

const Pago = sequelize.define('Pago', {
  id_pago: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_pedido: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
  },
  metodo_pago: { 
    type: DataTypes.STRING(20),
    allowNull: false 
  },
  estado_pago: { 
    type: DataTypes.ENUM('pendiente', 'aprobado', 'rechazado'),
    defaultValue: 'pendiente',
    allowNull: false 
  },
  monto: { 
    type: DataTypes.DECIMAL(10, 2),
    validate: { min: 0 },
    defaultValue: 0,
    allowNull: false 
  }
})

export default Pago