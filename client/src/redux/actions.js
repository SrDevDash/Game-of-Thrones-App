export const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS';
export const GET_CHARACTER = 'GET_CHARACTER';
export const CREATE_CHARACTER = 'CREATE_CHARACTER';
export const DELETE_CHARACTER = 'DELETE_CHARACTER';

//para buscar todas las houses/ personajes

export const getAllCharacters = () => async (dispatch) => {
  try {
    let response = await axios.get('')
    return dispatch({ type: GET_ALL_CHARACTERS, payload: response.data })
  } catch (error) {
    console.log(error)
  }
};

//para buscar una house por el id pasado
export const getCharacter = (id) => dispatch => {
  return fetch(`https://thronesapi.com/api/v2/Characters/${id}`)
    .then(response => response.json())
    .then(data => dispatch({
      type: GET_CHARACTER,
      payload: data
    }))
};

// Inicializamos id en 53, para que nuestros próximos ID's no se pisen con los existentes.

let id = 53;

// Desde el componente ejecutamos la action creator, pasandole como argumento los datos que vamos a utilizar para crear la house.
export const createCharacter = (data) => {
  return {
    type: CREATE_CHARACTER,
    payload: { ...data, id: ++id }
  }
}

// Desde el componente ejecutamos la action creator, pasandole como argumento el id de la house que queremos eliminar.
export const deleteCharacter = (id) => {
  return {
    type: DELETE_CHARACTER,
    payload: id
  }
};