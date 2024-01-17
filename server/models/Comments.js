module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define("Comments", {
    commentBody: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Comments.associate = (models) => {
    Comments.hasMany(models.Likes, {
      onDelete: "cascade", //if we delete a post, it will delete all the comments related to that post
    });
  };
  return Comments;
};
