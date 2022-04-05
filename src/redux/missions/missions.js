import { getMissionsApi } from '../../componnent/Missions/missionsApi';

const GET_MISSIONS = 'space-x/missions/GET_MISSIONS';
const INITIA_STATE = {};

export const getMissions = (data) => ({
  type: GET_MISSIONS,
  payload: data,
});

export const getMissionsDispatcher = () => async (dispatch) => {
  const missions = await getMissionsApi();
  dispatch(getMissions(missions));
};

const missionsReducer = (state = INITIA_STATE, action) => {
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
