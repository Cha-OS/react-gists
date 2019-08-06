//import action types that are required by the reducer
import { CREATE, READ, UPDATE, DELETE, updateItem } from "../actions/actions";
import {
  FETCH_ITEMS_BEGIN,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE
} from "../actions/actions";

//initial STATE for redux store
const initialState = {
  menuItems: []
};

//reducer function
export default function(state = initialState, action) {
  switch (action.type) {
    //handless creation of data
    case CREATE:
      return {
        menuItems: [...state.menuItems, action.payload.item]
      };

    //reads all the data from the store
    case READ:
      return state;

    //handles item updates in redux store
    case UPDATE: {
      const updatedItem = { ...action.payload.item };
      return {
        menuItems: [...state.menuItems].map(item => {
          if (item.id === updatedItem.id) {
            return updatedItem;
          } else return item;
        })
      };
    }

    //handles item deletion from redux store
    case DELETE: {
      const { id } = action.payload;
      return {
        menuItems: [...state.menuItems].filter(item => item.id !== id)
      };
    }

    case FETCH_ITEMS_BEGIN:
      return {
        ...state,
        loading: true,
        errors: null
      };
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        menuItems: action.payload.items
      };
    case FETCH_ITEMS_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload.errors,
        menuItems: []
      };

    //returns default state, in case some unknown action type is discovered
    default:
      return state;
  }
}
