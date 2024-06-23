import dbConfig from "../config/db.config.js";

import Sequelize from "sequelize";

import { user } from "./user.model.js";
import { book } from "./book.model.js";
import { reviews } from "./reviews.model.js";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  dialectOptions: {
    ssl: {
      require: true,
    },
  },
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = user(sequelize, Sequelize);
db.book = book(sequelize, Sequelize);
db.reviews = reviews(sequelize, Sequelize);

db.book.hasMany(db.reviews, { foreignKey: "bookId" });
db.reviews.belongsTo(db.book, { foreignKey: "bookId" });

db.user.hasMany(db.reviews, { foreignKey: "userId" });
db.reviews.belongsTo(db.user, { foreignKey: "userId" });

export default db;
