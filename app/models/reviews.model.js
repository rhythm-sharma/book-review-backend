const reviews = (sequelize, Sequelize) => {
  const Reviews = sequelize.define("reviews", {
    reviewId: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.DataTypes.UUIDV1,
      primaryKey: true,
      allowNull: false,
    },
    review: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    rating: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });

  return Reviews;
};

export { reviews };
