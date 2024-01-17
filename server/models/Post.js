module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("Posts", {
    onDelete: "cascade",
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Posts.associate = (models) => {
    Posts.hasMany(models.Comments, {
      onDelete: "cascade", //if we delete a post, it will delete all the comments related to that post
    });
  };
  return Posts;
};
