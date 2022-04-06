import fetchRocketsApiData from '../../componnent/Rockets/fetchApiData';

const GET_ROCKETS = 'space-x/rockets/GET_ROCKETS';
const RESERVATION_ROCKETS = 'space-x/rockets/RESERVATION_ROCKETS';

const initialState = {
  isDataStored: false,
};

export const getRockets = (data) => ({
  type: GET_ROCKETS,
  payload: data,
});

export const reserveRocket = (id) => ({
  type: RESERVATION_ROCKETS,
  paylaod: id,
});

export const rocketDispatcher = () => async (dispatch) => {
  const rockets = await fetchRocketsApiData();
  dispatch(getRockets(rockets));
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return {
        ...state,
        isDataStored: true,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default rocketsReducer;
