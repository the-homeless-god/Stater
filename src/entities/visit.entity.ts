import { INTEGER, STRING, DATE } from 'sequelize'

const VisitEntity = {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  time: {
    type: DATE,
    allowNull: false,
  },
}

export default VisitEntity
