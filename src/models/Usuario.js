import { DataTypes } from 'sequelize'
import { sequelize } from '../config/database.js'

const Usuario = sequelize.define('Usuario', {
  id_usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: { 
    type: DataTypes.STRING(15),
    allowNull: false 
  },
  email: { 
    type: DataTypes.STRING(25),
    allowNull: false
  },
  password: { 
    type: DataTypes.STRING(25),
    allowNull: false 
  },
  telefono: { 
    type: DataTypes.STRING(20),
    allowNull: false 
  },
  direccion: { 
    type: DataTypes.STRING(40),
    allowNull: false 
  },
  ciudad: { 
    type: DataTypes.STRING(25),
    allowNull: false 
  },
  provincia: { 
    type: DataTypes.STRING(50),
    allowNull: false 
  },
  fecha_registro: { 
    type: DataTypes.DATE,
    allowNull: false 
  }
})

export default Usuario