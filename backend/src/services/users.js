const bcryptjs = require("bcryptjs");

const { dbConnection } = require("../db/config");
const User = require("../models/users");

class UserService {
  constructor() {
    dbConnection();
  }

  async createUser(userData) {
    const { name, email, password, role } = userData;
    const user = new User({ name, email, password, role });

    const salt = bcryptjs.genSaltSync(10);
    user.password = bcryptjs.hashSync(password, salt);

    await user.save();

    return user;
  }
}

module.exports = UserService;
