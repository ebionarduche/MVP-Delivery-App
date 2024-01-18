import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import db from '.';

class Restaurants extends Model<InferAttributes<Restaurants>,
InferCreationAttributes<Restaurants>> {
  declare id: number;
  declare storeName: string;
  declare category: string;
  declare description: string;
  declare address: string;
  declare phone: string;
  declare logo: string;
}

Restaurants.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  storeName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  logo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'restaurants',
  timestamps: false,
  underscored: true,
});

export default Restaurants;
