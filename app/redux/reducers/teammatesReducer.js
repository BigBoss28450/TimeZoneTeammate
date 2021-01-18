import { ADD_TO_LIST } from '../actions/types';

const initialState = {
  teammates: [],
};

const teammatesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LIST:
      return {
        ...state,
        teammates: state.teammates.concat(action.data),
      };

    default:
      return state;
  }
};

export default teammatesReducer;
