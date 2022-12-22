const db = require("./../../..//db/db");

const usersSingup = (email, password, name, phone) => {
  const finduser = db.users.find((user) => user.email === email);
  if (
    typeof email !== "string" ||
    !email ||
    typeof name !== "string" ||
    !name ||
    typeof phone !== "string" ||
    !phone ||
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
const getAllCharacters = () => {
  return db.characters;
};
const findcharacters = (id) => {
  const result = db.characters.find((character) => character.id == id);
  if (id === "") {
    return false;
  }

  return result;
};
let id = 53;
const createCharacter = (firstName, lastName, fullName, title, family) => {
  if (firstName && lastName && fullName && title && family) {
    const result = db.characters.find(
      (character) =>
        character.firstName === firstName &&
        character.lastName === lastName &&
        character.fullName === fullName &&
        character.title === title &&
        character.family === family
    );
    if (result) {
      return { success: false };
    }
    db.characters.push({
      id: id,
      firstName: firstName,
      lastName: lastName,
      fullName: fullName,
      title: title,
      family: family,
    });
    id++;
    return { success: true };
  }
  return false;
};
const modifyCharacter = (id, firstName, lastName, fullName, title, family) => {
  if (id && firstName && lastName && fullName && title && family) {
    const result = db.characters.find((character) => character.id === id);
    const index = db.characters.indexOf(result);
    const obj = db.characters.at(index);
    if (result) {
      return { success: false };
    }
    obj.firstName = firstName;
    obj.lastName = lastName;
    obj.fullName = fullName;
    obj.title = title;
    obj.family = family;
    return { success: true };
  }
  return false;
};

const getAllHouses = () => {
  return db.houses;
};
const findHouse = (id) => {
  const result = db.houses.find((house) => house.id == id);
  if (id === "") {
    return false;
  }

  return result;
};

const createHouse = (name, words) => {
  let id = 14;
  if (name && words) {
    const result = db.houses.find(
      (house) => house.name === name && house.words === words
    );
    if (result) {
      return { success: false };
    }
    db.houses.push({
      id: id,
      name: name,
      words: words,
    });
    id++;
    return { success: true };
  }
  return false;
};
const modifyHouse = (id, name, words) => {
  if (id && name && words) {
    const result = db.houses.find((house) => house.id === id);
    const index = db.houses.indexOf(result);
    const obj = db.houses.at(index);
    if (result) {
      return { success: false };
    }
    obj.name = name;
    obj.words = words;

    return { success: true };
  }
  return false;
};

const eraseHouses = (id) => {
  const newArr = db.houses.filter((house) => house.id !== parseInt(id));
  const result = db.houses.find((house) => house.id === parseInt(id));
  if (!id || typeof id !== "string") {
    return false;
  } else {
    if (result) {
      db.houses = newArr;

      return { success: true };
    } else {
      return { success: false };
    }
  }
};

const eraseCharacters = (id) => {
  const newArr = db.characters.filter((char) => char.id !== parseInt(id));
  const result = db.characters.find((char) => char.id === parseInt(id));
  if (!id || typeof id !== "string") {
    return false;
  } else {
    if (result) {
      db.characters = newArr;

      return { success: true };
    } else {
      return { success: false };
    }
  }
};
module.exports = {
  usersSingup,
  usersLogin,
  findcharacters,
  createCharacter,
  modifyCharacter,
  findHouse,
  createHouse,
  modifyHouse,
  getAllHouses,
  getAllCharacters,
  eraseHouses,
  eraseCharacters,
};
