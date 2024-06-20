const userDao = require("../repository/userDao");

async function loginUser(username, password) {
  if (!username || !password) {
    throw new Error("Invalid Username or Password");
  }

  try {
    const data = await userDao.getUserByUsername(username);
    if (data) {
      if (data.password === password) {
        let formattedData = await formatUserData(data);
        return formattedData;
      } else {
        throw new Error("Incorrect Username or Password");
      }
    } else {
      throw new Error("Invalid ");
    }
  } catch (error) {
    throw error;
  }
}

async function formatUserData(data) {
  const { username, name, user_id } = data;
  return {
    username,
    name,
    id: user_id,
  };
}

module.exports = {
  loginUser,
};
