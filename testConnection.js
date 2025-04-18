const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("AeroBook", "root", "root", {
  host: "localhost", // If running from another container, use "mysql-container"
  dialect: "mysql",
  port: 3306,
  logging: console.log, // Enable logging for debugging
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
