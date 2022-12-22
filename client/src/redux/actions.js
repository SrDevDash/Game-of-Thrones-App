import axios from "axios";
export const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS';
export const GET_CHARACTER = 'GET_CHARACTER';
export const CREATE_CHARACTER = 'CREATE_CHARACTER';
export const DELETE_CHARACTER = 'DELETE_CHARACTER';
export const GET_ALL_HOUSES = 'GET_ALL_HOUSES';
export const GET_HOUSE = 'GET_HOUSE';
export const CREATE_HOUSE = 'CREATE_HOUSE';
export const DELETE_HOUSE = 'DELETE_HOUSE';

//para buscar todas las houses/ personajes

export const getAllCharacters = () => async () => {
  try {
    let response = await axios.get('http://localhost:3001/allcharacters')
    return { type: GET_ALL_CHARACTERS, payload: response.data }
  } catch (error) {
    console.log(error)
  }
};

//para buscar una house por el id pasado
export const getCharacter = (id) =>
  async function () {
    try {
      let response = await axios.get(`http://localhost:3001/allcharacters/${id}`);
      return { type: GET_CHARACTER, payload: response.data };
    } catch (error) {
      console.log(error);
    }
  };

// Inicializamos id en 53, para que nuestros próximos ID's no se pisen con los existentes.

let idChar = 53;

// Desde el componente ejecutamos la action creator, pasandole como argumento los datos que vamos a utilizar para crear la house.
export const createCharacter = (data) => {
  return {
    type: CREATE_CHARACTER,
    payload: { ...data, id: ++idChar }
  }
}

// Desde el componente ejecutamos la action creator, pasandole como argumento el id de la house que queremos eliminar.
export const deleteCharacter = (id) => {
  return {
    type: DELETE_CHARACTER,
    payload: id
  }
};

//para buscar todas las houses/ personajes

export const getAllHouses = () => async () => {
  try {
    let response = await axios.get('http://localhost:3001/allhouses')
    return { type: GET_ALL_HOUSES, payload: response.data }
  } catch (error) {
    console.log(error)
  }
};

//para buscar una house por el id pasado
export const getHouse = (id) =>
  async function () {
    try {
      let response = await axios.get(`http://localhost:3001/allhouses/${id}`);
      return { type: GET_HOUSE, payload: response.data };
    } catch (error) {
      console.log(error);
    }
  };

// Inicializamos id en 53, para que nuestros próximos ID's no se pisen con los existentes.

let idHouse = 14;

// Desde el componente ejecutamos la action creator, pasandole como argumento los datos que vamos a utilizar para crear la house.
export const createHouse = (data) => {
  return {
    type: CREATE_HOUSE,
    payload: { ...data, id: ++idHouse }
  }
}

// Desde el componente ejecutamos la action creator, pasandole como argumento el id de la house que queremos eliminar.
export const deleteHouse = (id) => {
  return {
    type: DELETE_HOUSE,
    payload: id
  }
};