import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import db from '.';

class ProductType extends Model<InferAttributes<ProductType>,
InferCreationAttributes<ProductType>> {
  declare id: number;
  declare type: string;
}

ProductType.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  type: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'ProductType',
  timestamps: false,
  underscored: true,
});

export default ProductType;
