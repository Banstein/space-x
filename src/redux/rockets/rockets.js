import fetchRocketsApiData from '../../componnent/Rockets/fetchApiData';

const GET_ROCKETS = 'space-x/rockets/GET_ROCKETS';
const RESERVATION_ROCKETS = 'space-x/rockets/RESERVATION_ROCKETS';
const CANCEL_ROCKET_BOOKING = 'space-X/CANCEL_ROCKET_BOOKING';

const initialState = {
  isDataStored: false,
};

export const getRockets = (data) => ({
  type: GET_ROCKETS,
  payload: data,
});

export const reserveRocket = (id) => ({
  type: RESERVATION_ROCKETS,
  payload: id,
});

export const cancelRocketBooking = (id) => ({
  type: CANCEL_ROCKET_BOOKING,
  payload: id,
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

    case RESERVATION_ROCKETS:
      return {
        ...state,
        isDataStored: true,
        data: state.data.map((rocket) => {
          const reserved = rocket.id === action.payload
            ? { ...rocket, reserved: true }
            : { ...rocket };

          return reserved;
        }),
      };

    case CANCEL_ROCKET_BOOKING:
      return {
        ...state,
        isDataStored: true,
        data: state.data.map((rocket) => {
          const reserved = rocket.id === action.payload
            ? { ...rocket, reserved: false }
            : { ...rocket };

          return reserved;
        }),
      };

    default:
      return state;
  }
};

export default rocketsReducer;
