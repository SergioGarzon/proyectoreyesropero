import { DataTypes } from 'sequelize'
import { sequelize } from '../config/database.js'

const Producto = sequelize.define('Producto', {
  id_producto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: { 
    type: DataTypes.STRING(25), 
    allowNull: false 
  },
  descripcion: { 
    type: DataTypes.STRING(100),
    allowNull: false 
  },
  imagen: { 
    type: DataTypes.STRING(255),
    allowNull: false 
  },
  precio: { 
    type: DataTypes.DECIMAL(10, 2),
    validate: { min: 0 },
    defaultValue: 0,
    allowNull: false 
  },
  stock: { 
    type: DataTypes.INTEGER,
    validate: { min: 0 },
    defaultValue: 0,
    allowNull: false  
  },
  categoria: { 
    type: DataTypes.ENUM('bebe', 'niño', 'niña', 'unisex'),
    defaultValue: 'bebe',
    allowNull: false 
  }
})

export default Producto