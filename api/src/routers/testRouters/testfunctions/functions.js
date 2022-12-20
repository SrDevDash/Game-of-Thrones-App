const singup = (email, password, db) => {
  const result = db.users.find((user) => user.email === email);
  if (
    typeof email !== "string" ||
    !email ||
    typeof password !== "string" ||
    !password
  ) {
    return false;
  }
  if (!result) return { success: true };
};
module.exports = { singup };
