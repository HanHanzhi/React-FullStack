module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  //   Users.associate = (models) => {
  //     Users.hasMany(models.Posts, {
  //       onDelete: "cascade", //if we delete a post, it will delete all the comments related to that post
  //     });
  //   };
  return Users;
};
