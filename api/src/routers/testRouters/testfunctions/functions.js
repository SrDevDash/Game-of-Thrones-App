const db = require("./../../..//db/db");

const usersSingup = (email, password) => {
  const finduser = db.users.find((user) => user.email === email);
  if (
    typeof email !== "string" ||
    !email ||
    typeof password !== "string" ||
    !password
  ) {
    return false;
  }

  if (finduser) return false;
  if (!finduser) return { success: true };
};

const usersLogin = (email, password) => {
  const result = db.users.find(
    (user) => user.email === email && user.password === password
  );
  if (
    typeof email !== "string" ||
    email === "" ||
    typeof password !== "string" ||
    password === ""
  ) {
    return false;
  }
  if (result) return { access: true };
  else {
    return { access: false };
  }
};
module.exports = { usersSingup, usersLogin };
