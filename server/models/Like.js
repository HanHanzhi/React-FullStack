module.exports = (sequelize, DataTypes) => {
  const Likes = sequelize.define("Likes", {
    numOfLikes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Likes;
};
