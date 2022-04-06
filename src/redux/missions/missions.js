import getMissionsFromAPI from '../../componnent/Missions/MissionsApi';

const GET_MISSIONS = 'space-x/missions/GET_MISSIONS';
const INITIAL_STATE = {};

export const getMissions = (data) => ({
  type: GET_MISSIONS,
  payload: data,
});

export const getMissionsDispatcher = () => async (dispatch) => {
  const missions = await getMissionsFromAPI();
  dispatch(getMissions(missions));
};

const missionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default missionsReducer;
