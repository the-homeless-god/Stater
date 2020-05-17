import { INTEGER, STRING, DATE } from 'sequelize'

const StatEntity = {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  country: {
    type: STRING,
  },
  icon: {
    type: STRING,
  },
  death: {
    type: INTEGER,
  },
  recov: {
    type: INTEGER,
  },
  case: {
    type: INTEGER,
  },
  time: {
    type: DATE,
    allowNull: false,
  },
}

export default StatEntity
