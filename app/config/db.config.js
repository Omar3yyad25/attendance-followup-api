module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "O@ZC2022dbdb",
    DB: "attendance_followup",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };