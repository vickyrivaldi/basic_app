const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
   config.DB,
   config.USER,
   config.PASSWORD,
   {
      host: config.HOST,
      dialect: config.dialect,
      operatorsAliases: false,

      pool: {
         max: config.pool.max,
         min: config.pool.min,
         acquire: config.pool.acquire,
         idle: config.pool.idle
      }
   }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.article = require("../models/article.model.js")(sequelize, Sequelize);
db.comment = require("../models/comment.model.js")(sequelize, Sequelize);

//User Roles
db.role.belongsToMany(db.user, {
   through: "user_roles",
   foreignKey: "roleId",
   otherKey: "userId"
});
db.user.belongsToMany(db.role, {
   through: "user_roles",
   foreignKey: "userId",
   otherKey: "roleId"
});

//Article Roles
db.article.belongsToMany(db.user, {
   through: "article_roles",
   foreignKey: "articleId",
   otherKey: "userId"
});
db.user.belongsToMany(db.article, {
   through: "article_roles",
   foreignKey: "userId",
   otherKey: "articleId"
});

//Comment Roles
db.comment.belongsToMany(db.article, {
   through: "comment_roles",
   foreignKey: "commentId",
   otherKey: "articleId"
});
db.comment.belongsToMany(db.user, {
   through: "comment_roles",
   foreignKey: "commentId",
   otherKey: "userId"
});
db.article.belongsToMany(db.comment, {
   through: "comment_roles",
   foreignKey: "articleId",
   otherKey: "commentId"
});
db.article.belongsToMany(db.user, {
   through: "comment_roles",
   foreignKey: "articleId",
   otherKey: "userId"
});
db.user.belongsToMany(db.article, {
   through: "comment_roles",
   foreignKey: "userId",
   otherKey: "articleId"
});
db.user.belongsToMany(db.comment, {
   through: "comment_roles",
   foreignKey: "userId",
   otherKey: "commentId"
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;