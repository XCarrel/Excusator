import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class Absence extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        reason: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        from: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: Sequelize.Sequelize.fn("current_timestamp")
        },
        to: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: Sequelize.Sequelize.fn("current_timestamp")
        },
        state: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0
        },
        student_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "users",
            key: "id"
          }
        },
        observer_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "users",
            key: "id"
          }
        }
      },
      {
        sequelize,
        tableName: "absences",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "id" }]
          },
          {
            name: "absences_users_FK",
            using: "BTREE",
            fields: [{ name: "student_id" }]
          },
          {
            name: "absences_users_FK_1",
            using: "BTREE",
            fields: [{ name: "observer_id" }]
          }
        ]
      }
    );
  }
}
