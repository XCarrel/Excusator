import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class User extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        firstname: {
          type: DataTypes.STRING(255),
          allowNull: false
        },
        lastname: {
          type: DataTypes.STRING(255),
          allowNull: false
        },
        role: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        state: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        guardian_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "users",
            key: "id"
          }
        }
      },
      {
        sequelize,
        tableName: "users",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "id" }]
          },
          {
            name: "users_users_FK",
            using: "BTREE",
            fields: [{ name: "guardian_id" }]
          }
        ]
      }
    );
  }
}
