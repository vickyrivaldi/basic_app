module.exports = (sequelize, Sequelize) => {
   const Article = sequelize.define("articles", {
      id: {
         type: Sequelize.INTEGER,
         primaryKey: true
      },
      title_article: {
         type: Sequelize.STRING
      },
      body_article: {
         type: Sequelize.TEXT
      },
      picture: {
         type: Sequelize.STRING
      },
      nama_lengkap: {
         type: Sequelize.STRING
      }
   });

   return Article;
};