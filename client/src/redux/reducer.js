import { GET_ALL_CHARACTERS, GET_CHARACTER, CREATE_CHARACTER, DELETE_CHARACTER } from "./actions";
import { GET_ALL_HOUSES, GET_HOUSE, CREATE_HOUSE, DELETE_HOUSE } from "./actions";

const initialState = {
  characters: [],
  character: {},
  houses: [],
  house: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CHARACTERS:
      return {
        ...state,
        characters: action.payload
      }

    case GET_CHARACTER:
      return {
        ...state,
        character: action.payload
      }

    case CREATE_CHARACTER:
      return {
        ...state,
        characters: [...state.characters, action.payload]
      }

    case DELETE_CHARACTER:
      return {
        ...state,
        characters: state.characters.filter((char) => char.id !== action.payload)
      }
    case GET_ALL_HOUSES:
      return {
        ...state,
        houses: action.payload
      }

    case GET_HOUSE:
      return {
        ...state,
        house: action.payload
      }

    case CREATE_HOUSE:
      return {
        ...state,
        houses: [...state.houses, action.payload]
      }

    case DELETE_HOUSE:
      return {
        ...state,
        houses: state.houses.filter((house) => house.id !== action.payload)
      }
    default:
      return { ...state }
  };
};

export default rootReducer;
