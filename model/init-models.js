import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _absence from "./Absence.js";
import _user from "./User.js";

export default function initModels(sequelize) {
  const absences = _absence.init(sequelize, DataTypes);
  const users = _user.init(sequelize, DataTypes);

  absences.belongsTo(users, { as: "student", foreignKey: "student_id" });
  users.hasMany(absences, { as: "absences", foreignKey: "student_id" });
  absences.belongsTo(users, { as: "observer", foreignKey: "observer_id" });
  users.hasMany(absences, { as: "observer_absences", foreignKey: "observer_id" });
  users.belongsTo(users, { as: "guardian", foreignKey: "guardian_id" });
  users.hasMany(users, { as: "users", foreignKey: "guardian_id" });

  return {
    absences,
    users
  };
}
