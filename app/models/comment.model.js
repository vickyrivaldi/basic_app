module.exports = (sequelize, Sequelize) => {
   const Comment = sequelize.define("comments", {
      id: {
         type: Sequelize.INTEGER,
         primaryKey: true
      },
      body_comment: {
         type: Sequelize.STRING
      }
   });

   return Comment;
};