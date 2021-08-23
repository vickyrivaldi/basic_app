module.exports = (sequelize, Sequelize) => {
   const User = sequelize.define("users", {
      username: {
         type: Sequelize.STRING
      },
      email: {
         type: Sequelize.STRING
      },
      password: {
         type: Sequelize.STRING
      },
      nama_lengkap: {
         type: Sequelize.STRING
      },
      alamat: {
         type: Sequelize.STRING
      },
      jenis_kelamin: {
         type: Sequelize.ENUM('Male', 'Female')
      },
      foto_profil: {
         type: Sequelize.STRING
      }
   });

   return User;
};